<script setup lang="ts"></script>

<template><router-view></router-view></template>

<script lang="ts">
export default {
  provide() {
    return {
      getTime: this.getTime,
    } as {
      getTime: ({
        title,
        description,
      }: {
        title: string;
        description: string[];
      }) => number;
    };
  },
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
