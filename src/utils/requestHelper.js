/*
 * @Description: 网络请求相关的帮助工具函数
 * @Author: 幺五六
 * @Date: 2020-07-15 14:18:00
 * @LastEditors: 幺五六
 * @LastEditTime: 2020-09-05 17:03:47
 */ 

import store from '@/store'
const fileDomain = process.env.VUE_APP_FILE_DOMAIN;
const filePrefix = process.env.VUE_APP_FILE_PREFIX;

/**
 * 在参数对象中加入 租户
 * @param {Object} original 原始参数对象
 * @param {String} key 租户在提交参数中 key 名
 */
export const appendTenantParam = (original) => {
  if (!original) return null;
  const temp = {...original};
  temp['tenantDomain'] = store.getters.AppActiveUser.tenantDomain;
  return temp;
}

/**
 * 转换 FormData
 * @param {array} arr { key: value }
 */
export function convert2FormData(obj) {
  const formdata = new FormData();
  for (const key of Object.keys(obj)) {
    formdata.append(key, obj[key]);
  }
  return formdata;
}

/**
 * 转换 文件访问地址并返回
 * @param {string} path 图片路径
 */
export function convertFileAddress(path) {
  return path? `${fileDomain}${filePrefix}/${path}` : path;
}