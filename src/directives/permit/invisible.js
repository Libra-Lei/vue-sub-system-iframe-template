/*
 * @Description: 元素 display: invisible
 * @Author: 幺五六
 * @Date: 2021-01-12 09:33:34
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-01-12 09:35:02
 */

import { hasPermit } from './permit-utils'

const invisible = {
  inserted: function (el, binding) {
    const { value, arg } = binding;
    if (value.width || !hasPermit(value.action, arg)) {
      el.style.visibility = 'hidden';
    } else {
      el.style.visibility = 'visible';
    }
  },
  update: function (el, binding) {
    const { value, arg } = binding;
    if (value.width || !hasPermit(value.action, arg)) {
      el.style.visibility = 'hidden';
    } else {
      el.style.visibility = 'visible';
    }
  }
}

export default invisible;