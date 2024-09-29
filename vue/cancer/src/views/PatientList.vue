<template>
  <div class="wrapper">
    <!-- 標題 -->
    <div class="header">
      <div class="banner">
        <!-- 返回鍵 -->
        <div class="hidden">
          <router-link :to="'/index'"><img src="../assets/img/back.png" class="back" /></router-link>
        </div>

        <a class="logo">癌憂Away</a>
        <nav>
          <div>
            <router-link :to="'/CheckIndex'"><a>今日事務</a></router-link>
          </div>
          <div>
            <router-link :to="'/index'"><a>病患資料</a></router-link>
          </div>
          <div>
            <router-link :to="{ name: 'depressionIndex', params: { pID: this.thispID } }"><a>憂鬱症專區</a></router-link>
          </div>
          <div>
            <router-link :to="'/setting'"><a>設定</a></router-link>
          </div>
        </nav>
      </div>
    </div>

    <div class="container">
      <div class="layout-frame">
        <div class="layout">
          <div>
            <PatientData v-for="item in patientData" :key="item.pNum" :item="item" />
          </div>
          <!-- 主要資料 -->
          <div class="container--Info"></div>
          <div class="layoutRight">
            <!-- 基本資料 -->
            <div class="layout--basic">
              <div class="titleEdit">
                <a class="layout-bigTitle">病患基本資料</a>
                <div class="layout-links">
                  <router-link :to="{
                    name: 'editPInformBasic',
                    params: { pNum: this.thispNum },
                  }" class="router-link-footer">
                    <img src="../assets/img/edit.png" />
                  </router-link>
                </div>
              </div>
              <patientBasic v-for="item in patientData" :key="item.pNum" :item="item" />
            </div>

            <!-- 目前的病 -->
            <div class="layout--basic">
              <div class="titleEdit">
                <a class="layout-bigTitle">主要病症資料</a>
                <div class="layout-links">
                  <router-link :to="{
                    name: 'insertPInformCancer',
                    params: { pNum: this.thispNum },
                  }" class="router-link-footer">
                    <img src="../assets/img/plus.png" />
                  </router-link>
                </div>
              </div>
              <MajorDisease v-for="item in MajorDiseaseData" :key="item.pNum" :item="item" />
            </div>
          </div>
        </div>
        <!-- <patientDataDr
          v-for="item in patientData"
          :key="item.pNum"
          :item="item"
        /> -->
      </div>

      <!-- 生化資料 -->
      <div class="container--mainFont">
        <div class="mainFont">
          <a>生化資料</a>
        </div>
        <BiochemicalList v-for="item in BiochemicalListData" :key="item.pNum" :item="item" />

        <!-- 憂鬱指數 -->
        <div class="mainFont depression-mainFont" id="depressionChart">
          <a>憂鬱指數</a>
        </div>
        <div class="container--dp">
          <depressionList v-for="item in depressionListData" :key="item.pID" :item="item" />
        </div>
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
// 主要病症資料
import { mainInfo } from "../services/api";
import MajorDisease from "../components/majorDisease.vue";
// 主要資料
import PatientData from "../components/PatientData.vue";
import { patientInfo } from "../services/api";

// 生化資料
import BiochemicalList from "../components/BiochemicalList.vue";
import { biochemical } from "../services/api";
// 病患基本資料
import patientBasic from "../components/patientBasic.vue";
// 憂鬱指數
import depressionList from "../components/depressionList.vue";
import { detection } from "../services/api";

import Cookies from "js-cookie";

export default {
  data() {
    return {
      // 放data
      patientData: [],
      MajorDiseaseData: [],
      BiochemicalListData: [],
      depressionListData: [],
      // patientBasicData: patientBasicData,
      depressionListData: [],
      fullHeight: 0,
      fullWidth: 0,
      thispNum: this.$route.params.pNum,
      thispID: this.$route.params.pID,
      thisStaffNum: this.$route.params.staffNum,
      test: [],
    };
  },

  components: {
    // 放components
    MajorDisease,
    PatientData,
    BiochemicalList,
    patientBasic,
    depressionList,
  },

  methods: {
    // 病患基本資料
    getPatientInform() {
      patientInfo({
        pNum: this.thispNum,
        token: this.token,
      }).then((res) => {
        console.log("INFO:",res);
        this.patientData = res.data;
      });
    },

    // 病患癌症資料
    getMainInfo() {
      mainInfo({
        pNum: this.thispNum,
        token: this.token,
      }).then((res) => {
        console.log("cancer:",res);
        this.MajorDiseaseData.push(res.data);
      });
    },

    //生化資料
    getBiochemical() {
      biochemical({
        pNum: this.thispNum,
        token: this.token,
      }).then((res) => {
        console.log("bio:",res);
        this.BiochemicalListData.push(res.data);
      });
    },

    //憂鬱指數
    getDetection() {
      detection({
        pID: this.thispID,
        token: this.token,
      }).then((res) => {
        console.log("det:",res);
        this.depressionListData.push(res.data);
      });
    },

    // testt() {
    //   Object.keys(this.BiochemicalListData).forEach((key) => {
    //     console.log(
    //       "1111111111111111111111111111111111111111111111111111111111111"
    //     );
    //     console.log(key); // 001, 002, 003
    //     console.log(BiochemicalListData[key]); // { name: 'Casper', ... }
    //   });
    // },
  },

  // computed: {
  // pID(){
  //  return this.$route.params.pID;
  // }
  // },

  mounted() {
    this.token = Cookies.get("token");
    this.getPatientInform();
    this.getMainInfo();
    this.getBiochemical();
    this.getDetection();
    // this.testt();
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
.layout-links img {
  margin-left: 10px;
}

@media screen and (min-width: 1240px) {
  .layout-frame {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding-top: 20px;
  }

  .layout {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
  }

  /* 主要資料 */

  .mainInfo--doctor {
    width: 100%;
  }

  .layoutRight {
    width: 80%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
  }

  .mainFont {
    font-size: 32px;
    width: 95%;
    max-width: 1300px;
    height: 45px;
    margin: 0 auto;
    margin-top: 40px;
    background-color: #859a75;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px 15px;
    font-weight: bolder;
    color: #fff;
    letter-spacing: 10px;
  }

  .depression-mainFont {
    margin-top: 60px;
  }

  .secondFont {
    font-size: 28px;
    display: flex;
    align-items: flex-start;
    margin-top: 0;
    margin: 10px 0;
  }

  /* 基本資料 */
  .titleEdit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
  }

  .layout-bigTitle {
    font-size: 32px;
    font-weight: bold;
  }

  .layout--basic {
    width: 100%;
    /* max-width: 1000px;
    min-width: 800px; */
    margin: 20px auto;
  }

  .bgColor {
    background-color: #e5ecdb99;
    font-size: 24px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-top: 20px;
    border-radius: 12px;
  }

  .bgColor div {
    max-width: 400px;
    min-width: 250px;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #ea9f59;
    font-weight: bold;
  }

  /* 目前的病 */
  .container--dataList {
    width: 100%;
    min-width: 500px;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 10px;
    border: gray 1px solid;
    font-size: 24px;
  }

  .container--dataList li {
    list-style-type: none;
    height: 50px;
  }

  .dataList tr {
    width: 100%;
    max-width: 600px;
    line-height: 50px;
  }

  .dataList td {
    width: 20%;
    max-width: 250px;
    line-height: 50px;
  }

  .layout-links img {
    width: 37px;
    height: 37px;
  }

  /* 生化資料 */
  .container--mainFont {
    /* max-width: 1300px; */
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }

  .container--biochemical {
    width: 100%;
    max-width: 570px;
    margin: 20px;
    margin-bottom: 0px;
  }

  .container--biochemicalList {
    width: 100%;
    max-width: 570px;
    padding: 10px 20px;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    flex-direction: row;
  }

  .value {
    width: 30%;
    max-width: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .num {
    width: 100%;
    max-width: 150px;
    font-size: 80px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
  }

  .unit {
    width: 100%;
    max-width: 150px;
    font-size: 28px;
    display: flex;
    justify-content: flex-end;
  }

  .button {
    width: 50%;
    max-width: 200px;
    height: 35px;
    font-size: 18px;
    line-height: 35px;
    color: white;
    background-color: #1a7584;
    border-radius: 20px;
    border: 0;
    text-align: center;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }

  /* 彈出視窗 */
  #inputList--TAG {
    visibility: hidden;
    position: fixed;
    top: 40%;
    right: 200px;
    /* 設定 */
    width: 400px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(10px 10px 20px black);
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    /* display: none; */
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
  }

  .container--inputbox {
    width: 280px;
    height: 40px;
    /* margin-top: 10px; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
  }

  .inputbox--text {
    width: 40%;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    width: max-content;
  }

  .inputbox {
    width: 60%;
    height: 25px;
    line-height: 40px;
  }

  .btn {
    width: 70px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 5px;
  }

  .submit {
    background-color: #3db62a;
  }

  .cancel {
    background-color: #ffa217;
  }

  .container--patientList {
    width: 80%;
    margin: 0 10%;
    max-width: 700px;
    min-width: 300px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* flex-direction: column; */
    padding: 0;
  }

  .patientList {
    /* display: flex; */
    width: 100%;
    /* min-width: 400px; */
    max-width: 650px;
    border-collapse: collapse;
    justify-content: center;
    text-align: center;
  }

  .patientList th {
    border: black;
    background-color: #ece9db;
    height: 50px;
    width: 650px;
  }

  .patientList td {
    border-bottom: 1px solid #ddd;
    max-width: 100px;
    height: 50px;
  }

  .icon--list {
    width: 20px;
    height: 20px;
  }

  /* 憂鬱指數 */
  .container--dp {
    width: 100%;
    max-width: 1180px;
    margin: 30px auto;
  }

  .dpTitle {
    font-size: 36px;
  }
}

/* computer */
@media screen and (min-width: 1025px) and (max-width: 1240px) {
  .layout {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    padding: 30px;
  }

  /* 主要資料 */
  .layout--mainInfo {
    /* width: 100%; */
    /* min-width: 1000px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* padding-top: 20px; */
  }

  .mainInfo--left {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }

  .photo {
    width: 150px;
    height: 200px;
  }

  .mainInfo--right {
    /* width: 350px; */
    min-width: 270px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
  }

  .mainInfo-title {
    width: 120px;
    color: #ea9f59;
    font-weight: bold;
  }

  .mainInfo-data {
    width: 120px;
    padding-left: 15px;
  }

  .infoData td {
    width: 400px;
    height: 50px;
    font-size: 30px;
  }

  .mainFont {
    font-size: 32px;
    width: 95%;
    height: 45px;
    /* margin: 30px 0; */
    margin: 0 auto;
    margin-top: 15px;
    background-color: #859a75;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px 15px;
    font-weight: bolder;
    color: #fff;
    letter-spacing: 10px;
  }

  .depression-mainFont {
    margin-top: 60px;
  }

  .secondFont {
    font-size: 28px;
    display: flex;
    align-items: flex-start;
    margin-top: 0;
    margin: 10px 0;
  }

  .layoutRight {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
  }

  /* 基本資料 */
  .titleEdit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
  }

  .layout-bigTitle {
    font-size: 32px;
    font-weight: bold;
  }

  .layout--basic {
    max-width: 1000px;
    min-width: 700px;
    margin: 15px auto;
  }

  .bgColor {
    background-color: #e5ecdb99;
    font-size: 22px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-top: 20px;
    border-radius: 12px;
  }

  .bgColor div {
    max-width: 350px;
    min-width: 220px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #ea9f59;
    font-weight: bold;
  }

  /* 目前的病 */
  .container--dataList {
    width: 100%;
    min-width: 500px;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 10px;
    border: gray 1px solid;
    font-size: 24px;
  }

  .container--dataList li {
    list-style-type: none;
    height: 50px;
  }

  .dataList tr {
    width: 100%;
    max-width: 600px;
    line-height: 50px;
  }

  .dataList td {
    width: 20%;
    max-width: 250px;
    line-height: 50px;
  }

  .layout-links img {
    width: 37px;
    height: 37px;
  }

  /* 生化資料 */
  .container--mainFont {
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
  }

  .container--biochemical {
    width: 100%;
    max-width: 460px;
    margin: 20px;
    margin-bottom: 0px;
  }

  .container--biochemicalList {
    width: 100%;
    max-width: 460px;
    padding: 10px 20px;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    flex-direction: row;
  }

  .value {
    width: 30%;
    max-width: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .num {
    width: 100%;
    max-width: 150px;
    font-size: 80px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
  }

  .unit {
    width: 100%;
    max-width: 150px;
    font-size: 28px;
    display: flex;
    justify-content: flex-end;
  }

  .button {
    width: 50%;
    max-width: 200px;
    height: 35px;
    font-size: 18px;
    line-height: 35px;
    color: white;
    background-color: #1a7584;
    border-radius: 20px;
    border: 0;
    text-align: center;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }

  /* 彈出視窗 */
  #inputList--TAG {
    visibility: hidden;
    position: fixed;
    top: 40%;
    right: 200px;
    /* 設定 */
    width: 400px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(10px 10px 20px black);
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    /* display: none; */
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
  }

  .container--inputbox {
    width: 280px;
    height: 40px;
    /* margin-top: 10px; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
  }

  .inputbox--text {
    width: 40%;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    width: max-content;
  }

  .inputbox {
    width: 60%;
    height: 25px;
    line-height: 40px;
  }

  .btn {
    width: 70px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 5px;
  }

  .submit {
    background-color: #3db62a;
  }

  .cancel {
    background-color: #ffa217;
  }

  .container--patientList {
    width: 80%;
    margin: 0 10%;
    max-width: 700px;
    min-width: 300px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* flex-direction: column; */
    padding: 0;
  }

  .patientList {
    /* display: flex; */
    width: 100%;
    /* min-width: 400px; */
    max-width: 650px;
    border-collapse: collapse;
    justify-content: center;
    text-align: center;
  }

  .patientList th {
    border: black;
    background-color: #ece9db;
    height: 50px;
    width: 650px;
  }

  .patientList td {
    border-bottom: 1px solid #ddd;
    max-width: 100px;
    height: 50px;
  }

  .icon--list {
    width: 20px;
    height: 20px;
  }

  /* 憂鬱指數 */
  .container--dp {
    width: 100%;
    max-width: 960px;
    margin: 30px auto;
  }

  .dpTitle {
    font-size: 34px;
  }
}

/* pad */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 30px;
  }

  /* 主要資料 */
  .layout--mainInfo {
    /* width: 100%; */
    /* min-width: 1000px; */
    display: flex;
    justify-content: center;
  }

  /* 主要資料 */

  .container--Info {
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .mainInfo--left {
    width: 200px;
  }

  .photo {
    width: 130px;
    height: 180px;
  }

  .mainInfo--right {
    min-width: 200px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
  }

  .mainInfo-title {
    width: 120px;
    color: #ea9f59;
    font-weight: bold;
  }

  .mainInfo-data {
    width: 120px;
    padding-left: 15px;
  }

  .infoData td {
    width: 400px;
    height: 50px;
    font-size: 30px;
  }

  .mainFont {
    font-size: 30px;
    width: 90%;
    min-width: 700px;
    height: 40px;
    /* margin: 30px 0; */
    margin: 0 auto;
    margin-top: 40px;
    background-color: #859a75;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px 15px;
    font-weight: bolder;
    color: #fff;
    letter-spacing: 10px;
  }

  .depression-mainFont {
    margin-top: 60px;
  }

  .secondFont {
    font-size: 28px;
    display: flex;
    align-items: flex-start;
    margin-top: 0;
    margin: 10px 0;
  }

  /* 基本資料 */
  .titleEdit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    margin-top: 30px;
  }

  .layout-bigTitle {
    font-size: 30px;
    font-weight: bold;
  }

  .layout--basic {
    max-width: 825px;
    min-width: 700px;
    margin: 15px auto;
  }

  .bgColor {
    background-color: #e5ecdb99;
    font-size: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-top: 20px;
    border-radius: 12px;
  }

  .bgColor div {
    max-width: 300px;
    min-width: 210px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #ea9f59;
    font-weight: bold;
  }

  /* 目前的病 */
  .container--dataList {
    width: 100%;
    min-width: 500px;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 10px;
    border: gray 1px solid;
    font-size: 24px;
  }

  .container--dataList li {
    list-style-type: none;
    height: 50px;
  }

  .dataList tr {
    width: 100%;
    max-width: 600px;
    line-height: 50px;
  }

  .dataList td {
    width: 20%;
    max-width: 250px;
    line-height: 50px;
  }

  .layout-links img {
    width: 37px;
    height: 37px;
  }

  /* 生化資料 */
  .container--mainFont {
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
  }

  .container--biochemical {
    width: 100%;
    max-width: 700px;
    margin: 20px;
    margin-bottom: 0px;
  }

  .container--biochemicalList {
    width: 100%;
    max-width: 700px;
    padding: 10px 20px;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    flex-direction: row;
  }

  .value {
    width: 30%;
    max-width: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .num {
    width: 100%;
    max-width: 150px;
    font-size: 80px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
  }

  .unit {
    width: 100%;
    max-width: 150px;
    font-size: 28px;
    display: flex;
    justify-content: flex-end;
  }

  .button {
    width: 50%;
    max-width: 200px;
    height: 35px;
    font-size: 18px;
    line-height: 35px;
    color: white;
    background-color: #1a7584;
    border-radius: 20px;
    border: 0;
    text-align: center;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }

  /* 彈出視窗 */
  #inputList--TAG {
    visibility: hidden;
    position: fixed;
    top: 40%;
    right: 200px;
    /* 設定 */
    width: 400px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(10px 10px 20px black);
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    /* display: none; */
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
  }

  .container--inputbox {
    width: 280px;
    height: 40px;
    /* margin-top: 10px; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
  }

  .inputbox--text {
    width: 40%;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    width: max-content;
  }

  .inputbox {
    width: 60%;
    height: 25px;
    line-height: 40px;
  }

  .btn {
    width: 70px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 5px;
  }

  .submit {
    background-color: #3db62a;
  }

  .cancel {
    background-color: #ffa217;
  }

  .container--patientList {
    width: 80%;
    margin: 0 10%;
    max-width: 700px;
    min-width: 300px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* flex-direction: column; */
    padding: 0;
  }

  .patientList {
    /* display: flex; */
    width: 100%;
    /* min-width: 400px; */
    max-width: 650px;
    border-collapse: collapse;
    justify-content: center;
    text-align: center;
  }

  .patientList th {
    border: black;
    background-color: #ece9db;
    height: 50px;
    width: 650px;
  }

  .patientList td {
    border-bottom: 1px solid #ddd;
    max-width: 100px;
    height: 50px;
  }

  .icon--list {
    width: 20px;
    height: 20px;
  }

  /* 憂鬱指數 */
  .container--dp {
    width: 100%;
    max-width: 700px;
    margin: 30px auto;
    margin-top: 30px;
  }

  .dpTitle {
    font-size: 32px;
  }
}

/* phone row */
@media screen and (min-width: 551px) and (max-width: 768px) {
  .layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 30px;
  }

  /* 主要資料 */
  .layout--mainInfo {
    /* width: 100%; */
    min-width: 300px;
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: center;
  }

  .container--Info {
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .mainInfo--left {
    width: 120px;
    height: 150px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
  }

  .photo {
    width: 100px;
    height: 150px;
  }

  .mainInfo--right {
    min-width: 200px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
  }

  .mainInfo-title {
    width: 120px;
    color: #ea9f59;
    font-weight: bold;
  }

  .mainInfo-data {
    width: 120px;
    padding-left: 15px;
  }

  .infoData td {
    width: 400px;
    height: 50px;
    font-size: 30px;
  }

  .mainFont {
    font-size: 30px;
    width: 100%;
    min-width: 520px;
    height: 40px;
    /* margin: 30px 0; */
    margin: 0 auto;
    margin-top: 30px;
    background-color: #859a75;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    font-weight: bolder;
    color: #ffffff;
    letter-spacing: 10px;
  }

  .depression-mainFont {
    margin-top: 50px;
  }

  .secondFont {
    font-size: 28px;
    display: flex;
    align-items: flex-start;
    margin-top: 0;
    margin: 10px 0;
  }

  /* 基本資料 */
  .titleEdit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    margin-top: 30px;
  }

  .layout-bigTitle {
    font-size: 28px;
    font-weight: bold;
  }

  .layout--basic {
    max-width: 700px;
    min-width: 500px;
    margin: 15px auto;
  }

  .bgColor {
    background-color: #e5ecdb99;
    font-size: 18px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-top: 20px;
    border-radius: 12px;
  }

  .bgColor div {
    max-width: 300px;
    min-width: 200px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #ea9f59;
    font-weight: bold;
  }

  .tab {
    display: none;
  }

  .layout-links img {
    width: 37px;
    height: 37px;
  }

  /* 生化資料 */
  .container--mainFont {
    width: 90%;
    min-width: 300px;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }

  .container--biochemical {
    width: 100%;
    max-width: 700px;
    margin-top: 10px;
  }

  .container--biochemicalList {
    width: 100%;
    min-width: 470px;
    padding: 10px 10px;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    flex-direction: row;
  }

  /* 彈出視窗 */
  #inputList--TAG {
    visibility: hidden;
    position: fixed;
    top: 30%;
    left: 20vmin;
    right: 20vmin;
    /* 設定 */
    width: 250px;
    height: 200px;
    padding: 10px;

    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(10px 10px 20px black);
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    /* display: none; */
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  }

  .container--inputbox {
    min-width: 280px;
    height: 10vmin;
    /* margin-top: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .inputbox--text {
    width: 40%;
    height: 7vmin;
    font-size: 5vmin;
    line-height: 7vmin;
    width: max-content;
  }

  .inputbox {
    width: 40%;
    max-width: 230px;
    min-width: 70px;
    height: 7vmin;
    line-height: 7vmin;
  }

  .btn {
    min-width: 30px;
    height: 7vmin;
    font-size: 3vmin;
    line-height: 7vmin;
    color: #ffffff;
    border: 0px;
    border-radius: 5px;
    margin: 0 10px;
  }

  .submit {
    background-color: #3db62a;
  }

  .cancel {
    background-color: #ffa217;
  }

  .container--patientList {
    width: 80%;
    margin: 0 10%;
    max-width: 700px;
    min-width: 300px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* flex-direction: column; */
    padding: 0;
  }

  /* 憂鬱指數 */
  .container--dp {
    width: 100%;
    max-width: 700px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .dpTitle {
    font-size: 32px;
  }
}

/* phone cloumn */
@media screen and (max-width: 550px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
    margin: 40px 0;
  }

  /* 主要資料 */
  .layout--mainInfo {
    /* width: 95%; */
    min-width: 280px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* 主要資料 */
  .container--Info {
    width: 90%;
    /* max-width: 550px; */
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .mainInfo--left {
    align-items: center;
    margin-right: 30px;
  }

  .photo {
    width: 80px;
    height: 120px;
  }

  .mainInfo--right {
    width: 150px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }

  .mainInfo-title {
    width: 100px;
    color: #ea9f59;
    font-weight: bold;
  }

  .mainInfo-data {
    width: 120px;
    padding-left: 15px;
  }

  .infoData td {
    height: 30px;
    font-size: 5vmin;
  }

  .mainFont {
    font-size: 30px;
    width: 100%;
    min-width: 320px;
    height: 40px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 10px;
    background-color: #859a75;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    font-weight: bolder;
    color: #ffffff;
    letter-spacing: 10px;
  }

  .secondFont {
    font-size: 4vmin;
    display: flex;
    align-items: flex-start;
    margin-top: 0;
  }

  /* 基本資料 */
  .titleEdit {
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    margin-top: 30px;
  }

  .layout-bigTitle {
    font-size: 26px;
    font-weight: bold;
  }

  .layout--basic {
    min-width: 320px;
    margin: 15px auto;
  }

  .bgColor {
    background-color: #e5ecdb99;
    font-size: 18px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-top: 20px;
    border-radius: 12px;
  }

  .bgColor div {
    max-width: 300px;
    min-width: 200px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #ea9f59;
    font-weight: bold;
  }

  .tab {
    display: none;
  }

  .layout-links img {
    width: 33px;
    height: 33px;
    margin-top: 7px;
  }

  /* 生化資料 */
  .container--mainFont {
    width: 100%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }

  .container--biochemicalList {
    width: 100%;
    min-width: 320px;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    flex-direction: row;
  }

  .value {
    width: 30%;
    min-width: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .num {
    width: 100%;
    min-width: 30px;
    height: 15vmin;
    font-size: 12vmin;
    display: flex;
    justify-content: center;
  }

  .unit {
    width: 100%;
    min-width: 30px;
    font-size: 5vmin;
    height: 7vmin;
    display: flex;
    justify-content: flex-end;
  }

  .button {
    width: 50%;
    min-width: 35px;
    height: 6vmin;
    font-size: 1vmin;
    line-height: 6vmin;
    color: white;
    background-color: #1a7584;
    border-radius: 20px;
    border: 0;
    text-align: center;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }

  /* 彈出視窗 */
  #inputList--TAG {
    visibility: hidden;
    position: fixed;
    top: 30%;
    left: 10vmin;
    /* 設定 */
    width: 250px;
    height: 200px;
    padding: 10px;

    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(10px 10px 20px black);
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    /* display: none; */
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  }

  .container--inputbox {
    min-width: 280px;
    height: 10vmin;
    /* margin-top: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .inputbox--text {
    width: 40%;
    height: 7vmin;
    font-size: 5vmin;
    line-height: 7vmin;
    width: max-content;
  }

  .inputbox {
    width: 40%;
    max-width: 230px;
    min-width: 70px;
    height: 7vmin;
    line-height: 7vmin;
  }

  .btn {
    min-width: 30px;
    height: 7vmin;
    font-size: 3vmin;
    line-height: 7vmin;
    color: #ffffff;
    border: 0px;
    border-radius: 5px;
    margin: 0 10px;
  }

  .submit {
    background-color: #3db62a;
  }

  .cancel {
    background-color: #ffa217;
  }

  /* 憂鬱指數 */
  .container--dp {
    width: 100%;
    max-width: 500px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>