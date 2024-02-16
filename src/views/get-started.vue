<script setup>import { useRouter } from "vue-router";
const router = useRouter();
const next = () => {
  router.push("/map");
}
</script>


<template>
<div class="screen">
<div class="screen-wrapper">
    <div class="d-flex justify-content-center">
    <div class="logo d-flex align-items-center">
        <img width="80" src="../assets/images/BHP_Logo.gif" />
        <p>Birkenhead Point Augmented Reality Experience</p>
      </div>
      </div>
	<h1>See history come to life in Immersive AR</h1>
	<p>Birkenhead point has a rich and diverse history, spanning thousands of years. Now you can delve into moments from our past like never before.</p>
	<p>There are 10 ar activation points around the centre, each with a different image and story to explore.</p>
    <div class="how-it-works">
    	<h6>How it works</h6>
    	<div class="d-flex align-items-center">
			<img src="../assets/images/step-1.png">
	    	<div class="text">
	    		<strong>Step 1</strong>
				<p>Look for the activation cards and scan the QR code to activate the camera.</p>
	    	</div>
    	</div>
    	<div class="d-flex align-items-center">
			<img src="../assets/images/step-2.png">
	    	<div class="text">
	    		<strong>Step 2</strong>
				<p>Scan the QR code to launch the experience.</p>
	    	</div>
    	</div>
    	<div class="d-flex align-items-center">
			<img src="../assets/images/step-3.png">
	    	<div class="text">
	    		<strong>Step 3</strong>
				<p>Point your camera at the unique image marker and watch it come to life.</p>
	    	</div>
    	</div>
    </div>
    <div class="text-center">
		<button type="submit" class="btn btn-primary" @click="next">Get Started</button>
    </div>
</div>
</div>
</template>

<style scoped></style>