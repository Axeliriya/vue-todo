import { createRouter, createWebHistory } from 'vue-router';
const Home = () =>
  import(/* webpackChunkName: "home-page" */ '@/pages/Home.vue');
const PostPage = () =>
  import(/* webpackChunkName: "posts-page" */ '@/pages/PostPage.vue');
  const AboutPostPage = () =>
  import(/* webpackChunkName: "about-post-page" */ '@/pages/PostPage.vue');

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/posts/:id',
    component: ,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
