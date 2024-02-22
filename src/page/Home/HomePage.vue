<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
const Blog = defineAsyncComponent(
  () => import("../../components/BlogCard.vue")
);
</script>

<template>
  <h2>{{ search }}</h2>
  <div class="flex flex-wrap px-[8%] py-10 gap-5">
    <Blog :blogs="blogs_list" />
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  inject: ["blogSearch"],
  data() {
    return {
      search: "",
      page: 0,
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
            this.limit
          }&page=${this.page}`
        );
        if (response.status == 200) {
          // Append newly fetched data to the existing data list
          this.totalBlogs = response.data.totalBlogs;
          window.history.pushState(response.data.blogs, "Blogs", "/");
          // @ts-ignore
          this.$store.dispatch("blogs/setBlogs", response.data.blogs);
        } else {
          // @ts-ignore
          this.$store.dispatch("blogs/setBlogs", []);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async loadBlogs() {
      if (this.totalBlogs == -1 || this.totalBlogs >= this.page * this.limit) {
        this.page++;
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_APP_API_URL}/blog/all?blogs=${
              this.limit
            }&page=${this.page}`
          );
          if (response.status == 200) {
            // Append newly fetched data to the existing data list
            this.totalBlogs = response.data.totalBlogs;
            // @ts-ignore
            this.$store.dispatch("blogs/appendBlogs", response.data.blogs);
          } else {
            // @ts-ignore
            this.$store.dispatch("blogs/setBlogs", []);
          }
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
  mounted() {
    const currentState = window.history.state;
    const dataArray = Object.keys(currentState)
      .filter((key) => !isNaN(parseInt(key))) // Filter out non-numeric keys
      .map((key) => currentState[key]); // Map numerical keys to their corresponding objects
    if (dataArray.length > 0) {
      // @ts-ignore
      this.$store.dispatch("blogs/setBlogs", dataArray);
    }

    this.fetchBlogs();
    window.addEventListener("scroll", () => {
      const bottomOfWindow =
        window.scrollY + window.innerHeight + 0.4 >=
        document.documentElement.scrollHeight;
      if (bottomOfWindow && this.blogs_list.length < this.totalBlogs) {
        this.loadBlogs();
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", () => {
      const bottomOfWindow =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight;
      if (bottomOfWindow && this.blogs_list.length < this.totalBlogs) {
        this.loadBlogs();
      }
    });
  },
};
</script>
