import Login from '@/components/Login'
import Main from '@/components/Main'
import UserManager from "@/components/UserManager"
import AccountManager from "@/components/AccountManager"
import BlogManager from "@/components/BlogManager"
import VueRouter from 'vue-router'

const routers = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/main',
        name: 'main',
        component: Main,
        children:[
            {
                path: 'user',
                name: 'userManager',
                component: UserManager
            },
            {
                path: 'account',
                name: 'accountManager',
                component: AccountManager
            },
            {
                path: 'blog',
                name: 'blogManager',
                component: BlogManager
            }
        ]
    },

]

const router = new VueRouter({
    mode: "history",
    routes: routers
})

export default router
