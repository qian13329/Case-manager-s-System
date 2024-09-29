<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <router-link :to="'index'"><a class="logo">癌憂Away</a></router-link>
        <nav>
          <div>
            <router-link :to="'index'"><a>全部人員</a></router-link>
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
          <input name="searchStaff" class="searchBox" placeholder="搜尋人員" v-on:keyup.enter="search()"
            v-model="searchContent" />
          <button class="button" name="search" @click="search()">搜尋</button>
        </div>

        <div class="addStaffs">
          <router-link :to="'/addStaffs'"><img src="../assets/img/add.png" width="40px" height="40px" /></router-link>
        </div>
      </div>
      <div class="container--allStaffs">
        <div class="allStaffs-title">
          <a class="staffNum">員工編號</a>
          <a class="staffName">姓名</a>
          <!-- <a class="staffID">身分證ID</a> -->
          <a class="staffSex">性別</a>
          <a class="identify">身分</a>
        </div>
        <staffList v-for="item in staffData" :key="item.id" :item="item" :searchContent="searchContent" />
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import staffList from "../components/staffList.vue";
import { searchStaff, staff, logout } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      token: "",
      staffName: "",
      staffNum: "",
      searchContent: "",
      patientData: [],
      resPatientData: [],
      staffData: [],
      sstaffData: [],
      searchPatientData: [],
      isCollapse: false,
      // staffData: staffData,
    };
  },
  components: {
    staffList,
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
    getAllStaff() {
      staff({
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.staffData = res.data;
      });
    },
    getAllPatient() {
      patient({
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.patientData.push(res.data);
      });
    },
    search() {
      if (this.searchContent == "") {
        window.location.reload()
      } else {
        searchStaff({
          staffName: this.searchContent,
          // staffNum: this.searchContent,
          token: this.token,
        }).then((res) => {
          console.log(res);
          this.staffData = res.data;
        });
      }
    },

  },
  mounted() {
    this.token = Cookies.get("token");
    this.getAllStaff();
    this.getAllStaff();
  },

};
</script>

<style scoped>
.container {
  margin: 70px auto;
}

.addStaffs {
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

  .container--allStaffs {
    margin: 70px;
  }

  .allStaffs-title {
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

  .allStaffs-title a {
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

  .container--allStaffs {
    margin: 70px 60px;
  }

  .allStaffs-title {
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

  .allStaffs-title a {
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

  .container--allStaffs {
    margin: 70px 50px;
  }

  .allStaffs-title {
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

  /* .allStaffs-title a {
    width: 130px;
    text-align: center;
  } */
  /* .staffID,
  .staffSex {
    width: 100px;
    text-align: center;
  } */

  .staffNum,
  .staffName,
  .identify,
  .staffSex {
    width: 60px;
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

  .container--allStaffs {
    margin: 50px 50px;
  }

  .allStaffs-title {
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

  /* .allStaffs-title a {
    width: 130px;
    text-align: center;
  } */
  /* .identify, .staffSex {
    width: 100px;
    text-align: center;
  } */

  .staffNum,
  .staffName,
  .identify,
  .staffSex {
    width: 60px;
    text-align: center;
  }
}
</style>