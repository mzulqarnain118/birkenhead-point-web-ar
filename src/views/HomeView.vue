<template>
  <main>
    <TheWelcome />
    <!-- Embed SVG and assign an ID for manipulation -->
    <svg id="svgElement" width="100" height="100" @click="manipulateSVG">
      <!-- SVG content -->
      <path d="M50 10 L10 90 L90 90 Z" fill="red" />
    </svg>

    <!-- Enable/Disable Camera Buttons -->
    <div>
      <button @click="toggleCamera" v-text="isCameraEnabled ? 'Disable Camera' : 'Enable Camera'"></button>
    </div>

    <!-- AR.js Scene -->
    <div v-if="isCameraEnabled" v-show="isCameraEnabled">
      <div class="arjs-loader">
        <div>Loading, please wait...</div>
      </div>
      
      <!-- A-Frame Scene -->
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        <!-- NFT Anchor for Image Tracking -->
        <a-nft
          type="nft"
          url="../assets/Location_1_0046.png"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <!-- Content to Show -->
          <a-entity
            gltf-model="../assets/Location_02.fbx"
            scale="5 5 5"
            position="50 150 0"
          >
          </a-entity>
        </a-nft>

        <!-- Static Camera -->
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import TheWelcome from "@/components/TheWelcome.vue";

export default {
  components: {
    TheWelcome
  },
  setup() {
    const isCameraEnabled = ref(false);

    const toggleCamera = () => {
      isCameraEnabled.value = !isCameraEnabled.value;
    };

    const manipulateSVG = () => {
      // Perform SVG manipulation here
      const svgElement = document.getElementById('svgElement');
      if (svgElement) {
        // Example manipulation - change fill color
        svgElement.querySelector('path').setAttribute('fill', 'blue');
      }
    };

    return {
      isCameraEnabled,
      toggleCamera,
      manipulateSVG
    };
  }
};
</script>

<style scoped>
/* Styles */
.arjs-scene {
  display: none; /* Hide AR.js scene when camera is disabled */
}
</style>
