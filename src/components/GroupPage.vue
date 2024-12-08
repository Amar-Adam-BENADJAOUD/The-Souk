<template>
    <div>
      <h2>Create or Join a Group</h2>
      <button @click="createGroup">Create a Group</button>
      <button @click="joinGroup">Join a Group</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      async createGroup() {
        // Dispatch action to create a new group
        await this.$store.dispatch('createGroup');
        this.$router.push('/home');  // Redirect to home page
      },
      async joinGroup() {
        // Dispatch action to join an existing group
        await this.$store.dispatch('joinGroup');
        this.$router.push('/home');  // Redirect to home page
      },
    },
  };
  </script>
  