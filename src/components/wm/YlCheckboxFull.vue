<!--
 * @Description: 待全选的 checkbox
 * @Author: 幺五六
 * @Date: 2021-03-01 15:12:06
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-03-01 16:03:38
-->

<template>
  <div>
    <ul>
      <li class="px-6 py-3">
        <vs-checkbox :vs-name="ylName" v-model="selectAll">全选</vs-checkbox>
      </li>
      <li
        class="px-6 py-3"
        v-for="item in list"
        :key="item.value"
      >
        <vs-checkbox :vs-value="item | toString" :vs-name="ylName" v-model="select">{{ item.label }}</vs-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'YlCheckboxFull',
  model: {
    prop: 'defaultValue',
    event: 'change'
  },
  props: {
    list: { // 勾选项 { label: '': value: '' }
      type: Array,
      required: true
    },
    ylName: {
      type: String,
      default: 'checkbox'
    },
    defaultValue: {
      type: Array
    }
  },
  computed: {
    select: {
      get: function() {
        return this.defaultValue.map(x => JSON.stringify(x));
      },
      set: function(v) {
        this.$emit('change', v.map(x => JSON.parse(x)));
      }
    },
    selectAll: {
      get: function() {
        for (let index = 0; index < this.list.length; index++) {
          const item = this.list[index];
          const find = this.select.findIndex(x => x === JSON.stringify(item));
          if (find < 0) {
            return false;
          }
        }
        return true;
      },
      set: function(v) {
        if (v) {
          this.$emit('change', JSON.parse(JSON.stringify(this.list)));
        } else {
          this.select = [];
        }
      }
    }
  },
  filters: {
    toString(v) {
      return JSON.stringify(v);
    }
  }
}
</script>
