/*
 * @Description: 门户通知的消息
 * @Author: 幺五六
 * @Date: 2020-11-02 16:58:30
 * @LastEditors: 幺五六
 * @LastEditTime: 2020-11-02 17:03:45
 */
const state = {
  alert: { // 故障、缺陷、警告 消息
    count: 0,
    type: 'alert'
  }
}

const mutations = {
  UPDATE_ALERT(state, payload) {
    for (const key of Object.keys(state.alert)) {
      if (payload && payload[key]) {
        state.alert[key] = payload[key];
      }
    }
  }
}

const actions = {
  updateAlert({ commit }, payload) {
    commit('UPDATE_ALERT', payload);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}