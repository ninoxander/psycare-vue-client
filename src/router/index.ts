import { createRouter, createWebHistory } from 'vue-router'

import Test from '../views/Test.vue';
import LandingPage from '../views/LandingPage.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import PasswordRestore from '../views/PasswordRestore.vue';
import FAQs from '../views/FAQs.vue';
import NotFound from '../views/NotFound.vue';
import Support from '../views/Support.vue';
import BlogIndex from '../views/BlogIndex.vue';
import HoymeSenti from '../views/HoymeSenti.vue';

const routes = [
    { path: '/', name: 'Home', component: LandingPage },
    { path: '/test', name: 'Test', component: Test },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'Signup', component: Signup },
    { path: '/restore-password', name: 'Restore Access', component:  PasswordRestore },
    { path: '/faqs', name: 'FAQs', component:  FAQs },
    { path: '/support', name: 'Support', component:  Support },
    { path: '/blog', name: 'Blog', component:  BlogIndex },
    { path: '/hoy-me-senti', name: 'Hoy me sentí', component:  HoymeSenti },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
