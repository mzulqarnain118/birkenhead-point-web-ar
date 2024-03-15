<template>
  <div>
    <ul
      class="nav nav-tabs d-flex align-items-center justify-content-between"
      id="floor-tabs"
      role="tablist"
    >
      <li
        v-for="(tab, index) in tabsData"
        :key="index"
        class="nav-item"
        role="presentation"
      >
        <button
          :class="{ 'nav-link': true, active: index === activeTabIndex }"
          :id="`${tab.id}-tab`"
          data-bs-toggle="tab"
          :data-bs-target="`#${tab.id}`"
          type="button"
          role="tab"
          :aria-controls="tab.id"
          :aria-selected="index === activeTabIndex"
          @click="changeTab(index)"
        >
          {{ tab.label }}
        </button>
      </li>
    </ul>
    <div class="tab-content" id="floor-tabs-content">
      <div
        v-for="(tab, index) in tabsData"
        :key="index"
        :class="[
          'tab-pane',
          {
            fade: index !== activeTabIndex,
            'show active': index === activeTabIndex,
          },
        ]"
        :id="tab.id"
        role="tabpanel"
        :aria-labelledby="`${tab.id}-tab`"
      >
        <component
          :is="components[activeTabIndex]"
          :getSelecetedMarkerDetails="getSelecetedMarkerDetails"
        />
        <div
          v-if="selectedMarkerIndex !== null"
          class="position-fixed info-card d-flex align-items-center"
        >
          <img width="80" :src="`/LocationPoints/${selectedMarkerIndex}.png`" />
          <div>
            <p class="strong">{{ selectedMarker?.[0] }}</p>
            <p class="text">
              {{ selectedMarker?.[1] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Floor1SvgManipulation from "./Floor1SvgManipulation.vue";
import Floor2SvgManipulation from "./Floor2SvgManipulation.vue";
import Floor3SvgManipulation from "./Floor3SvgManipulation.vue";
import Floor4SvgManipulation from "./Floor4SvgManipulation.vue";
import { useMarkerStore } from "../stores/marker";
import { getLocal, setLocal } from "../../utils";

const markerStore = useMarkerStore();

const components = {
  0: Floor1SvgManipulation,
  1: Floor2SvgManipulation,
  2: Floor3SvgManipulation,
  3: Floor4SvgManipulation,
};

const tabsData = [
  { id: "first-floor", label: "Ground" },
  { id: "second-floor", label: "Level 1" },
  { id: "third-floor", label: "Level 2" },
  { id: "parking", label: "Level 3" },
];

const activeTabIndex = ref(0);
const selectedMarker = ref("");
const selectedMarkerIndex = ref(null);

onMounted(() => {
  const persistedActiveTabIndex = getLocal("activeTabIndex");
  if (persistedActiveTabIndex) {
    activeTabIndex.value = persistedActiveTabIndex;
  }
});
const changeTab = (index) => {
  activeTabIndex.value = index;
  selectedMarkerIndex.value = null;
  setLocal("activeTabIndex", index);
};

const getSelecetedMarkerDetails = (point) => {
  selectedMarker.value = markerStore.getMarkerInfoById(point);
  selectedMarkerIndex.value = point;
  markerStore.updateMarkedMarkerId(point);
};
</script>

<style lang="scss"></style>
