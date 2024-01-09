export default {
  blogs(state: any) {
    return state.blogList;
  },
  categoryBlogs(state: any) {
    return state.categoryBlog.blogs;
  },
  category(state: any) {
    return state.categoryBlog.category;
  },
};
