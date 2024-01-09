<script lang="ts" setup>
import TextLiner from "../../components/TextLiner.vue";
</script>
<template>
  <div class="flex flex-col items-start px-[8%] py-10 gap-3">
    <h3 class="bg-primary-400 px-2 py-1 rounded-lg text-xs">
      {{ blog_data.category }}
    </h3>
    <h1 class="text-xl text-dark-800">
      {{ blog_data.title }}
    </h1>
    <div class="flex gap-2 flex-wrap w-full text-dark-200 items-center">
      <h4>{{ blog_data.date }}</h4>
      <h4>·</h4>
      <h4>
        {{
          getTime({
            title: blog_data.title,
            description: blog_data.description,
          })
        }}
        min read
      </h4>
    </div>
    <img
      :src="blog_data.image"
      class="w-full h-[45vh] object-contain sm:mb-5 mb-0"
    />
    <TextLiner
      :description="description"
      v-for="description in blog_data.description"
    />
  </div>
</template>

<script lang="ts">
import moment from "moment";
import "prismjs/themes/prism.css";
import axios from "axios";
export default {
  data() {
    return {
      blog_data: {
        title: "",
        slug: "",
        description: [""],
        date: "",
        image: "",
        category: "",
      },
    };
  },
  methods: {
    async fetchSingleBlog(slug: string) {
      try {
        const response = await axios.get(`http://localhost:8000/blog/${slug}`);
        if (response.status == 200) {
          const blog = response.data.blog;
          this.blog_data = {
            title: blog.title,
            image: blog.image,
            description: blog.description?.filter(
              (desc: string, index: number) => {
                if (index != 0) {
                  return desc;
                }
              }
            ),
            category: blog.tags,
            slug: blog._id,
            date: moment(blog?.createdAt).format("MMM D, YYYY"),
          };
        }
      } catch (e) {
        console.log(e);
      }
    },
    getTime({ title, description }: { title: string; description: string[] }) {
      return Math.floor(
        (title?.split(" ").length + description?.join(" ").split(" ").length) /
          150
      );
    },
  },
  created() {
    this.fetchSingleBlog(`${this.$route.params.slug}`);
  },
};
</script>
