import Home from '@/pages/Home';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    components: Home,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
