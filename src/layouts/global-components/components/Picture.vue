<!--
 * @Description: 
 * @Author: 幺五六
 * @Date: 2020-01-15 11:04:48
 * @LastEditors: 幺五六
 * @LastEditTime: 2020-10-29 17:55:37
--> 
<template>
  <div>
    <h6 class="my-4">图片</h6>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
        v-for="(item, index) in images"
        :key="`image-${index}`">
        <img class="responsive" v-lazy="item" alt="banner">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <h6 class="my-4">描述</h6>
    <p class="wm-theme-dark-bg p-4 rounded border border-solid d-theme-border-grey-light">{{ desc }}</p>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: { swiper, swiperSlide },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        // init: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
    }
  },
  props: {
    images: {
      type: Array,
      default: () => { return []; }
    },
    desc: {
      type: String,
      default: ''
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.swiper.resize.resizeHandler()
      }, 1500)
    })
  }
}
</script>