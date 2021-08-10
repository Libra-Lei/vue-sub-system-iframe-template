/*
 * @Description: 门户<-->子系统, 跨域通讯（基于iframe）
 * @Author: 幺五六
 * @Date: 2020-05-25 13:01:31
 * @LastEditors: 幺五六
 * @LastEditTime: 2020-11-11 13:36:32
 */

/**
 * 跨域通讯，子系统接收的key值白名单;
 */
import store from '@/store'
const whiteKeys = ['wm-update-user', 'wm-update-alert-count'];

/**
 * 门户接收的key,
 */
const portalKey = {
  refreshPage: 'wm-refresh', // 通知门户刷新当前页面 -- 401 后续操作
  logout: 'wm-logout', // 用户注销登录
  userInfo: 'wm-user', // 查看用户详情
  message: 'wm-message', // 查看消息中心
  goSubPage: 'wm-go-sub-page' // 跳转健康中心 故障、缺陷、警告页面
}

/**
 * 门户接收消息, mixin
 */
export const receiveMixin = {
  mounted() {
    window.addEventListener('message', this.receive, false);
  },
  methods: {
    receive(event) {
      // 我们能信任信息来源吗？
      if (
        event.origin !== process.env.VUE_APP_PORTAL_DOMAIN.replace(/[/]$/, '') ||
        !event.data.key ||
        whiteKeys.findIndex(x => x === event.data.key) < 0
      ) {
        return;
      }
      switch (event.data.key) {
        case whiteKeys[0]:
          // 更新用户信息
          // this.$store.dispatch('user/updateUserInfo', { openid: event.data.value.openid, sub: event.data.value.sub });
          /**
            * event.source作为回信的对象，并且把event.origin作为targetOrigin
            * 存储全局变量 msgChannel
            */
          this.$store.dispatch('app/setMsgChannel', event);
          break;
        case whiteKeys[1]:
          // 故障、警告、缺陷信息
          this.$store.dispatch('portalMessage/updateAlert', event.data.value);
          break;
      }
    }
  }
}

/**
 * 通知门户注销登录
 */
export function logout() {
  if (!store.getters.msgChannel.source) return;
  store.getters.msgChannel.source.postMessage({ key: portalKey.logout }, store.getters.msgChannel.origin);
}

/**
 * 通知门户，刷新当前页面
 */
export function refreshPage() {
  if (!store.getters.msgChannel.source) return;
  store.getters.msgChannel.source.postMessage({ key: portalKey.refreshPage }, store.getters.msgChannel.origin);
}

/**
 * 通知门户，查看用户详情
 */
export function userInfo() {
  if (!store.getters.msgChannel.source) return;
  store.getters.msgChannel.source.postMessage({ key: portalKey.userInfo }, store.getters.msgChannel.origin);
}

/**
 * 通知门户，查看消息中心
 */
export function messageCenter() {
  if (!store.getters.msgChannel.source) return;
  store.getters.msgChannel.source.postMessage({ key: portalKey.message }, store.getters.msgChannel.origin);
}

/**
 * 通知门户，跳转
 * @param {string} pathName 门户中子系统路由名称
 * @param {string} subPathName 子系统内部路由名称
 */
export function goSubPage({ pathName, subPathName }) {
  if (!store.getters.msgChannel.source) return;
  store.getters.msgChannel.source.postMessage({ key: portalKey.goSubPage, value: { pathName, subPathName } }, store.getters.msgChannel.origin);
}