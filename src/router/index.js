import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/Home";
import Tasks from "@/views/Tasks";
import store from '../store';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (!store.state.tasks.length) {
    store.dispatch('initializeStore').then(() => {
      next();
    });
  } else {
    next();
  }
});
export default router
