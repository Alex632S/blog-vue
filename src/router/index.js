import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', component: () => import('@/pages/PageHome/PageHome.vue'),
      children: [
        // { path: '/gallery', name: 'gallery', component: () => import('@/components/common/Gallery/TheGallery.vue') },
        // { path: '/map',     name: 'map',     component: () => import('@/components/common/Map/TheMap.vue') },
      ]
    },
    {
      path: '/card', component: () => import('@/pages/PageCard/PageCard.vue'),
    },
  ]
});
