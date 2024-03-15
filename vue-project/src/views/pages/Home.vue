<template>
    <div class="main-container">
      <Sidebar />
      <SecondarySidebar />
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/Sidebar.vue';
  import SecondarySidebar from '../components/SecondarySidebar.vue';
  
  export default {
    data() {
     
    },
    components: {
      Sidebar,
      SecondarySidebar,
    },
    methods: {
    },
  };
  </script>
  
  <style scoped>
  .main-container {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  </style>