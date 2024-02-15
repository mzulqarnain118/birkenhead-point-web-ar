<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { clearLocalStorage } from "../../utils";
const router = useRouter();
const logout = () => {
   clearLocalStorage()
  router.push("/login");
}
const svgFillColor = ref('red');
const isCameraEnabled = ref(false);

const toggleCamera = () => {
  isCameraEnabled.value = !isCameraEnabled.value;
};

const manipulateSVG = () => {
  // Perform SVG manipulation here
  const svgElement = document.getElementById('svgElement');
  if (svgElement) {
    // Example manipulation - change fill color
    svgFillColor.value = 'blue';
  }
};
</script>

<template>
<div class="map">
<div class="screen-wrapper">
<div class="tab-content" id="nav-tabs-content">
  <div class="tab-pane fade show active" id="locations" role="tabpanel" aria-labelledby="locations-tab">

<ul class="nav nav-tabs d-flex align-items-center justify-content-between" id="floor-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="first-floor-tab" data-bs-toggle="tab" data-bs-target="#first-floor" type="button" role="tab" aria-controls="first-floor" aria-selected="true">1st Floor</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="second-floor-tab" data-bs-toggle="tab" data-bs-target="#second-floor" type="button" role="tab" aria-controls="second-floor" aria-selected="false">2nd Floor</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="third-floor-tab" data-bs-toggle="tab" data-bs-target="#third-floor" type="button" role="tab" aria-controls="third-floor" aria-selected="false">3rd Floor</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="parking-tab" data-bs-toggle="tab" data-bs-target="#parking" type="button" role="tab" aria-controls="parking" aria-selected="false">Parking</button>
  </li>
</ul>
<div class="tab-content" id="floor-tabs-content">
  <div class="tab-pane fade show active" id="first-floor" role="tabpanel" aria-labelledby="first-floor-tab">
    <img src="../assets/images/BHP_Map_01.svg">
    <div class="position-fixed info-card d-flex align-items-center">
      <img width="80" src="../assets/images/level-1.png">
      <div>
        <p class="strong">Level 1</p>
        <p class="text">On the pillar near style runner</p>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="second-floor" role="tabpanel" aria-labelledby="second-floor-tab">
    <img src="../assets/images/BHP_Map_02.svg">
    <div class="position-fixed info-card d-flex align-items-center">
      <img width="80" src="../assets/images/level-1.png">
      <div>
        <p class="strong">Level 1</p>
        <p class="text">On the pillar near style runner</p>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="third-floor" role="tabpanel" aria-labelledby="third-floor-tab">
    <img src="../assets/images/BHP_Map_03.svg">
    <div class="position-fixed info-card d-flex align-items-center">
      <img width="80" src="../assets/images/level-1.png">
      <div>
        <p class="strong">Level 1</p>
        <p class="text">On the pillar near style runner</p>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="parking" role="tabpanel" aria-labelledby="parking-tab">
    <img src="../assets/images/BHP_Map_04.svg">
    <div class="position-fixed info-card d-flex align-items-center">
      <img width="80" src="../assets/images/level-1.png">
      <div>
        <p class="strong">Level 1</p>
        <p class="text">On the pillar near style runner</p>
      </div>
    </div>
  </div>
</div>
    <!-- <p class="position-absolute left-center-text">ROSEBY STREET</p>
    <p class="position-absolute right-center-text">BIRKENHEAD MARINA</p> -->
  </div>
  <div class="tab-pane fade" id="scan-qr-code" role="tabpanel" aria-labelledby="scan-qr-code-tab">
    <div>
      <button @click="toggleCamera" v-text="isCameraEnabled ? 'Disable Camera' : 'Enable Camera'"></button>
    </div>

    <div v-if="isCameraEnabled" v-show="isCameraEnabled" class="arjs-scene">
      <div class="arjs-loader">
        <div>Loading, please wait...</div>
      </div>

      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        <a-nft
          type="nft"
          url="../assets/Location_1_0046.png"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-entity
            gltf-model="../assets/Location_02.fbx"
            scale="5 5 5"
            position="50 150 0"
          >
          </a-entity>
        </a-nft>

        <a-entity camera></a-entity>
      </a-scene>
    </div></div>
  <div class="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
  <div class="plr-10">
    <div class="logo d-flex flex-column align-items-center">
        <img width="145" src="../assets/images/BHP_Logo.gif" />
        <p class="m-0 m-auto text-center">Birkenhead Point Augmented Reality Experience</p>
      </div>
    <p>A small blurb about the AR experience, highlighting the centre’s hopes to inform and preserve the history of Birkenhead Point</p>
    <p>Birkenhead Point continues to be a vibrant centre for our customers. As Sydney's best-loved premium brand outlet with more than 160 local and international brands, water-front dining and exciting entertainment our customers can expect a day out nothing short of memorable when visiting. Discover what’s currently on at Birkenhead Point here:</p>
    <a href="https://www.birkenheadpoint.com.au/">https://www.birkenheadpoint.com.au/</a>
  </div>
    <div class="d-flex justify-content-center">
      <a class="cta-image-credits">Image Credits
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M1.50004 1C1.50004 1 6.49999 4.68244 6.5 6.00004C6.50001 7.31763 1.5 11 1.5 11" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
	    <div class="text-center">
			<button @click="logout" class="btn btn-primary logout">Logout</button>
	    </div>
  </div>
</div>
    <ul class="nav nav-tabs position-fixed d-flex align-items-center justify-content-between" id="nav-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="locations-tab" data-bs-toggle="tab" data-bs-target="#locations" type="button" role="tab" aria-controls="locations" aria-selected="true">
      <img src="../assets/images/BHP_Map_Icon_Off.png">
      <img src="../assets/images/BHP_Map_Icon_On.png">
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="scan-qr-code-tab" data-bs-toggle="tab" data-bs-target="#scan-qr-code" type="button" role="tab" aria-controls="scan-qr-code" aria-selected="false">
      <img src="../assets/images/BHP_Phone_Icon_Off.png">
      <img src="../assets/images/BHP_Phone_Icon_On.png">
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false">
      <img src="../assets/images/BHP_Info_Icon_Off.png">
      <img src="../assets/images/BHP_Info_Icon_On.png">
    </button>
  </li>
</ul>
    <!-- <div class="position-absolute top-bar"></div>
    <div class="position-absolute top-bar"></div>
    <div class="position-absolute left-bar"></div>
    <div class="position-absolute right-bar"></div>
    <div class="position-absolute bottom-bar"></div> -->
</div>
</div>
</template>

<style scoped>
/* Styles */
.arjs-scene {
  display: none; /* Hide AR.js scene when camera is disabled */
}</style>