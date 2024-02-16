import { createRouter, createWebHistory } from "vue-router";
import Splash from "../views/Splash.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import GetStarted from "../views/get-started.vue";
import MapView from "../views/map.vue";
import NotFound from "../views/NotFound.vue";
import { getLocal } from "../../utils";
import LocationDetails from "../views/LocationDetails.vue";
import ImageCredits from "../views/ImageCredits.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/splash",
      name: "splash",
      component: Splash,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true }, // Mark the route as requiring authentication
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
      meta: { requiresAuth: true }, // Mark the route as requiring authentication
    },
    {
      path: "/map",
      name: "MapView",
      component: MapView,
      meta: { requiresAuth: true }, // Mark the route as requiring authentication
    },
    {
      path: "/:catchAll(.*)", // Wildcard route to catch all unmatched routes
      component: NotFound, // Display the 404 component
    },
    {
      path: "/location-details",
      name: "LocationDetails",
      component: LocationDetails,
      meta: { requiresAuth: true }, // Mark the route as requiring authentication
    },
    {
      path: "/image-credits",
      name: "ImageCredits",
      component: ImageCredits,
      meta: { requiresAuth: true }, // Mark the route as requiring authentication
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    // ...other routes
  ],
});

// Navigation guard to check authentication status
router.beforeEach((to, from, next) => {
  const isAuthenticated = getLocal('token'); // Implement your own authentication check

  if (to.meta.requiresAuth && !isAuthenticated) {
    // If the route requires authentication and the user is not authenticated, redirect to the login page
    next({ name: "LoginView" });
  } else if (to.name === 'LoginView' && isAuthenticated) {
    // If the user is authenticated and tries to access the login page, redirect them back to the home page
    router.go(-1);
  } else {
    // If the route does not require authentication or the user is authenticated, proceed to the route
    next();
  }
});


export default router;
