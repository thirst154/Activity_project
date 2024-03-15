<template>
    <div class="sidebar">
      <!-- User Profile -->
      <div class="user-profile">
        <!-- Use router-link for navigation -->
        <router-link to="/profile">
          <img class="profilePic" src="src\images\User Picture.jpg" alt="Profile Picture">
        </router-link>
        <div class="user-info">
          <p>{{ userProfile.username }}</p>
        </div>
      </div>
  
      <!-- User Actions -->
      <div class="user-actions">
        <router-link to="/log-activity">
        <button>Log An Activity</button>
    </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userProfile: {
          picture: "src/images/User Picture.jpg",
          username: "",
        },
      };
    },
    methods: {
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 200px;
    padding: 20px;
    background-color: #f0f0f0;
  }
  
  .user-profile {
    margin-bottom: 20px;
  }
  
  .profilePic {
    width: 50px;
    height: auto;
    cursor: pointer; 
  }
  
  </style>