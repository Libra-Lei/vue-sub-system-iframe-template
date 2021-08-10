/*
 * @Description: 
 * @Author: 幺五六
 * @Date: 2020-04-14 11:29:18
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-05-12 17:29:40
 */ 
import axios from 'axios'
import store from '@/store'

import { refreshPage as refreshPageNotifyPortal } from '@/utils/communication'

// const appid = process.env.VUE_APP_APP_ID
// const redirectUrl = process.env.VUE_APP_REDIRECT_URL

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_API_BASE, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 180000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // sessionid 认证
      if (Number(process.env.VUE_APP_SSO_IS_OPEN)) { // 单点登录开关
        if (store.getters.token.localToken) config.headers['sessionId'] = store.getters.token.localToken;
      }

      // idToken 认证
      if (store.getters.token.idToken) {
        config.headers['Authorization'] = `Bearer ${store.getters.token.idToken}`;
      }
    }
    // 风场ID / 租户ID / 租户域
    if (store.getters.currSelectTenant.id && store.getters.currSelectTenant.id !== 'undefined') {
      config.headers['atTennentId'] = store.getters.currSelectTenant.id;
    }
    if (store.getters.currSelectTenant.domain && store.getters.currSelectTenant.domain !== 'undefined') {
      config.headers['atTennentDomain'] = store.getters.currSelectTenant.domain;
    }
    if (store.getters.currSelectWindFarmId && store.getters.currSelectWindFarmId !== 'undefined') {
      config.headers['atWindFarm'] = store.getters.currSelectWindFarmId;
    }
    return config;
  },
  error => {
    // do something with request error
    console.error(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response;
    // if the custom code is not 20000, it is judged as an error.
    if (res.status !== 200) {
      window.$wm_notify_danger('错误', res.message || 'Error')
      return Promise.reject(new Error(res.message || 'Error'))
    } else if (res.status === 403) {
      // 当前系统已登录，但是本此请求接口，没有权限
      window.$wm_notify_danger('错误', '对不起，您没有权限。');
      return Promise.reject('No Authority');
    } else {

      // 处理文件下载
      if (res.headers['content-type'] === 'application/octet-stream') {
        convertRes2Blob(res);
      } else {
        return res.data
      }
    }
  },
  error => {
    if (error.response.status === 401) {
      console.error('正常api请求401')
      // store.dispatch('user/setToken', { code: null, sessionState: null, localToken: null });
      store.commit('user/SET_TOKEN', { code: null, sessionState: null, localToken: null });
      // 权限拒绝，重新登录
      // 通知门户 刷新
      refreshPageNotifyPortal();
      // window.location.href = `${process.env.VUE_APP_IDENTIFY_SERVER}/oauth2/authorize?client_id=${appid}&scope=openid&response_type=code&redirect_uri=${encodeURI(redirectUrl)}`
    } else {
      console.error('service-error:::', error) // for debug
      window.$wm_notify_danger('错误', error.message)
      return Promise.reject(error)
    }
  }
)

/**
 * 处理流文件
 * @param {response} response 响应体
 */
function convertRes2Blob(response) {
  // 提取文件名
  const fileName = response.headers['content-disposition'].match(
    /filename=(.*)/
  )[1]

  // 将二进制流转为blob
  const blob = new Blob([response.data], { type: 'application/octet-stream' })
  // const blob = new Blob([response.data], { type: 'application/msword' })
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    // 兼容IE，window.navigator.msSaveBlob：以本地方式保存文件
    window.navigator.msSaveBlob(blob, decodeURI(fileName))
  } else {
    // 创建新的URL并指向File对象或者Blob对象的地址
    const blobURL = window.URL.createObjectURL(blob)
    // 创建a标签，用于跳转至下载链接
    const tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = blobURL
    tempLink.setAttribute('download', decodeURI(fileName))
    // 兼容：某些浏览器不支持HTML5的download属性
    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank')
    }
    // 挂载a标签
    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
    // 释放blob URL地址
    window.URL.revokeObjectURL(blobURL)
  }
}

export default service
