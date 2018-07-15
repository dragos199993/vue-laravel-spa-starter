import Home from './components/Home';
import Users from './components/Users';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import MyAccount from './components/auth/MyAccount';

export default [
    {
        path: '/',
        name: 'index',
        component: Home,
        meta: {}
    },
    {
        path: '/users',
        name: 'users',
        component: Users,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: MyAccount,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {}
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {}
    }
]