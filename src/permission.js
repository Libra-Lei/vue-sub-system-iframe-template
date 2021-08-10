/*
 * @Description: 
 * @Author: 幺五六
 * @Date: 2019-12-25 17:17:30
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-01-28 11:57:11
 */ 

import router from '@/routes'
import store from '@/store'
import { login, getUserInfo, getAcl } from '@/api/auth/auth'
import { queryUrlParam } from '@/utils/index'
// 更新访问控制权限
import { refreshPermit, packageRequest } from '@/directives/permit/permit-utils'

const appid = process.env.VUE_APP_APP_ID
const redirectUrl = process.env.VUE_APP_REDIRECT_URL

router.beforeEach(async(to, from, next) => {
  // if (Number(process.env.VUE_APP_SSO_IS_OPEN)) { // 单点登录开关
  //   if (!store.getters.token || !store.getters.token.code || !store.getters.token.localToken) {
  //     const urlCode = queryUrlParam('code');
  //     const sessionState = queryUrlParam('session_state');
  //     if (urlCode) {
  //       debugger
  //       const loginResult = await login({
  //         redirectUrl,
  //         sessionState,
  //         code: urlCode,
  //         clientId: appid
  //       })
  //       store.commit('user/SET_TOKEN', { code: urlCode, sessionState: sessionState, localToken: loginResult.data.sessionId, idToken: loginResult.data.idToken });
  //       const userResult = await getUserInfo();
  //       store.dispatch('user/updateUserInfo', userResult.data);
  //       // 重写地址栏
  //       history.pushState(null, null, '/');
  //       goNext(next);
  //     } else {
  //       const redirect = `${process.env.VUE_APP_IDENTIFY_SERVER}/oauth2/authorize?client_id=${appid}&scope=openid&response_type=code&redirect_uri=${encodeURI(redirectUrl)}`;
  //       console.log('redirect: ', encodeURI(redirect));
  //       window.location.href = redirect;
  //     }
  //   } else {
  //     // 已有token继续
  //     // 正常登陆 --> 一些权限检查
  //     normal(to, from, next);
  //   }
  // } else {
  //   goNext(next);
  // }
  next();
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none';
  }
})

/**
 * 登陆校验通过 --> 其他检查
 */
function normal(to, from, next) {
  // 查询是否已经选择了风场 --> 没有选择风场，引导用户去选择风电场
  if (!store.getters.currSelectWindFarmId) {
    // TODO: 选择风电场
    window.location.href = process.env.VUE_APP_PORTAL_DOMAIN;
  } else {
    goNext(to, next);
  }
}

/**
 * 最终所有 next 去向
 * @param {function} next 
 */
async function goNext(to, next) {
  if (!to.meta.aclKey) {
    next();
    return;
  }
  
  window.$wm_loading? window.$wm_loading() : null;
  const body = packageRequest(to.meta.aclKey);
  const aclResponse = await getAcl(body);
  if (aclResponse.code && aclResponse.code === 200) {
    refreshPermit(aclResponse.data);
  }
  window.$wm_loading_close? window.$wm_loading_close() : null;
  next();
  // PubSub.publish(CLOSE_ALL_DIALOG, { next });
}