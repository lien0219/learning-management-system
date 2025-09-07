"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import {
  Search,
  Filter,
  Edit,
  MoreHorizontal,
  Trash2,
  Key,
} from "lucide-react";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";

import { deleteUser, getUsers, updateUser, UserInfo } from "@/lib/api";
import { formatDateTimeSimple, isUserOnline } from "@/lib/dateTime";
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "teacher" | "student";
  status: "online" | "offline" | "disabled";
  registrationTime: string;
  lastLogin: string;
  password?: string;
  tempPassword?: string;
}

const RoleBadge: React.FC<{ role: User["role"] }> = ({ role }) => {
  const roleConfig: Record<
    User["role"],
    { label: string; variant: "default" | "outline" | "secondary" }
  > = {
    admin: { label: "管理员", variant: "default" },
    teacher: { label: "教师", variant: "outline" },
    student: { label: "学生", variant: "secondary" },
  };
  const config = roleConfig[role];

  return (
    <Badge variant={config.variant} className="capitalize">
      {config.label}
    </Badge>
  );
};

const StatusBadge: React.FC<{ status: User["status"] }> = ({ status }) => {
  const statusConfig = {
    online: {
      label: "在线",
      className:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    },
    offline: {
      label: "离线",
      className:
        "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100",
    },
    disabled: {
      label: "禁用",
      className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    },
  };

  const config = statusConfig[status];

  return <Badge className={config.className}>{config.label}</Badge>;
};

const AdminPage: React.FC = () => {
  const { user, isLoggedIn, isLoading, checkAuth } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [actionType, setActionType] = useState<"delete" | "reset-password">(
    "delete"
  );
  const [userToAction, setUserToAction] = useState<User | null>(null);

  const convertApiUserToLocal = (apiUser: any): User => {
    const lastLogin =
      apiUser.LastLogin || apiUser.CreatedAt || apiUser.createdAt;
    const onlineStatus = isUserOnline(lastLogin);

    return {
      id: apiUser.id.toString(),
      name: apiUser.Name,
      email: apiUser.Email,
      role: apiUser.Role as User["role"],
      status: apiUser.Disabled
        ? "disabled"
        : onlineStatus
        ? "online"
        : "offline",
      registrationTime: apiUser.CreatedAt || apiUser.createdAt,
      lastLogin: lastLogin,
      password: apiUser.Password,
    };
  };

  const loadUsers = async () => {
    if (!isLoggedIn || user?.role !== "admin") return;

    setIsLoadingUsers(true);
    try {
      const prepareDateParam = (dateString: string): string | undefined => {
        if (!dateString) return undefined;

        try {
          const date = new Date(dateString);
          return date.toISOString();
        } catch (error) {
          console.error("日期格式转换错误:", error);
          return undefined;
        }
      };
      const params = {
        page: currentPage,
        pageSize: itemsPerPage,
        role: roleFilter !== "all" ? roleFilter : undefined,
        status: statusFilter !== "all" ? statusFilter : undefined,
        search: searchQuery || undefined,
        startDate: prepareDateParam(dateRange.start),
        endDate: prepareDateParam(dateRange.end),
      };

      const response: any = await getUsers(params);
      if (response.code === 200 && response.data && response.data.items) {
        const convertedUsers = response.data.items.map(convertApiUserToLocal);
        setUsers(convertedUsers);
        setFilteredUsers(convertedUsers);
      } else {
        console.error("获取用户列表失败:", response.message);
      }
    } catch (error) {
      console.error("获取用户列表时发生错误:", error);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  useEffect(() => {
    if (!isLoggedIn || isLoading) return;

    if (user?.role !== "admin") {
      router.replace("/");
      return;
    }

    loadUsers();
  }, [isLoggedIn, isLoading, user, router]);

  useEffect(() => {
    loadUsers();
  }, [
    currentPage,
    itemsPerPage,
    roleFilter,
    statusFilter,
    searchQuery,
    dateRange,
  ]);

  // 处理编辑用户
  const handleEditUser = (user: User) => {
    setEditingUser({ ...user });
    setIsEditDialogOpen(true);
  };

  const handleSaveUser = async () => {
    if (!editingUser) return;

    try {
      const userData = {
        name: editingUser.name,
        email: editingUser.email,
        role: editingUser.role,
        disabled: editingUser.status === "disabled",
        password: editingUser.tempPassword,
      };

      const response = await updateUser(parseInt(editingUser.id), userData);

      if (response.code === 200 && response.data) {
        const updatedUser = convertApiUserToLocal(response.data);

        setUsers(
          users.map((user) => (user.id === editingUser.id ? updatedUser : user))
        );
        setFilteredUsers(
          filteredUsers.map((user) =>
            user.id === editingUser.id ? updatedUser : user
          )
        );

        setIsEditDialogOpen(false);
        setEditingUser(null);
      } else {
      }
    } catch (error) {
      console.error("更新用户失败:", error);
    }
  };

  const handleDeleteUser = async () => {
    if (!userToAction) return;

    try {
      const response = await deleteUser(parseInt(userToAction.id));

      if (response.code === 200) {
        setUsers(users.filter((user) => user.id !== userToAction.id));
        setFilteredUsers(
          filteredUsers.filter((user) => user.id !== userToAction.id)
        );

        toast({
          title: "成功",
          description: response.message || "用户已成功删除",
          duration: 2000,
        });
      } else {
        console.error("删除用户失败:", response.message);
        toast({
          title: "错误",
          description: response.message || "删除用户失败",
          duration: 2000,
        });
      }
    } catch (error) {
      console.error("删除用户API调用失败:", error);
      toast({
        title: "网络错误",
        description: "请检查网络连接后重试",
        duration: 2000,
      });
    } finally {
      setIsConfirmDialogOpen(false);
    }
  };

  const handleConfirmAction = () => {
    if (actionType === "delete") {
      handleDeleteUser();
    }
  };

  const renderPaginationItems = () => {
    const items = [];
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    items.push(
      <PaginationItem key={1}>
        <PaginationLink
          href="#"
          isActive={currentPage === 1}
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(1);
          }}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis-1">
          <span className="px-2 py-1">...</span>
        </PaginationItem>
      );
    }

    for (let i = 2; i < totalPages; i++) {
      if (Math.abs(i - currentPage) <= 1) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={currentPage === i}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    if (currentPage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis-2">
          <span className="px-2 py-1">...</span>
        </PaginationItem>
      );
    }

    if (totalPages > 1) {
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            isActive={currentPage === totalPages}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(totalPages);
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  if (isLoading || !isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">加载中...</p>
        </div>
      </div>
    );
  }

  if (user?.role !== "admin") {
    router.replace("/");
    return null;
  }

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">👤</span>
            用户管理中心
          </CardTitle>
          <CardAction>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="搜索用户名/邮箱"
                  className="pr-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setSearchQuery("");
                  setRoleFilter("all");
                  setStatusFilter("all");
                  setDateRange({ start: "", end: "" });
                }}
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </CardAction>
        </CardHeader>

        <CardContent className="p-6 pt-3 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">
                角色
              </label>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="选择角色" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部角色</SelectItem>
                  <SelectItem value="admin">管理员</SelectItem>
                  <SelectItem value="teacher">教师</SelectItem>
                  <SelectItem value="student">学生</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">
                状态
              </label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="选择状态" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部状态</SelectItem>
                  <SelectItem value="online">在线</SelectItem>
                  <SelectItem value="offline">离线</SelectItem>
                  <SelectItem value="disabled">禁用</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">
                注册时间
              </label>
              <div className="flex items-center gap-2">
                <Input
                  type="date"
                  className="flex-1"
                  value={dateRange.start}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, start: e.target.value })
                  }
                />
                <span className="text-muted-foreground">-</span>
                <Input
                  type="date"
                  className="flex-1"
                  value={dateRange.end}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, end: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </CardContent>

        <div className="border-t">
          <div className="rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px] px-6">用户 ID</TableHead>
                  <TableHead className="px-6">用户名</TableHead>
                  <TableHead className="px-6">邮箱</TableHead>
                  <TableHead className="px-6">角色</TableHead>
                  <TableHead className="px-6">状态</TableHead>
                  <TableHead className="px-6">密码</TableHead>
                  <TableHead className="px-6">注册时间</TableHead>
                  <TableHead className="px-6">最后登录</TableHead>
                  <TableHead className="text-right px-6">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingUsers ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      <p className="text-muted-foreground">加载用户数据中...</p>
                    </TableCell>
                  </TableRow>
                ) : currentUsers.length > 0 ? (
                  currentUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-mono text-sm px-6">
                        {user.id}
                      </TableCell>
                      <TableCell className="px-6">{user.name}</TableCell>
                      <TableCell className="px-6">{user.email}</TableCell>
                      <TableCell className="px-6">
                        <RoleBadge role={user.role} />
                      </TableCell>
                      <TableCell className="px-6">
                        <StatusBadge status={user.status} />
                      </TableCell>
                      <TableCell className="px-6">
                        {user.password ? (
                          <span className="font-mono text-xs bg-muted px-2 py-1 rounded">
                            {user.password.substring(0, 10)}...
                            {user.password.substring(user.password.length - 10)}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">无</span>
                        )}
                      </TableCell>
                      <TableCell className="px-6">
                        {formatDateTimeSimple(user.registrationTime)}
                      </TableCell>
                      <TableCell className="px-6">
                        {formatDateTimeSimple(user.lastLogin)}
                      </TableCell>
                      <TableCell className="text-right px-6">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditUser(user)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => {
                              setUserToAction(user);
                              setActionType("delete");
                              setIsConfirmDialogOpen(true);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      <p className="text-muted-foreground">
                        没有找到符合条件的用户
                      </p>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-4 border-t">
          <div className="text-sm text-muted-foreground">
            共 {filteredUsers.length} 条记录
          </div>

          <div className="flex items-center gap-2">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(Math.max(1, currentPage - 1));
                    }}
                  />
                </PaginationItem>

                {renderPaginationItems()}

                <PaginationItem>
                  <PaginationNext
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(Math.min(totalPages, currentPage + 1));
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">10 / page</span>
            <span className="text-sm text-muted-foreground">Go to</span>
            <Input
              type="number"
              className="w-[60px]"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const page = parseInt(e.target.value);
                if (page >= 1 && page <= totalPages) {
                  setCurrentPage(page);
                }
              }}
            />
            <span className="text-sm text-muted-foreground">Page</span>
          </div>
        </CardFooter>
      </Card>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>编辑用户信息</DialogTitle>
          </DialogHeader>

          {editingUser && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">用户名</label>
                <Input
                  value={editingUser.name}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, name: e.target.value })
                  }
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">邮箱</label>
                <Input
                  type="email"
                  value={editingUser.email}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, email: e.target.value })
                  }
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">角色</label>
                <Select
                  value={editingUser.role}
                  onValueChange={(value) =>
                    setEditingUser({
                      ...editingUser,
                      role: value as User["role"],
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="选择角色" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">管理员</SelectItem>
                    <SelectItem value="teacher">教师</SelectItem>
                    <SelectItem value="student">学生</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">账号状态</label>
                <Select
                  value={
                    editingUser.status === "disabled" ? "disabled" : "active"
                  }
                  onValueChange={(value) =>
                    setEditingUser({
                      ...editingUser,
                      status: value === "disabled" ? "disabled" : "online",
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="选择状态" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">启用</SelectItem>
                    <SelectItem value="disabled">禁用</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">新密码</label>
                  <span className="text-xs text-muted-foreground">
                    不填则不修改
                  </span>
                </div>
                <Input
                  type="password"
                  placeholder="请输入新密码，不填则不修改"
                  value={editingUser.tempPassword || ""}
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      tempPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="ghost" onClick={() => setIsEditDialogOpen(false)}>
              取消
            </Button>
            <Button onClick={handleSaveUser}>确认</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {actionType === "delete" ? "确认删除用户" : "确认重置密码"}
            </DialogTitle>
          </DialogHeader>

          <div className="py-4">
            <p className="text-muted-foreground">
              {actionType === "delete"
                ? `确定要删除用户 ${userToAction?.name} 吗？此操作不可撤销。`
                : `确定要重置用户 ${userToAction?.name} 的密码吗？`}
            </p>
          </div>

          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setIsConfirmDialogOpen(false)}
            >
              取消
            </Button>
            <Button
              variant={actionType === "delete" ? "destructive" : "default"}
              onClick={handleConfirmAction}
            >
              {actionType === "delete" ? "删除" : "重置"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPage;
