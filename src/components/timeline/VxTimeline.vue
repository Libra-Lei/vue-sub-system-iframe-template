<!--
 * @Description: 
 * @Author: 幺五六
 * @Date: 2019-12-25 17:17:30
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-05-10 11:10:04
-->

<template>
  <ul class="vx-timeline">
      <li v-for="item in data" :key="item.id">
          <div
            v-if="item.icon"
            class="timeline-icon"
            :class="`bg-${item.color}`">
              <feather-icon :icon="item.icon" svgClasses="text-white stroke-current w-5 h-5" />
          </div>
          <div
            v-else
            style="height:40px; width:40px; padding:0;"
            class="timeline-icon"
            :class="`bg-${item.color}`"
            :title="item.text"
            >
            <h1 class="text-sm" style="white-space:nowrap; line-height:40px; text-align:center;">{{ item.text }}</h1>
          </div>
          <div class="timeline-info">
              <p class="font-semibold">{{ item.title }}</p>
              <span class="activity-desc">{{ item.desc }}</span>
          </div>
          <small class="text-grey activity-e-time">{{ item.time }}</small>
      </li>
  </ul>
</template>

<script>
import CircleStatus from '@/components/wm/CircleStatus'

export default {
  name: "vx-timeline",
  components: { CircleStatus },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/components/vxTimeline.scss";
</style>
