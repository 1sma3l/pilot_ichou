import authApi from "src/api/authApi";

export const signInUser = async ({ commit }, user) => {
  const { email, password } = user;

  try {
    const { data } = await authApi.post(":signInWithPassword", {
      email,
      password,
      returnSecureToken: true,
    });
    const { idToken, refreshToken } = data;

    //Ejecuto mutacion par que impacte al store
    commit("loginUser", { user, idToken, refreshToken });

    return { ok: true };
  } catch (Ex) {
    console.log("AdminLogin: " + Ex.message);
    return { ok: false };
  }
};

export const resetPwd = async ({ commit }, data) => {
  const { email } = data;
  try {
    const { data } = await authApi.post(":sendOobCode", {
      requestType: "PASSWORD_RESET",
      email,
    });
    return { ok: true };
  } catch (Ex) {
    console.log("resetPwd: " + Ex.message);
    return { ok: false };
  }
};

export const checkAuthentication = async ({ commit }) => {
  debugger;
  const idToken = localStorage.getItem("idToken");
  const refreshToken = localStorage.getItem("refreshToken");

  //No esta uatenticado el usuario
  if (!idToken) {
    commit("logOut");
    return { ok: false, message: "Token invalido " };
  }

  try {
    const { data } = await authApi.post(":lookup", { idToken });
    const { displayName, email } = data.users[0];

    const user = {
      name: displayName,
      email: email,
    };

    //Ejecuto mutacion par que impacte al store
    commit("loginUser", { user, idToken, refreshToken });
    return { ok: true };
  } catch (error) {
    console.error("checkAuthentication " + error);
    commit("logOut");
    return { ok: false, message: error.response.data.error.message };
  }
};
