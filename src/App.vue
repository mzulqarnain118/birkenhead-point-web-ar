<script setup>
import { RouterLink,useRouter, RouterView } from "vue-router";
import Map from "./views/map.vue";
import GetStarted from "./views/get-started.vue";
import LoginView from "./views/LoginView.vue";
import { watch} from 'vue';

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
<!-- <Map/> -->
</template>

<style scoped>

</style>
