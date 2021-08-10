
import Vue from 'vue'
import App from './App.vue'

// 私有组件库
import '@libra-lei/yl-ui/lib/yl-ui.css';
import YlUI from '@libra-lei/yl-ui';
Vue.use(YlUI);

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)

// 主题配置
import '../themeConfig.js'

// 全局组件注册
import './globalComponents.js'

// Styles: SCSS
import './assets/scss/main.scss'

// Tailwind css框架
import '@/assets/css/main.css'

// Vue Router
import router from '@/routes'

// Vuex Store
import store from './store'

// 移动设备指令包
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

// PrismJS - 语法高亮库
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

// i18n
import i18n from './i18n/i18n'

// 路由守卫
import '@/permission'

// Feather font icon
require('./assets/css/iconfont.css')

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';

// 注册全局过滤器
import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Element-UI
import { Tree, Timeline, TimelineItem, Select, Option, Autocomplete, Progress } from 'element-ui'
Vue.use(Tree)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Autocomplete)
Vue.use(Progress)

// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/app_pro/loading_image_error.svg',
  loading: '/app_pro/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

import { receiveMixin } from '@/utils/communication'

// 全局指令插件注册
import directive from '@/directives'
Vue.use(directive, { someOption: true });

// 自定义插件注册
import StrVerifyPlugin from '@/plugins/str-verify'
Vue.use(StrVerifyPlugin);

new Vue({
  mixins: [receiveMixin],
  router,
  store,
  i18n,
  render: h => h(App),
  mounted() {
    window.$wm_loading = () => {
      this.$vs.loading({
        type: 'sound',
        scale: 0.9
      })
    }
    window.$wm_loading_close = () => {
      this.$vs.loading.close()
    }
    window.$wm_notify_danger = (title, text) => {
      this.$vs.notify({
        color: 'danger',
        title: title,
        text: text,
        time: 3000
      })
    }
    window.$wm_dialog_confirm = (title, text, acceptText, cancelText, callback) => {
      this.$vs.dialog({
        type: 'confirm',
        color: 'warning',
        title: title,
        text: text,
        acceptText: acceptText || '确定',
        cancelText: cancelText || '取消',
        accept: callback
      })
    }
  }
}).$mount('#app')
