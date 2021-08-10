<!--
 * @Description: 
 * @Author: 幺五六
 * @Date: 2020-07-02 15:16:25
 * @LastEditors: 幺五六
 * @LastEditTime: 2020-10-10 20:32:08
-->
<template>
  <div>
    <vs-popup
      class="p-0"
      :title="title"
      :active.sync="active"
      :classContent="'p-0 m-0 w-full'"
      >
      <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
        <swiper-slide
          class="flex justify-center"
          v-for="(file, index) in files"
          :key="`file-${index}`"
        >
          <img class="responsive w-auto max-h-98" v-lazy="file" alt="banner">
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </vs-popup>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: { swiper, swiperSlide },
  data() {
    return {
      active: false,
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      files: []
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    open(files) {
      this.files = files;
      this.active = true;
    }
  }
}
</script>