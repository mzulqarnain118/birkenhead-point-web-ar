<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const next = () => {
  router.push("/map");
};
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
      <p>
        Birkenhead Point has a rich and diverse history, spanning thousands of
        years. Now you can delve into moments from our past like never before.
      </p>
      <p>
        There are 10 AR activation points around the centre, each with a unique
        image and story to explore.
      </p>
      <div class="how-it-works">
        <h6>How it works</h6>
        <div class="d-flex align-items-center">
          <img src="../assets/images/step-1.png" />
          <div class="text">
            <strong>Step 1</strong>
            <p>
              Look for the activation cards around the centre. Use the maps in
              this app to discover their locations.
            </p>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <img src="../assets/images/step-2.png" />
          <div class="text">
            <strong>Step 2</strong>
            <p>
              Scan the QR code with your phone’s camera to launch the
              experience.
            </p>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <img src="../assets/images/step-3.png" />
          <div class="text">
            <strong>Step 3</strong>
            <p>
              Point your camera at the activation card and watch the image come
              to life.
            </p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary" @click="next">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
