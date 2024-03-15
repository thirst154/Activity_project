<template>
    <div class="secondary-sidebar">
      <!-- Navigation Links (Secondary Sidebar) -->
      <nav class="navigation-links">
        <router-link to="/">Home</router-link>
        <router-link to="/settings">Settings</router-link>
      </nav>
  
    </div>
  </template>
  
  <script>
  </script>
  
  <style scoped>
  
  .secondary-sidebar {
    
    width: 200px;
    padding: 20px;
    background-color: #e0e0e0; 
  }
  
  .navigation-links {
    display: flex;
    flex-direction: column;
  }
  
  .navigation-links router-link {
    margin-bottom: 10px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  </style>