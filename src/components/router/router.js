import {createRouter , createWebHistory} from 'vue-router';

import LoginPage from '../pages/LoginPage.vue';

const routes = [
    {
        path: '/dashboard',
        name : 'Home',
        component : () => import('../pages/admin/AdminDashBoard.vue')    
        
    },
    {
        path: '/login',
        name : 'Login Page',
        component : LoginPage    
        
    },
    {
        path: '/profile',
        name: 'Profile Page',
        component : () => import('../pages/admin/AdminProfilePage.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to,from,next) => {
    const publicPage = ['/login'];
    const authRequire = !publicPage.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if(authRequire && !loggedIn) {
        next('/login');
    }else {
        next()
    }
})
export default router;