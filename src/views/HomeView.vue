<template>
  <Splash/>

  <!-- <main>
    <TheWelcome />
    <svg ref="svgElement" width="100" height="100" @click="manipulateSVG">
      <path d="M50 10 L10 90 L90 90 Z" :fill="svgFillColor" />
    </svg>

    <div>
      <button @click="toggleCamera" v-text="isCameraEnabled ? 'Disable Camera' : 'Enable Camera'"></button>
    </div>

    <div v-if="isCameraEnabled" v-show="isCameraEnabled" class="arjs-scene">
      <div class="arjs-loader">
        <div>Loading, please wait...</div>
      </div>

      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        <a-nft
          type="nft"
          url="../assets/Location_1_0046.png"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-entity
            gltf-model="../assets/Location_02.fbx"
            scale="5 5 5"
            position="50 150 0"
          >
          </a-entity>
        </a-nft>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  </main> -->
</template>

<script setup>
import { ref,onMounted } from 'vue';
import TheWelcome from "@/components/TheWelcome.vue";
import Splash from "./Splash.vue";
import { useRouter } from "vue-router";

// Use the useRouter hook to access the router instance
const router = useRouter();

// Use the setTimeout function to redirect to the login page after 3 seconds
// Use the setTimeout function to redirect to the login page after 3 seconds
onMounted(() => {
  setTimeout(() => {
    router.push('/login');
  }, 3000);
});

const svgFillColor = ref('red');
const isCameraEnabled = ref(false);

const toggleCamera = () => {
  isCameraEnabled.value = !isCameraEnabled.value;
};

const manipulateSVG = () => {
  // Perform SVG manipulation here
  const svgElement = document.getElementById('svgElement');
  if (svgElement) {
    // Example manipulation - change fill color
    svgFillColor.value = 'blue';
  }
};

</script>

<style scoped>
/* Styles */
.arjs-scene {
  display: none; /* Hide AR.js scene when camera is disabled */
}
</style>
