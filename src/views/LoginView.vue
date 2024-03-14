<template>
  <div class="screen">
    <div class="screen-wrapper">
      <div class="logo d-flex flex-column align-items-center">
        <img width="220" src="../assets/images/BHP_Logo.gif" />
        <p class="m-0 m-auto text-center">
          Birkenhead Point Augmented Reality Experience
        </p>
      </div>
      <h1>
        See Birkenhead Point's history come to life in immersive augmented
        reality
      </h1>
      <p>Enter your name and email address to launch the experience.</p>
      <form @submit.prevent="register" action="get-started.html" class="m-0">
        <div class="form-floating">
          <input
            type="text"
            v-model="name"
            class="form-control"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <label for="name">Name</label>
        </div>
        <div class="form-floating">
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="email-address"
            name="email"
            placeholder="Email Address"
            required
          />
          <label for="email">Email Address</label>
        </div>
        <div class="form-check text-left d-flex align-items-center ps-0 mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            name="pp--t-and-c"
            id="disabledFieldsetCheck"
            required
          />
          <label class="form-check-label mt-0" for="pp--t-and-c">
            I agree to the
            <a href="https://www.mirvac.com/privacy-policy" target="_blank"
              >Privacy Policy</a
            >
            and
            <a href="https://www.mirvac.com/conditions-of-use" target="_blank"
              >Terms and Conditions</a
            >
          </label>
        </div>
        <div class="form-check text-left d-flex align-items-center ps-0">
          <input
            class="form-check-input"
            type="checkbox"
            name="receive-communication"
            id="receive-communication"
          />
          <label class="form-check-label mt-0" for="receive-communication"
            >I opt in to receiving communication from Birkenhead Point</label
          >
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">
            <LoaderVue v-if="loading" /> <span v-else>Continue</span>
          </button>
        </div>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import {
  signUpWithEmailAndPassword,
  signInWithEmailPassword,
} from "./firebase.js";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { getLocal, setLocal } from "../../utils";
import LoaderVue from "../components/Loader.vue";
import { PASSWORD } from "../constants.js";

const email = ref("");
const name = ref("");
const password = ref(PASSWORD); // Set default value for the password
const errorMessage = ref("");
const loading = ref("");
const router = useRouter();
const scannedURL = localStorage.getItem("scannedUrl");
const isLoggedIn = getLocal("token");
const register = async () => {
  try {
    let response;
    if (isLoggedIn) {
      response = await signInWithEmailPassword(email.value, password.value);
    } else {
      response = await signUpWithEmailAndPassword(
        email.value,
        password.value,
        name.value
      );
    }
    loading.value = true;
    if (response?.user?.accessToken) {
      loading.value = false;
      setLocal("token", response.user.accessToken); // Save token in localStorage
      router.push(scannedURL ?? "/get-started"); // Redirect to the next page
    } else {
      errorMessage.value = "Incorrect email or password"; // Show error for incorrect info
    }
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      loading.value = true;
      const response = await signInWithEmailPassword(
        email.value,
        password.value
      );

      if (response?.user?.accessToken) {
        loading.value = false;
        setLocal("token", response.user.accessToken); // Save token in localStorage
        router.push(scannedURL ?? "/get-started"); // Redirect to the next page
      }
    }
    errorMessage.value = error.message;
  }
};
</script>

<style scoped>
.login {
  margin: auto;
  text-align: center;
}

input {
  margin-bottom: 10px;
  padding: 8px;
}

button {
  padding: 8px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.error {
  color: red;
}
</style>
