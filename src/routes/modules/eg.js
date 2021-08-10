/**
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-04-13 12:17:02
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-10 10:59:47
 */
const home = '首页'
const eg = '示例'

export const egRoutes = {
  path: '/eg',
  component: () => import('@/layouts/main/Main.vue'),
  redirect: '/eg/index',
  hidden: false,
  meta: {
    menus: {
      sort: 1,
      url: null,
      name: '示例',
      icon: 'SidebarIcon',
      submenu: [
        {
          url: '/eg/index',
          name: 'Page 1',
          slug: 'Page1',
          i18n: 'Page1'
        },
        {
          url: '/eg/page2',
          name: 'Page 2',
          slug: 'Page1',
          i18n: 'Page2'
        }
      ]
    }
  },
  children: [
    {
      path: 'index',
      name: 'Page1',
      component: () => import('@/views/eg/page1'),
      meta: {
        pageTitle: eg,
        breadcrumb: [
          { title: home, url: '/' },
          { title: eg },
          { title: 'Page1', active: true }
        ]
      }
    },
    {
      path: 'page2',
      name: 'Page2',
      component: () => import('@/views/eg/page2'),
      props: true,
      meta: {
        pageTitle: eg,
        breadcrumb: [
          { title: home, url: '/' },
          { title: eg, url: '/eg/index' },
          { title: 'Page2', active: true }
        ],
        aclKey: ['duty']
      }
    }
  ]
}
