/**
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-05-14 17:29:38
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-10 11:34:53
 */

const getters = {
  themePrimaryColor: state => state.app.themePrimaryColor,
  bodyOverlay: state => state.app.bodyOverlay,
  mainLayoutType: state => state.app.mainLayoutType,
  reduceButton: state => state.app.reduceButton,
  routerTransition: state => state.app.routerTransition,
  theme: state => state.app.theme,
  windowWidth: state => state.app.windowWidth,
  navbarSearchAndPinList: state => state.app.navbarSearchAndPinList,
  scrollY: state => state.app.scrollY,
  verticalNavMenuWidth: state => state.app.verticalNavMenuWidth,
  starredPages: state => state.app.starredPages,
  isVerticalNavMenuActive: state => state.app.isVerticalNavMenuActive,
  verticalNavMenuItemsMin: state => state.app.verticalNavMenuItemsMin,

  AppActiveUser: state => {
    const stateInfo = state.user.AppActiveUser;
    if (!stateInfo.userName) {
      const storageInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!storageInfo || !storageInfo.userName) {
        return stateInfo;
      } else {
        return storageInfo;
      }
    }
    return stateInfo;
  },
  token: state => {
    if (typeof(state.user.token) === 'string') {
      try {
        return JSON.parse(state.user.token);
      } catch(e) {
        return undefined;
      }
    }
    return state.user.token
  },

  windowBreakPoint: state => {
    // This should be same as tailwind. So, it stays in sync with tailwind utility classes
    if (state.windowWidth >= 1200) return "xl"
    else if (state.windowWidth >= 992) return "lg"
    else if (state.windowWidth >= 768) return "md"
    else if (state.windowWidth >= 576) return "sm"
    else return "xs"
  },

  msgChannel: state => state.app.msgChannel,

  // 个人中心
  currSelectTenant: state => state.user.currSelectTenant, // 当前选中的 租户 { domain, id }
  currSelectWindFarmId: state => state.user.currSelectWindFarmId, // 当前选中的 风场id

  currSelectWindFarm: state => {
    const list = state.user.currFarmListInfo.reduce((pre, curr) =>
      pre.concat(Array.isArray(curr.windFarms)? curr.windFarms : []),
    []);
    const farm = list.find(x => `${x.windFarm}` === `${state.user.currSelectWindFarmId}`);
    return farm? { id: farm.windFarm, name: farm.windFarmTitle } : null;
  }
}

export default getters
