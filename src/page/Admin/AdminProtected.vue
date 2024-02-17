<template>
  <router-view></router-view>
</template>

<script lang="ts">
import axios from "axios";
export default {
  computed: {
    isAdmin(): boolean {
      // @ts-ignore
      return this.$store.getters["admin/isAdmin"] as boolean;
    },
  },
  mounted() {
    this.getAdmin();
    //this.protectRoute();
  },
  watch: {
    isAdmin(newVal: boolean) {
      if (newVal && this.$route.path == "/admin/login") {
        this.$router.replace("/admin");
      } else if (!newVal) {
        this.$router.replace("/admin/login");
      }
    },
  },
  methods: {
    async getAdmin() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/auth`, {
          withCredentials: true,
        });
        // @ts-ignore
        this.$store.dispatch("admin/setAdmin", {
          ...res.data.user,
          isAdmin: true,
        });
        // @ts-ignore
        this.isAdmin = this.$store.getters["admin/isAdmin"];
      } catch (e: any) {
        // @ts-ignore
        this.$store.dispatch("admin/setAdmin", {
          id: null,
          email: null,
          isAdmin: false,
        });
        console.log(e.response);
      }
    },
  },
};
</script>
