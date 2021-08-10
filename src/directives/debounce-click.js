/*
 * @Description: 点击 防抖
 * @Author: 幺五六
 * @Date: 2021-01-12 10:57:45
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-01-12 13:31:20
 */

const debounceClick = {
  inserted: function (el, binding) {
    const { value } = binding;
    let timer = null;
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer);
      }
      if (typeof value === 'function') {
        timer = setTimeout(() => {
          value();
        }, 500);
      }
    })
  }
}

export default debounceClick;