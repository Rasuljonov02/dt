<script setup lang="ts">
import { deleteItem, getTodos } from "../components/APi";
import { ref } from "vue";

import { CSpinner } from "@coreui/vue/dist/esm/components/spinner/index.js";

const todos = ref();
const loading = ref(true);

// data fetching
const getTOdu = async () => {
  todos.value = await getTodos();
  console.log(todos.value);
  loading.value = false;
};

getTOdu();

// delete items
const deleteid = async (id: any) => {
  const res = await deleteItem(id);
  console.log(res);
  await getTOdu();
};
</script>

<template>
  <div class="grid place-content-center gap-3 w-full h-[885px]">
    <template v-if="!loading">
      <div class="overflow-x-auto h-[500px]">
        <div
          v-for="(item, i) in todos"
          :key="i"
          class="flex gap-3 flex-col w-full text-white"
        >
          <div
            class="border-solid border-1 border-sky-300 flex items-center justify-between p-2 gap-3"
          >
            <p>{{ item.title }}</p>
            <span class="flex gap-3 items-center">
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
