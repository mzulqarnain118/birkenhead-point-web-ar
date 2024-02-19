<script setup>
import { useRouter } from "vue-router";
import { clearLocalStorage } from "../../utils";
const router = useRouter();
const logout = () => {
   clearLocalStorage()
  router.push("/login");
}
const goToImageCredits = () => {
  router.push("/image-credits");
}
</script>
<template>
  <div>
  <div class="plr-10">
    <div class="logo d-flex flex-column align-items-center">
        <img width="145" src="../assets/images/BHP_Logo.gif" />
        <p class="m-0 m-auto text-center">Birkenhead Point Augmented Reality Experience</p>
      </div>
    <p>A small blurb about the AR experience, highlighting the centre’s hopes to inform and preserve the history of Birkenhead Point</p>
    <p>Birkenhead Point continues to be a vibrant centre for our customers. As Sydney's best-loved premium brand outlet with more than 160 local and international brands, water-front dining and exciting entertainment our customers can expect a day out nothing short of memorable when visiting. Discover what’s currently on at Birkenhead Point here:</p>
    <a href="https://www.birkenheadpoint.com.au/">https://www.birkenheadpoint.com.au/</a>
  </div>
    <div class="d-flex justify-content-center"  @click="goToImageCredits">
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
</template>

<style lang="scss">
</style>
