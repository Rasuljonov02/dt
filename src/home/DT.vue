<script setup>
import { deleteItem, getTodos } from "../components/APi.ts";
import { ref } from "vue";

import { CSpinner } from "@coreui/vue/dist/esm/components/spinner/index.js";

const TODOS = [];

const loading = ref(true);
// data fetching
const fetchData = async () => {
  try {
    const todosData = await getTodos();
    TODOS.value = todosData;
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
};

// delete items
const deleteid = async (id) => {
  const res = await deleteItem(id);
  console.log(res);
  fetchData().then(() => {
    console.log(TODOS);
  });
};

fetchData().then(() => {
  console.log(TODOS);
});
</script>

<template>
  <div class="grid place-content-center gap-3 w-full h-[913px] pt-10">
    <div class="">
      <form class="grid place-content-start h-[60px] w-[500px]">
        <div class="flex gap-3 items-center">
          <input
            id="default-search"
            class="w-[200px] p-2 h-[40px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Todus"
            required
          />
          <button
            type="submit"
            class="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
      </form>
    </div>

    <template v-if="!loading">
      <div class="overflow-x-auto h-[500px]">
        <div
          v-for="(item, index) in TODOS.value"
          :key="index"
          class="flex gap-3 flex-col w-full text-white"
        >
          <div
            class="border-solid border-1 border-sky-300 flex items-center justify-between p-2 gap-3"
          >
            <p>{{ item.title }}</p>
            <span class="flex gap-3 items-center">
              <p class="cursor-pointer text-[30px]">🖊️</p>
              <p @click="deleteid(item.id)" class="cursor-pointer text-[30px]">
                🗑️
              </p>
            </span>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="text-center">
        <div
          class="absolute left-0 top-0 grid h-screen w-screen place-items-center bg-black bg-opacity-30"
        >
          <CSpinner color="info" variant="grow" />
        </div>
      </div>
    </template>
  </div>
</template>

<style></style>
