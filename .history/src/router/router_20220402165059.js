import { createRouter, createWebHashHistory } from 'vue-router';
const Home = () =>
  import(/* webpackChunkName: "home-page" */ '@/pages/Home.vue');

const routes = [
  {
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// const routes = [
//   {
//     path: '/',
//     components: Home,
//   },
// ];

// const router = createRouter({
//   routes,
//   history: createWebHistory(),
// });

// export default router;
