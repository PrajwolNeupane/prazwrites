export default {
  setBlogs(
    state: any,
    payload: {
      slug: string;
      title: string;
      short_description: string;
      description: string[];
      date: string;
      image: string;
      category: string;
      readDuration: number;
    }[]
  ) {
    state.blogList = payload;
  },
  setCategoryBlogs(
    state: any,
    payload: {
      category: string;
      blogs: {
        _id: string;
        title: string;
        tags: string;
        image: string;
        description: string[];
        createdAt: string;
        updatedAt: string;
        __v: number;
      }[];
    }
  ) {
    state.categoryBlog.category = payload.category;
    state.categoryBlog.blogs = payload.blogs;
  },
};
