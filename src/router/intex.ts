import { createRouter, createWebHistory } from "vue-router";

import Bosh from "../home/DT.vue";
import Add from "../home/If.vue";
import Img from "../home/getUsername.vue";
const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: Add,
    },
    {
      path: "/main",
      component: Bosh,
    },
    {
      path: "/img",
      component: Img,
    },
  ],
});

export default router;
