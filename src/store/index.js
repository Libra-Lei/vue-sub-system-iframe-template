/**
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-06-17 14:07:38
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-10 11:39:55
 */
/*
 * @Description: 
 * @Author: 幺五六
 * @Date: 2019-12-25 17:17:30
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-06-04 16:43:37
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'
import portalMessage from './modules/portalMessage'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    portalMessage
  },
  getters
})

export default store
