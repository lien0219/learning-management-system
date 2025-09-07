export const formatDateTimeSimple = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  } catch (error) {
    console.error("时间格式化错误:", error);
    return dateString;
  }
};
// 判断用户是否在线
export const isUserOnline = (lastLoginString: string): boolean => {
  try {
    const lastLogin = new Date(lastLoginString);
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    return lastLogin > twentyFourHoursAgo;
  } catch (error) {
    console.error("判断用户在线状态错误:", error);
    return false;
  }
};
