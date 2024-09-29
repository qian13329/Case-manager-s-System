<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
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
      <div class="title">憂鬱情緒檢測量表</div>
      <!-- <div class="dataList">
        <div class="patientData">
          <div>身分證字號</div>
          <input type="text" class="textbox" v-model="pID" />
        </div>
        <div class="patientData">
          <div>檢測時間</div>
          <input type="date" class="textbox textbox-time" v-model="pDate" />
        </div>
      </div>
      <h2>
        <i
          >請您根據最近一星期內以來身體與情緒的真正感覺，勾選最符合的一項.ᐟ.ᐟ</i
        >
      </h2> -->
      <!-- <depressionTest
          v-for="item in depressionTestList"
          :key="item.qID"
          :item="item"
        /> -->
      <depressionTest />
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
            <img src="../assets/img/broken-heart.png" alt="憂鬱症專區" />
            <a>憂鬱症專區</a>
          </div>
        </router-link>

        <router-link :to="'/setting'" class="router-link-footer">
          <div>
            <img src="../assets/img/settings-un.png" alt="設定" />
            <a>設定</a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
// import { detection } from "../services/api";
// import depressionTestList from "../data/depressionTestList.json";
import depressionTest from "../components/depressionTest.vue";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      // depressionTestList: depressionTestList,
      fullHeight: 0,
      fullWidth: 0,
      // id: "",
      // pID: "",
      // pDate: "",
      token: "",
    };
  },
  components: {
    depressionTest,
    // depressionTestList,
  },
  methods: {},

  mounted() {
    this.token = Cookies.get("token");
    // 取得頁面高度
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

<style   scoped>
.container {
  font-weight: bold;
}

.tableBn {
  width: 200px;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.bnTable {
  /* margin-left: 2%; */
  font-size: 20px;
  color: #ffffff;
  font-weight: bolder;
  text-align: center;
  width: 90px;
  height: 35px;
  border: 0;
  background-color: #859a75;
  border-radius: 10px;
}

.bnTable:hover {
  background-color: #a7b59d;
}

/* 電腦 */
@media screen and (min-width: 1025px) {
  .title {
    font-size: 40px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  .dataList {
    max-width: 900px;
    margin: 40px auto;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .patientData {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 30px;
  }

  .textbox {
    width: 200px;
    height: 35px;
    margin-left: 10px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  h2 {
    text-align: center;
    color: rgb(216, 6, 6);
    text-decoration: underline;
    margin: 60px;
  }

  input {
    width: 18px;
    height: 18px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .title {
    font-size: 35px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  .dataList {
    width: 95%;
    max-width: 800px;
    margin: 40px auto;
    font-size: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .patientData {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 25px;
  }

  .textbox {
    width: 180px;
    height: 35px;
    margin-left: 10px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  h2 {
    font-size: 20px;
    text-align: center;
    color: rgb(216, 6, 6);
    text-decoration: underline;
    margin: 60px;
  }

  input {
    width: 18px;
    height: 18px;
  }
}

@media screen and (min-width: 551px) and (max-width: 767px) {
  .container {
    min-width: 550px;
  }

  .title {
    font-size: 35px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  .dataList {
    width: 95%;
    max-width: 700px;
    margin: 40px auto;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .patientData {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 20px;
  }

  .textbox {
    width: 130px;
    height: 28px;
    margin-left: 10px;
    font-size: 16px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  h2 {
    font-size: 18px;
    text-align: center;
    color: rgb(216, 6, 6);
    text-decoration: underline;
    margin: 60px;
  }

  input {
    width: 18px;
    height: 18px;
  }
}

/* 手機 */
@media screen and (max-width: 550px) {
  /*.container {
    min-width: 500px;
  }*/

  .title {
    font-size: 28px;
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
  }

  .dataList {
    width: 320px;
    height: 100px;
    margin: 30px auto;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .patientData {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .textbox {
    width: 120px;
    height: 28px;
    margin-left: 10px;
    font-size: 14px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  .textbox-time {
    margin-left: 27px;
  }

  h2 {
    font-size: 16px;
    text-align: center;
    color: rgb(216, 6, 6);
    text-decoration: underline;
    margin: 40px;
  }

  input {
    width: 18px;
    height: 18px;
  }
}
</style>