<template>
  <div class="map">
    <div class="screen-wrapper">
        <component :is="components[currentRoute]" />
  <ul class="nav nav-tabs position-fixed d-flex align-items-center justify-content-between" id="nav-tabs" role="tablist">
    <li v-for="tab in tabsData" :key="tab.id" class="nav-item" role="presentation">
      <button
        :class="{'nav-link': true, 'active': tab.route===currentRoute}"
        :id="tab.id"
        data-bs-toggle="tab"
        :data-bs-target="tab.target"
        type="button"
        role="tab"
        @click="navigateTo(tab.route)"
        :aria-controls="tab.id"
        :aria-selected="tab.route===currentRoute"
      >
        <img :src="`${tab.iconOff}`" />
        <img :src="`${tab.iconOn}`" />
      </button>
    </li>
  </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, watch,onMounted } from "vue";
import { useRouter } from "vue-router";
import LocationsView from "./LocationsView.vue";
import ARCamera from "./ARCamera.vue";
import AboutView from "./AboutView.vue";
import locationIconOn from "../assets/images/BHP_Map_Icon_On.png";
import locationIconOff from "../assets/images/BHP_Map_Icon_Off.png";
import scanIconOn from "../assets/images/BHP_Phone_Icon_On.png";
import scanIconOff from "../assets/images/BHP_Phone_Icon_Off.png";
import infoIconOn from "../assets/images/BHP_Info_Icon_On.png";
import infoIconOff from "../assets/images/BHP_Info_Icon_Off.png";
const tabsData = [
  { id: 'locations-tab', target: '#locations', route: 'map', iconOff: locationIconOff, iconOn: locationIconOn, active: true },
  { id: 'scan-qr-code-tab', target: '#scan-qr-code', route: 'scan-qr-code', iconOff: scanIconOff, iconOn: scanIconOn, active: false },
  { id: 'about-tab', target: '#about', route: 'about', iconOff: infoIconOff, iconOn: infoIconOn, active: false }
];
const components = { map: LocationsView, 'scan-qr-code': ARCamera, about: AboutView }

const router = useRouter();
const currentRoute = ref("");
onMounted(() => {
  currentRoute.value = router.currentRoute.value.path.slice(1);
});
watch(() => router.currentRoute.value.path, (newPath) => {
  currentRoute.value = newPath.slice(1);
});
const navigateTo = (route) => {
  router.push('/' + route);
}
</script>
