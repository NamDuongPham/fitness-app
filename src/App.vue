<script setup lang="ts">
import { ref } from "vue";
import Layout from "./components/layouts/Layout.vue";
import Welcome from "./components/pages/Welcome.vue";
function handleChangeDisplay(idx:number) {
  selectedDisplay.value = idx;
}
const selectedDisplay = ref(1)
</script>

<template>
  <Layout>
    <!-- PAGE 1 -->
    <Welcome
      :handleChangeDisplay="handleChangeDisplay"
      v-if="selectedDisplay == 1"
    />
  </Layout>
</template>

<style scoped></style>
