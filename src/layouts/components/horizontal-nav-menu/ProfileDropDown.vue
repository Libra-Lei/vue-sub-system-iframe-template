<!--
 * @Description: 用户头像下拉
 * @Author: 幺五六
 * @Date: 2020-09-09 16:53:19
 * @LastEditors: 幺五六
 * @LastEditTime: 2020-11-10 13:22:30
-->
<template>
  <!-- USER META -->
  <div class="the-navbar__user-meta flex items-center whitespace-no-wrap">
    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ user_displayName }}</p>
      <small>{{ user_role }}</small>
    </div>
    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <div class="con-img ml-3">
        <img
          v-if="activeUserImg"
          key="onlineImg"
          v-lazy="activeUserImg"
          alt="user-img"
          width="40"
          height="40"
          class="rounded-full shadow-md cursor-pointer block" />
      </div>
      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="userInfoClick"
            >
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">个人中心</span>
          </li>
          <vs-divider class="m-1"></vs-divider>
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4"/>
            <span class="ml-2">退出登录</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
import { logout as logoutNotifyPortal, userInfo } from '@/utils/communication'
// import { logout as logoutLocal, getUserInfo } from '@/api/auth/auth'

export default {
  computed: {
    navbarColor() {
      return this.$store.state.app.theme === "dark" ? "#10163a" : "#fff"
    },
    activeUserInfo() {
      return this.$store.getters.AppActiveUser
    },
    user_displayName() {
        return this.activeUserInfo.userName
    },
    user_role() {
        return this.activeUserInfo.tenantName
    },
    activeUserImg() {
        return this.$store.getters.AppActiveUser.avatar;
    }
  },
  methods: {
    async logout() {
      // 先请求用户信息 --> id_token 和 session_state 用于注销
      // const user = await getUserInfo();
      // if (!user.data || !user.data.sessionState || !user.data.idToken) return;

      // const host = process.env.VUE_APP_IDENTIFY_SERVER;
      // const url = process.env.VUE_APP_REDIRECT_URL;
      // const sessionState = user.data.sessionState;
      // const idToken = user.data.idToken;
      // const logoutUrl = `${host}/oidc/logout?post_logout_redirect_uri=${encodeURI(url)}&session_state=${sessionState}&id_token_hint=${idToken}`;
      
      // // 1. 先注销 本地的 session_id
      // await logoutLocal();
      // 2. 通知门户注销
      logoutNotifyPortal();
      // 3. 注销 wso2
      this.$store.dispatch('user/setToken', { code: null, sessionState: null, localToken: null });
      // console.info('健康中心注销', { host, url, sessionState, idToken }, logoutUrl);
      // window.location.href = logoutUrl;
    },
    userInfoClick() {
      userInfo();
    }
  }
}
</script>