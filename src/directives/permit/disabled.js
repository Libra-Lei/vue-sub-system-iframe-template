/*
 * @Description: 元素 disabled
 * @Author: 幺五六
 * @Date: 2021-01-12 09:30:55
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-01-12 09:52:26
 */

import { hasPermit } from './permit-utils'

const disabled = {
  inserted: function (el, binding) {
    // { action: '资源id', width: '其他判断条件' }
    const { value, arg } = binding;
    if (value.width || !hasPermit(value.action, arg)) {
      el.disabled = true;
      el.style.pointerEvents = 'none';
      el.style.color = '#969696';
    } else {
      el.disabled = false;
      el.style.pointerEvents = '';
      el.style.color = '';
    }
  },
  update: function (el, binding) {
    // { action: '资源id', width: '其他判断条件' }
    const { value, arg } = binding;
    if (value.width || !hasPermit(value.action, arg)) {
      el.disabled = true;
      el.style.pointerEvents = 'none';
      el.style.color = '#969696';
    } else {
      el.disabled = false;
      el.style.pointerEvents = '';
      el.style.color = '';
    }
  }
}

export default disabled;