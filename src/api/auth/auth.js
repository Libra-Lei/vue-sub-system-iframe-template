/*
 * @Description: 登录有关API
 * @Author: 幺五六
 * @Date: 2020-07-17 09:56:51
 * @LastEditors: 幺五六
 * @LastEditTime: 2020-11-30 16:25:21
 */ 

import service from '../service'
import { auth as authUrl } from '../url/auth'

/**
 * 用sso返回的临时票据与后端建立本地会话
 * @param {string} code SSO临时票据
 * @param {string} redirectUrl SSO重定向地址
 * @param {string} clientId SSO 应用注册ID
 * @param {string} sessionState SSO 登录成功后返回，用于注销
 */
export function login({ code, redirectUrl, clientId, sessionState }) {
  return service({
    url: authUrl.login,
    method: 'GET',
    params: { code: code, redirect_uri: redirectUrl, client_id: clientId, session_state: sessionState }
  })
}

/**
 * 注销
 * @param {string} sessionIds , 拼接的 sessionId
 */
export function logout(sessionIds) {
  return service({
    url: authUrl.logout,
    method: 'GET',
    params: { sessionIds }
  })
}

/**
 * 请求系统管理中心，获取用户基本信息
 */
export function getUserInfo() {
  return service({
    url: authUrl.getUserInfo,
    method: 'GET'
  })
}

/**
 * 请求系统管理中心，批量获取用户头像
 */
export function getUserInfoAvatar(ids) {
  return service({
    url: authUrl.getUserInfoAvatar,
    method: 'GET',
    params: { ids }
  })
}

/**
 * 获取访问控制授权
 * @param {body} data body
 */
export function getAcl(data) {
  return service({
    url: authUrl.getAcl,
    method: 'POST',
    headers: { 'content-type': 'application/json;charset=UTF-8' },
    data
  })
}