import Home from '../pages/Home/Home';
import List from '../pages/List/List';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/list', component: List },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
