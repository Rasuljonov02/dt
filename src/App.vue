<script lang="ts">
import Hedr from "./components/hedr.vue";

import { RouterView } from "vue-router";
export default {
  components: {
    Hedr,
    RouterView,
  },
};
</script>

<template>
  <div class="bg-[#374151]">
    <Hedr />
    <RouterView />
  </div>
</template>

<style></style>
