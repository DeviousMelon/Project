<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link v-if="isAdmin" to="/admin">Admin Dashboard</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isAdmin = ref(false); // Set to true if the user is an admin
    return { isAdmin };
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

nav li {
  margin-right: 20px;
}

nav a {
  color: #42b983;
  text-decoration: none;
}

nav a:hover {
  color: #2c3e50;
}
</style>