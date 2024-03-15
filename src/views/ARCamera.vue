<template>
  <div class="screen position-fixed">
    <div class="screen-wrapper">
      <div class="arjs-loader">
        <div>Loading, please wait...</div>
      </div>

      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
      >
        <a-assets>
          <template v-for="marker in markers" :key="marker.id">
            <img
              :id="'image' + marker.id"
              :src="`/Target_Objects/Location_${marker.id}.png`"
            />
          </template>
        </a-assets>

        <template v-for="marker in markers" :key="marker.id">
          <a-nft
            type="nft"
            :url="`/Floor_QR/location${marker.id}/Location-${marker.id}`"
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
            emitevents="true"
            :id="'myMarker' + marker.id"
            registerevents
          >
            <a-image
              :src="'#image' + marker.id"
              width="600px"
              height="300px"
              position="100 0 0"
              rotation="-90 0 0"
            ></a-image>
          </a-nft>
        </template>

        <!-- <a-entity camera></a-entity> -->
      </a-scene>
    </div>
  </div>
</template>

<script setup>
import { useMarkerStore } from "../stores/marker";
const markerStore = useMarkerStore();
const { scannedMarkerId } = defineProps(["scannedMarkerId"]);

const emits = defineEmits(["update:scannedMarkerId", "updatePropEvent"]);
const updateScannedMarkerId = (value) => {
  emits("updatePropEvent", value ? markerStore.getMarkerInfoById(value) : null);
};

const markers = markerStore.markers;

AFRAME.registerComponent("registerevents", {
  init: function () {
    let marker = this.el;

    marker.addEventListener("markerFound", function () {
      const markerId = marker.id;
      const markerFilteredId = +markerId.slice(8);
      console.log("markerFound", markerId, "===========", +markerId.slice(8));
      updateScannedMarkerId(markerFilteredId);
      markerStore.updateScannedMarkerId(markerFilteredId);
    });

    marker.addEventListener("markerLost", function () {
      const markerId = marker.id;
      updateScannedMarkerId(null);
      console.log("markerLost", markerId);
      // TODO: Add your own code here to react to the marker being lost.
    });
  },
});
</script>
