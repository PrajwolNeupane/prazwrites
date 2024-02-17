<script lang="ts" setup>
import BlogCard from "../../components/BlogCard.vue";
</script>

<template>
  <h2>{{ search }}</h2>
  <div class="flex flex-wrap px-[8%] py-10 gap-5">
    <BlogCard :blogs="blogs_list" />
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  inject: ["blogSearch"],
  data() {
    return {
      search: "",
      page: 1,
      totalBlogs: -1,
      limit: 6,
    } as {
      search: string;
      page: number;
      totalBlogs: number;
      limit: number;
    };
  },
  computed: {
    // @ts-ignore
    blogs_list() {
      // @ts-ignore
      return this.$store.getters["blogs/blogs"] as {
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
  },
  methods: {
    async fetchBlogs() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/blog/all?blogs=${
            this.page * this.limit
          }`
        );
        if (response.status == 200) {
          // Append newly fetched data to the existing data list
          this.totalBlogs = response.data.totalBlogs;
          // @ts-ignore
          this.$store.dispatch("blogs/setBlogs", response.data.blogs);
          this.page++; // Increment page number for the next request
        } else {
          // @ts-ignore
          this.$store.dispatch("blogs/setBlogs", []);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchBlogs();
    window.addEventListener("scroll", () => {
      const offset = 100; // Adjust this value as needed
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight + offset >=
        document.documentElement.offsetHeight;
      if (bottomOfWindow && this.blogs_list.length < this.totalBlogs) {
        this.fetchBlogs();
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", () => {
      const offset = 100; // Adjust this value as needed
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight + offset >=
        document.documentElement.offsetHeight;
      if (bottomOfWindow && this.blogs_list.length < this.totalBlogs) {
        this.fetchBlogs();
      }
    });
  },
};
</script>
