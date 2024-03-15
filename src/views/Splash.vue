<script setup>
import { useRouter } from "vue-router";
import { getLocal } from "../../utils";
const router = useRouter();
const isAuthenticated = getLocal("token");
setTimeout(() => {
  router.push(isAuthenticated ? "/get-started" : "/login");
}, 2000);
</script>

<template>
  <div class="splash">
    <div class="screen-wrapper">
      <div class="logo text-center">
        <img width="220" src="../assets/images/BHP_Logo.gif" />
        <p>Birkenhead Point Augmented Reality Experience</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
