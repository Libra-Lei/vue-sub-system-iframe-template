<!--
 * @Description: 
 * @Author: 幺五六
 * @Date: 2020-04-14 11:29:18
 * @LastEditors: 幺五六
 * @LastEditTime: 2020-07-17 14:57:17
--> 
<template>
  <transition name="view-upload">
    <div
      ref="view"
      class="view-upload"
      @click="closeView">
      <img
        v-lazy="src"
        alt="image"
        >
    </div>
  </transition>
</template>
<script>
import utils from '@/utils/view.js'
export default {
  name:'ViewUpload',
  props:{
    src:{
      default:null,
      type:String
    }
  },
  mounted(){
    utils.insertBody(this.$refs.view)
  },
  upload(){
    utils.insertBody(this.$refs.view)
  },
  methods:{
    closeView(evt){
      // if(evt.target.tagName != 'IMG'){
      //   this.$parent.viewActive = false
      // }
      this.$parent.viewActive = false;
    }
  }
}
</script>
