import { createRouter, createWebHistory} from 'vue-router';

import Home from "../views/pages/Home.vue";
import Login from "../views/pages/Login.vue";
import RegisterUser from '../views/pages/RegisterUser.vue'; 
import Profile from '../views/pages/Profile.vue';
import Settings from '../views/pages/Settings.vue';



const routes = [
    { path: "/", component: Home},
    { path: "/login", component: Login},
    { path: '/settings', component: Settings },
    {
        path: '/register',
        component: RegisterUser,
      },

    {
        path: '/profile',
        component: Profile,
        meta: { requiresAuth: true },  
      },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    
    const isAuthenticated = checkIfUserIsAuthenticated(); 
  
    // Check if the route requires authentication
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // If not authenticated, redirect to the login page
      if (!isAuthenticated) {
        next({
          path: '/login',
          query: { redirect: to.fullPath },
        });
      } else {
        // If authenticated, proceed 
        next();
      }
    } else {
      // Proceed if authentication is not require 
      next();
    }
  });
  
  
  function checkIfUserIsAuthenticated() {
    // Check for valid authentication token
    const token = localStorage.getItem('authToken'); 
    return !!token; // Return true if the token exists, false otherwise
  }

export default router;