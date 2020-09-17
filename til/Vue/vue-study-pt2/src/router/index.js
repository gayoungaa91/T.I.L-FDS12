import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Page1 from '../pages/Page1.vue';
import Page2 from '../pages/Page2.vue';
import Location from '../pages/Location.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },{
            path: '/home',
            component: Home
        },{
            path: '/page1',
            component: Page1
        },{
            path: '/page2',
            component: Page2
        },{
            path: '/Location',
            component: Location
        }
    ]
})

export default router;