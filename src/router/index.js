import { createRouter, createWebHistory } from "vue-router";
import User from "../components/User";
import UserInfo from "../components/UserInfo";
const routes = [
    {
        path: '/',
        redirect: '/users'
    },
    {
        path: '/users',
        name: 'User',
        component: User,
        meta: {
            title: '用户信息'
        }
    },
    {
        path: '/userInfo',
        name: 'UserInfo',
        component: UserInfo,
        meta: {
            title: '用户详情'
        }
    },
    // {
    //     path: '/rights',
    //     name: 'Right',
    //     component: () => import('../components/Rights.vue'),
    //     meta: {
    //         title: '权限管理'
    //     }
    // },
    // {
    //     path: '/goods',
    //     name: 'Goods',
    //     component: () => import('../components/Goods.vue'),
    //     meta: {
    //         title: '商品管理'
    //     }
    // },
    {
        path: '/orders',
        name: 'Ticket',
        component: () => import('../components/Movie ticket.vue'),
        meta: {
            title: '订单管理'
        }
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('../components/Settings.vue'),
        meta: {
            title: '设置'
        }
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
export default router
