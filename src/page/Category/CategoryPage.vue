<script lang="ts" setup>
import blogs from "../../const/BlogList";
import BlogCard from "../../components/BlogCard.vue";
</script>

<template>
  <div v-if="blogs_filtered.length != 0">
    <div class="flex px-[8%] pt-10 items-center gap-3">
      <h2 class="text-lg">{{ categoryTitle }} Blogs</h2>
      <h3 class="text-md">({{ blogs_filtered.length }})</h3>
    </div>
    <div class="flex flex-wrap px-[8%] py-10 gap-5">
      <BlogCard :blogs="blogs_filtered" />
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
      blogs_filtered: [{}],
      categoryTitle: "",
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
      categoryTitle: string;
    };
  },
  methods: {
    findCategoryBlog(category: string) {
      this.categoryTitle = category;
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
