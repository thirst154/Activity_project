<template>
  <div class="set" id="app">
    <NavigationBar />
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/navigationBar.vue';
import MainContent from './components/MainContent.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    NavigationBar,
    MainContent,
    Sidebar,
  },
};
</script>

<style scoped>


.set {
  background-color: #b3bdbd;
}

</style>