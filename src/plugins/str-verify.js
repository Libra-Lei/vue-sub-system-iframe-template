/*
 * @Description: 字符验证处理相关插件
 * @Author: 幺五六
 * @Date: 2021-07-26 11:23:27
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-07-26 13:55:46
 */

const StrVerifyPlugin = {
  install: null
}

StrVerifyPlugin.install = (Vue, options) => {
  Vue.prototype.$trimStr = (str) => {
    if (!str) return null;
    return str.replace(/(^\s+)|(\s+$)/g, '');
  }
}

export default StrVerifyPlugin;
