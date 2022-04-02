import { createRouter, createWebHistory } from 'vue-router';
const Home = () =>
  import(/* webpackChunkName: "home-page" */ '@/pages/Home.vue');
const PostPage = () =>
  import(/* webpackChunkName: "posts-page" */ '@/pages/PostPage.vue');
const AboutPostPage = () =>
  import(/* webpackChunkName: "about-post-page" */ '@/pages/AboutPostPage.vue');
const PostPageWidthStore = () =>
  import(
    /* webpackChunkName: "posts-store-page" */ '@/pages/PostPageWidthStore.vue'
  );
const PostPageCompositionApi = () =>
  import(
    /* webpackChunkName: "posts-composition-page" */ '@/pages/PostPageCompositionApi.vue'
  );

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
    component: AboutPostPage,
  },
  {
    path: '/store',
    component: PostPageWidthStore,
  },
  {
    path: '/composition',
    component: PostPageCompositionApi,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
