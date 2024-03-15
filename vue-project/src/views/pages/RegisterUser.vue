<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="handleSubmit">
        <label for="firstName">First Name: </label>
        <input type="text" name="firstName" v-model="firstName" />
        <div v-show="submitted && !firstName">First Name is Required</div>
  
        <br /><br />
  
        <label for="lastName">Last Name: </label>
        <input type="text" name="lastName" v-model="lastName" />
        <div v-show="submitted && !lastName">Last Name is Required</div>
  
        <br /><br />
  
        <label for="username">Username: </label>
        <input type="text" name="username" v-model="username" />
        <div v-show="submitted && !username">Username is Required</div>
  
        <br /><br />
  
        <label for="password">Password: </label>
        <input type="password" name="password" v-model="password" />
        <div v-show="submitted && !password">Password is Required</div>
  
        <br /><br />
  
        <button type="submit">Register Account</button>
        <div v-if="error">{{ error }}</div>
      </form>
    </div>
  </template>
  
  <script>
  
  
  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        submitted: false,
        error: "",
      };
    },
    methods: {
    async handleSubmit() {
      this.submitted = true;
      const { firstName, lastName, username, password } = this;

      if (!(firstName && lastName && username && password)) {
        return;
      }

      this.error = "";


      try {
        // Perform registration request
        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            username,
            password,
          }),
        });

        if (response.ok) {
          // Handle successful registration
          console.log('Registration successful');

          // Redirect to the login page
          this.$router.push('/login');
        } else {
          // Handle registration failure
          this.error = 'Registration failed. Please try again.';
        }
      } catch (error) {
        console.error('An error occurred during registration:', error);
        this.error = 'An error occurred during registration. Please try again later.';
      }
    },
  },
};
</script>