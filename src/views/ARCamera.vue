<template>
  <div>
    <button @click="toggleCamera" v-text="isCameraEnabled ? 'Disable Camera' : 'Enable Camera'"></button>

    <div v-if="isCameraEnabled" v-show="isCameraEnabled" class="arjs-scene">
      <!-- AR.js scene content -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isCameraEnabled = ref(false);

const toggleCamera = () => {
  isCameraEnabled.value = !isCameraEnabled.value;
};
</script>

<style scoped>
/* Styles */
.arjs-scene {
  display: none; /* Hide AR.js scene when camera is disabled */
}
</style>
