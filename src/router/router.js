import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CarDetails from "../views/CarDetails.vue";
import UserPanel from "../views/UserPanel.vue";
import UserProfile from "../views/UserProfile.vue";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: HomePage,
      name: "Home Page",
    },
    {
      path: "/carDetails",
      component: CarDetails,
      name: "Car Details",
    },
    {
      path: "/userPanel",
      component: UserPanel,
      name: "User Panel",
    },
    {
      path: "/userProfile",
      component: UserProfile,
      name: "User Profile",
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
