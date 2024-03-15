<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <label for="username">Username: </label>
      <input type="text" name="username" v-model="username" />
      <div v-show="submitted && !username">Username is Required</div>

      <br /><br />

      <label for="password">Password: </label>
      <input type="password" name="password" v-model="password" />
      <div v-show="submitted && !password">Password is Required</div>

      <br /><br />

      <button type="submit">Login</button>
      <button @click="navigateToRegister">Register</button>
      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      this.submitted = true;
      const { username, password } = this;

      if (!(username && password)) {
        return;
      }

      this.error = "";

      try {
        
      } catch (error) {
        console.error('An error occurred during login:', error);
        this.error = 'An error occurred during login. Please try again later.';
      }
    },
    navigateToRegister() {
      this.$router.push('/register');
    },
  },
};
</script>