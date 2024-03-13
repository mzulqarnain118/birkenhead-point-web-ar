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
          <img
            width="80"
            :src="`/Floor/${activeTabIndex + 1}/${selectedMarkerIndex + 1}.png`"
          />
          <div>
            <p class="strong">{{ selectedMarker.split("-")[0] }}</p>
            <p class="text">
              {{ selectedMarker.split("-")[1] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Floor1SvgManipulation from "./Floor1SvgManipulation.vue";
import Floor2SvgManipulation from "./Floor2SvgManipulation.vue";
import Floor3SvgManipulation from "./Floor3SvgManipulation.vue";
import Floor4SvgManipulation from "./Floor4SvgManipulation.vue";
import { useMarkerStore } from "../stores/marker";
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
const imageCredits = [
  ["Ground - on the pillar near Col", "Ground - on the wall near Panda"],
  [
    "Level 1 - Next to the arch in the food court",
    "Level 1 - On the pillar near Lorna Jane",
    "Level 1 - On the pillar near NIKE",
    "Level 1 - On the wall next to Spotlight",
  ],
  [
    "Level 2 - On the pillar near STRAND",
    "Level 2 - On the pillar near Style Runner",
    "Level 1 - On the pillar near COACH",
  ],
  ["Level 3 - On the pillar near Hype"],
];
const selectedMarker = ref("");
const selectedMarkerIndex = ref(null);

const changeTab = (index) => {
  activeTabIndex.value = index;
  selectedMarkerIndex.value = null;
};

const getSelecetedMarkerDetails = (point) => {
  const matchingCredits = imageCredits.find(
    (item, index) => activeTabIndex.value === index
  );
  if (matchingCredits) {
    selectedMarker.value = matchingCredits[point];
    selectedMarkerIndex.value = point;
  }
  if (activeTabIndex.value === 0) {
    markerStore.updateMarkedMarkerId(point + 1);
  } else if (activeTabIndex.value === 1) {
    markerStore.updateMarkedMarkerId(point + 3);
  } else if (activeTabIndex.value === 2) {
    markerStore.updateMarkedMarkerId(point + 7);
  } else if (activeTabIndex.value === 3) {
    markerStore.updateMarkedMarkerId(point + 10);
  }
};
</script>

<style lang="scss"></style>
