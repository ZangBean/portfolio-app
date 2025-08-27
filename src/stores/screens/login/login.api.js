import { fetchUsersAction } from "../user/user.action";

export const loginUser = async ({ username, password }, { dispatch }) => {
  try {
    const response = await dispatch(fetchUsersAction()).unwrap();
    const users = response;
    const user = users.find(
      (u) => u.login?.username === username && u.login?.password === password
    );
    if (!user) {
      throw new Error("Tên đăng nhập hoặc mật khẩu không đúng");
    }
    return {
      data: {
        user: { id: user.id, ...user.cv.personal_info },
        token: "fake-jwt-token",
      },
    };
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};
