<script setup lang="ts">
//@ts-ignore
import vueTopprogress from "vue-top-progress";
</script>

<template>
  <Suspense>
    <template #default>
      <router-view></router-view>
    </template>
    <template #fallback><h2>Loading</h2></template>
  </Suspense>
</template>
