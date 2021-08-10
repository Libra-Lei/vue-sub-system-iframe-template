import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/*=========================================================================================
  path => router path
  name => router name
  component(lazy loading) => component to load
  meta : {
    breadcrumb => [
                    { title: 'Home', url: '/' },
                    { title: 'eCommerce'},
                    { title: 'Shop', active: true },
                  ]
    pageTitle => Display title besides breadcrumb

    hidden => 该路由是否作为导航菜单显示 true:不显示  false:显示
    
    menus => 菜单配置
            header => 菜单分组时-标题

            url     => 路由地址
            name    => 菜单名称（默认为此名称，如果国际化，则为 i18n 的值）
            slug    => 路由名称
            icon    => vue-feather-icons 名称 https://vue-feather-icons.netlify.com/
            tag     => badge 文字
            tagColor  => badge 背景颜色
            i18n    => 国际化
            submenu   => 子菜单
                  NOTE: 子菜单没有 icon 默认 CircleIcon
            isDisabled  => 是否禁用
  }
==========================================================================================*/

import { egRoutes } from './modules/eg'

export const constantRoutes = [
  {
    path: '/pages',
    component: () => import('@/layouts/full-page/FullPage.vue'),
    hidden: true,
    children: [
      {
        path: 'error-404',
        name: 'page-error-404',
        component: () => import('@/views/pages/Error404.vue')
      }
    ]
  },

  {
    path: '/',
    redirect: '/eg/index',
    hidden: true,
  },

  egRoutes, // 示例

  {
    path: '/warehouse',
    component: () => import('@/layouts/main/Main.vue'),
    redirect: '/warehouse/index',
    hidden: false,
    meta: {
      menus: {
        sort: 5,
        url: 'http://www.baidu.com',
        name: '外部连接',
        icon: 'ShoppingBagIcon',
        slug: 'external',
        target: "_blank"
      }
    },
    children: [
      {
        path: 'index',
        name: 'Warehouse',
        component: () => import('@/views/warehouse')
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', hidden: true, redirect: '/pages/error-404' }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
