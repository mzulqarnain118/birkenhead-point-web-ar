<template>
  <div>
    <ul
      class="nav nav-tabs d-flex align-items-center justify-content-between"
      id="floor-tabs"
      role="tablist"
    >
      <li v-for="(tab, index) in tabsData" :key="index" class="nav-item" role="presentation">
        <button
          :class="{'nav-link': true, 'active': index === activeTabIndex}"
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
        :class="['tab-pane', { 'fade': index !== activeTabIndex, 'show active': index === activeTabIndex }]"
        :id="tab.id"
        role="tabpanel"
        :aria-labelledby="`${tab.id}-tab`"
      >
        <img :src="`src/assets/images/${tab.image}`" />
        <div class="position-fixed info-card d-flex align-items-center">
          <img width="80" src="src/assets/images/level-1.png" />
          <div>
            <p class="strong">{{ tab.label }}</p>
            <p class="text">{{ tab.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabsData = [
  { id: 'first-floor', label: '1st Floor', image: 'BHP_Map_01.svg', info: 'On the pillar near style runner' },
  { id: 'second-floor', label: '2nd Floor', image: 'BHP_Map_02.svg', info: 'On the pillar near style runner' },
  { id: 'third-floor', label: '3rd Floor', image: 'BHP_Map_03.svg', info: 'On the pillar near style runner' },
  { id: 'parking', label: 'Parking', image: 'BHP_Map_04.svg', info: 'On the pillar near style runner' }
];

const activeTabIndex = ref(0);

const changeTab = (index) => {
  activeTabIndex.value = index;
};
</script>

<style lang="scss"></style>
