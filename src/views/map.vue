<template>
  <div class="map">
    <div class="screen-wrapper">
      <component
        :is="components[currentRoute]"
        :scannedMarkerId="scannedMarkerId"
        @updatePropEvent="scannedMarkerId = $event"
      />
      <ul
        class="nav nav-tabs position-fixed d-flex align-items-center justify-content-between"
        id="nav-tabs"
        role="tablist"
        v-if="scannedMarkerId === null"
      >
        <li
          v-for="tab in tabsData"
          :key="tab.id"
          class="nav-item"
          role="presentation"
        >
          <button
            :class="{ 'nav-link': true, active: tab.route === currentRoute }"
            :id="tab.id"
            data-bs-toggle="tab"
            :data-bs-target="tab.target"
            type="button"
            role="tab"
            @click="navigateTo(tab.route)"
            :aria-controls="tab.id"
            :aria-selected="tab.route === currentRoute"
          >
            <img :src="`${tab.iconOff}`" />
            <img :src="`${tab.iconOn}`" />
          </button>
        </li>
      </ul>
      <img
        class="cross-icon cursor"
        @click="toggleCamera"
        src="../assets/images/cross.png"
        v-if="currentRoute === 'scan-qr-code'"
      />
      <div class="location-details" v-if="scannedMarkerId !== null">
        <div
          class="position-fixed d-flex flex-col align-items-start justify-content-end"
        >
          <h2>{{ scannedMarkerId?.[0] }}</h2>
          <p>{{ scannedMarkerId?.[1] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useMarkerStore } from "../stores/marker";
const markerStore = useMarkerStore();
import LocationsView from "./LocationsView.vue";
import ARCamera from "./ARCamera.vue";
import AboutView from "./AboutView.vue";
import locationIconOn from "../assets/images/BHP_Map_Icon_On.png";
import locationIconOff from "../assets/images/BHP_Map_Icon_Off.png";
import scanIconOn from "../assets/images/BHP_Phone_Icon_On.png";
import scanIconOff from "../assets/images/BHP_Phone_Icon_Off.png";
import infoIconOn from "../assets/images/BHP_Info_Icon_On.png";
import infoIconOff from "../assets/images/BHP_Info_Icon_Off.png";
import { getLocal, setLocal } from "../../utils";
const scannedMarkerId = ref(null);

const tabsData = [
  {
    id: "locations-tab",
    target: "#locations",
    route: "map",
    iconOff: locationIconOff,
    iconOn: locationIconOn,
    active: true,
  },
  {
    id: "scan-qr-code-tab",
    target: "#scan-qr-code",
    route: "scan-qr-code",
    iconOff: scanIconOff,
    iconOn: scanIconOn,
    active: false,
  },
  {
    id: "about-tab",
    target: "#about",
    route: "about",
    iconOff: infoIconOff,
    iconOn: infoIconOn,
    active: false,
  },
];
const components = {
  map: LocationsView,
  "scan-qr-code": ARCamera,
  about: AboutView,
};

const router = useRouter();
const currentRoute = ref("");
onMounted(() => {
  currentRoute.value = router.currentRoute.value.path.slice(1);
  const persistedMarkers = getLocal("markers");
  if (persistedMarkers) {
    markerStore.updateMarkers(persistedMarkers);
  }
});
watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    currentRoute.value = newPath.slice(1);
  }
);
const navigateTo = (route) => {
  setLocal("markers", markerStore.markers);
  window.location.href = "/" + route;
};
const toggleCamera = () => {
  window.location.href = "/map";
};
</script>
