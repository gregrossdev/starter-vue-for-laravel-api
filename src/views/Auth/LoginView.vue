<script setup>
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();

const form = ref({
  email: "",
  password: "",
});
</script>
<template>
  <section class="bg-[#F4F7FF] py-8">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <article
              class="
              mx-auto
              max-w-[525px]
              overflow-hidden
              rounded-lg
              bg-white
              py-16
              px-10
              text-center
              sm:px-12
              md:px-[60px]
            "
          >
            <h2 class="mb-10 text-xl font-bold text-center md:mb-16">Login</h2>
            <form @submit.prevent="authStore.handleLogin(form)">
              <div class="mb-6">
                <input
                    v-model="form.email"
                    class="
                    border-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                    placeholder="Email"
                    type="email"
                />
                <div v-if="authStore.errors.email"
                     class="flex">
                  <span class="text-red-400 text-sm m-2 p-2">{{
                      authStore.errors.email[0]
                    }}</span>
                </div>
              </div>
              <div class="mb-6">
                <input
                    v-model="form.password"
                    class="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                    placeholder="Password"
                    type="password"
                />
                <div v-if="authStore.errors.password"
                     class="flex">
                  <span class="text-red-400 text-sm m-2 p-2">{{
                      authStore.errors.password[0]
                    }}</span>
                </div>
              </div>
              <div class="mb-10">
                <button
                    class="
                    w-full
                    px-4
                    py-3
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                    type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <RouterLink
                class="
                mb-2
                inline-block
                text-base text-[#adadad]
                hover:text-primary hover:underline
              "
                to="/forgot-password"
            >
              Forgot Password?
            </RouterLink>
            <p class="text-base text-[#adadad]">
              Not a member yet?
              <RouterLink class="text-primary hover:underline"
                          to="/register">
                Sign Up
              </RouterLink>
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>