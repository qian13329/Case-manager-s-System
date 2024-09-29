<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <router-link :to="'/setting'" class="hidden">
          <div>
            <a href="#"><img src="../assets/img/back.png" class="back" /></a>
          </div>
        </router-link>
        <a class="logo">癌憂Away</a>
        <nav>
          <div>
            <router-link :to="'/CheckIndex'"><a>今日事務</a></router-link>
          </div>
          <div>
            <router-link :to="'/index'"><a>病患資料</a></router-link>
          </div>
          <div>
            <router-link :to="'/depressionIndex'"
              ><a>憂鬱症專區</a></router-link
            >
          </div>
          <div>
            <router-link :to="'/setting'"><a>設定</a></router-link>
          </div>
        </nav>
      </div>
    </div>

    <div class="container">
      <h1>更改密碼</h1>
      <div class="updatePwd">
        <div>
          <label for="oldPwd">請輸入舊密碼</label>
          <input id="oldPasswd" type="password" v-model="oldPasswd" />
        </div>
        <div>
          <label for="newPwd">請輸入新密碼</label>
          <input id="newPasswd" type="password" v-model="newPasswd" />
        </div>
        <div>
          <label for="checkPwd">　　確認密碼</label>
          <input id="checkPasswd" type="password" v-model="checkPasswd" />
        </div>
        <div><button @click="handleSubmit">送出</button></div>
      </div>
    </div>

    <div class="footer">
      <div class="footerBg" :class="{ footerBgAbsolute: fullHeight < '500' }">
        <router-link :to="'/CheckIndex'" class="router-link-footer">
          <div>
            <img src="../assets/img/check-un.png" alt="今日事務" />
            <a>今日事務</a>
          </div>
        </router-link>

        <router-link :to="'/index'" class="router-link-footer">
          <div>
            <img src="../assets/img/patient-un.png" alt="病患資料" />
            <a>病患資料</a>
          </div>
        </router-link>

        <router-link :to="'/depressionIndex'" class="router-link-footer">
          <div>
            <img src="../assets/img/broken-heart-un.png" alt="憂鬱症專區" />
            <a>憂鬱症專區</a>
          </div>
        </router-link>

        <router-link :to="'/setting'" class="router-link-footer">
          <div>
            <img src="../assets/img/settings.png" alt="設定" />
            <a>設定</a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { updatePasswd, staffInform } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      fullHeight: 0,
      fullWidth: 0,
      oldPasswd: "",
      newPasswd: "",
      checkPasswd: "",
      token: "",
    };
  },
  props: {
    item: Object,
  },
  methods: {
    handleSubmit(id, oldPasswd, newPasswd, checkPasswd) {
      if (
        (this.oldPasswd == "") |
        (this.newPasswd == "") |
        (this.checkPasswd == "")
      ) {
        alert("輸入框不得為空！");
      } else if (this.newPasswd != this.checkPasswd) {
        alert("確認密碼錯誤！");
      } else {
        updatePasswd({
          // id: id,
          oldPasswd: this.oldPasswd,
          newPasswd: this.newPasswd,
          checkPasswd: this.checkPasswd,
          token: this.token,
        }).then((res) => {
          if (res.data == "error") {
            alert("好像哪裡有錯喔");
          } else {
            alert("修改成功");
          }
          this.oldPasswd = "";
          this.newPasswd = "";
          this.checkPasswd = "";
        });
      }
    },
  },

  mounted() {
    // 取得頁面高度
    const vm = this;
    vm.fullWidth = window.innerWidth;
    vm.fullHeight = window.innerHeight;
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
      vm.fullHeight = window.innerHeight;
    };
    this.token = Cookies.get("token");
  },
};
</script>

<style scoped>
@media screen and (max-width: 551px) {
  .container {
    width: 100%;
    min-width: 320px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .updatePwd {
    padding-top: 50px;
    width: 320px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .updatePwd div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
    font-weight: bolder;
  }

  .updatePwd input {
    border: none;
    background-color: #ece9db;
    height: 30px;
    width: 150px;
    border-radius: 7px;
    /* padding-left: 7px; */
    font-size: 20px;
    padding: 10px;
    outline: none;
  }

  .updatePwd button {
    width: 70px;
    height: 30px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-top: 40px;
    border: none;
    border-radius: 7px;
    background-color: #859a75;
    color: white;
  }

  .updatePwd button:hover {
    background-color: #a7b59d;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  .container {
    width: 100%;
    min-width: 700px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .updatePwd {
    padding-top: 50px;
    width: 450px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .updatePwd div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;
    font-weight: bolder;
  }

  .updatePwd input {
    border: none;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    font-size: 22px;
    padding: 10px;
    outline: none;
  }

  .updatePwd button {
    width: 70px;
    height: 30px;
    text-align: center;
    margin-top: 40px;
    border: none;
    border-radius: 7px;
    background-color: #859a75;
    color: white;
    font-size: 18px;
  }

  .updatePwd button:hover {
    background-color: #a7b59d;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .updatePwd {
    padding-top: 50px;
    width: 450px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .updatePwd div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 22px;
    font-weight: bolder;
  }

  .updatePwd input {
    border: none;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    font-size: 24px;
    padding: 10px;
    outline: none;
  }

  .updatePwd button {
    width: 70px;
    height: 30px;
    text-align: center;
    margin-top: 40px;
    border: none;
    border-radius: 7px;
    background-color: #859a75;
    color: white;
    font-size: 18px;
  }

  .updatePwd button:hover {
    background-color: #a7b59d;
  }
}

@media screen and (min-width: 1025px) {
  .container {
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .updatePwd {
    padding-top: 50px;
    width: 450px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .updatePwd div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;
    font-weight: bolder;
  }

  .updatePwd input {
    border: none;
    outline: none;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    font-size: 22px;
    padding: 10px;
  }

  .updatePwd button {
    width: 70px;
    height: 30px;
    text-align: center;
    margin-top: 40px;
    border: none;
    border-radius: 7px;
    background-color: #859a75;
    color: white;
    font-size: 18px;
  }

  .updatePwd button:hover {
    background-color: #a7b59d;
  }
}
</style>