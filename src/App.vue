<script setup>
import { useRouter, RouterView } from "vue-router";
import { watch } from "vue";
import Splash from "./views/Splash.vue";

const router = useRouter();
import { ref } from "vue";

const showSplashScreen = ref(true);

setTimeout(() => {
  showSplashScreen.value = false;
}, 2000); // 2 seconds delay
watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    if (["/about", "/map", "/scan-qr-code"].includes(newPath)) {
      showSplashScreen.value = false;
    }
    document.body.setAttribute("class", newPath.slice(1));
  }
);
</script>

<template>
  <div v-if="showSplashScreen" class="splash-screen">
    <Splash />
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>

<style scoped></style>
