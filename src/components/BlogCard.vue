<template>
  <RouterLink
    :to="'blog/' + blog.slug"
    class="flex items-start sm:flex-row flex-col md:w-[calc(50%-10px)] w-full hover:bg-light-200 gap-2 cursor-pointer mb-5"
    v-for="blog in blogs"
    :key="blog.slug"
  >
    <img
      class="sm:w-[40%] sm:h-full w-full h-[150px] object-cover"
      :src="blog.image"
    />
    <div class="flex flex-col gap-2 p-2">
      <h2 class="text-dark-600 text-rg">
        {{ blog.title }}
    </h2>
      <h4 class="text-dark-400 leading-[120%]">
        {{ blog.short_description }}
      </h4>
      <div class="flex gap-2 flex-wrap w-full text-dark-200 items-center">
        <h4>{{ blog.date }}</h4>
        <h4>·</h4>
        <h4>
          {{ getTime({ title: blog.title, description: blog.description }) }}
          min read
        </h4>
        <h4>·</h4>
        <h3 class="bg-primary-400 px-2 py-1 rounded-lg text-xs">
          {{ blog.category }}
        </h3>
      </div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
export default {
  inject: ["getTime"],
  props: {
    blogs: {
      type: Array<{
        slug: string;
        title: string;
        short_description: string;
        description: string[];
        date: string;
        image: string;
        category: string;
      }>,
    },
  },
};
</script>
