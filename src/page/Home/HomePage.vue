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
    } as {
      search: string;
    };
  },
  computed: {
    blogs_list() {
      return this.$store.getters["blogs/blogs"] as {
        slug: string;
        title: string;
        short_description: string;
        description: string[];
        date: string;
        image: string;
        category: string;
      }[];
    },
  },
  methods: {
    async fetchBlogs() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/blog/all`);
        if (response.status == 200) {
          this.$store.dispatch("blogs/setBlogs", response.data);
        }else{
          this.$store.dispatch("blogs/setBlogs", []);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchBlogs();
  },
};
</script>
