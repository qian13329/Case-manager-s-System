<template>
  <!-- <router-link :to="{ name: 'patientList', params: { staffNum: item.staffNum } }"> -->
  <div>
      <router-link :to="{ name: 'patientsInform', params: { pNum: item.pNum } }">
          <div class="resPatientsList--text">
            <div class="pNum">
              <a>{{ item.pNum }}</a>
            </div>
            <div class="pName">
              <a>{{ item.pName }}</a>
            </div>
            <div class="pSex">
              <a v-if="item.pSex == 1">男</a>
              <a v-if="item.pSex == 2">女</a>
            </div>
            <div class="room">
              <a>{{ item.room }}</a>
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
      // search: this.searchContent,
    };
  },
  props: {
    item: Object,
    // searchContent: String, 
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
  },

};
</script>

<style scoped>
.resPatientsList {
  display: flex;
  flex-direction: column;

}

.resPatientsList--text{
    transition: 0.2s;

}

.resPatientsList--text:hover{
      transform: scale(1.03);
    box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634);
}

@media screen and (min-width: 1201px) {
  .resPatientsList--text {
    margin: 10px auto;
    padding: 0 30px;
    width: 1000px;
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

  .pNum,
  .pName,
  .pSex,
  .room {
    width: 130px;
    text-align: center;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .resPatientsList--text {
    margin: 8px auto;
    padding: 0 30px;
    width: 90%;
    max-width: 900px;
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

  
  .pNum,
  .pName,
  .pSex,
  .room {
    width: 130px;
    text-align: center;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .resPatientsList--text {
    margin: 10px auto;
    padding: 0 30px;
    width: 90%;
    max-width: 700px;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 22px;
  }

    
  .pNum,
  .pName,
  .pSex,
  .room {
    width: 130px;
    text-align: center;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  .resPatientsList--text {
    margin: 8px auto;
    padding: 0 30px;
    width: 90%;
    max-width: 700px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 20px;
  }

      
  .pNum,
  .pName,
  .pSex,
  .room {
    width: 130px;
    text-align: center;
  }
}

@media screen and (max-width: 550px) {
  .resPatientsList--text {
    margin: 6px auto;
    padding: 0 30px;
    width: 90%;
    max-width: 700px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 18px;
  }

    .pNum,
  .pName,
  .pSex,
  .room {
    width: 50px;
    text-align: center;
  }
}
</style>