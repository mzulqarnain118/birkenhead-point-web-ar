<script setup>
import { RouterLink,useRouter, RouterView } from "vue-router";
import Map from "./views/map.vue";
import GetStarted from "./views/get-started.vue";
import { watch, ref } from 'vue';

const router = useRouter();
const currentURl = ref(router.currentRoute.value.path);

watch(() => router.currentRoute.value.path, (newPath) => {
  currentURl.value = newPath.slice(1);
});
</script>

<template>
  <!-- <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div> -->
  <div :class="currentURl">
  <RouterView /> 
</div>
<!-- <Map/> -->
</template>

<style scoped>

</style>
