import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue';
import ArticleDetail from '../Pages/ArticleDetail.vue';
import About from '../Pages/About.vue';
import Contact from '../Pages/Contact.vue';
import AdminDashboard from '../Pages/AdminDashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: ArticleDetail,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;