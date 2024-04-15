<script setup lang="ts">
import { ref } from "vue";

const bol = ref(true);

const bolle = () => {
  bol.value = !bol.value;
};
</script>

<template>
  <div class="mt-3 h-[885px]">
    <div>
      <h1 class="text-center">If va else</h1>
    </div>

    <div class="grid place-content-center w-full mt-[80px]">
      <button
        @click="bolle"
        class="grid place-content-center w-[80px] h-[30px] p-2 bg-amber-200 text-amber-900 font-medium font-sans"
      >
        {{ bol }}
      </button>
    </div>
  </div>
</template>

<style scoped></style>
