import Home from './components/Home';
import About from './components/About';

export default [
    {
        path: '/',
        name: 'index',
        component: Home,
        meta: {}
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {}
    }
]