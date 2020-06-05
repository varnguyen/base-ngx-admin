import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'shopping-cart-outline',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'IoT Dashboard',
        icon: 'home-outline',
        link: '/pages/iot-dashboard',
    },
    {
        title: 'FEATURES',
        group: true,
    },
    {
        title: 'Layout',
        icon: 'layout-outline',
        children: [
            {
                title: 'Layout 1',
                link: '/pages/layout/1',
            },
            {
                title: 'Layout 2',
                link: '/pages/layout/2',
            },
            {
                title: 'Layout 3',
                link: '/pages/layout/3',
            },
            {
                title: 'Layout 4',
                link: '/pages/layout/4',
            },
            {
                title: 'Layout 5',
                pathMatch: 'prefix',
                link: '/pages/layout/5',
            },
        ],
    },








    {
        title: 'Miscellaneous',
        icon: 'shuffle-2-outline',
        children: [
            {
                title: '404',
                link: '/pages/miscellaneous/404',
            },
        ],
    },
    {
        title: 'Auth',
        icon: 'lock-outline',
        children: [
            {
                title: 'Login',
                link: '/auth/login',
            },
            {
                title: 'Register',
                link: '/auth/register',
            },
            {
                title: 'Request Password',
                link: '/auth/request-password',
            },
            {
                title: 'Reset Password',
                link: '/auth/reset-password',
            },
        ],
    },
];
