/*
 * @Description: 
 * @Author: 幺五六
 * @Date: 2020-07-17 09:57:37
 * @LastEditors: 幺五六
 * @LastEditTime: 2020-11-30 14:36:05
 */ 
const basePath = process.env.VUE_APP_API_BASE;
const sysPath = process.env.VUE_APP_API_SYS;

/**
 * 登录
 */
export const auth = {
  logout: `${sysPath}/globaldata/logout`, // 本地注销
  login: `${basePath}/globaldata/oauth2client`, // 生产中心，建立本地会话请求
  getUserInfo: `${sysPath}/globaldata/selectUserInfoByToken`, // 系统管理中心，请求用户基本信息
  getUserInfoAvatar: `${sysPath}/user/selectUserInfoByCreateId`, // 系统管理中心，批量获取用户头像

  getAcl: `${sysPath}/wso2/authorize/batchUiAuthorization` // 访问控制授权获取
}