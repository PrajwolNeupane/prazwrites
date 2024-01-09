<script lang="ts" setup>
import BlogCard from "../../components/BlogCard.vue";
import axios from "axios";
</script>

<template>
  <div v-if="category_blog_list.length != 0">
    <div class="flex px-[8%] pt-10 items-center gap-3">
      <h2 class="text-lg">{{ categoryTitle }} Blogs</h2>
      <h3 class="text-md">({{ category_blog_list.length }})</h3>
    </div>
    <div class="flex flex-wrap px-[8%] py-10 gap-5">
      <BlogCard :blogs="category_blog_list" />
    </div>
  </div>
  <div v-else class="flex items-center justify-center min-h-[85vh]">
    <h2 class="text-lg">No {{ categoryTitle }} Blogs</h2>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      categoryTitle: "",
    } as {
      categoryTitle: string;
    };
  },
  computed: {
    category_blog_list(): {
      slug: string;
      title: string;
      short_description: string;
      description: string[];
      date: string;
      image: string;
      category: string;
      readDuration: number;
    }[] {
      // @ts-ignore
      return this.$store.getters["blogs/categoryBlogs"] as {
        slug: string;
        title: string;
        short_description: string;
        description: string[];
        date: string;
        image: string;
        category: string;
        readDuration: number;
      }[];
    },
    category: function category(): string {
      // @ts-ignore
      return this.$store.getters["blogs/category"] as string;
    },
  },
  methods: {
    async findCategoryBlog(category: string) {
      this.categoryTitle = category;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/category/${category}`
        );
        if (response.status == 200) {
          // @ts-ignore
          this.$store.dispatch("blogs/setCategoryBlogs", {
            blogs: response.data.blogs,
            category: category,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.findCategoryBlog(`${this.$route.params.category}`);
  },
  watch: {
    "$route.params.category": {
      handler: function (category) {
        this.findCategoryBlog(category);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
