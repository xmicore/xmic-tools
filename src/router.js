import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('./components/Home.vue'),
  },
  {
    path: "/jenkins",
    name: "Jenkins",
    component: () => import('./components/Jenkins.vue'),

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;