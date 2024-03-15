<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const imageCredits = [
  { title: "", desc: "Copyright Museums Victoria / All Rights Reserved" },
  { title: "", desc: "Source is: Local Studies Collection City of Canada Bay" },
  {
    title: "",
    desc: "Drawing 27 - A Canoe of New South Wales, Port Jackson Painter, Mary Evans Picture Library, 1788-1797.",
  },
  {
    title: "",
    desc: "Five Dock Grand Steeplechase, Thomas Balcombe and Edward Winstanley, State Library NSW, 1844 or early 1845.",
  },
  {
    title: "",
    desc: "Sign from Commercial Rd Armadale, Unknown, Glimpse of Melbourne, Unknown.",
  },
  {
    title: "",
    desc: "Tyre manufacturing, Dunlop factory, Unknown, The Australian National University Archives Centre, 1899.",
  },
  {
    title: "",
    desc: "",
  },
  {
    title: "History and Art Collection / Alamy Stock Photo",
    desc: "Drummoyne and Bridge, Unknown, History and Art Collection, Unknown.",
  },
  {
    title: "",
    desc: "Dunlop Perdriau Motor Tubes. They Fit Without A Kink, Smith & Julius, Josef Lebovic Gallery, 1906.",
  },
  { title: "", desc: "Dunlop Cycle Tires, Smith & Julius, Flikr, 1906." },
  { title: "", desc: "image1950 advertisement for Dunlop Sport Shoes" },
  { title: "", desc: "Courtesy of Birkenhead Retail Centre" },
  { title: "", desc: "Courtesy of Birkenhead Retail Centre" },
  { title: "", desc: "Courtesy of Birkenhead Retail Centre" },
  { title: "", desc: "Courtesy of Birkenhead Retail Centre" },
  {
    title: "",
    desc: "Call No. Maps/1191, Unknown, State Library of NSW, 1889-1894.",
  },
  {
    title: "",
    desc: "Adelaide Fire Brigade personnel fighting the fire at Dunlop Perdriau Rubber Company at 103-107 Flinders Street, Adelaide.State Library of South Australia, October 1940.",
  },
];
</script>

<template>
  <div class="screen image-credits">
    <div class="screen-wrapper">
      <div class="top-card d-flex align-items-center justify-content-between">
        <h3>Image Credits</h3>
        <img
          width="48"
          src="../assets/images/cross.png"
          @click="router.go(-1)"
        />
      </div>
      <div v-for="(item, index) in imageCredits" :key="index" class="list">
        <div
          class="card-wrapper d-flex align-items-center justify-content-between"
          v-if="index !== 6"
        >
          <div>
            <h4>{{ item.title || `Image ${index + 1}: (Timeline and AR)` }}</h4>
            <a href="javascript:void(0)">{{ item.desc }}</a>
          </div>
          <img
            :class="index === 8 ? 'portrait-img' : 'landscape-img'"
            :src="`/ImageCredits/Image${index + 1}.png`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portrait-img {
  width: 100px;
  height: 64px;
  border-radius: 16px !important;
}
.landscape-img {
  width: 64px;
  height: 64px;
  border-radius: 16px !important;
}
</style>
