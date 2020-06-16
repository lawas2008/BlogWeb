import Login from '@/components/Login'
import Main from '@/components/Main'
import UserManager from "@/components/UserManager"
import AccountManager from "@/components/AccountManager"
import BlogManager from "@/components/BlogManager"
import SkinSetting from "@/components/SkinSetting"
import WebBroadcast from "@/components/WebBroadcast"
import AppBroadcast from "@/components/AppBroadcast"
import AppSplash from "@/components/AppSplash"
import DictionarySetting from "@/components/DictionarySetting"
import Version from "@/components/Version"


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
            },
            {
                path: 'skin',
                name: 'skinManager',
                component: SkinSetting
            },
            {
                path: 'webcarousel',
                name: 'webCarouselManager',
                component: WebBroadcast
            },
            {
                path: 'appsplash',
                name: 'appSplashManager',
                component: AppSplash
            },
            {
                path: 'appcarousel',
                name: 'appCarouselManager',
                component: AppBroadcast
            },
            {
                path: 'dictionary',
                name: 'dictionarySettingManager',
                component: DictionarySetting
            }
            ,
            {
                path: 'version',
                name: 'VersionManager',
                component: Version
            }
        ]
    },

]

const router = new VueRouter({
    mode: "history",
    routes: routers
})

export default router
