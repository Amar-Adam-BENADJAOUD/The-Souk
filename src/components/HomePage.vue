<!-- src/components/HomePage.vue -->
<template>
    <div>
      <h1>Welcome to The Souk</h1>
      <p>Please choose one of the following options:</p>
      <div>
        <button @click="goToLoginPage">Login</button>
        <button @click="goToRegisterPage">New User</button>
        <button @click="goToProductPage">Product Page</button>
        <button @click="goToGroupPage">Group Page</button>
        <button @click="goToSearchPage">Search Page</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToLoginPage() {
        this.$router.push('/login');  // Navigate to the login page
      },
      goToRegisterPage() {
        this.$router.push('/register');  // Navigate to the registration page
      },
      goToProductPage() {
        this.$router.push('/product');  // Navigate to the product page
      },
      goToGroupPage() {
        this.$router.push('/group');  // Navigate to the group page
      },
      goToSearchPage() {
        this.$router.push('/search');  // Navigate to the search page
      },
    },
  };
  </script>
  