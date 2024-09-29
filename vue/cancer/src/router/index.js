import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

// 登入
import Login from '../views/Login.vue'
import AdminLogin from '../views/AdminLogin.vue'
import UserLogin from '../views/UserLogin.vue'
import registered from '../views/registered.vue'

// 今日事務
import CheckIndex from '../views/CheckIndex.vue'

// 病患資料
import Index from '../views/Index.vue'
import PatientList from '../views/PatientList.vue'
import history from '../views/history.vue'
import diseaseHistory from '../views/diseaseHistory.vue'

// 新增資料
import insert from '../views/insert.vue'
import insertPInform from '../views/insertPInform.vue'
import insertPInformBasic from '../views/insertPInformBasic.vue'
import insertPInformBiochemical from '../views/insertPInformBiochemical.vue'
import insertPInformCancer from '../views/insertPInformCancer.vue'

// 憂鬱症專區
import depressionIndex from '../views/depressionIndex.vue'
// import depressionTest from '../views/DepressionTest.vue'
// import depressionScore from '../views/depressionScore.vue'

// 設定
import setting from '../views/setting.vue';
import settingUpdatePwd from '../views/settingUpdatePwd.vue';
import settingSchedule from '../views/settingSchedule.vue';
// import schedule from '../views/schedule.vue';
import settingProfile from '../views/settingProfile.vue';

// 編輯頁面
import editPInformBasic from '../views/editPInformBasic.vue';
import editPInformCancer from '../views/editPInformCancer.vue';

// 病患端
import patient from '../views/patient.vue';

Vue.use(VueRouter)

const routes = [
  // 登入
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/AdminLogin',
    name: 'AdminLogin',
    component: AdminLogin
  },

  {
    path: '/UserLogin',
    name: 'UserLogin',
    component: UserLogin
  },

  {
    path: '/registered',
    name: 'registered',
    component: registered
  },

  // 今日事務
  {
    path: '/CheckIndex',
    name: 'CheckIndex',
    component: CheckIndex,
    meta: { requireAuth: true }
  },

  // 病患資料
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: { requireAuth: true }  //用來作為此頁是否需要權限驗證的設定
  },
  {
    path: '/PatientList/:pNum',
    name: 'PatientList',
    component: PatientList,
    props: true,
    meta: { requireAuth: true }
  },
  {
    path: '/history/:pNum',
    name: 'history',
    component: history,
    props: true,
    meta: { requireAuth: true }
  },

  {
    path: '/diseaseHistory/:pNum',
    name: 'diseaseHistory',
    component: diseaseHistory,
    props: true,
    meta: { requireAuth: true }
  },

  // 新增資料
  {
    path: '/insert',
    name: 'insert',
    component: insert,

  },
  {
    path: '/insertPInform',
    name: 'insertPInform',
    component: insertPInform
  },
  {
    path: '/insertPInformBasic',
    name: 'insertPInformBasic',
    component: insertPInformBasic
  },
  {
    path: '/insertPInformBiochemical',
    name: 'insertPInformBiochemical',
    component: insertPInformBiochemical
  },
  {
    path: '/insertPInformCancer',
    name: 'insertPInformCancer',
    component: insertPInformCancer
  },


  // 憂鬱症專區
  {
    path: '/depressionIndex',
    name: 'depressionIndex',
    component: depressionIndex,
    meta: { requireAuth: true },  //用來作為此頁是否需要權限驗證的設定
  },
  // {
  //   path: '/depressionTest',
  //   name: 'depressionTest',
  //   component: depressionTest,
  //   meta: { requireAuth: true }
  // },
  // {
  //   path: '/depressionScore',
  //   name: 'depressionScore',
  //   component: depressionScore,
  //   meta: { requireAuth: true }
  // },

  // 設定
  {
    path: '/setting',
    name: 'setting',
    component: setting,
    meta: { requireAuth: true }
  },
  {
    path: '/settingUpdatePwd',
    name: 'settingUpdatePwd',
    component: settingUpdatePwd,
    meta: { requireAuth: true }
  },
  {
    path: '/settingSchedule',
    name: 'settingSchedule',
    component: settingSchedule,
    meta: { requireAuth: true }
  },
  // {
  //   path: '/schedule',
  //   name: 'schedule',
  //   component: schedule,
  // },
  {
    path: '/settingProfile',
    name: 'settingProfile',
    component: settingProfile,
    meta: { requireAuth: true }
  },

  // 編輯
  {
    path: '/editPInformBasic',
    name: 'editPInformBasic',
    component: editPInformBasic,
    meta: { requireAuth: true }
  },
  {
    path: '/editPInformCancer',
    name: 'editPInformCancer',
    component: editPInformCancer,
    meta: { requireAuth: true }
  },

  // 病患端
  {
    path: '/patient',
    name: 'patient',
    component: patient,
    // meta: { requireAuth: true }
  },
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
    console.log("123");
    console.log(info)
    if (info) {
      console.log("0000000000000");
      // const token = JSON.parse(info).token;
      // console.log("token:", token);
      console.log("1111111111");
      // 如果token不為空，且確實有這個欄位則讓路由變更
      if (info.length > 0 || info === undefined) {
        console.log("是來這裡嗎");
        next()
      } else {
        // 未通過則導回login頁面
        console.log("不要鬧了來這裡幹嘛");
        next({ name: 'Login' })
      }
    } else {
      console.log("222222222222");
      next({ name: 'Login' })
    }
  } else {
    console.log("33333333333");
    next()
  }
})

export default router
