<template>
    <div>
      <h2>Search for Products</h2>
      <input v-model="searchQuery" placeholder="Search" />
      <button @click="searchProducts">Search</button>
      <div v-if="products.length">
        <div v-for="product in products" :key="product.id">
          <p>{{ product.name }} - {{ product.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        products: [],
      };
    },
    methods: {
      async searchProducts() {
        const result = await this.$store.dispatch('searchProducts', this.searchQuery);
        this.products = result;
      },
    },
  };
  </script>
  