<script lang="ts" setup>
import blogs from "../../const/BlogList";
import BlogCard from "../../components/BlogCard.vue";
</script>

<template>
  <h2>{{ search }}</h2>
  <div class="flex flex-wrap px-[8%] py-10 gap-5">
    <BlogCard :blogs="blogs_list" />
  </div>
</template>

<script lang="ts">
export default {
  inject: ["blogSearch"],
  data() {
    return {
      blogs_list: [{}],
      search: "",
    } as {
      blogs_list: {
        slug: string;
        title: string;
        short_description: string;
        description: string[];
        date: string;
        image: string;
        category: string;
      }[];
      search: string;
    };
  },
  methods: {
    setBlog(search: string) {
      if (search) {
        this.blogs_list = blogs.filter((curr) => {
          if (curr.title.toLowerCase().includes(search.toLowerCase())) {
            return curr;
          }
        });
      } else {
        this.blogs_list = blogs;
      }
    },
  },
  created() {
    this.setBlog("");
  },
  watch: {
    blogSearch: {
      handler: function (newValue: string) {
        if (newValue && this != undefined) {
          this.search = newValue;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
