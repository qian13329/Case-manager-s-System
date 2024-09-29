<template>
  <div class="patientList">
      <router-link :to="{ name: 'patientsInform', params: { pNum: item.pNum } }">
        <div class="patientList-text">
          <div class="pNum">
            <a>{{ item.pNum }}</a>
          </div>
          <div class="pName">
            <a>{{ item.pName }}</a>
          </div>
          <div class="room">
            <a>{{ item.room }}</a>
          </div>
          <div class="staffName">
            <a>{{ item.staffName }}</a>
          </div>
        </div>
      </router-link>
    </div>
</template>

<script>
import patientBasicInform from './patientBasicInform.vue';
import { patientInform } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      patientData: [],
      search: this.searchContent,
    };
  },
  props: {
    item: Object,
  },


  components: {
    patientBasicInform,
  },
  methods: {
    patientInfo() {
      patientInform({
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.patientData = res.data;
      });
    },
  },
  mounted() {
    this.token = Cookies.get("token");
    this.patientInfo();
    console.log("search1:", this.search);
  },
};
</script>

<style scoped>
.patientList {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 1025px) {
  .patientList-text {
    margin: 8px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
    /* min-width: 1000px; */
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 22px;
    transition: 0.2s;
  }

  .patientList-text:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634);
  }

  .patientList-text div {
    width: 130px;
    text-align: center;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .patientList-text {
    margin: 8px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
    /* min-width: 1000px; */
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 22px;
    transition: 0.2s;
  }

  .patientList-text:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634);
  }

  .patientList-text div {
    width: 130px;
    text-align: center;
  }
}

@media screen and (min-width: 551px) and (max-width: 767px) {
  .patientList-text {
    margin: 8px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
    /* min-width: 1000px; */
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 18px;
    transition: 0.2s;
  }

  .patientList-text:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634);
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
  .patientList-text {
    margin: 8px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
    /* min-width: 1000px; */
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 16px;
    transition: 0.2s;
  }

  .patientList-text:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634);
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