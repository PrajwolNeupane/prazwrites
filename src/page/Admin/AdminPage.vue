<template>
  <h2>Hey this is admin</h2>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isAdmin: false,
    };
  },
  mounted() {
    this.isAdmin = this.$store.getters["admin/isAdmin"];
  },
};
</script>
