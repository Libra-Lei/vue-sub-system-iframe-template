/*
 * @Description: 全局插件注册入口文件
 * @Author: 幺五六
 * @Date: 2021-01-12 09:28:11
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-01-12 13:26:30
 */

import disabled from './permit/disabled'
import hidden from './permit/hidden'
import invisible from './permit/invisible'

import debounceClick from './debounce-click'

const directives = {
  'permit-disabled': disabled,
  'permit-hidden': hidden,
  'permit-invisible': invisible,
  'debounce-click': debounceClick
}

export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key]);
    })
  }
}
