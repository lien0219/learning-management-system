/**
 * API请求工具函数
 */

// 定义API基础URL
// const API_BASE_URL = "http://127.0.0.1:8080/api";
const API_BASE_URL = "https://3d3f2c7e.r15.vip.cpolar.cn/api";

// 请求配置接口
export interface RequestOptions extends Omit<RequestInit, "body" | "headers"> {
  body?: any;
  headers?: Record<string, string>;
}

/**
 * 基础API请求函数
 */
async function request<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`API请求失败: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`请求 ${url} 失败:`, error);
    throw error;
  }
}

// 登录请求接口
export interface LoginRequest {
  email: string;
  password: string;
}

// 登录响应接口
export interface LoginResponse {
  token?: string;
  data: {
    token: string;
  };
}

/**
 * 登录API
 */
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return request("/login", {
    method: "POST",
    body: data,
  });
};

// 注册请求接口
export interface RegisterRequest {
  email: string;
  name: string;
  password: string;
  role: string;
}

// 注册响应接口
export interface RegisterResponse {
  id: string;
  email: string;
  name: string;
  role: string;
}

/**
 * 注册API
 */
export const register = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  return request("/register", {
    method: "POST",
    body: data,
  });
};

// 用户资料接口
export interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  language: string;
  xp: number;
  createdAt: string;
}
export interface UserProfile {
  data?: UserData;
}

/**
 * 获取用户资料API
 */
export const getProfile = async (): Promise<UserProfile> => {
  const token = getToken();
  return request("/profile", {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};

/**
 * 保存认证token到本地存储
 */
export const saveToken = (token: string): void => {
  localStorage.setItem("authToken", token);
};

/**
 * 从本地存储获取认证token
 */
export const getToken = (): string | null => {
  return localStorage.getItem("authToken");
};

/**
 * 清除本地存储的认证信息
 */
export const clearAuth = (): void => {
  localStorage.removeItem("authToken");
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: "authToken",
        newValue: null,
        oldValue: localStorage.getItem("authToken"),
      })
    );
  }
};

// 用户列表请求参数接口
export interface GetUsersRequest {
  page?: number;
  pageSize?: number;
  role?: string;
  status?: string;
  search?: string;
  startDate?: string;
  endDate?: string;
}

// API 响应接口
export interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
}

// 完整用户信息接口
export interface UserInfo {
  id: number;
  name: string;
  email: string;
  role: string;
  disabled: boolean;
  language: string;
  xp: number;
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
  password?: string;
}
/**
 * 获取用户列表API
 */
export const getUsers = async (
  params: GetUsersRequest = {}
): Promise<ApiResponse<UserInfo[]>> => {
  const token = getToken();

  // 构建查询字符串
  const queryParams = new URLSearchParams();
  if (params.page) queryParams.append("page", params.page.toString());
  if (params.pageSize)
    queryParams.append("pageSize", params.pageSize.toString());
  if (params.role) queryParams.append("role", params.role);
  if (params.status) queryParams.append("status", params.status);
  if (params.search) queryParams.append("search", params.search);
  if (params.startDate) queryParams.append("startDate", params.startDate);
  if (params.endDate) queryParams.append("endDate", params.endDate);

  const queryString = queryParams.toString();
  const endpoint = `/admin/users${queryString ? `?${queryString}` : ""}`;

  return request<ApiResponse<UserInfo[]>>(endpoint, {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};
// 更新用户信息请求接口
export interface UpdateUserRequest {
  name?: string;
  email?: string;
  role?: string;
  disabled?: boolean;
  language?: string;
  password?: string;
  xp?: number;
}

/**
 * 更新用户信息API
 */
export const updateUser = async (
  userId: number,
  data: UpdateUserRequest
): Promise<ApiResponse<UserInfo>> => {
  const token = getToken();
  return request<ApiResponse<UserInfo>>(`/admin/users/${userId}`, {
    method: "PUT",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: data,
  });
};
// 删除用户
export interface DeleteUserResponse {
  code: number;
  data: string;
  message: string;
}

/**
 * 删除用户
 */
export const deleteUser = async (
  userId: number
): Promise<DeleteUserResponse> => {
  const token = getToken();
  return request<DeleteUserResponse>(`/admin/users/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};
/**
 * 获取每日激励信息API
 */
export const getDailyMotivation = async (): Promise<ApiResponse<string>> => {
  const token = getToken();
  return request<ApiResponse<string>>("/motivation", {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};

// 激励短句接口
interface Motivation {
  id: number;
  content: string;
  is_enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

// 创建激励短句请求接口
export interface CreateMotivationRequest {
  content: string;
}

// 更新激励短句请求接口
export interface UpdateMotivationRequest {
  content?: string;
  is_enabled?: boolean;
}

/**
 * 获取所有激励短句API（管理员权限）
 */
export const getMotivations = async (): Promise<ApiResponse<Motivation[]>> => {
  const token = getToken();
  return request<ApiResponse<Motivation[]>>("/admin/motivations", {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};

/**
 * 创建新的激励短句API（管理员权限）
 */
export const createMotivation = async (
  data: CreateMotivationRequest
): Promise<ApiResponse<Motivation>> => {
  const token = getToken();
  return request<ApiResponse<Motivation>>("/admin/motivations", {
    method: "POST",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: data,
  });
};

/**
 * 更新激励短句API（管理员权限）
 */
export const updateMotivation = async (
  id: number,
  data: UpdateMotivationRequest
): Promise<ApiResponse<Motivation>> => {
  const token = getToken();
  return request<ApiResponse<Motivation>>(`/admin/motivations/${id}`, {
    method: "PUT",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: data,
  });
};

/**
 * 删除激励短句API（管理员权限）
 */
export const deleteMotivation = async (
  id: number
): Promise<ApiResponse<string>> => {
  const token = getToken();
  return request<ApiResponse<string>>(`/admin/motivations/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};
/**
 * 立即切换到指定的激励短句API（管理员权限）
 */
export const switchMotivation = async (
  id: number
): Promise<ApiResponse<string>> => {
  const token = getToken();
  return request<ApiResponse<string>>(`/admin/motivations/${id}/switch`, {
    method: "POST",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};
