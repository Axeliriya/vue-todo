import { createRouter, createWebHistory } from 'vue-router';
// import Home from '@/pages/Home.vue';
const Home = () => import('@/pages/Home.vue');

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
