export default {
  setAdmin(
    state: any,
    payload: { id: null | string; email: null | string; isAdmin: boolean }
  ) {
    state.admin = payload;
  },
};
