<!--
 * @Description: 时间轴
 * @Author: 幺五六
 * @Date: 2021-03-26 12:56:17
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-03-26 14:29:22
-->

<template>
  <ul class="yl-timeline">
    <li
      class="yl-timeline-item"
      v-for="(item, index) in list"
      :key="item.id"
      @click.stop="$emit('item-click', item.id)"
    >
      <div v-show="index < list.length - 1" class="yl-timeline-item__tail"></div>
      <div class="yl-timeline-item__node" :class="{'active': item.id === activeId}"></div>

      <h1 class="yl-timeline-item__title" :class="{'active': item.id === activeId}">{{ item.title }}</h1>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'YlTimeline',
  data() {
    return {}
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    activeId: {
      type: String
    }
  },
}
</script>

<style lang="scss" scoped>
.yl-timeline {
  list-style: none;

  &-item {
    position: relative;
    padding-bottom: 20px;
    &__tail {
      position: absolute;
      left: 4px;
      height: 100%;
      border-left: 2px solid #E5E8EB;
    }
    &__title {
      font-size: 14px;
      margin-bottom: 4px;
      padding-left: 28px;
      cursor: pointer;
      &.active {
        color: rgb(115,103,240);
      }
    }
    &__node {
      width: 12px;
      height: 12px;
      margin-left: -1px;
      border-radius: 50%;
      position: absolute;
      background-color: #A0AEC0;

      &.active {
        background-color: rgb(115,103,240);
      }
    }
  }
}
.theme-dark {
  .yl-timeline {
    &-item {
      &__tail {
        border-left: 2px solid #414561;
      }
    }
  }
}
</style>
