<!-- src/components/LoginPage.vue -->
<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="username" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      handleLogin() {
        // Dispatch login action with username and password
        this.$store
          .dispatch('login', { username: this.username, password: this.password })
          .then(() => {
            // Check if login was successful
            if (this.$store.getters.isAuthenticated) {
              this.$router.push('/home');  // Redirect to home page
            } else {
              this.errorMessage = 'Incorrect username or password';
            }
          });
      },
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated; // Get authentication status from Vuex
      },
    },
  };
  </script>
  