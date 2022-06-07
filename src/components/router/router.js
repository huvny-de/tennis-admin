import {createRouter , createWebHistory} from 'vue-router';

import AdminDashBoard from '../pages/admin/AdminDashBoard.vue';
import LoginPage from '../pages/LoginPage.vue';
import AdminProfile from '../pages/admin/AdminProfilePage.vue';

const routes = [
    {
        path: '/',
        name : 'Home',
        component : AdminDashBoard    
        
    },
    {
        path: '/login',
        name : 'Login Page',
        component : LoginPage    
        
    },
    {
        path: '/profile',
        name: 'Profile Page',
        component : AdminProfile
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;