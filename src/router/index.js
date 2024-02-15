import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import GetStarted from "../views/get-started.vue";
import MapView from "../views/map.vue";
import LocationDetails from "../views/LocationDetails.vue";
import ImageCredits from "../views/ImageCredits.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "LoginView",
      component: LoginView,
    },
    {
      path: "/get-started",
      name: "GetStarted",
      component: GetStarted,
    },
    {
      path: "/map",
      name: "MapView",
      component: MapView,
    },
    {
      path: "/location-details",
      name: "LocationDetails",
      component: LocationDetails,
    },
    {
      path: "/ImageCredits",
      name: "ImageCredits",
      component: ImageCredits,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
