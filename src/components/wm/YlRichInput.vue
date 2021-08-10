<!--
 * @Description: 富文本输入
 * @Author: 幺五六
 * @Date: 2021-03-23 14:47:52
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-03-23 17:00:30
-->

<template>
  <div>
    <h1 class="text-base mb-3">{{ label }}</h1>
    <!-- 只读 -->
    <div v-if="readonly">
      <div class="ql-editor d-theme-dark-light-bg rounded min-h-16" v-html="richContent"></div>
    </div>
    <quill-editor
      v-else
      ref="ylQuillRef"
      class="h-full d-theme-dark-light-bg"
      :options="editOpt"
      v-model="richContent"
      >
      <div :id="toolbarId" slot="toolbar">
        
        <button class="ql-bold">Bold</button>
        <button class="ql-italic">Italic</button>
        <button class="ql-underline">underline</button>
        <select class="ql-color"></select>
        <select class="ql-background"></select>
        <button class="ql-list" value="ordered"></button>
        <button class="ql-list" value="bullet"></button>
        
        <button class="ql-script" value="sub"></button>
        <button class="ql-script" value="super"></button>
        
        <select class="ql-size">
          <option value="small">小</option>
          <option selected>正常</option>
          <option value="large">大</option>
          <option value="huge">超大</option>
        </select>
        <select class="ql-header">
          <option value="1">标题1</option>
          <option value="2">标题2</option>
          <option value="3">标题3</option>
          <option selected>正文</option>
        </select>
      </div>
    </quill-editor>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor, Quill } from 'vue-quill-editor'
Quill.debug('warn');

export default {
  name: 'YlRichInput',
  components: { quillEditor },
  data() {
    return {
      editOpt: {
        placeholder: '请输入...',
        theme: 'snow',
        modules: {
          toolbar: `#${this.toolbarId}`
        }
      }
    }
  },
  model: {
    prop: 'text',
    event: 'change'
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入...'
    },
    label: {
      type: String,
      default: '请输入...'
    },
    toolbarId: { // 必须指定不同的 id, 不然渲染会出错
      type: String,
      default: 'toolbar1'
    }
  },
  computed: {
    richContent: {
      get: function() {
        return this.text;
      },
      set: function(v) {
        this.$emit('change', v);
      }
    }
  }
}
</script>
