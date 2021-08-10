<!--
 * @Description: 
 * @Author: 幺五六
 * @Date: 2021-01-05 12:29:30
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-10 11:30:28
-->
<template>
  <div>
    <LyDocView />
    <ProgressNotify />
  </div>
</template>

<script>
// 全局的一些 组件
import LyDocView from './LyDocView'
import ProgressNotify from './ProgressNotify'

export default {
  components: {
    LyDocView,
    ProgressNotify
  }
}
</script>