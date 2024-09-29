<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <div class="banner">
          <!-- 返回鍵 -->
          <router-link :to="'/'" class="hidden">
            <div>
              <a href="#"><img src="../assets/img/back.png" class="back" /></a>
            </div>
          </router-link>
          <a class="logo">癌憂Away</a>
        </div>
      </div>

      <div class="container">
        <h1>醫護人員登入</h1>
        <div class="adminLogin">
          <div>
            <label>帳號</label>
            <input type="text" v-on:keyup.enter="handleLogin" v-model="staffNum" />
          </div>
          <div>
            <label>密碼</label>
            <input type="password" v-on:keyup.enter="handleLogin" v-model="staffPassword" />
          </div>
        </div>
        <div><button @click="handleLogin">確認</button></div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入js-cookie
import Cookies from "js-cookie";
const TokenKey = "Admin-Token";
export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(tcuncuoken) {
  return Cookies.set(TokenKey, token);
}

// 引入 api function
import { login } from "../services/api.js";

export default {
  data() {
    return {
      //  loginData:[],
      loginForm: [],
      staffNum: "",
      staffPassword: "",
      token: "",
    };
  },

  methods: {
    // 回上一頁
    back() {
      this.$router.go(-1);
    },

    handleLogin() {
      login({
        staffNum: this.staffNum,
        staffPassword: this.staffPassword,
        // token: this.token,
      }).then((res) => {
        console.log(res);
        console.log(res.data.token);
        this.token = res.data.token;
        console.log("tokennnnn:", this.token);

        Cookies.set("token", res.data.token);
        if (this.token != undefined) {
          console.log(res.data)
          this.$router.push({ name: "allStaffs" });
        } else {
          this.staffNum = "";
          this.staffPassword = "";
          alert("請重新確認帳號密碼");
        }
      });
    },

    // 將Cookies清除的測試用button事件
    // removeCookie() {
    //   Cookies.remove("login");
    // },
  },
};
</script>

<style scoped>
.container {
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-top: 40px;
  text-align: center;
}

form {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.adminLogin div {
  font-weight: bold;
  display: flex;
  align-items: center;
}

input {
  font-size: 18px;
  outline: none;
  padding-left: 10px;
  margin-left: 10px;
  border: none;
  background-color: #ece9db;
  height: 30px;
  width: 200px;
  border-radius: 7px;
}

button {
  width: 80px;
  height: 30px;
  text-align: center;
  font-weight: bold;
  margin-top: 40px;
  border: none;
  border-radius: 7px;
  background-color: #859a75;
  color: white;
}

button:hover {
  background-color: #a7b59d;
}

@media screen and (max-width: 550px) {
  h1 {
    font-size: 25px;
  }

  form {
    padding-top: 20px;
  }

  .adminLogin {
    font-size: 20px;
  }

  .adminLogin div {
    margin-top: 40px;
  }

  button {
    font-size: 17px;
    width: 70px;
    height: 30px;
  }

  .registered {
    font-size: 16px;
    color: #d1a57f;
    text-decoration: underline;
    display: flex;
    justify-content: center;
  }
}

@media screen and (min-width: 550px) and (max-width: 768px) {
  h1 {
    font-size: 30px;
  }

  form {
    padding-top: 20px;
  }

  .adminLogin {
    font-size: 22px;
  }

  .adminLogin div {
    margin-top: 40px;
  }

  button {
    font-size: 17px;
    width: 70px;
    height: 30px;
  }

  .registered {
    font-size: 18px;
    color: #d1a57f;
    text-decoration: underline;
    display: flex;
    justify-content: center;
  }
}

@media screen and (min-width: 768px) {
  .header {
    height: 100px;
  }

  .banner {
    height: 100px;
    display: flex;
    justify-content: center;
  }

  .logo {
    font-size: 60px;
  }

  h1 {
    font-size: 35px;
  }

  form {
    padding-top: 30px;
  }

  .adminLogin {
    font-size: 28px;
  }

  .adminLogin div {
    margin-top: 50px;
  }

  input {
    height: 35px;
    width: 240px;
  }

  button {
    font-size: 20px;
    width: 80px;
    height: 35px;
  }

  .registered {
    font-size: 20px;
    color: #d1a57f;
    text-decoration: underline;
    display: flex;
    justify-content: center;
  }
}
</style>