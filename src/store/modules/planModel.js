/*
 * @Description: 计划模板
 * @Author: 幺五六
 * @Date: 2021-03-29 10:39:44
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-04-19 14:24:24
 */

import { getOrderModelById } from '@/api/order/orderModel'
const state = {
  planModelPage: [], // 计划模板列表页
  planModelInfo: {} // 当前的计划模板详情
}

const mutations = {
  UPDATE_PLAN_MODEL_PAGE(state, payload) {
    state.planModelPage = payload;
  },
  UPDATE_PLAN_MODEL_INFO(state, payload) {
    state.planModelInfo = payload;
  }
}

const actions = {
  async updatePlanModelInfo({ commit }, { modelId }) {
    const info = await getOrderModelById(modelId);
    commit('UPDATE_PLAN_MODEL_INFO', info);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
