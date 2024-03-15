<script setup>
import { useRouter, RouterView } from "vue-router";
import { watch } from "vue";
const router = useRouter();

watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    document.body.setAttribute("class", newPath.slice(1));
  }
);
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
