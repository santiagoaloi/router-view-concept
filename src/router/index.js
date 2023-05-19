// Composables
import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "@/store/app";

const routes = [
  // Default layout routes
  {
    // Root path
    path: "/",
    // Component for the default layout
    component: () => import("@/layouts/default/Default.vue"),
    // Child routes for the default layout
    children: [
      // Home route
      {
        // Empty path represents the root path
        path: "",
        // Name for the route (optional)
        name: "Home",
        // Component to render for the Home route
        component: () => import("@/views/Home.vue"),
      },
      // About route
      {
        // Path for the About route
        path: "/about",
        // Name for the route (optional)
        name: "About",
        // Component to render for the About route
        component: () => import("@/views/About.vue"),
      },
    ],
  },
  // Secure layout routes
  {
    // Base path for the secure layout
    path: "/secure",
    // Redirect from /secure to /secure/dashboard
    redirect: "/secure/dashboard",
    // Component for the secure layout
    component: () => import("@/layouts/secure/Secure.vue"),
    // Child routes for the secure layout
    children: [
      // Dashboard route
      {
        // Path for the Dashboard route (relative to /secure)
        path: "dashboard",
        meta: { requiresAuth: true },
        // Component to render for the Dashboard route
        component: () => import("@/views/Dashboard.vue"),
      },
      // Settings routes
      {
        // Path for the Settings route (relative to /secure)
        path: "settings",
        // Redirect from /secure/settings to /secure/settings/profile
        redirect: "/secure/settings/profile",
        // Component to render for the Settings route
        component: () => import("@/views/Settings.vue"),
        // Child routes for the Settings route
        children: [
          // Profile routes
          {
            // Path for the Profile route (relative to /secure/settings)
            path: "profile",
            // Redirect from /secure/settings/profile to /secure/settings/profile/basic
            redirect: "/secure/settings/profile/basic",
            // Component to render for the Profile route
            component: () => import("@/views/Profile.vue"),
            // Child routes for the Profile route
            children: [
              // Profile basic information route
              {
                // Path for the Profile basic information route (relative to /secure/settings/profile)
                path: "basic",
                meta: { requiresAuth: true },
                // Component to render for the Profile basic information route
                component: () => import("@/views/ProfileBasic.vue"),
              },
              // Profile integrations route
              {
                // Path for the Profile integrations route (relative to /secure/settings/profile)
                path: "integrations",
                meta: { requiresAuth: true },
                // Component to render for the Profile integrations route
                component: () => import("@/views/ProfileIntegrations.vue"),
              },
            ],
          },
          // Profile security route
          {
            // Path for the Profile security route (relative to /secure/settings)
            path: "security",
            meta: { requiresAuth: true },
            // Component to render for the Profile security route
            component: () => import("@/views/ProfileSecurity.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  //Stores
  const appStore = useAppStore();

  // Check is the user is logged-in
  const isLoggedIn = appStore.isLoggedIn;

  // Checks if the destination route requires authentication
  const requiresAuth = to.matched.some((r) => r.meta.requiresAuth);

  // If the route requires auth and no user is logged-in cancel routing.
  if (!isLoggedIn && requiresAuth) return false;
});

export default router;
