<template>
  <div class="screen welcome">
    <div class="screen-wrapper">
    <div class="logo d-flex flex-column align-items-center">
        <img width="220" src="../assets/images/BHP_Logo.gif" />
        <p class="m-0 m-auto text-center">Birkenhead Point Augmented Reality Experience</p>
      </div>
      <h1>WELCOME TO BHP AR EXPERIENCE!</h1>
      <p>
        See Birkenhead Point's history come to life in immersive augmented
        reality!
      </p>
      <form @submit.prevent="register" action="get-started.html" class="m-0">
        <div class="form-floating">
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="email-address"
            placeholder="Enter email"
            name="email"
            required
          />
          <label for="email">Email address</label>
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            hidden
            required
          />
        </div>
        <div>
          <div class="form-check text-left d-flex align-items-center ps-0">
            <input
              class="form-check-input"
              type="checkbox"
              id="disabledFieldsetCheck"
            />
            <label class="form-check-label mt-0" for="disabledFieldsetCheck">
              I agree to the <a href="https://www.mirvac.com/privacy-policy" target="_blank">BHP Privacy Policy</a> and
              <a href="https://www.mirvac.com/conditions-of-use" target="_blank">Terms and Conditions</a>
            </label>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Continue</button>
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
} from "./firebase";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { getLocal, setLocal } from "../../utils";

const email = ref("");
const password = ref("12345678"); // Set default value for the password
const errorMessage = ref("");
const router = useRouter();

const register = async () => {
  const auth = (await getLocal("token"))
    ? signInWithEmailPassword
    : signUpWithEmailAndPassword;

  try {
    const response = await auth(email.value, password.value);

    if (response?.user?.accessToken) {
      setLocal("token", response.user.accessToken); // Save token in localStorage
      setLocal("userEmail", response.user.email); // Save token in localStorage
      setLocal("userId", response.user.uid); // Save token in localStorage
      router.push("/get-started"); // Redirect to the next page
    } else {
      console.log("🚀 ~ login ~ response:", response);
      errorMessage.value = "Incorrect email or password"; // Show error for incorrect info
    }
  } catch (error) {
    console.error("Login error:", error);
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
