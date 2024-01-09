export default {
  setAdmin(
    context: any,
    data: { _id: string | null; email: string | null; isAdmin: boolean }
  ) {
    const adminData = {
      id: data._id,
      email: data.email,
      isAdmin: data.isAdmin,
    };
    context.commit("setAdmin", adminData);
  },
};
