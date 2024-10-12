// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import UserDetails from '../views/UserDetails.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/user/:id', component: UserDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
