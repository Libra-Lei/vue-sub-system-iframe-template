/*
 * @Description: 元素 display: none
 * @Author: 幺五六
 * @Date: 2021-01-12 09:34:34
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-01-12 09:35:49
 */

import { hasPermit } from './permit-utils'

const hidden = {
  inserted: function (el, binding) {
    const { value, arg } = binding;
    if (value.width || !hasPermit(value.action, arg)) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
  },
  update: function (el, binding) {
    const { value, arg } = binding;
    if (value.width || !hasPermit(value.action, arg)) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
  }
}

export default hidden;