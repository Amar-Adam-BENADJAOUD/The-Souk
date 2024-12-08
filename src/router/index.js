// src/router/index.js
/* eslint-disable */ 
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from 'C:/Users/Begum/the-souk/src/components/HomePage.vue';
import LoginForm from 'C:/Users/Begum/the-souk/src/components/LoginForm.vue';
import RegisterForm from 'C:/Users/Begum/the-souk/src/components/RegisterForm.vue';  // Import the register page component
import ProductPage from 'C:/Users/Begum/the-souk/src/components/ProductPage.vue';  // Import the product page component
import GroupPage from 'C:/Users/Begum/the-souk/src/components/GroupPage.vue';
import SearchPage from 'C:/Users/Begum/the-souk/src/components/SearchPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,  // Set HomePage as the default page
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,  // Login route
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm,  // Register route
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductPage,  // Product page route
  },
  {
    path: '/group',
    name: 'Group',
    component: GroupPage,  // Group page route
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage,  // Search page route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
