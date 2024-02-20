<template>
  <Splash/>
</template>

<script setup>
import { onMounted } from 'vue';
import Splash from "./Splash.vue";
import { useRouter } from "vue-router";

// Use the useRouter hook to access the router instance
const router = useRouter();

// Use the setTimeout function to redirect to the login page after 3 seconds
onMounted(() => {
  setTimeout(() => {
    router.push('/login');
  }, 3000);
});

</script>

<style scoped>
</style>
