<template>
  <div class="wrapper">
    <!-- 標題 -->
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

    <!-- 搜尋 -->
    <div class="container--search">
      <div class="search">
        <input
          name="searchPatient"
          class="searchBox"
          placeholder="搜尋病患"
          v-model="searchContent"
        />
        <button class="button" name="search" @click="search()">搜尋</button>
        <!-- <div class="button" type="submit" name="search">搜尋</div> -->
        <router-link
          :to="{
            name: 'insertPInformBasic',
            params: {
              staffNum: this.staffNum,
            },
          }"
          ><img class="addPatients" src="../assets/img/add.png"
        /></router-link>
      </div>
    </div>

    <!-- 列管病患 -->
    <div class="container--patientList">
      <patientList
        v-for="item in patientData"
        :key="item.id"
        :item="item"
        :searchContent="searchContent"
      />
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
            <img src="../assets/img/patient.png" alt="病患資料" />
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
            <img src="../assets/img/settings-un.png" alt="設定" />
            <a>設定</a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import patientData from "../data/patientData.json";
import patientList from "../components/patientList.vue";
import { patient, searchPatient } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      patientData: [],
      searchPatientData: [],
      // patientData: patientData,
      isCollapse: false,
      fullHeight: 0,
      fullWidth: 0,
      searchContent: "",
      token: "",
      staffNum: "",
    };
  },
  watch: {},
  methods: {
    // 抓staffNum
    getStaffNum(staffNum) {
      this.staffNum = staffNum;
    },

    // 搜尋病患
    search() {
      searchPatient({
        pName: this.searchContent,
        token: this.token,
      }).then((res) => {
        console.log(res);
        console.log(this.searchContent);
        this.patientData = res.data;
      });
    },

    // 所有病患
    getAllPatient() {
      patient({
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.patientData=res.data;
      });
    },
  },

  computed: {},
  components: {
    patientList,
  },

  mounted() {
    this.token = Cookies.get("token");
    this.getAllPatient();

    // document.cookie = token;
    // Cookies.get();
    // console.log("token");
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

<style scoped>
@media screen and (min-width: 1025px) {
  .container--search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 900px;
    height: 40px;
    width: 60%;
    margin: 0 auto;
    margin-top: 40px;
  }

  .search {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .searchBox {
    width: 90%;
    height: 45px;
    line-height: 45px;
    padding-left: 10px;
    border: 3px solid #859a75;
    outline: none;
    font-size: 20px;
  }

  .addPatients {
    width: 40px;
    height: 40px;
    margin-left: 20px;
  }

  .button {
    background-color: #859a75;
    color: white;
    width: 20%;
    max-width: 63px;
    min-width: 36px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border: 0;
    font-size: 19px;
  }

  .container--patientList {
    width: 960px;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
  }

  .patientList-title {
    width: 100%;
    height: 50px;
    background-color: #ece9db;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .patientList-title div {
    width: 25%;
    text-align: center;
  }
}

/* pad */
@media screen and (min-width: 767px) and (max-width: 1024px) {
  .container--search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 40px;
    width: 60%;
    margin: 0 auto;
    margin-top: 40px;
  }

  .search {
    width: 100%;
    max-width: 550px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .searchBox {
    width: 90%;
    height: 40px;
    /*border: 1.8px solid #ece9db;*/
    border: 3px solid #859a75;
    line-height: 35px;
    padding-left: 10px;
    outline: none;
    font-size: 16px;
  }

  .addPatients {
    width: 40px;
    height: 40px;
    margin-left: 20px;
  }

  .button {
    background-color: #859a75;
    color: white;
    width: 20%;
    max-width: 63px;
    min-width: 36px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 0;
  }

  .container--patientList {
    /*width: 100%;*/
    width: 600px;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 100px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
  }

  .patientList-title {
    width: 100%;
    height: 50px;
    background-color: #ece9db;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .patientList-title div {
    width: 25%;
    text-align: center;
  }
}

/* phone row */
@media screen and (min-width: 550px) and (max-width: 767px) {
  .container--search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 30px;
    width: 80%;
    max-width: 450px;
    margin: 0 auto;
    margin-top: 30px;
  }

  .search {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .searchBox {
    width: 100%;
    min-width: 200px;
    height: 30px;
    outline: none;
    line-height: 35px;
    padding-left: 10px;
    /*border: 1.8px solid #ece9db;*/
    border: 3px solid #859a75;
  }

  .addPatients {
    width: 40px;
    height: 40px;
    margin-left: 20px;
  }

  .button {
    background-color: #859a75;
    color: white;
    width: 15%;
    min-width: 45px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: small;
    border: 0;
  }

  .container--patientList {
    width: 510px;
    margin: 0 auto;
    margin-top: 40px;
    min-width: 300px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    padding-bottom: 90px;
  }

  .patientList-title {
    width: 100%;
    height: 40px;
    background-color: #ece9db;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .patientList-title div {
    width: 25%;
    text-align: center;
  }
}

/* phone cloumn*/
@media screen and (max-width: 550px) {
  .container--search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 30px;
    width: 315px;
    margin: 0 auto;
    margin-top: 30px;
  }

  .search {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .searchBox {
    width: 90%;
    max-width: 250px;
    min-width: 200px;
    height: 30px;
    line-height: 35px;
    padding-left: 10px;
    /*border: 1.8px solid #ece9db;*/
    border: 3px solid #859a75;
    outline: none;
  }

  .addPatients {
    width: 30px;
    height: 30px;
    margin-left: 15px;
  }

  .button {
    background-color: #859a75;
    color: white;
    width: 20%;
    min-width: 45px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: small;
    border: 0;
  }

  .container--patientList {
    width: 340px;
    margin: 0 auto;
    min-width: 300px;
    margin-top: 30px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    font-size: 15px;
    padding: 0;
    padding-bottom: 75px;
  }

  .patientList-title {
    width: 100%;
    height: 40px;
    background-color: #ece9db;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .patientList-title div {
    width: 25%;
    text-align: center;
  }
}
</style>