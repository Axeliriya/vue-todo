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
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

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
