<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <!-- 返回鍵 -->
        <div class="hidden">
          <router-link
            :to="{ name: 'PatientList', params: { pNum: this.thispNum } }"
            ><img src="../assets/img/back.png" class="back" @click="back"
          /></router-link>
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
      <div class="addForm">
        <div>
          <label for="">病患編號</label>
          <!-- <a href="">{{ $route.params.pNum }}</a> -->
          <a href="">{{ thispNum }}</a>
        </div>
        <div>
          <label for="date">就診日期</label>
          <input type="date" id="date" v-model="date" />
        </div>
        <div>
          <label for="cancer">癌症</label>
          <input type="text" id="case" v-model="cancer" />
        </div>
        <div>
          <label for="period">期數</label>
          <input type="text" id="period" v-model="period" />
        </div>
        <div>
          <label for="pCancerTime">發現時間</label>
          <input type="date" id="pCancerTime" v-model="pCancerTime" />
        </div>
        <div>
          <label for="tumorSize">腫瘤大小</label>
          <input type="text" id="tumorSize" v-model="tumorSize" />
        </div>
        <div>
          <label for="lymphaticMtastasis">淋巴轉移</label>
          <select id="lymphaticMtastasis" v-model="lymphaticMtastasis">
            <option value="1">有</option>
            <option value="2">無</option>
          </select>
        </div>
        <div>
          <label for="transferLocation">轉移位置</label>
          <input type="text" id="transferLocation" v-model="transferLocation" />
        </div>
        <div>
          <label for="plan">治療方式</label>
          <input type="text" id="plan" v-model="plan" />
        </div>
        <div>
          <label for="drug">藥物</label>
          <input type="text" id="drug" v-model="drug" />
        </div>
        <div>
          <label for="DrugAllergy">藥物過敏</label>
          <input type="text" id="DrugAllergy" v-model="DrugAllergy" />
        </div>
      </div>

      <div class="btn">
        <button @click="addPInformCancer()">送出</button>
      </div>
    </div>

    <!-- footer -->
    <div class="footer">
      <div class="footerBg">
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
import { insertMainInfo } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      // pNum: "",
      thispNum: this.$route.params.pNum,
      date: "",
      pCancerTime: "",
      cancer: "",
      lymphaticMtastasis: "",
      drug: "",
      period: "",
      transferLocation: "",
      DrugAllergy: "",
      tumorSize: "",
      plan: "",
      token: "",
    };
  },
  methods: {
    // 回上一頁
    back() {
      this.$router.go(-1);
    },

    // 新增患者癌症資料
    addPInformCancer() {
      insertMainInfo({
        pNum: this.thispNum,
        date: this.date,
        pCancerTime: this.pCancerTime,
        case: this.cancer,
        lymphaticMtastasis: this.lymphaticMtastasis,
        drug: this.drug,
        period: this.period,
        transferLocation: this.transferLocation,
        DrugAllergy: this.DrugAllergy,
        tumorSize: this.tumorSize,
        plan: this.plan,
        token: this.token,
      }).then(() => {
        alert("新增成功");
        this.pNum = "";
        this.date = "";
        this.pCancerTime = "";
        this.cancer = "";
        this.lymphaticMtastasis = "";
        this.drug = "";
        this.period = "";
        this.transferLocation = "";
        this.DrugAllergy = "";
        this.tumorSize = "";
        this.plan = "";
        this.token = "";
        this.$router.go(-1);
      });
    },
  },
  mounted() {
    this.token = Cookies.get("token");
  },
};
</script>

<style scoped>
.btn button:hover {
  background-color: #a7b59d;
}

.addForm a {
  width: 180px;
  text-align: center;
}

/* >1024 */
@media screen and (min-width: 1025px) {
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  .addForm {
    max-width: 768px;
    min-width: 400px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  .addForm div {
    width: 400px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
  }

  .addForm input {
    width: 180px;
    height: 35px;
    font-size: 20px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .addForm select {
    width: 180px;
    height: 35px;
    font-size: 18px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .btn {
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .btn button {
    width: 150px;
    height: 40px;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
    background-color: #859a75;
    border: 0;
    border-radius: 5px;
  }
}

/* 768~1024 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .addForm {
    max-width: 768px;
    min-width: 400px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  .addForm div {
    width: 400px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
  }

  .addForm input {
    width: 180px;
    height: 35px;
    font-size: 20px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .addForm select {
    width: 180px;
    height: 35px;
    font-size: 18px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .btn {
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .btn button {
    width: 150px;
    height: 40px;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
    background-color: #859a75;
    border: 0;
    border-radius: 5px;
  }
}

/* 551~767 */
@media screen and (min-width: 551px) and (max-width: 768px) {
  .addForm {
    max-width: 768px;
    min-width: 400px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  .addForm div {
    width: 400px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
  }

  .addForm input {
    width: 180px;
    height: 35px;
    font-size: 20px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .addForm select {
    width: 180px;
    height: 35px;
    font-size: 18px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .btn {
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .btn button {
    width: 150px;
    height: 40px;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
    background-color: #859a75;
    border: 0;
    border-radius: 5px;
  }
}

/* <551 */
@media screen and (max-width: 550px) {
  .addForm {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 0;
  }

  .addForm div {
    width: 300px;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
  }

  .addForm input {
    width: 180px;
    height: 35px;
    font-size: 17px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .addForm select {
    width: 180px;
    height: 35px;
    font-size: 17px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .btn {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .btn button {
    width: 80px;
    height: 30px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
    background-color: #859a75;
    border: 0;
    border-radius: 5px;
  }
}
</style>