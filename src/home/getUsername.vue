<template>
  <div class="flex items-center gap-3 p-2">
    <input
      class="w-[250px] h-[40px]"
      type="text"
      placeholder="Enter Instagram username"
      v-model="username"
      @keypress.enter="fetchUserData"
    />
    <button
      class="bg-blue-800 w-[150px] h-[40px] hover:bg-blue-500 hover:text-gray-300 text-white"
      @click="fetchUserData"
      :disabled="!username || loading"
    >
      {{ loading ? "Fetching..." : "Get Image" }}
    </button>
  </div>

  <div class="w-full h-[885px] text-white" v-if="imgData">
    <img :src="imgData?.profile_pic_url_hd" class="w-[250px]" alt="" />

    <h1>{{ imgData?.username }}</h1>
    <h2>{{ imgData?.full_name }}</h2>
    <h2>{{ imgData?.following }}</h2>
    <h2>{{ imgData?.followers }}</h2>
    <h3>{{ imgData?.bio }}</h3>
  </div>

  <div v-else-if="username && !loading" class="text-gray-500 text-white">
    Enter a valid Instagram username
  </div>
</template>

<script setup lang="ts">
import { getUsername } from "../components/APi";
import { ref, reactive } from "vue";

const imgData = ref(null);
const username = ref("");
const loading = ref(false);
const error = ref("");

const fetchUserData = async () => {
  if (!username.value) return;
  loading.value = true;
  try {
    imgData.value = await getUsername(username.value);
  } catch (err) {
    error.value = "Error fetching user data";
    console.error("Error fetching user data:", err);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>
