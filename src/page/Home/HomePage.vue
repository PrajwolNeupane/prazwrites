<script lang="ts" setup>
import blogs from "../../const/BlogList";
import BlogCard from "../../components/BlogCard.vue";
</script>

<template>
  <div class="flex flex-wrap px-[8%] py-10 gap-5">
    <BlogCard :blogs="blogs" />
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    getTime({ title, description }: { title: string; description: string[] }) {
      return Math.floor(
        (title.split(" ").length + description.join(" ").split(" ").length) /
          150
      );
    },
  },
};
</script>
