import { createRouter, createWebHistory } from 'vue-router';
const Home = () =>
  import(/* webpackChunkName: "home-page" */ '@/pages/Home.vue');

const routes = [
  {
    path: '/',
    components: Home,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
