<!--
 * @Description: 
 * @Author: 幺五六
 * @Date: 2020-01-15 09:30:06
 * @LastEditors: 幺五六
 * @LastEditTime: 2020-10-29 19:10:54
--> 
<template>
  <div class="suggest-chat">
    <VuePerfectScrollbar :settings="{ wheelPropagation: true }" style="max-height: 30rem;">
      <ul>
        <li
          class="mb-4"
          v-for="(item, index) in list"
          :key="`chat${index}`"
          >
          <div class="flex items-top justify-start" v-if="item.userid !== currentUser">
            <div class="min-w-14 mr-3">
              <vs-avatar class="border-2 border-solid border-white" :src="item.avatar" size="35px" />
            </div>
            <div class="">
              <div class="flex items-center mb-3">
                <h6 class="text-base mr-4">{{ item.name }}</h6>
                <span class="text-sm">{{ item.time }}</span>
              </div>
              <p class="max-w-md msg-item p-4 rounded-lg border border-solid d-theme-border-grey-light wm-theme-dark-bg">{{ item.message }}</p>
            </div>
          </div>
          <div class="flex items-top justify-end" v-else>
            <div class="">
              <div class="flex items-center justify-end mb-3">
                <h6 class="text-base mr-4">{{ item.name }}</h6>
                <span class="text-sm">{{ item.time }}</span>
              </div>
              <p class="max-w-md msg-item p-4 rounded-lg border border-solid d-theme-border-grey-light wm-theme-primary-bg">{{ item.message }}</p>
            </div>
            <div class="min-w-14 ml-3">
              <vs-avatar class="border-2 border-solid border-white" :src="item.avatar" size="35px" />
            </div>
          </div>
        </li>
      </ul>
    </VuePerfectScrollbar>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  components: { VuePerfectScrollbar },
  data() {
    return {
      currentUser: `${this.$store.getters.AppActiveUser.id}`
    }
  },
  props: {
    list: {
      type: Array,
      default: () => { return []; }
    }
  }
}
</script>
