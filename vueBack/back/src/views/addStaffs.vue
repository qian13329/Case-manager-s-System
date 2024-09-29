<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <router-link to="/index"><a class="logo">癌憂Away</a></router-link>
        <nav>
          <div>
            <router-link to="/index"><a>全部人員</a></router-link>
          </div>
          <div>
            <router-link to="/allPatients"><a>全部病患</a></router-link>
          </div>
          <div>
            <a @click="handleLogout()">登出</a>
          </div>
        </nav>
      </div>
    </div>

    <div class="container">
      <h1>新 增 人 員</h1>
      <div class="registered">
        <!-- <div>
          <label>編　　號</label>
          <input type="text" v-model="staffNum" />
        </div> -->
        <div>
          <label>身　　分</label>
          <div class="idCheckBox">
            <input type="radio" id="1" value="1" v-model="identify" />醫師
            <input type="radio" id="2" value="2" v-model="identify" />個管師
            <input type="radio" id="3" value="3" v-model="identify" />管理員
          </div>
        </div>
        <div>
          <label>姓　　名</label>
          <input type="text" v-model="staffName" />
        </div>
        <div>
          <label>性　　別</label>
          <select id="staffSex" v-model="staffSex">
            <option value="1">男</option>
            <option value="2">女</option>
          </select>
        </div>
        <div>
          <label>生　　日</label>
          <input type="date" v-model="staffBirthday" />
        </div>
        <div>
          <label>身分證字號</label>
          <input type="text" v-model="staffID" />
        </div>
        <div>
          <label>手機號碼</label>
          <input type="text" v-model="staffPhone" />
        </div>
        <div>
          <label>電子郵件</label>
          <input type="mail" v-model="staffEmail" />
        </div>
        <div>
          <label>通訊地址</label>
          <input type="text" v-model="staffAddress" />
        </div>
        <!-- <div>
          <label>設置密碼</label>
          <input type="password" v-model="staffPassword" />
        </div> -->
        <!-- <div>
            <label>確認密碼</label>
            <input type="password" />
          </div> -->
        <div><button @click="handleSubmit()">送出</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { register, logout } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      staffName: "",
      staffID: "",
      staffBirthday: "",
      staffSex: "",
      staffPhone: "",
      staffAddress: "",
      staffEmail: "",
      identify: "",
      // identify: "",
      token: "",
    };
  },
  methods: {
    handleLogout() {
      logout({
        token: this.token,
      }).then((res) => {
        console.log(res);
        Cookies.remove("token");
        window.location.href = "/"
      });
    },
    handleSubmit() {
      register({
        staffName: this.staffName,
        staffSex: this.staffSex,
        staffPhone: this.staffPhone,
        staffID: this.staffID,
        staffBirthday: this.staffBirthday,
        staffEmail: this.staffEmail,
        staffAddress: this.staffAddress,
        identify: this.identify,
        //token: this.token,
      }).then((res) => {
        alert("註冊成功\n預設密碼為身份證字號");
        this.staffName = "";
        this.staffSex = "";
        this.staffPhone = "";
        this.staffID = "";
        this.staffBirthday = "";
        this.staffEmail = "";
        this.staffAddress = "";
        this.identify = "";
        // console.log(res.data);
        window.location.href = "/index";
      });
    },
  },

  mounted() {
    this.token = Cookies.get("token");
  },
};
</script>

<style scoped>
@media screen and (min-width: 1025px) {
  .container {
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin-top: 50px;
  }

  .registered {
    padding-top: 50px;
    padding-left: 40px;
    width: 550px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .registered div {
    display: flex;
    align-items: center;
    /* justify-content:space-around; */
    font-size: 25px;
    font-weight: bolder;
  }

  .registered label {
    width: 125px;
    margin-right: 100px;
  }

  .idCheckBox {
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .registered input[type="text"],
  input[type="mail"],
  input[type="date"],
  input[type="password"],
  select {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
  }

  .registered textarea {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
    resize: none;
  }

  .registered button {
    width: 70px;
    height: 30px;
    /* text-align: center; */
    margin: 35px auto;
    border: none;
    border-radius: 7px;
    background-color: #859a75;
    font-size: 18px;
    color: white;
  }

  .registered button:hover {
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
    margin-top: 50px;
  }

  .registered {
    padding-top: 50px;
    padding-left: 40px;
    width: 550px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .registered div {
    display: flex;
    align-items: center;
    /* justify-content:space-around; */
    font-size: 25px;
    font-weight: bolder;
  }

  .registered label {
    width: 125px;
    margin-right: 100px;
  }

  .idCheckBox {
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .registered input[type="text"],
  input[type="mail"],
  input[type="date"],
  input[type="password"],
  select {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
  }

  .registered textarea {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
    resize: none;
  }

  .registered button {
    width: 70px;
    height: 30px;
    /* text-align: center; */
    margin: 35px auto;
    border: none;
    border-radius: 7px;
    background-color: #859a75;
    font-size: 18px;
    color: white;
  }

  .registered button:hover {
    background-color: #a7b59d;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  .container {
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin: 50px 0;
    font-size: 28px;
    /* width: 500px; */
  }

  .registered {
    /* padding-top: 50px; */
    padding-left: 40px;
    width: 500px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .registered div {
    display: flex;
    align-items: center;
    /* justify-content:space-around; */
    font-size: 22px;
    font-weight: bolder;
  }

  .registered label {
    width: 110px;
    margin-right: 70px;
  }

  .idCheckBox {
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .registered input[type="text"],
  input[type="mail"],
  input[type="date"],
  input[type="password"],
  select {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
  }

  .registered textarea {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
    resize: none;
  }

  .registered button {
    width: 70px;
    height: 30px;
    /* text-align: center; */
    margin: 35px auto;
    border: none;
    border-radius: 7px;
    background-color: #859a75;
    font-size: 18px;
    color: white;
  }

  .registered button:hover {
    background-color: #a7b59d;
  }
}

@media screen and (max-width: 550px) {
  .container {
    width: 100%;
    margin: 0 auto;
    min-width: 400px;
  }

  h1 {
    text-align: center;
    margin: 50px 0;
    font-size: 28px;
    /* width: 400px; */
  }

  .registered {
    /* padding-top: 50px; */
    padding-left: 30px;
    width: 400px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .registered div {
    display: flex;
    align-items: center;
    /* justify-content:space-around; */
    font-size: 18px;
    font-weight: bolder;
  }

  .registered label {
    width: 100px;
    margin-right: 40px;
  }

  .idCheckBox {
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .registered input[type="text"],
  input[type="mail"],
  input[type="date"],
  input[type="password"],
  select {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
  }

  .registered textarea {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
    resize: none;
  }

  .registered button {
    width: 70px;
    height: 30px;
    /* text-align: center; */
    margin: 35px auto;
    border: none;
    border-radius: 7px;
    background-color: #859a75;
    font-size: 18px;
    color: white;
  }

  .registered button:hover {
    background-color: #a7b59d;
  }
}
</style>