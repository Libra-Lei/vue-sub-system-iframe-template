/*
 * @Description: 
 * @Author: 幺五六
 * @Date: 2019-12-25 17:17:30
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-04-26 14:07:47
 */ 
import { getToken, setToken } from '@/utils/auth'
import { getCurrTenant, setCurrTenant, getCurrFarmId, setCurrFarmId, getCurrFarmListInfo } from '@/utils/user'
import { convertFileAddress } from '@/utils/requestHelper'

const userDefaults = {
  id: null, // 用户id
  tenantId: null, // 租户id
  tenantCode: null, // 租户编码
  tenantDomain: null, // 租户域 - 租户唯一标识
  tenantName: null, // 租户名称
  userCode: null, // 用户编码
  userName: null, // 用户名称
  sex: null, // 性别
  email: null, // 邮箱
  mobile: null, // 手机
  phone: null, // 电弧
  address: null, // 地址
  remark: null, // 备注
  loginCode: null,
  avatar: require("@/assets/images/portrait/small/avatar.png")
}

const state = {
  AppActiveUser: userDefaults,
  token: getToken(),
  
  currSelectTenant: getCurrTenant(), // { domain: null, id: null }, // 当前所选的 租户
  currSelectWindFarmId: getCurrFarmId(), // null // 当前所选的风场id
  currFarmListInfo: getCurrFarmListInfo() // 当前租户下的风场列表
}

const mutations = {
  // 更新用户信息 （state 和 localStorage）
  UPDATE_USER_INFO(state, payload) {
    // 获取用户信息
    // let userInfo = JSON.parse(localStorage.getItem("userInfo")) || state.AppActiveUser
    let userInfo = state.AppActiveUser;
    for (const key of Object.keys(userInfo)) {
      if (payload[key]) {
        if (key === 'avatar') {
          state.AppActiveUser[key] = convertFileAddress(payload[key]);
          userInfo[key] = convertFileAddress(payload[key]);
        } else {
          state.AppActiveUser[key] = payload[key];
          userInfo[key] = payload[key];
        }
      }
    }
    // 把用户信息在 localStorage 里面存一份
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
  },
  SET_TOKEN(state, payload) {
    state.token = payload;
    setToken(payload);
  },
  
  // 当前选中 租户
  SET_CURR_SELECT_TENANT(state, payload) {
    state.currSelectTenant = payload;
    // cookie 同步一份
    setCurrTenant(payload);
  },
  // 当前选中 风场id
  SET_CURR_SELECT_WIND_FARM_ID(state, payload) {
    state.currSelectWindFarmId = payload;
    // cookie 同步一份
    setCurrFarmId(payload);
  }
}

const actions = {
  updateUserInfo({ commit }, payload) {
    commit('UPDATE_USER_INFO', payload)
  },
  setToken({ commit }, payload) {
    commit('SET_TOKEN', payload)
  },
  
  setCurrSelectTenant({ commit }, payload) {
    commit('SET_CURR_SELECT_TENANT', payload);
  },
  setCurrSelectWindFarmId({ commit }, payload) {
    commit('SET_CURR_SELECT_WIND_FARM_ID', payload);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}