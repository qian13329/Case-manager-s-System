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
      <!--個人資料-->
      <h2>個人資料</h2>
      <div class="profileInform">
        <patientBasicInform
          v-for="item in patientData"
          :key="item.pNum"
          :item="item"
        />
      </div>
      <!--歷史就診紀錄-->
      <h2>歷史就診紀錄</h2>
      <div class="history">
        <patientHistory
          v-for="item in patientHistoryData"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import patientBasicInform from "../components/patientBasicInform.vue";
import patientHistory from "../components/patientHistory.vue";
import { patientInform, allMainInfo, logout } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      patientData: [],
      patientHistoryData: [],
      thispNum: this.$route.params.pNum,
      token: "",
    };
  },
  components: {
    patientBasicInform,
    patientHistory,
  },
  methods: {
    getPatientInform() {
      patientInform({
        pNum: this.thispNum,
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.patientData = res.data;
        console.log(this.patientData);
      });
    },
    getPatientHistory() {
      allMainInfo({
        token: this.token,
        pNum: this.thispNum,
      }).then((res) => {
        console.log(res);
        this.patientHistoryData = res.data;
      });
    },
    handleLogout() {
      logout({
        token: this.token,
      }).then((res) => {
        console.log(res);
        Cookies.remove("token");
        window.location.href = "/";
      });
    },
  },
  mounted() {
    this.token = Cookies.get("token");
    this.getPatientInform();
    this.getPatientHistory();
  },
};
</script>

<style scoped>
.container {
  margin: 70px auto;
}

@media screen and (min-width: 1201px) {
  h2 {
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
    font-size: 28px;
    letter-spacing: 5px;
    background-color: #859a75;
    color: #fff;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .profileInform,
  .history {
    width: 95%;
    max-width: 1200px;
    margin: 35px auto;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  h2 {
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
    font-size: 28px;
    letter-spacing: 5px;
    background-color: #859a75;
    color: #fff;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .profileInform,
  .history {
    width: 95%;
    max-width: 1200px;
    margin: 35px auto;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  h2 {
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
    font-size: 28px;
    letter-spacing: 5px;
    background-color: #859a75;
    color: #fff;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .profileInform,
  .history {
    width: 95%;
    max-width: 1200px;
    margin: 35px auto;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  h2 {
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
    font-size: 28px;
    letter-spacing: 5px;
    background-color: #859a75;
    color: #fff;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .profileInform,
  .history {
    width: 95%;
    max-width: 1200px;
    margin: 35px auto;
  }
}

@media screen and (max-width: 550px) {
  .container {
    min-width: 400px;
  }

  h2 {
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
    font-size: 25px;
    letter-spacing: 5px;
    background-color: #859a75;
    color: #fff;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .profileInform,
  .history {
    width: 95%;
    max-width: 1200px;
    margin: 35px auto;
  }
}
</style>