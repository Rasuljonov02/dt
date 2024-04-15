<script lang="ts">
import { RouterLink } from "vue-router";

export default {
  data() {
    return {};
  },
  components: {
    RouterLink,
  },
  methods: {},
};
</script>

<template>
  <header class="w-full">
    <nav class="px-4 lg:px-6 py-2.5 dark:bg-gray-500">
      <div
        class="flex pl-[50px] pr-[50px] flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <div
          class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="menu-2"
        >
          <ul
            class="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <RouterLink
                to="/"
                class="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                If va else
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/main"
                class="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                For vs Axsion
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/img"
                class="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Instagram
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
