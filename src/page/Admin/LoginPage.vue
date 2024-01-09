<template>
  <div class="flex items-center justify-center pt-[100px]">
    <form class="flex flex-col w-[30%] gap-2" @submit.prevent="submitForm">
      <h1 class="text-xl mb-5">Log In</h1>
      <h3>Admin Email:</h3>
      <input
        placeholder="Email"
        class="bg-light-200 w-full p-2 text-sm rounded-md shadow-md"
        type="email"
        v-model="values.email"
        @blur="validate('email')"
        @keypress="validate('email')"
      />
      <p v-if="errors?.email" class="error">{{ errors?.email }}</p>
      <h3 class="mt-4">Admin Password:</h3>
      <input
        placeholder="Password"
        class="bg-light-200 w-full p-2 text-sm rounded-md shadow-md"
        type="password"
        v-model="values.password"
        @blur="validate('password')"
        @keypress="validate('password')"
      />
      <p v-if="errors?.password" class="error">{{ errors?.password }}</p>
      <button
        class="bg-dark-400 py-2 px-5 rounded-md hover:bg-dark-800 text-light-200 mt-4"
        type="submit"
      >
        Sign In
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { adminLoginSchema } from "../../const/Interface";
import axios from "axios";

export default {
  data() {
    return {
      values: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
    } as {
      errors: Record<string, string>;
      values: {
        email: string;
        password: string;
      };
    };
  },
  methods: {
    logIn: async function logIn() {
      try {
        const res = await axios.post(
          "http://localhost:8000/auth/signin",
          {
            ...this.values,
          },
          { withCredentials: true }
        );
        if (res.status == 200) {
          this.$router.replace("/admin");
        }
      } catch (e: any) {
        console.log(e.response.data);
      }
    },
    submitForm() {
      adminLoginSchema
        .validate(this.values, { abortEarly: false })
        .then(() => {
          this.errors = {};
          this.logIn();
        })
        .catch((e) => {
          e.inner.forEach((error: any) => {
            this.errors[error.path] = error.message;
          });
        });
    },
    validate(field: string) {
      adminLoginSchema
        .validateAt(field, this.values)
        .then(() => {
          this.errors[field] = "";
        })
        .catch((e) => {
          this.errors[field] = e.message;
        });
    },
  },
};
</script>
