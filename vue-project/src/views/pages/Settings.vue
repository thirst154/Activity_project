<template>
    <div>
      <h1>Settings</h1>
      <button v-if="isLoggedIn" @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoggedIn: true, // Set this based on your authentication state
      };
    },
    methods: {
      logout() {
        localStorage.removeItem('authToken'); // Clear the authentication token from localStorage
  
        // Redirect or perform any additional logout actions
        console.log('User logged out');
  
        // Update isLoggedIn state
        this.isLoggedIn = false;
  
        // Redirect to the login page
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>

  </style>