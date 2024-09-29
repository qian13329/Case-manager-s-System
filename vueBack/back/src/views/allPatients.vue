<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <router-link :to="'/index'"><a class="logo">癌憂Away</a></router-link>
        <nav>
          <div>
            <router-link :to="'/index'"><a>全部人員</a></router-link>
          </div>
          <div>
            <router-link :to="'allPatients'"><a>全部病患</a></router-link>
          </div>
          <div>
            <a @click="handleLogout()">登出</a>
          </div>
        </nav>
      </div>
    </div>
    <div class="container">
      <div class="container--search">
        <div class="search">
          <input name="searchPatient" class="searchBox" placeholder="搜尋病患" v-model="searchContent"
            v-on:keyup.enter="search()" />
          <button class="button" name="search" @click="search()">搜尋</button>
        </div>
        <div class="addPatients">
          <router-link :to="'/addPatients'"><img src="../assets/img/add.png" width="40px" height="40px" /></router-link>
        </div>
      </div>
      <div class="container--allPatients">
        <div class="allPatients-title">
          <a class="pNum">病患編號</a>
          <a class="pName">病患姓名</a>
          <!-- <a class="staffID">身分證ID</a> -->
          <a class="room">病患房號</a>
          <a class="staffName">個管師 </a>
        </div>
        <patientList v-for="item in patientData" :key="item.pNum" :item="item" :searchContent="searchContent" />
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import patientList from "../components/patientList.vue";
import { patients, searchAllPatient, logout } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      token: "",
      patientData: [],
      searchContent: "",

    };
  },
  components: {
    patientList,
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
    getAllPatient() {
      patients({
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.patientData = res.data;
        // window.location.href="/"??????
      });
    },
    search() {
      if (this.searchContent == "") {
        window.location.reload()
      } else {
        searchAllPatient({
          pName: this.searchContent,
          token: this.token,
        }).then((res) => {
          console.log(res);
          this.patientData = res.data;
        });
      }
    },
  },

  mounted() {
    this.token = Cookies.get("token");
    this.getAllPatient();
  },
};
</script>

<style scoped>
.container {
  margin: 70px auto;
}

.addPatients {
  margin-left: 10px;
}

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
    border: 1.8px solid #ece9db;
    outline: none;
    font-size: 20px;
  }

  .search button {
    width: 70px;
    height: 45px;
    border: 0;
    font-size: 18px;
    background-color: #ece9db;
  }

  .container--allPatients {
    margin: 70px;
  }

  .allPatients-title {
    margin: 0px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
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

  .allPatients-title a {
    width: 130px;
    text-align: center;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
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
    border: 1.8px solid #ece9db;
    outline: none;
    font-size: 20px;
  }

  .search button {
    width: 70px;
    height: 45px;
    border: 0;
    font-size: 18px;
    background-color: #ece9db;
  }

  .container--allPatients {
    margin: 70px 60px;
  }

  .allPatients-title {
    margin: 0px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
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

  .allPatients-title a {
    width: 130px;
    text-align: center;
  }
}

@media screen and (min-width: 551px) and (max-width: 767px) {
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
    border: 1.8px solid #ece9db;
    outline: none;
    font-size: 20px;
  }

  .search button {
    width: 70px;
    height: 45px;
    border: 0;
    font-size: 18px;
    background-color: #ece9db;
  }

  .container--allPatients {
    margin: 70px 50px;
  }

  .allPatients-title {
    margin: 0px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
    /* min-width: 1000px; */
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    font-weight: bolder;
    color: #859a75;
    font-size: 22px;
  }

  .pNum,
  .pName,
  .room,
  .staffName {
    width: 90px;
    text-align: center;
  }
}

@media screen and (max-width: 550px) {
  .container {
    min-width: 500px;
  }

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
    border: 1.8px solid #ece9db;
    outline: none;
    font-size: 20px;
  }

  .search button {
    width: 70px;
    height: 45px;
    border: 0;
    font-size: 18px;
    background-color: #ece9db;
  }

  .container--allPatients {
    margin: 50px 50px;
  }

  .allPatients-title {
    margin: 0px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
    /* min-width: 1000px; */
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    font-weight: bolder;
    color: #859a75;
    font-size: 20px;
  }

  .pNum,
  .pName,
  .room,
  .staffName {
    width: 55px;
    text-align: center;
  }
}
</style>