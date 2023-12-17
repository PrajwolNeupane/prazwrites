<script setup lang="ts">
import CodeBox from "./CodeBox.vue";
</script>

<template>
  <p
    v-if="!description?.includes(`<code>`) && !description?.includes(`</code>`)"
    class="text-rg"
    v-html="description"
  ></p>
  <CodeBox
    v-if="description?.includes(`<code>`) && description?.includes(`</code>`)"
    :code="description?.replace(/<code>|<\/code>/g, '')"
  />
</template>
<script lang="ts">
export default {
  props: {
    description: {
      type: String,
    },
  },
};
</script>
<style>
h1{
    font-size: 23px;
}
h1,
h2,
h3,
p,
span {
  display: inline;
}
</style>
