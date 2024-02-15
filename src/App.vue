<script setup>
import { RouterLink,useRouter, RouterView } from "vue-router";
import Login from "./views/LoginView.vue";
import GetStarted from "./views/get-started.vue";
import Splash from "./views/Splash.vue";
import Map from "./views/map.vue";
import LocationDetails from "./views/LocationDetails.vue";
import ImageCredits from "./views/ImageCredits.vue";
import { watch } from 'vue';

const router = useRouter();

watch(() => router.currentRoute.value.path, (newPath) => {
  document.body.classList.add(newPath.slice(1));
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
  <RouterView /> 
  <!-- <Splash />  -->
<!-- <Map/> -->
</template>

<style scoped>

</style>
