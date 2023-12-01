<script lang="ts" setup>
import CategoryList from "../const/CategoryList.ts";
</script>
<template>
  <div
    class="flex sm:flex-row flex-col sm:gap-0 gap-3 py-5 px-[8%] bg-light-200 items-center justify-between"
  >
    <h1 class="text-xl text-dark-800">Prazwrites</h1>
    <div class="md:flex hidden border-[2px] border-[gray] w-1/3 p-2 rounded-md">
      <input class="w-full" placeholder="Search blogs" />
    </div>
    <div class="flex sm:gap-[60px] gap-[30px]">
      <router-link to="/" class="text-sm text-dark-600 font-medium"
        >Home</router-link
      >
      <select class="text-sm text-dark-600" @change="change" value="">
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
  methods: {
    change(e: any) {
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
};
</script>
