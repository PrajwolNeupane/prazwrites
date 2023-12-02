<script lang="ts" setup>
import CategoryList from "../const/CategoryList.ts";
</script>
<template>
  <div
    class="flex sm:flex-row flex-col sm:gap-0 gap-3 py-5 px-[8%] bg-light-200 items-center justify-between sticky top-0"
  >
    <h1 class="text-xl text-dark-800">Prazwrites</h1>
    <div class="md:flex hidden border-[2px] border-[gray] w-1/3 p-2 rounded-md">
      <input class="w-full" placeholder="Search blogs" v-model="blogSearch"/>
    </div>
    <div class="flex sm:gap-[60px] gap-[30px]">
      <router-link to="/" class="text-sm text-dark-600 font-medium"
        >Home</router-link
      >
      <select
        class="text-sm text-dark-600"
        @change="change"
        :value="currentCategory"
      >
        <option v-for="item in CategoryList" :value="item.value">
          {{ item.label }}
        </option>
      </select>
      <router-link
        to="//prajwolneupane.com.np"
        target="_blank"
        class="text-sm text-dark-600 font-medium"
        >About</router-link
      >
    </div>
  </div>
  <router-view></router-view>
</template>
<script lang="ts">
export default {
  data() {
    return {
      currentCategory: "",
      blogSearch:""
    };
  },
  provide(){
    return {
      blogSearch:this.blogSearch
    }
  },
  created() {
    if (this.$route.params.category) {
      this.currentCategory = `${this.$route.params.category}`;
    } else {
      this.currentCategory = "";
    }
  },
  methods: {
    change(e: any) {
      this.currentCategory = e.target.value;
      this.navigate(e.target.value);
    },
    navigate(category: string) {
      if (category != "") {
        this.$router.push({ path: `/category/${category}` });
      } else {
        this.$router.push({ path: `/` });
      }
    },
  },
  watch: {
    "$route.params.category": {
      handler: function (category) {
        if (category) {
          this.currentCategory = category;
        } else {
          this.currentCategory = "";
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
