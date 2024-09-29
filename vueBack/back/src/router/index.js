import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'
// import index from '../views/index.vue'

import AdminLogin from '../views/AdminLogin.vue'

import allStaffs from '../views/allStaffs.vue'
import addStaffs from '../views/addStaffs.vue'
import staffInform from '../views/staffInform.vue'
// import addSchedules from '../views/addSchedules.vue'


import allPatients from '../views/allPatients.vue'
import addPatients from '../views/addPatients.vue'
import patientsInform from '../views/patientsInform.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'index',
  //   component: index
  // },
  {
    path: '/',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/index',
    name: 'allStaffs',
    component: allStaffs,
    meta: { requireAuth: true }
  },
  {
    path: '/addStaffs',
    name: 'addStaffs',
    component: addStaffs,
    meta: { requireAuth: true }
  },
  {
    path: '/staffInform/:staffNum',
    name: 'staffInform',
    component: staffInform,
    props: true,
    meta: { requireAuth: true }
  },

  {
    path: '/allPatients',
    name: 'allPatients',
    component: allPatients,
    meta: { requireAuth: true }
  },
  {
    path: '/addPatients',
    name: 'addPatients',
    component: addPatients,
    meta: { requireAuth: true }
  },
  {
    path: '/patientsInform/:pNum',
    name: 'patientsInform',
    component: patientsInform,
    props: true,
    meta: { requireAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach(async (to, from, next) => {
  console.log('to: ', to)
  console.log('from: ', from)
  // 目的路由在meta上是否有設置requireAuth: true
  if (to.meta.requireAuth) {
    // 獲取Cookies當中的login資訊並取得token
    const info = Cookies.get("token")
    // console.log("123");
    console.log(info)
    if (info) {
      // console.log("0000000000000");
      // const token = JSON.parse(info).token;
      // console.log("token:", token);
      // console.log("1111111111");
      // 如果token不為空，且確實有這個欄位則讓路由變更
      if (info.length > 0 || info === undefined) {
        console.log("是來這裡嗎");
        next()
      } else {
        // 未通過則導回login頁面
        console.log("不要鬧了來這裡幹嘛");
        next({ name: 'AdminLogin' })
      }
    } else {
      console.log("222222222222");
      next({ name: 'AdminLogin' })
    }
  } else {
    console.log("33333333333");
    next()
  }
})

export default router
