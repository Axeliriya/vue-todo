import Home from '@/pages/Home';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    '/': Home,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;