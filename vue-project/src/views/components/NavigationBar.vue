<template>
  <div class="navigation">
    <div class="image-wrapper">
      <router-link to="/">
        <img class="logo" loading="lazy" src="" alt="Actimise Logo">
      </router-link>
    </div>
    
    <!-- SearchBar -->
    <div class="search-bar">
      <input v-model="searchQuery" @input="updateSearch" placeholder="Search" aria-label="Search">
    </div>

    <div class="user-actions">
      <div class="login">
        <router-link class="login-button" to="/login">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    updateSearch() {
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>

<style scoped>
.navigation {
  display: flex;
  align-self: center;
  align-items: center; /* Center items vertically */
  justify-content: space-between;
  gap: 20px;
  margin: auto 0;
  background-color: #1d1912;
}

.logo {
  width: 50px;
  height: auto;
}

.user-actions {
  display: flex;
  gap: 12px;
  margin-left: auto;
}

.login {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  justify-content: center;
}

.login-button {
  color: var(--Actionable-Item, #18a0fb);
  text-align: center;
  letter-spacing: -0.22px;
  white-space: nowrap;
  border-radius: 6px;
  background-color: #1d1912;
  justify-content: center;
  padding: 13px 44px;
  font: 500 15px Montserrat, sans-serif;
}

.search-bar {
  margin: 10px;
}

@media (max-width: 991px) {
  .navigation {
    flex-wrap: wrap;
    padding: 0 20px;
  }
}
</style>