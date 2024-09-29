<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <!-- 返回鍵 -->
        <router-link :to="'/AdminLogin'" class="hidden"
          ><div>
            <a href="#"
              ><img src="../assets/img/back.png" class="back"
            /></a></div
        ></router-link>
        <a class="logo">癌憂Away</a>
      </div>
    </div>

    <div class="container">
      <h1>註　　冊</h1>
      <div class="registered">
        <form action="">
          <!--@submit="handleSubmit"-->
          <div>
            <label>編　　號</label>
            <!-- <a class="staffNum">1111</a> -->
            <input type="text" v-model="staffNum" />
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
          <!-- <div>
            <label>生　　日</label>
            <input type="date" name="dBirthday" />
          </div>
          <div>
            <label>身分證字號</label>
            <input type="text" name="dID" />
          </div> -->
          <div>
            <label>手機號碼</label>
            <input type="text" v-model="staffPhone" />
          </div>
          <!-- <div>
            <label>電子郵件</label>
            <input type="mail" name="dMail" />
          </div>
          <div>
            <label>通訊地址</label>
            <input type="text" name="dAdress" />
          </div> -->
          <div>
            <label>設置密碼</label>
            <input type="password" v-model="staffPassword" />
          </div>
          <!-- <div>
            <label>確認密碼</label>
            <input type="password" />
          </div> -->
          <!-- <div><button type="submit">送出</button></div> -->
          <div><button @click="handleSubmit">送出</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import { register } from "../services/api";
export default {
  data() {
    return {
      staffNum: "",
      staffName: "",
      staffSex: "",
      staffPhone: "",
      staffPassword: "",
    };
  },
  methods: {
    // alert不出來:(
    handleSubmit() {
      register({
        staffNum: this.staffNum,
        staffName: this.staffName,
        staffSex: this.staffSex,
        staffPhone: this.staffPhone,
        staffPassword: this.staffPassword,
      }).then(() => {
        alert("註冊成功");
        this.staffNum = "";
        this.staffName = "";
        this.staffSex = "";
        this.staffPhone = "";
        this.staffPassword = "";
      });
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1025px) {
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

  .container {
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin-top: 50px;
  }

  .registered form {
    padding-top: 50px;
    width: 550px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .registered label {
    width: 125px;
  }

  .staffNum {
    width: 200px;
    color: #859a75;
  }

  .registered select {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 5px;
  }

  .registered div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;
    font-weight: bolder;
  }

  .registered input {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
  }

  .registered button {
    width: 70px;
    height: 30px;
    text-align: center;
    margin: 35px 0;
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

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .registered form {
    padding-top: 50px;
    width: 550px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .registered label {
    width: 125px;
  }

  .staffNum {
    width: 200px;
    color: #859a75;
  }

  .registered select {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
  }

  .registered div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;
    font-weight: bolder;
  }

  .registered input {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
  }

  .registered button {
    width: 70px;
    height: 30px;
    text-align: center;
    margin: 35px 0;
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
    padding: 0;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .registered form {
    padding-top: 50px;
    width: 550px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .registered label {
    width: 125px;
  }

  .staffNum {
    width: 200px;
    color: #859a75;
  }

  .registered select {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
  }

  .registered div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;
    font-weight: bolder;
  }

  .registered input {
    border: none;
    outline: none;
    font-size: 18px;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
  }

  .registered button {
    width: 70px;
    height: 30px;
    text-align: center;
    margin: 35px 0;
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
    padding: 0;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
    width: 400px;
  }

  .registered form {
    padding-top: 50px;
    width: 400px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .registered label {
    width: 110px;
  }

  .staffNum {
    width: 200px;
    color: #859a75;
  }

  .registered div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 22px;
    font-weight: bolder;
  }

  .registered select {
    border: none;
    outline: none;
    font-size: 16px;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
  }

  .registered input {
    border: none;
    outline: none;
    font-size: 16px;
    background-color: #ece9db;
    height: 30px;
    width: 200px;
    border-radius: 7px;
    padding: 8px;
  }

  .registered button {
    width: 70px;
    height: 30px;
    text-align: center;
    margin: 35px 0;
    border: none;
    border-radius: 7px;
    background-color: #859a75;
    font-size: 16px;
    color: white;
  }

  .registered button:hover {
    background-color: #a7b59d;
  }
}
</style>