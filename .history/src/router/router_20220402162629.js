import Home from '';
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

export default router;
