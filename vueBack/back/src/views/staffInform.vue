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
        <staffBasicInform v-for="item in staffData" :key="item.staffNum" :item="item" />
      </div>
      <!--負責病患-->
      <h2>負責病患</h2>
      <div class="container--Patients">
        <div class="Patients-title">
          <a class="pNum">病患編號</a>
          <a class="pName">病患姓名</a>
          <a class="pSex">病患性別</a>
          <a class="room">病患房號</a>
        </div>
        <div class="resPatients">
          <resPatientsList v-for="item in resPatientsData" :key="item.pNum" :item="item" />
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// import staffData from "../data/staffData.json";
// import resPatientsData from "../data/resPatientsData.json";
import staffBasicInform from "../components/staffBasicInform.vue";
import resPatientsList from "../components/resPatientsList.vue";
import { staff, logout, carePatient } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      staffData: [],
      resPatientsData: [],
      token: "",
      thisStaffNum: this.$route.params.staffNum,
    };
  },
  components: {
    staffBasicInform,
    resPatientsList,
  },
  methods: {
    getAllStaff() {
      staff({
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.staffData = res.data;
      });
    },
    getPatient() {
      carePatient({
        token: this.token,
        staffNum: this.thisStaffNum,
      }).then((res) => {
        console.log(res);
        this.resPatientsData = res.data;
      });
    },
    handleLogout() {
      logout({
        token: this.token,
      }).then((res) => {
        console.log(res);
        Cookies.remove("token");
        window.location.href = "/"
      });
    },
  },
  mounted() {
    this.token = Cookies.get("token");
    this.getAllStaff();
    this.getPatient();
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

  .profileInform {
    width: 95%;
    max-width: 1200px;
    margin: 35px auto;
  }

  .resPatients {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* .container--Patients {
    margin: 50px 50px;
  } */

  .Patients-title {
    margin: 0px auto;
    padding: 0 30px;
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    /* min-width: 1000px; */
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    font-weight: bolder;
    color: #859a75;
    font-size: 26px;
  }

  .Patients-title a {
    width: 130px;
    text-align: center;
  }

  .pNum,
  .pName,
  .pSex,
  .room {
    /* width: 50px; */
    text-align: center;
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

  .profileInform {
    width: 95%;
    max-width: 1200px;
    margin: 35px auto;
  }

  .resPatients {
    width: 95%;
    max-width: 1200px;
    margin: 0px auto;
  }

  .Patients-title {
    margin: 0px auto;
    padding: 0 30px;
    width: 95%;
    max-width: 900px;
    /* margin: 35px auto; */
    /* min-width: 1000px; */
    margin-top: 20px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    font-weight: bolder;
    color: #859a75;
    font-size: 26px;
  }

  .Patients-title a {
    width: 130px;
    text-align: center;
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

  .profileInform {
    width: 95%;
    max-width: 1200px;
    margin: 35px auto;
  }

  .resPatients {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .Patients-title {
    margin: 0px auto;
    padding: 0 30px;
    width: 95%;
    max-width: 700px;
    /* margin: 35px auto; */
    /* min-width: 1000px; */
    margin-top: 20px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    font-weight: bolder;
    color: #859a75;
    font-size: 26px;
  }

  .Patients-title a {
    width: 130px;
    text-align: center;
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

  .profileInform {
    width: 95%;
    max-width: 1200px;
    margin: 35px auto;
  }

  .Patients-title {
    margin: 0px auto;
    padding: 0 30px;
    width: 90%;
    max-width: 1200px;
    /* margin: 35px auto; */
    /* min-width: 1000px; */
    margin-top: 20px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    font-weight: bolder;
    color: #859a75;
    font-size: 22px;
  }

  .Patients-title a {
    width: 120px;
    text-align: center;
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

  .profileInform {
    width: 95%;
    max-width: 1200px;
    margin: 35px auto;
  }

  .resPatients {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .Patients-title {
    margin: 0px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1000px;
    /* margin: 35px auto; */
    /* min-width: 1000px; */
    margin-top: 20px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    font-weight: bolder;
    color: #859a75;
    font-size: 20px;
  }

  .Patients-title a {
    width: 130px;
    text-align: center;
  }
}
</style>