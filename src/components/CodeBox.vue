<template>
  <div
    class="bg-light-200 py-5 px-10 rounded-lg w-full border-2 border-light-600 relative text-sm"
  >
    <pre v-html="formattedCode" ></pre>
    <button
      class="absolute right-8 top-2 bg-dark-400 py-2 px-3 text-light-200 text-xs rounded-lg"
      :onClick="copyToClipboard"
    >
      Copy
    </button>
  </div>
</template>

<script lang="ts">
import Prism from "prismjs";

export default {
  props: {
    code: {
      type: String,
    },
  },
  methods: {
    copyToClipboard() {
      const textarea = document.createElement("textarea");
      textarea.value = this.code!;

      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    },
  },
  computed: {
    formattedCode() {
      return Prism.highlight(
        this.code!,
        Prism.languages.javascript,
        "javascript"
      );
    },
  },
};
</script>
