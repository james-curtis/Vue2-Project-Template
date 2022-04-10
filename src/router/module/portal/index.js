import PortalLayout from '@/layout/portal-layout.vue';

export const routes = [
    {
        path: '/portal',
        name: 'Portal',
        component: PortalLayout,
        children: [
            {
                path: 'index',
                name: 'PortalIndex',
                component: () => import('@/views/portal/index'),
            },
        ],
    },
    {
        path: '/',
        name: 'index',
        redirect: '/portal/index',
    },
];
