<!--
 * @Description: 
 * @Author: 幺五六
 * @Date: 2021-01-05 12:39:35
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-01-05 15:05:42
-->
<template>
  <div class="w-20">
    <vs-alert
      class="fixed z-60000 w-72 bg-primary"
      style="left: calc(50% - 9rem); top: 90px;"
      :active="active"
      color="rgb(255, 255, 255)"
      :icon="icon"
      >
      <div class="flex flex-col items-center">
        <p class="text-sm">{{ text }}</p>
        <vs-progress :percent="progress" color="success">primary</vs-progress>
      </div>
    </vs-alert>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import { OPEN_PROGRESS_NOTIFY, CLOSE_PROGRESS_NOTIFY } from '@/utils/pubsub'

export default {
  data() {
    return {
      subToken: [],
      
      active: false,
      icon: 'info',
      
      text: '加载中...',
      progress: 0,
      total: 1,

      delay: 0
    }
  },
  mounted() {
    const token = PubSub.subscribe(OPEN_PROGRESS_NOTIFY, this.open);
    const token1 = PubSub.subscribe(CLOSE_PROGRESS_NOTIFY, this.close);
    this.subToken.push(token);
    this.subToken.push(token1);
  },
  beforeDestroy() {
    this.subToken.forEach(token => {
      PubSub.unsubscribe(token);
    })
    this.subToken = [];
  },
  methods: {
    close() {
      this.active = false;
    },
    open(msg, { delay, icon, text }) {
      this.text = text? text : '加载中...',
      this.icon = icon? icon : 'info';
      this.active = true;
      this.total = delay? (delay < 1? 1 : delay) : 10; // 默认10秒
      this.delay = 0;
      this.active = true;

      this.start();
    },
    start() {
      if (!this.active) return;
      setTimeout(() => {
        this.delay += 1;
        this.progress = (this.delay / this.total) * 100;
        if (this.delay <= this.total) {
          this.start();
        } else {
          this.active = false;
        }
      }, 1000);
    }
  }
}
</script>