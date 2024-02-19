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
        <img :src="`src/assets/images/${tab.iconOff}`" />
        <img :src="`src/assets/images/${tab.iconOn}`" />
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

const tabsData = [
  { id: 'locations-tab', target: '#locations', route: 'locations', iconOff: 'BHP_Map_Icon_Off.png', iconOn: 'BHP_Map_Icon_On.png', active: true },
  { id: 'scan-qr-code-tab', target: '#scan-qr-code', route: 'scan-qr-code', iconOff: 'BHP_Phone_Icon_Off.png', iconOn: 'BHP_Phone_Icon_On.png', active: false },
  { id: 'about-tab', target: '#about', route: 'about', iconOff: 'BHP_Info_Icon_Off.png', iconOn: 'BHP_Info_Icon_On.png', active: false }
];
const components = { locations: LocationsView, 'scan-qr-code': ARCamera, about: AboutView }

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
