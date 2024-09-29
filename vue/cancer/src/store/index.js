import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const key ='token'

export default new Vuex.Store({
  state: {
      token:localStorage.getItem('token'),
      loginForm: JSON.parse(sessionStorage.getItem("loginForm"))
  },
  getters: {
    getLogin: state => {
      return state.loginForm;
  }
  },
  mutations: {
    /**类似set操作*/
        //给token赋值
        SET_TOKEN: (state, token) => {
          state.token = token;
          //将信息存储到浏览器中，以至于浏览器关闭时信息还在
          localStorage.setItem("token", token);
      },
      //给userinfo赋值
      SET_USERINFO: (state, userInfo) => {
          state.userInfo = userInfo;
          //session会在每次浏览器关闭时清空，在重新登录后再生成
          //由于sessionStorage不能存储对象，所以要将其存储成字符串的形式
          sessionStorage.setItem("loginForm", JSON.stringify(loginForm));
      },
      //移除用户信息
      REMOVE_INFO: (state) => {
          //移除用户信息时将用户所有的信息都置为空
          state.token = "";
          state.loginForm = {};
          localStorage.setItem("token", "");
          sessionStorage.setItem("loginForm", JSON.stringify(""));
      }
  },
  actions: {
  },
  modules: {
  }
})

// const store = new Vuex.Store({
 
//   state: {
//     // 存储token
//     Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
//   },
 
//   mutations: {
//     // 修改token，并将token存入localStorage
//     changeLogin (state, user) {
//       state.Authorization = user.Authorization;
//       localStorage.setItem('Authorization', user.Authorization);
//     }
//   }
// });

// export default store
