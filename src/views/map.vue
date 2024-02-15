<script setup></script>

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
  <div class="tab-pane fade" id="scan-qr-code" role="tabpanel" aria-labelledby="scan-qr-code-tab">scan-qr-code</div>
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
			<button type="submit" class="btn btn-primary logout">Logout</button>
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

<style scoped></style>