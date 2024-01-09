<script lang="ts" setup>
import CategoryList from "../../const/CategoryList";
import { addBlogSchema } from "../../const/Interface";
</script>

<template>
  <form
    class="flex flex-col px-[8%] py-[2%] items-center gap-5"
    @submit.prevent="addBlog"
  >
    <div class="flex flex-col w-[40%] gap-1">
      <h3>Blog Title:</h3>
      <input
        placeholder="Enter Blog Title"
        class="bg-light-200 w-full p-2 text-sm rounded-md shadow-md"
        v-model="values.title"
        @blur="validate('title')"
        @keypress="validate('title')"
      />
      <p class="error">{{ errors?.title }}</p>
    </div>
    <div class="flex justify-between w-[40%] gap-5">
      <div class="flex flex-col w-[40%] gap-1 items-start">
        <h3>Blog Category:</h3>
        <select
          v-model="values.category"
          @blur="validate('category')"
          @keypress="validate('category')"
          class="rounded-md shadow-md p-2 bg-light-200"
        >
          <option
            v-for="category in CategoryList"
            :value="category.value"
            :label="category.label"
          ></option>
        </select>
        <p class="error">{{ errors?.category }}</p>
      </div>
      <div class="flex flex-col w-full">
        <h3>Blog Header Image:</h3>
        <input
          placeholder="Image Url"
          type="url"
          class="bg-light-200 w-full p-2 text-xs rounded-md shadow-md"
          v-model="values.image"
          @blur="validate('image')"
          @keypress="validate('image')"
        />
        <p class="error">{{ errors?.image }}</p>
      </div>
    </div>
    <div
      class="flex w-full items-center gap-5"
      v-for="(desc, index) in getDescriptions"
    >
      <textarea
        :key="index"
        placeholder="Enter Blog Description"
        class="bg-light-200 w-full p-2 text-sm rounded-md shadow-md outline-none"
        v-if="desc.content != null"
        v-model="desc.content"
      ></textarea>
      <textarea
        :key="index"
        placeholder="Enter Code"
        class="bg-light-200 w-full p-2 text-sm rounded-md shadow-md outline-none"
        v-if="desc.code != null"
        v-model="desc.code"
      ></textarea>
      <button
        class="bg-red-500 py-2 px-5 rounded-md hover:bg-red-700 text-light-200"
        type="button"
        @click="removeDescription(index)"
        :disabled="index === 0"
      >
        Delete
      </button>
    </div>
    <div class="flex justify-between w-[40%]">
      <button
        class="bg-primary-400 py-2 px-5 rounded-md hover:bg-primary-800"
        @click="addDescription"
        type="button"
      >
        Add Description
      </button>
      <button
        class="bg-primary-400 py-2 px-5 rounded-md hover:bg-primary-800"
        type="button"
        @click="addCode"
      >
        Add Code
      </button>
    </div>
    <button
      class="bg-dark-400 py-2 px-5 rounded-md hover:bg-dark-800 text-light-200"
      type="submit"
    >
      Post
    </button>
  </form>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      values: {
        title: "",
        category: "",
        image: "",
        description: [{ content: "", code: null }],
      },
      errors: {
        title: "",
        category: "",
        image: "",
        description: "",
      },
    } as {
      values: {
        title: string;
        category: string;
        image: string;
        description: Array<{ content: string | null; code: null | string }>;
      };
      errors: Record<string, string>;
    };
  },
  methods: {
    transformedCode(desc: { code: string | null }) {
      // Replace the first space before the function body with '\n'
      return `<code>${desc.code?.replace(/ (\s*{)/, "\n$1")}</code>`;
    },
    updateTransformedCode() {
      this.values.description.forEach((desc) => {
        if (desc.code != null) {
          // Update desc.code with the transformed code
          desc.code = this.transformedCode(desc);
        }
      });
    },
    addBlog() {
      addBlogSchema
        .validate(this.values, { abortEarly: false })
        .then(async () => {
          this.errors = {};
          try {
            this.updateTransformedCode();
            const data = {
              title: this.values.title,
              tags: this.values.category,
              image: this.values.image,
              description: this.values.description
                .map((desc) => (desc.code !== null ? desc.code : desc.content))
                .filter(Boolean),
            };
            const res = await axios.post(
              "http://localhost:8000/blog/add",
              data,
              {
                withCredentials: true,
              }
            );
            if (res.status == 201) {
              alert("Blog Added");
              this.values = {
                title: "",
                category: "",
                image: "",
                description: [{ content: "", code: null }],
              };
            }
            console.log(res.status);
          } catch (e) {
            console.log(e);
          }
        })
        .catch((err) => {
          err.inner.forEach((error: any) => {
            this.errors[error.path] = error.message;
          });
        });
    },
    addDescription() {
      const description = this.values.description;
      description.push({ content: "", code: null });
      this.values.description = description;
    },
    addCode() {
      const description = this.values.description;
      description.push({ code: "", content: null });
      this.values.description = description;
    },
    removeDescription(index: number) {
      const descriptions = this.values.description; // Assuming this.description is an array

      // Check if the index is within the bounds of the array
      if (index >= 0 && index < descriptions.length) {
        // Use splice to remove the item at the specified index
        descriptions.splice(index, 1);
      } else {
        console.error("Invalid index");
      }
    },
    validate(field: string) {
      addBlogSchema
        .validateAt(field, this.values)
        .then(() => {
          this.errors[field] = "";
        })
        .catch((err) => {
          this.errors[field] = err.message;
        });
    },
  },
  computed: {
    getDescriptions() {
      return this.values.description;
    },
  },
};
</script>
