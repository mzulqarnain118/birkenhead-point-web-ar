<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const imageCredits = [
  ['Ground floor - on the pillar near Col','Ground floor - on the wall near Panda'],
  ['Level 1 - Next to the arch in the foo court','Level 1 - On the pillar near COACH','Level 1 - On the pillar near Lorna Jane','Level 1 - On the pillar near NIKE','Level 1 - On the wall next to Spotlight'],
  ['Level 2 - On the pillar near STRAND','Level 2 - On the pillar near Style Runner'],
  ['Level 3 - On the pillar near Hype'],

];
</script>

<template>
  <div class="screen image-credits">
    <div class="screen-wrapper">
      <div class="top-card d-flex align-items-center justify-content-between">
        <h3>Image Credits</h3>
        <img width="48px" src="../assets/images/cross.png" @click="router.go(-1)"/>
      </div>
              <div v-for="(floor, index) in imageCredits" :key="index">
      <div class="list">
        <div v-for="(item, itemIndex) in floor" :key="itemIndex" class="card-wrapper d-flex align-items-center justify-content-between">
          <div>
            <h4>{{ item.split('-')[0] }}</h4>
            <a href="javascript:void(0)">{{ item.split('-')[1] }}</a>
          </div>
          <img width="48px" :src="`/Floor/${index+1}/${itemIndex+1}.png`"/>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
