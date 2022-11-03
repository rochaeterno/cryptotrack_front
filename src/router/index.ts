import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "../views/DashboardView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
    meta: {
      title: "Cryptotrack",
      icon: "/dacxi.png",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
