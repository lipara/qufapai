import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)
const routes = [{
    path: "/",
    name: "root",
    component: () => import("@/layout/index"),

    redirect: {
      name: "home"
    },
    children: [{
        path: '/home',
        name: 'home',
        component: () => import("@/views/home/HomeIndex"),
      },
      {
        path: '/console',
        name: 'console',
        component: () => import("@/views/console/index"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/auth/Login"),
        meta: {
          title: "登录"
        }
      },
      {
        path: "/register",
        name: "register",
        component: () => import("@/views/auth/Register"),
        meta: {
          title: "注册"
        }
      },
      {
        path: "/findpassword",
        name: "findpassword",
        component: () => import("@/views/auth/FindPassword"),

        meta: {
          title: "找回密码"
        }
      },
    ]
  },

  {
    path: "/second",
    name: "",
    component: () => import("@/layout/SecondIndex"),
    children: [{
      path: "/strict",
      name: "strict",
      component: () => import("@/views/strictSelection/StrictIndex"),
      meta: {
        title: "法拍严选"
      }
    }],

  },

  {
    path: "/403",
    name: "403",
    component: () => import("@/views/error/403"),
    meta: {
      title: 403
    }
  },

  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404"),
    meta: {
      title: 404
    }
  },

  {
    path: "/500",
    name: "500",
    component: () => import("@/views/error/500"),
    meta: {
      title: 500
    }
  },

  {
    path: "*",
    redirect: {
      name: "404"
    }
  }
]

export default new VueRouter({
  // linkExactActiveClass:"active",
  mode: "hash",
  scrollBehavior: () => ({
    y: 0
  }),
  routes
})
