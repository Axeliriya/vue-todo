import { createRouter, createWebHistory } from 'vue-router';
// const Home = () =>
//   import(/* webpackChunkName: "home-page" */ '@/pages/Home.vue');
// const PostPage = () =>
//   import(/* webpackChunkName: "posts-page" */ '@/pages/PostPage.vue');
// const AboutPostPage = () =>
//   import(/* webpackChunkName: "about-post-page" */ '@/pages/AboutPostPage.vue');

import Home from '@/pages/Home';
import PostPage from '@/pages/PostPage';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/posts',
    component: PostPage,
  },

  //   {
  //     path: '/posts/:id',
  //     component: AboutPostPage,
  //   },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
