<script lang="ts" setup>
import blogs from "../../const/BlogList";
import BlogCard from "../../components/BlogCard.vue";
</script>

<template>
  <div class="flex flex-wrap px-[8%] py-10 gap-5">
    <BlogCard :blogs="blogs_filtered" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      blogs_filtered: [{}],
    } as {
      blogs_filtered: {
        slug: string;
        title: string;
        short_description: string;
        description: string[];
        date: string;
        image: string;
        category: string;
      }[];
    };
  },
  methods: {
    findCategoryBlog(category: string) {
      this.blogs_filtered = blogs.filter((curr) => {
        if (curr.category == category) {
          return curr;
        }
      });
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
