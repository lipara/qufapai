import Vue from "vue"
import App from "./App.vue"
import router from "./routers"
import store from "./vuex/store"
// import iView from "iview"
import VueBus from "./utils/bus"
import Auth from "./utils/auth"

import * as filters from './filters'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueBus);

/**
 * 路径白名单
 *
 * 任意场景都能无阻碍访问
 */
const accessRoutePath = ["/login", "/403", "/404", "/500","/home","/register","/findpassword"];
router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start();
  if (Auth.getToken()) {
    if (to.path === "/login" || to.path === "/") {
      next()
      // iView.LoadingBar.finish()
    } else {
      next()
      // iView.LoadingBar.finish()
    }
  } else {
    if (accessRoutePath.indexOf(to.path) > -1) {
      next();
    } else {
      next({
        path: "/login"
      });
      // iView.LoadingBar.finish();
    }
  }
  //  next()
});

// 注入全部过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

router.afterEach(router => {
  // iView.LoadingBar.finish();
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
