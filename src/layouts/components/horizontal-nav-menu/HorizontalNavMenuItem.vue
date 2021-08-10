<!--
 * @Description: 
 * @Author: 幺五六
 * @Date: 2019-12-25 17:17:30
 * @LastEditors: 幺五六
 * @LastEditTime: 2020-12-21 14:39:28
--> 
<!-- =========================================================================================
    File Name: VerticalNavMenuItem.vue
    Description: Vertical NavMenu item component. Extends vuesax framework's 'vs-sidebar-item' component
    Component Name: VerticalNavMenuItem
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div
    class="h-nav-menu-item"
    :class="[
      {'h-nav-active-item text-primary font-medium' : activeLink},
      {'disabled-item pointer-events-none' : isDisabled},
    ]" >

      <router-link
        v-if="to"
        exact
        :class="[{'router-link-active': activeLink}, 'nav-link flex items-center']"
        :to="to"
        :target="target" >
          <vs-icon v-if="!featherIcon" :icon-pack="iconPack" :icon="icon" />
          <feather-icon v-else :class="iconClasses" :icon="icon" />
          <slot />
      </router-link>

      <a v-else :target="target" :href="href" class="nav-link flex items-center">
        <vs-icon v-if="!featherIcon" :icon-pack="iconPack" :icon="icon" />
        <feather-icon v-else :class="iconClasses" :icon="icon" />
        <slot />
      </a>
  </div>
</template>

<script>
export default {
  name: 'v-nav-menu-item',
  props: {
    icon        : { type: String,                 default: ""               },
    iconSmall   : { type: Boolean,                default: false            },
    iconPack    : { type: String,                 default: 'material-icons' },
    href        : { type: [String, null],         default: '#'              },
    to          : { type: [String, Object, null], default: null             },
    slug        : { type: String,                 default: null             },
    index       : { type: [String, Number],       default: null             },
    featherIcon : { type: Boolean,                default: true             },
    target      : { type: String,                 default: '_self'          },
    isDisabled  : { type: Boolean,                default: false            },
    fromGroup   : { type: Boolean,                default: false            },
  },
  computed: {
    iconClasses() {
      return this.iconSmall ? 'w-3 h-3 mr-3' : 'w-5 h-5 mr-3'
    },
    activeLink() {
      // if(this.fromGroup) {
      //   return ((this.to == this.$route.path) || (this.$route.meta.parent == this.slug) && this.to) ? true : false
      // } else {
      //   if (!this.to) return false;
      //   const toParentPath = this.to.split('/').length > 1 ? this.to.split('/')[1] : ''
      //   const currParentPath = this.$route.path.split('/').length > 1 ? this.$route.path.split('/')[1] : ''
      //   return ((this.to == this.$route.path) || (this.$route.meta.parent == this.slug) && this.to) || (toParentPath === currParentPath) ? true : false
      // }

      if (!this.to) return false;
      const matched = this.$route.matched;
      for (let i = 0; i < matched.length; i++) {
        const isMatch = this.to.match(matched[i].regex);
        if (isMatch && isMatch.length > 0) return true;
      }
      return false;
    }
  }
}

</script>

<style lang="scss">
@import "@/assets/scss/vuexy/components/horizontalNavMenuItem.scss";
</style>
