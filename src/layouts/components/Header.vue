<script setup>
import {RouterLink} from 'vue-router'
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <header>
    <nav class="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
      <div
          bis_skin_checked="1"
          class="container mx-auto flex flex-wrap items-center justify-between"
      >
        <a class="flex items-center"
           href="https://laraveller.com/">
          Vue Auth Template
        </a>
        <button
            aria-controls="navbar-default"
            aria-expanded="false"
            class="mobile-btn"
            data-collapse-toggle="navbar-default"
            type="button"
        >
          <span class="sr-only">Open main menu</span>
          <svg
              aria-hidden="true"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                clip-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                fill-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
            id="navbar-default"
            bis_skin_checked="1"
            class="hidden w-full md:block md:w-auto"
        >
          <ul class="ul">
            <li>
              <RouterLink
                  :to="{ name: 'Home' }"
                  aria-current="page"
                  class="block rounded py-2 pr-4 pl-3 text-white"
              >Home
              </RouterLink
              >
            </li>
            <template v-if="!authStore.user">
              <li>
                <RouterLink
                    :to="{ name: 'Login' }"
                    class="log"
                >Login
                </RouterLink
                >
              </li>
              <li>
                <RouterLink
                    :to="{ name: 'Register' }"
                    class="log"
                >Register
                </RouterLink
                >
              </li>
            </template>
            <template v-else>
              <button
                  class="log"
                  @click="authStore.handleLogout"
              >
                Logout
              </button>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
.mobile-btn {
  @apply ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden;
}
.ul {
  @apply mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium;
}
.log {
  @apply block rounded py-2 pr-4 pl-3 text-gray-50 hover:bg-gray-700;
}
</style>