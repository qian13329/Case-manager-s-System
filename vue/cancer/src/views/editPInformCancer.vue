<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <!-- 返回鍵 -->
        <div class="hidden">
          <a href="#"
            ><img src="../assets/img/back.png" class="back" @click="back"
          /></a>
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
      <div v-for="item in MajorDiseaseData" :key="item.pNum" :item="item">
        <div class="editForm">
          <div>
            <label for="cancer">癌症</label>
            <input type="text" id="case" v-model="item.case" />
          </div>
          <div>
            <label for="period">期數</label>
            <input type="text" id="period" v-model="item.period" />
          </div>
          <div>
            <label for="pCancerTime">發現時間</label>
            <input type="date" id="pCancerTime" v-model="item.pCancerTime" />
          </div>
          <div>
            <label for="tumorSize">腫瘤大小</label>
            <input type="text" id="tumorSize" v-model="item.tumorSize" />
          </div>
          <div>
            <label for="lymphaticMtastasis">淋巴轉移</label>
            <select id="lymphaticMtastasis" v-model="item.lymphaticMtastasis">
              <option value="1">有</option>
              <option value="2">無</option>
            </select>
          </div>
          <div>
            <label for="plan">治療方式</label>
            <input type="text" id="plan" v-model="item.plan" />
          </div>
          <div>
            <label for="drug">藥物</label>
            <input type="text" id="drug" v-model="item.drug" />
          </div>
          <div>
            <label for="DrugAllergy">藥物過敏</label>
            <input type="text" id="DrugAllergy" v-model="item.DrugAllergy" />
          </div>
        </div>
        <div class="btn">
          <button
            @click="
              addPInformCancer(
                item.pCancerTime,
                item.case,
                item.lymphaticMtastasis,
                item.drug,
                item.period,
                item.transferLocation,
                item.DrugAllergy,
                item.tumorSize,
                item.plan
              )
            "
          >
            送出
          </button>
        </div>
      </div>
    </div>

    <!-- footer -->
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
import { mainInfo, insertMainInfo } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      MajorDiseaseData: [],
      // pID: "",
      // pNum: "",
      // cancer: "",
      // period: "",
      // date: "",
      // pCancerTime: "",
      // tumorSize: "",
      // lymphaticMtastasis: "",
      // plan: "",
      // drug: "",
      // DrugAllergy: "",
      token: "",
      thispNum: this.$route.params.pNum,
      isCollapse: false,
      fullHeight: 0,
      fullWidth: 0,
    };
  },
  methods: {
    // 回上一頁
    back() {
      this.$router.go(-1);
    },

    // 今天日期
    today() {
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth();
      let d = date.getDate();
      let today = y + "-" + m + "-" + d;
      this.date = today;
    },

    // 病患癌症資料
    getMainInfo() {
      mainInfo({
        pNum: this.thispNum,
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.MajorDiseaseData.push(res.data);
      });
    },

    // 新增患者癌症資料
    addPInformCancer(
      pCancerTime,
      cancer,
      lymphaticMtastasis,
      drug,
      period,
      transferLocation,
      DrugAllergy,
      tumorSize,
      plan
    ) {
      insertMainInfo({
        pNum: this.thispNum,
        date: this.date,
        pCancerTime: pCancerTime,
        case: cancer,
        lymphaticMtastasis: lymphaticMtastasis,
        drug: drug,
        period: period,
        transferLocation: transferLocation,
        DrugAllergy: DrugAllergy,
        tumorSize: tumorSize,
        plan: plan,
        token: this.token,
      }).then(() => {
        alert("修改成功");
        this.$router.go(-1);
      });
    },
  },

  mounted() {
    this.token = Cookies.get("token");
    this.getMainInfo();
    this.today();
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
.btn button:hover {
  background-color: #a7b59d;
}

/* >1024 */
@media screen and (min-width: 1025px) {
  .container {
    max-width: 1000px;
    margin: 0 auto;
    /*padding-bottom: 100px;*/
  }

  .editForm {
    max-width: 768px;
    min-width: 400px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  .editForm div {
    width: 400px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
  }

  .editForm input {
    width: 180px;
    height: 35px;
    font-size: 20px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .editForm select {
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
  .editForm {
    max-width: 768px;
    min-width: 400px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  .editForm div {
    width: 400px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
  }

  .editForm input {
    width: 180px;
    height: 35px;
    font-size: 20px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .editForm select {
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
  .editForm {
    max-width: 768px;
    min-width: 400px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  .editForm div {
    width: 400px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
  }

  .editForm input {
    width: 180px;
    height: 35px;
    font-size: 20px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .editForm select {
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
  .editForm {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 0;
  }

  .editForm div {
    width: 300px;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
  }

  .editForm input {
    width: 180px;
    height: 35px;
    font-size: 17px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .editForm select {
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
} ;
</style>