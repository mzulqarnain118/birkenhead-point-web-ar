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
    <p><a href="https://www.birkenheadpoint.com.au/">https://www.birkenheadpoint.com.au/</a></p>
    <p><a class="cta-image-credits" @click="goToImageCredits">Image Credits</a></p>
  </div>
	    <div class="text-center">
			<button @click="logout" class="btn btn-primary logout">Logout</button>
	    </div>
  </div>
</template>

<style lang="scss">
</style>
