<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <div class="banner">
          <!-- 返回鍵 -->
          <router-link :to="'/'" class="hidden"
            ><div>
              <a href="#"
                ><img src="../assets/img/back.png" class="back"
              /></a></div
          ></router-link>
          <a class="logo">癌憂Away</a>
        </div>
      </div>

      <div class="container">
        <h1>一般登入</h1>
        <div class="userLogin">
          <div>
            <label>帳號</label>
            <input
              type="text"
              v-model="loginForm.pID"
              v-on:keyup.enter="handleLogin"
            />
          </div>
          <div>
            <label>密碼</label>
            <input
              type="password"
              v-model="loginForm.password"
              v-on:keyup.enter="handleLogin"
            />
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
export default {
  data() {
    return {
      loginForm: {
        pID: "",
        password: "",
        token: "",
      },
    };
  },

  methods: {
    // 回上一頁
    back() {
      this.$router.go(-1);
    },

    handleLogin() {
      const token = "asds32adsavrAS3Fadf5567"; // token本身就是加密過的字串，隨意
      let pID = this.loginForm.pID;
      let password = this.loginForm.password;
      // 帳號密碼需驗證不能為空
      if (pID == "a" && password == "a") {
        this.loginForm.token = token;
      } else if (pID == "" || password == "") {
        alert("帳號密碼不能為空");
      } else {
        alert("帳號或密碼錯誤");
      }

      Cookies.set("login", JSON.stringify(this.loginForm), { expires: 1 });
      console.log(this.loginForm);

      // cookie當中有token被設置才能改變路由
      if (Cookies.get("login") && this.loginForm.token) {
        this.$router.push({ name: "patient" });
      }
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

.userLogin {
  font-size: 20px;
  font-weight: bold;
  padding-top: 40px;
  /* line-height: 100px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userLogin div {
  display: flex;
  align-items: center;
  /* margin-top: 50px; */
  height: 80px;
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
  font-size: 16px;
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

  .userLogin {
    font-size: 20px;
  }

  button {
    font-size: 17px;
    width: 70px;
    height: 30px;
  }
}

@media screen and (min-width: 550px) and (max-width: 768px) {
  h1 {
    font-size: 30px;
  }

  .userLogin {
    font-size: 22px;
  }

  button {
    font-size: 17px;
    width: 70px;
    height: 30px;
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

  .userLogin {
    font-size: 28px;
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
}
</style>