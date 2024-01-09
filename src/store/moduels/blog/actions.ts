import moment from "moment";

export default {
  setBlogs(
    context: any,
    data: {
      _id: string;
      title: string;
      tags: string;
      image: string;
      description: string[];
      createdAt: string;
      updatedAt: string;
      __v: number;
    }[]
  ) {
    const blogList: {
      slug: string;
      title: string;
      short_description: string;
      description: string[];
      date: string;
      image: string;
      category: string;
      readDuration: number;
    }[] = [];
    data?.forEach(
      (curr: {
        _id: string;
        title: string;
        tags: string;
        image: string;
        description: string[];
        createdAt: string;
        updatedAt: string;
        __v: number;
      }) => {
        blogList.push({
          slug: curr._id,
          title: curr.title,
          short_description: curr.description[0],
          description: curr.description?.filter(
            (desc: string, index: number) => {
              if (index != 0) {
                return desc;
              }
            }
          ),
          date: moment(curr?.createdAt).format("MMM D, YYYY"),
          readDuration: getTime({
            title: curr.title,
            description: curr.description,
          }),
          image: curr.image,
          category: curr.tags,
        });
      }
    );
    context.commit("setBlogs", blogList);
  },
  setCategoryBlogs(
    context: any,
    data: {
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
    const blogList: {
      slug: string;
      title: string;
      short_description: string;
      description: string[];
      date: string;
      image: string;
      category: string;
      readDuration: number;
    }[] = [];
    data?.blogs?.forEach(
      (curr: {
        _id: string;
        title: string;
        tags: string;
        image: string;
        description: string[];
        createdAt: string;
        updatedAt: string;
        __v: number;
      }) => {
        blogList.push({
          slug: curr._id,
          title: curr.title,
          short_description: curr.description[0],
          description: curr.description?.filter(
            (desc: string, index: number) => {
              if (index != 0) {
                return desc;
              }
            }
          ),
          date: moment(curr?.createdAt).format("MMM D, YYYY"),
          readDuration: getTime({
            title: curr.title,
            description: curr.description,
          }),
          image: curr.image,
          category: curr.tags,
        });
      }
    );
    context.commit("setCategoryBlogs", {
      category: data.category,
      blogs: blogList,
    });
  },
};

const getTime = ({
  title,
  description,
}: {
  title: string;
  description: string[];
}): number => {
  return Math.floor(
    (title.split(" ").length + description.join(" ").split(" ").length) / 150
  );
};
