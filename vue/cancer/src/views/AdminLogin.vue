<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <div class="banner">
          <!-- 返回鍵 -->
          <router-link :to="'/login'" class="hidden"
            ><div>
              <a href="#"
                ><img src="../assets/img/back.png" class="back"
              /></a></div
          ></router-link>
          <a class="logo">癌憂Away</a>
        </div>
      </div>

      <div class="container">
        <div class="loginImg">
          <img src="../assets/img/loginImg3.png" alt="" />
        </div>
        <div class="loginInput">
          <h1>醫護人員登入</h1>
          <div class="adminLogin">
            <div>
              <label>帳號</label>
              <input
                type="text"
                v-model="staffNum"
                v-on:keyup.enter="handleLogin"
              />
            </div>
            <div>
              <label>密碼</label>
              <input
                type="password"
                v-model="staffPassword"
                v-on:keyup.enter="handleLogin"
              />
            </div>
            <!-- <div class="registered">
              <router-link :to="'/registered'"><a>人員註冊</a></router-link>
            </div> -->
          </div>
          <div><button @click="handleLogin">確認</button></div>
          <!-- <div><button @click="removeCookie">cookie</button></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入js-cookie
import Cookies from "js-cookie";
// import VConsole from "vconsole";

// 引入 api function
import { login } from "../services/api.js";

// let vConsole = new VConsole();
export default {
  data() {
    return {
      //  loginData:[],
      loginForm: [],
      staffNum: "",
      staffPassword: "",
      token: "",
      fullWidth: "",
      fullHeight: "",
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
          alert("登入成功");
          this.$router.push({ name: "Index" });
        } else {
          this.staffNum = "";
          this.staffPassword = "";
          alert("登入失敗");
        }
      });

      // console.log("kkkken:", this.token);
    },
  },

  mounted() {
    const vm = this;
    vm.fullWidth = window.innerWidth;
    vm.fullHeight = window.innerHeight;
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
      vm.fullHeight = window.innerHeight;
    };
  },
};
</script>

<style scoped>
.container {
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
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
  .container {
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  .loginImg {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .loginImg img {
    width: 250px;
    height: 250px;
  }

  .loginInput {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
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
  .container {
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  .loginImg {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .loginImg img {
    width: 350px;
    height: 350px;
  }

  .loginInput {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

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

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .header {
    height: 80px;
  }

  .banner {
    height: 80px;
    display: flex;
    justify-content: center;
  }

  .back {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 15px;
    left: 30px;
  }

  .logo {
    font-size: 50px;
  }

  .container {
    width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  .loginImg {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .loginImg img {
    width: 450px;
    height: 450px;
  }

  .loginInput {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  h1 {
    font-size: 32px;
  }

  form {
    padding-top: 30px;
  }

  .adminLogin {
    font-size: 26px;
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

@media screen and (min-width: 1025px) {
  .header {
    height: 80px;
  }

  .banner {
    height: 80px;
    display: flex;
    justify-content: center;
  }

  .logo {
    font-size: 50px;
  }

  .container {
    width: 1000px;
    height: calc(90vh);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .loginImg {
    width: 50%;
  }

  .loginImg img {
    width: 500px;
    height: 500px;
  }

  .loginInput {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 32px;
  }

  form {
    padding-top: 30px;
  }

  .adminLogin {
    font-size: 26px;
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