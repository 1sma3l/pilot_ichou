import { useStore } from "vuex";
import { computed } from "vue";

const useAuth = () => {
  const store = useStore();
  const loginUser = async (user) => {
    const resp = await store.dispatch("auth/signInUser", user); //Ejecuto accion
    return resp;
  };
  const resetPwd = async (emailData) => {
    const resp = await store.dispatch("auth/resetPwd", emailData); //Ejecuto accion para restablecimiento de contraseña
    return resp;
  };
  const logout = () => {
    //Ejecuto la mutacion
    store.commit("auth/logout"); //Se ejecuta el logout
  };

  return {
    loginUser,
    resetPwd,
    logout,

    username: computed(() => store.getters["auth/username"]), //Obtengo el nombre del usuario del state, mediante un getter
  };
};

export default useAuth;
