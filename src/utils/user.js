/*
 * @Description: 用户相关 -- 当前风场选择、当前租户选择
 * @Author: 幺五六
 * @Date: 2020-09-08 17:22:19
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-04-26 14:06:53
 */

import Cookies from 'js-cookie'

const COOKIE_TENANT_ID = 'wmTenantId';
const COOKIE_TENANT_DOMAIN = 'wmTenantDomain';
const COOKIE_FARM_ID = 'wmFarmId';
const LOCAL_STORAGE_FARM_LIST_INFO = 'wmFarmListInfo';

/**
 * 获取当前选中 租户 { id, domain }
 */
export function getCurrTenant() {
  return { id: Cookies.get(COOKIE_TENANT_ID), domain: Cookies.get(COOKIE_TENANT_DOMAIN) };
}

/**
 * 存储当前选中 租户 { id, domain }
 */
export function setCurrTenant(tenant) {
  Cookies.set(COOKIE_TENANT_DOMAIN, tenant.domain);
  Cookies.set(COOKIE_TENANT_ID, tenant.id);
}

/**
 * 获取当前选中的 风场ID
 */
export function getCurrFarmId() {
  return Cookies.get(COOKIE_FARM_ID);
}

/**
 * 存储当前选中的 风场ID
 */
export function setCurrFarmId(farmId) {
  return Cookies.set(COOKIE_FARM_ID, farmId);
}

/**
 * 获取当前选中租户的 风场列表 (json, 详情)
 */
 export function getCurrFarmListInfo() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_FARM_LIST_INFO));
}
