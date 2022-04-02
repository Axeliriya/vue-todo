import { createRouter, createWebHistory } from 'vue-router';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
