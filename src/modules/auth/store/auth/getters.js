export const currentStatus = (state) => {
  return state.status;
};

export const username = (state) => {
  return state.user?.name || "Default Ismael Admin";
};
