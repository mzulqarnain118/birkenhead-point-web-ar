<template>
  <!-- <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div> -->
  <div class="screen welcome">
<div class="screen-wrapper">
    <div class="logo d-flex justify-content-center">
		<img width="220" src="../assets/images/BHP_Logo.png">
    </div>
	<h1>WELCOME TO BHP AR EXPERIENCE!</h1>
	<p>See Birkenhead Point's history come to life in immersive augmented reality!</p>
	<form @submit.prevent="login" action="get-started.html" class="m-0">
		<div class="form-floating">
		  <input type="email" v-model="email" class="form-control" id="email-address" placeholder="Enter email" name="email" required>
		  <label for="email">Email address</label>
		</div>
	    <div>
	      <div class="form-check text-left d-flex align-items-center ps-0">
	        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck">
	        <label class="form-check-label mt-0" for="disabledFieldsetCheck">
	        	I agree to the <a href="">BHP Privacy Policy</a> and <a href="">Terms and Conditions</a>
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

<script>
import { signUpWithEmailAndPassword } from './firebase';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await signUpWithEmailAndPassword(this.email, this.password);
        console.log('Login successful:', response);
        // Redirect to another page or perform any action upon successful login
      } catch (error) {
        console.error('Login error:', error);
        this.errorMessage = error.message;
      }
    }
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
