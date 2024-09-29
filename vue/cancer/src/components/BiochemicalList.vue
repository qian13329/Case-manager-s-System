<template>
  <div class="biochemical">
    <div class="biochemicalList">
      <div class="mainFont secondFont">
        <a>三酸甘油脂</a>
      </div>
      <div class="biochemicalChart">
        <div class="value">
          <div class="num">
            <a>{{ item.pTAG }}</a>
          </div>
          <div class="unit">
            <a>mg/dl</a>
          </div>
          <button @click="click" class="button">
            <a>紀錄</a>
          </button>
        </div>
        <!-- 圖表 -->
        <ChartTAG :chartData="dataTAG" :label="labels" />
      </div>
    </div>

    <div class="biochemicalList">
      <div class="mainFont secondFont">
        <a>高密度脂蛋白</a>
      </div>
      <div class="biochemicalChart">
        <div class="value">
          <div class="num">
            <a>{{ item.pHDL }}</a>
          </div>
          <div class="unit">
            <a>mg/dl</a>
          </div>
          <button @click="recordHDL" class="button">
            <a>紀錄</a>
          </button>
        </div>
        <!-- 圖表 -->
        <ChartHDL :chartData="dataHDL" :label="labels" />
      </div>
    </div>

    <div class="biochemicalList">
      <div class="mainFont secondFont">
        <a>腹部脂肪</a>
      </div>
      <div class="biochemicalChart">
        <div class="value">
          <div class="num">
            <a>{{ item.pVAT }}</a>
          </div>
          <div class="unit">
            <a>mg/dl</a>
          </div>
          <button @click="recordVAT" class="button">
            <a>紀錄</a>
          </button>
        </div>
        <!-- 圖表 -->
        <ChartVAT :chartData="dataVAT" :label="labels" />
      </div>
    </div>
    <div class="biochemicalList">
      <div class="mainFont secondFont">
        <a>空腹血糖</a>
      </div>
      <div class="biochemicalChart">
        <div class="value">
          <div class="num">
            <a>{{ item.pAC }}</a>
          </div>
          <div class="unit">
            <a>mg/dl</a>
          </div>
          <button @click="recordAC" class="button">
            <a>紀錄</a>
          </button>
        </div>
        <!-- 圖表 -->
        <ChartAC :chartData="dataAC" :label="labels" />
      </div>
    </div>

    <div class="biochemicalList">
      <div class="mainFont secondFont">
        <a>血清素運送基因- 5羥色胺</a>
      </div>
      <div class="biochemicalChart">
        <div class="value">
          <div class="num">
            <a>{{ item.p5HTTLPR }}</a>
          </div>
          <div class="unit">
            <a>mg/dl</a>
          </div>
          <button @click="record5HTTLPR" class="button">
            <a>紀錄</a>
          </button>
        </div>
        <!-- 圖表 -->
        <ChartHTTLPR :chartData="dataHTTLPR" :label="labels" />
      </div>
    </div>
    <div class="biochemicalList">
      <div class="mainFont secondFont">
        <a>維生素D</a>
      </div>
      <div class="biochemicalChart">
        <div class="value">
          <div class="num">
            <a>{{ item.pVitaminD }}</a>
          </div>
          <div class="unit">
            <a>mg/dl</a>
          </div>
          <button @click="recordVitaminD" class="button">
            <a>紀錄</a>
          </button>
        </div>
        <!-- 圖表 -->
        <ChartVitaminD :chartData="dataVitaminD" :label="labels" />
      </div>
    </div>

    <!-- 彈出視窗 -->
    <div id="inputList--TAG" v-if="isPopup">
      <div class="recordDate">
        <input type="date" v-model="pDate" />
      </div>
      <div class="recordBio">
        <h2>三酸甘油脂</h2>
        <div class="recordValue">
          <input
            class="inputbox"
            type="input"
            id="TAG"
            v-model="pTAG"
            ref="pTAG"
          />
          <a class="inputbox--text">mg/dl</a>
        </div>
      </div>
      <div class="recordBio">
        <h2>高密度脂蛋白</h2>
        <div class="recordValue">
          <input
            class="inputbox"
            type="input"
            id="TAG"
            v-model="pHDL"
            ref="pHDL"
          />
          <a class="inputbox--text">mg/dl</a>
        </div>
      </div>
      <div class="recordBio">
        <h2>腹部脂肪</h2>
        <div class="recordValue">
          <input
            class="inputbox"
            type="input"
            id="TAG"
            v-model="pVAT"
            ref="pVAT"
          />
          <a class="inputbox--text">mg/dl</a>
        </div>
      </div>
      <div class="recordBio">
        <h2>空腹血糖</h2>
        <div class="recordValue">
          <input
            class="inputbox"
            type="input"
            id="TAG"
            v-model="pAC"
            ref="pAC"
          />
          <a class="inputbox--text">mg/dl</a>
        </div>
      </div>
      <div class="recordBio">
        <h2>血清素運送基因 -5羥色胺</h2>
        <div class="recordValue">
          <input
            class="inputbox"
            type="input"
            id="TAG"
            v-model="p5HTTLPR"
            ref="p5HTTLPR"
          />
          <a class="inputbox--text">mg/dl</a>
        </div>
      </div>
      <div class="recordBio">
        <h2>維生素D</h2>
        <div class="recordValue">
          <input
            class="inputbox"
            type="input"
            id="TAG"
            v-model="ipVitaminD"
            ref="pVitaminD"
          />
          <a class="inputbox--text">mg/dl</a>
        </div>
      </div>
      <div class="recordBtn">
        <button @click="addBiochemical()" class="submit" id="TAGSubmit">
          確定
        </button>
        <button @click="cancel()" class="cancel" id="TAGclose">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import ChartTAG from "../components/BiochemicalChart-TAG.vue"; // 三酸甘油脂
import ChartHDL from "../components/BiochemicalChart-HDL.vue"; // 高密度脂蛋白
import ChartVAT from "../components/BiochemicalChart-VAT.vue"; // 腹部脂肪
import ChartAC from "../components/BiochemicalChart-AC.vue"; // 空腹血糖
import ChartHTTLPR from "../components/BiochemicalChart-HTTLPR.vue"; // 血清素運送基因 -5羥色胺
import ChartVitaminD from "../components/BiochemicalChart-VitaminD.vue"; // 維他命D

import { insertBiochemical, allBiochemical } from "../services/api";
import Cookies from "js-cookie";
import dayjs from "dayjs";

export default {
  components: {
    ChartTAG,
    ChartHDL,
    ChartVAT,
    ChartAC,
    ChartHTTLPR,
    ChartVitaminD,
  },
  data() {
    return {
      day: this.item.pDate,
      isPopup: false,
      BiochemicalChartData: [],
      dataTAG: [],
      dataHDL: [],
      dataVAT: [],
      dataAC: [],
      dataHTTLPR: [],
      dataVitaminD: [],
      labels: [],
      pID: "",
      pDate: "",
      pTAG: "",
      pHDL: "",
      pVAT: "",
      pAC: "",
      p5HTTLPR: "",
      pVitaminD: "",
      token: "",
      thispNum: this.$route.params.pNum,
    };
  },
  props: {
    item: Object,
  },

  // params:{
  //   id:item
  // },

  methods: {
    // recordTAG() {
    //   this.isPopup = !this.isPopup;
    //   this.$nextTick(() => this.$refs.pTAG.focus())
    // },
    recordHDL() {
      this.isPopup = !this.isPopup;
      this.$nextTick(() => this.$refs.pHDL.focus());
    },
    recordVAT() {
      this.isPopup = !this.isPopup;
      this.$nextTick(() => this.$refs.pVAT.focus());
    },
    recordAC() {
      this.isPopup = !this.isPopup;
      this.$nextTick(() => this.$refs.pAC.focus());
    },
    record5HTTLPR() {
      this.isPopup = !this.isPopup;
      this.$nextTick(() => this.$refs.p5HTTLPR.focus());
    },
    recordVitaminD() {
      this.isPopup = !this.isPopup;
      this.$nextTick(() => this.$refs.pVitaminD.focus());
    },

    click() {
      this.isPopup = !this.isPopup;
      this.$nextTick(() => this.$refs.pTAG.focus());
    },
    addBiochemical() {
      insertBiochemical({
        pNum: this.thispNum,
        pDate: this.pDate,
        pTAG: this.pTAG,
        pHDL: this.pHDL,
        pVAT: this.pVAT,
        pAC: this.pAC,
        p5HTTLPR: this.p5HTTLPR,
        pVitaminD: this.pVitaminD,
        token: this.token,
      }).then(() => {
        alert("新增成功");
        this.$router.go(0);
        this.pDate = "";
        this.pTAG = "";
        this.pHDL = "";
        this.pVAT = "";
        this.pAC = "";
        this.p5HTTLPR = "";
        this.pVitaminD = "";
        this.isPopup = false;
      });
    },
    cancel() {
      this.isPopup = false;
      this.pDate = "";
      this.pTAG = "";
      this.pHDL = "";
      this.pVAT = "";
      this.pAC = "";
      this.p5HTTLPR = "";
      this.pVitaminD = "";
    },

    getDayArray() {
      date.push(this.day);
      console.log("daydaydayday");
      console.log(date);
    },

    //生化資料
    getBiochemical() {
      allBiochemical({
        pNum: this.thispNum,
        token: this.token,
      }).then((res) => {
        console.log("bio:", res);

        this.BiochemicalChartData.push(res.data);

        let length = this.BiochemicalChartData[0].length;
        for (let i = 0; i < length; i++) {
          const date = dayjs(this.BiochemicalChartData[0][i].pDate).format(
            "MM/DD"
          );
          this.labels.push(date);
          this.dataTAG.push(this.BiochemicalChartData[0][i].pTAG);
          this.dataHDL.push(this.BiochemicalChartData[0][i].pHDL);
          this.dataVAT.push(this.BiochemicalChartData[0][i].pVAT);
          this.dataAC.push(this.BiochemicalChartData[0][i].pAC);
          this.dataHTTLPR.push(this.BiochemicalChartData[0][i].p5HTTLPR);
          this.dataVitaminD.push(this.BiochemicalChartData[0][i].pVitaminD);

          console.log("11111111111:", this.labels, ":22222222222222");
          console.log("3333333333:", this.dataHTTLPR, ":22222222222222");
          // c = c + 1;
          // if (c == 28) {
          //   break;
          // }
        }
      });
    },
  },

  mounted() {
    this.token = Cookies.get("token");
    this.getBiochemical();
  },
};
</script>
<style scoped>
@media screen and (min-width: 1240px) {
  .biochemical {
    margin: 20px auto;
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .recordDate {
    width: 500px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  }

  .recordDate input[type="date"] {
    width: 220px;
    height: 35px;
    font-size: 22px;
    outline: none;
    padding: 5px;
    background-color: #ece9db;
    outline: none;
    border: none;
    border-radius: 10px;
  }

  .recordBio {
    width: 400px;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .recordBio h2 {
    width: 170px;
    font-size: 22px;
  }

  .recordBio a {
    margin-left: 10px;
    font-size: 22px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  .recordValue {
    width: 170px;
    display: flex;
    align-items: center;
  }

  .recordValue input[type="input"] {
    width: 100px;
    height: 30px;
    font-size: 22px;
    outline: none;
    padding: 5px;
  }

  .recordBtn {
    width: 170px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
  }

  .recordBtn button {
    width: 80px;
    height: 35px;
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 10px;
  }

  .container--value {
    width: 200px;
    display: flex;
    align-items: center;
  }

  .container--value input[type="input"] {
    width: 100px;
    height: 40px;
    font-size: 24px;
    outline: none;
    padding: 5px;
  }

  .mainFont {
    font-size: 28px;
    width: 100%;
    height: 40px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  /* .container--biochemical {
    width: 100%;
    max-width: 570px;
    margin: 20px;
    margin-bottom: 0px;
  } */

  .biochemicalChart {
    width: 100%;
    max-width: 570px;
    padding: 10px 20px;
    border-radius: 10px;
    border: gray 1px solid;
    background-color: white;
    display: flex;
    flex-direction: row;
  }

  .value {
    width: 30%;
    max-width: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
  }

  .num {
    width: 100%;
    max-width: 150px;
    font-size: 75px;
    height: 80px;
    display: flex;
    justify-content: flex-start;
  }

  .unit {
    width: 100%;
    max-width: 150px;
    font-size: 25px;
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
  }

  .button {
    width: 50%;
    max-width: 200px;
    height: 35px;
    font-size: 18px;
    font-weight: bold;
    line-height: 35px;
    color: white;
    background-color: #c0c0c0;
    border-radius: 20px;
    border: 0;
    text-align: center;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }

  .button:hover {
    background-color: gray;
  }

  /* h2 {
    margin-bottom: 10px;
  } */

  /* #inputList--TAG {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto; */
  /* 設定 */
  /* width: 400px;
    height: 300px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(10px 10px 20px black);
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex; */
  /* display: none; */
  /* justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
  }  */

  #inputList--TAG {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    /* 設定 */
    width: 600px;
    height: 670px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(5px 5px 10px rgb(62, 62, 62));
    /* box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634); */
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

  /* .container--inputbox {
    width: 280px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
  }

  .container--inputbox [type="date"] {
    width: 120px;
  }

  .container--value {
    width: 140px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  } */

  /* .container--btn {
    width: 150px;
    display: flex;
    justify-content: space-between;
  } */

  .inputbox--text {
    width: 40%;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    width: max-content;
  }
  /* 
  .inputbox {
    width: 40%;
    height: 25px;
    font-size: 14px;
    line-height: 40px;
    outline: none;
    padding: 0 5px;
  } */

  .btn {
    width: 70px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 5px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1240px) {
  .biochemical {
    margin: 20px auto;
    width: 1050px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .recordDate {
    width: 500px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  }

  .recordDate input[type="date"] {
    width: 220px;
    height: 35px;
    font-size: 22px;
    outline: none;
    padding: 5px;
    background-color: #ece9db;
    outline: none;
    border: none;
    border-radius: 10px;
  }

  .recordBio {
    width: 400px;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .recordBio h2 {
    width: 170px;
    font-size: 22px;
  }

  .recordBio a {
    margin-left: 10px;
    font-size: 22px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  .recordValue {
    width: 170px;
    display: flex;
    align-items: center;
  }

  .recordValue input[type="input"] {
    width: 100px;
    height: 30px;
    font-size: 22px;
    outline: none;
    padding: 5px;
  }

  .recordBtn {
    width: 170px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
  }

  .recordBtn button {
    width: 80px;
    height: 35px;
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 10px;
  }

  .container--value {
    width: 200px;
    display: flex;
    align-items: center;
  }

  .container--value input[type="input"] {
    width: 100px;
    height: 40px;
    font-size: 24px;
    outline: none;
    padding: 5px;
  }
  .mainFont {
    font-size: 28px;
    width: 100%;
    height: 40px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }

  /* .container--biochemical {
    width: 100%;
    margin: 20px;
    margin-bottom: 0px;
  } */

  .biochemicalChart {
    width: 460px;
    padding: 10px 20px;
    border-radius: 10px;
    border: gray 1px solid;
    background-color: white;
    display: flex;
    flex-direction: row;
  }

  .value {
    width: 30%;
    max-width: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
  }

  .num {
    width: 100%;
    max-width: 100px;
    font-size: 60px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
  }

  .unit {
    width: 100%;
    max-width: 100px;
    font-size: 25px;
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
  }

  .button {
    width: 70%;
    max-width: 200px;
    height: 35px;
    font-size: 18px;
    font-weight: bold;
    line-height: 35px;
    color: white;
    background-color: #c0c0c0;
    border-radius: 20px;
    border: 0;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }

  .button:hover {
    background-color: gray;
  }

  /* h2 {
    margin-bottom: 10px;
  } */

  /* #inputList--TAG {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto; */
  /* 設定 */
  /* width: 300px;
    height: 300px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(10px 10px 20px black);
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex; */
  /* display: none; */
  /* justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
  } */

  #inputList--TAG {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    /* 設定 */
    width: 570px;
    height: 660px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(5px 5px 10px rgb(62, 62, 62));
    /* box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634); */
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

  /* .container--inputbox {
    width: 280px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
  } */

  /* .container--inputbox [type="date"] {
    width: 120px;
  }

  .container--value {
    width: 140px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .container--btn {
    width: 150px;
    display: flex;
    justify-content: space-between;
  } */

  .inputbox--text {
    width: 40%;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    width: max-content;
  }

  /* .inputbox {
    width: 40%;
    height: 25px;
    font-size: 14px;
    line-height: 40px;
    outline: none;
    padding: 0 5px;
  } */

  .btn {
    width: 70px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 5px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .biochemical {
    margin: 20px auto;
    width: 1050px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .recordDate {
    width: 500px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  }

  .recordDate input[type="date"] {
    width: 220px;
    height: 35px;
    font-size: 22px;
    outline: none;
    padding: 5px;
    background-color: #ece9db;
    outline: none;
    border: none;
    border-radius: 10px;
  }

  .recordBio {
    width: 400px;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .recordBio h2 {
    width: 170px;
    font-size: 22px;
  }

  .recordBio a {
    margin-left: 10px;
    font-size: 22px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  .recordValue {
    width: 170px;
    display: flex;
    align-items: center;
  }

  .recordValue input[type="input"] {
    width: 100px;
    height: 30px;
    font-size: 22px;
    outline: none;
    padding: 5px;
  }

  .recordBtn {
    width: 170px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
  }

  .recordBtn button {
    width: 80px;
    height: 35px;
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 10px;
  }

  .container--value {
    width: 200px;
    display: flex;
    align-items: center;
  }

  .container--value input[type="input"] {
    width: 100px;
    height: 40px;
    font-size: 24px;
    outline: none;
    padding: 5px;
  }
  .mainFont {
    font-size: 28px;
    width: 100%;
    height: 40px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }

  /* .container--biochemical {
    width: 100%;
    margin: 20px;
    margin-bottom: 0px;
  } */

  .biochemicalChart {
    width: 700px;
    padding: 10px 20px;
    border-radius: 10px;
    border: gray 1px solid;
    background-color: white;
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
    font-size: 75px;
    height: 90px;
    display: flex;
    justify-content: flex-start;
    padding-left: 10px;
  }

  .unit {
    width: 100%;
    max-width: 150px;
    font-size: 25px;
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
  }

  .button {
    width: 50%;
    max-width: 200px;
    height: 35px;
    font-size: 18px;
    font-weight: bold;
    line-height: 35px;
    color: white;
    background-color: #c0c0c0;
    border-radius: 20px;
    border: 0;
    text-align: center;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }

  .button:hover {
    background-color: gray;
  }

  /* h2 {
    margin-bottom: 10px;
  } */

  /* #inputList--TAG {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto; */
  /* 設定 */
  /* width: 300px;
    height: 300px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(10px 10px 20px black);
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex; */
  /* display: none; */
  /* justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
  } */

  #inputList--TAG {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    /* 設定 */
    width: 550px;
    height: 640px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(5px 5px 10px rgb(62, 62, 62));
    /* box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634); */
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

  /* .container--inputbox {
    width: 280px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
  }

  .container--inputbox [type="date"] {
    width: 120px;
  }

  .container--value {
    width: 140px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .container--btn {
    width: 150px;
    display: flex;
    justify-content: space-between;
  } */

  .inputbox--text {
    width: 40%;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    width: max-content;
  }

  /* .inputbox {
    width: 40%;
    height: 25px;
    font-size: 14px;
    line-height: 40px;
    outline: none;
    padding: 0 5px;
  } */

  .btn {
    width: 70px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 5px;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  .biochemical {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 700px;
    width: 100%;
  }

  .recordDate {
    width: 500px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  }

  .recordDate input[type="date"] {
    width: 220px;
    height: 35px;
    font-size: 22px;
    outline: none;
    padding: 5px;
    background-color: #ece9db;
    outline: none;
    border: none;
    border-radius: 10px;
  }

  .recordBio {
    width: 400px;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .recordBio h2 {
    width: 170px;
    font-size: 22px;
  }

  .recordBio a {
    margin-left: 10px;
    font-size: 22px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  .recordValue {
    width: 170px;
    display: flex;
    align-items: center;
  }

  .recordValue input[type="input"] {
    width: 100px;
    height: 30px;
    font-size: 22px;
    outline: none;
    padding: 5px;
  }

  .recordBtn {
    width: 170px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
  }

  .recordBtn button {
    width: 80px;
    height: 35px;
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 10px;
  }

  .container--value {
    width: 200px;
    display: flex;
    align-items: center;
  }

  .container--value input[type="input"] {
    width: 100px;
    height: 40px;
    font-size: 24px;
    outline: none;
    padding: 5px;
  }

  .mainFont {
    font-size: 28px;
    width: 100%;
    height: 40px;
    margin: 20px 12px;
    display: flex;
    justify-content: space-between;
  }
  /* 
  .container--biochemical {
    width: 100%;
    max-width: 700px;
    margin-bottom: 0px;
  } */

  .biochemicalList {
    margin: 0 auto;
    /* padding: 0 20px; */
    width: 95%;
  }

  .biochemicalChart {
    width: 95%;
    max-width: 600px;
    padding: 10px 20px;
    border-radius: 10px;
    border: gray 1px solid;
    background-color: white;
    display: flex;
    flex-direction: row;
    margin-left: 12px;
  }

  .value {
    width: 30%;
    max-width: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
  }

  .num {
    width: 100%;
    max-width: 150px;
    font-size: 60px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    padding-left: 10px;
  }

  .unit {
    width: 100%;
    max-width: 150px;
    font-size: 25px;
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
  }

  .button {
    width: 70px;
    height: 35px;
    font-size: 18px;
    font-weight: bold;
    line-height: 35px;
    color: white;
    background-color: #c0c0c0;
    border-radius: 20px;
    border: 0;
    text-align: center;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }

  .button:hover {
    background-color: gray;
  }

  /* h2 {
    margin-bottom: 10px;
  }

  #inputList--TAG {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto; */
  /* 設定 */
  /* width: 300px;
    height: 300px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(10px 10px 20px black);
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex; */
  /* display: none; */
  /* justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
  } */

  #inputList--TAG {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    /* 設定 */
    width: 540px;
    height: 630px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(5px 5px 10px rgb(62, 62, 62));
    /* box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634); */
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

  /* .container--inputbox {
    width: 280px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
  }

  .container--value {
    width: 140px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .container--btn {
    width: 150px;
    display: flex;
    justify-content: space-between;
  } */

  .inputbox--text {
    width: 40%;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    width: max-content;
  }

  /* .inputbox {
    width: 40%;
    height: 25px;
    font-size: 14px;
    line-height: 40px;
    outline: none;
    padding: 0 5px;
  } */

  .btn {
    width: 70px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 5px;
  }
}

@media screen and (max-width: 550px) {
  .biochemical {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 700px;
    width: 100%;
  }

  .recordDate {
    width: 250px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  }

  .recordDate input[type="date"] {
    width: 220px;
    height: 35px;
    font-size: 20px;
    outline: none;
    padding: 5px;
    background-color: #ece9db;
    outline: none;
    border: none;
    border-radius: 10px;
  }

  .recordBio {
    width: 320px;
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .recordBio h2 {
    width: 150px;
    font-size: 20px;
  }

  .recordBio a {
    margin-left: 10px;
    font-size: 20px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  .recordValue {
    width: 150px;
    display: flex;
    align-items: center;
  }

  .recordValue input[type="input"] {
    width: 100px;
    height: 30px;
    font-size: 20px;
    outline: none;
    padding: 5px;
  }

  .recordBtn {
    width: 160px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
  }

  .recordBtn button {
    width: 75px;
    height: 35px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 10px;
  }

  .container--value {
    width: 200px;
    display: flex;
    align-items: center;
  }

  .container--value input[type="input"] {
    width: 100px;
    height: 40px;
    font-size: 24px;
    outline: none;
    padding: 5px;
  }

  .mainFont {
    font-size: 28px;
    width: 100%;
    height: 40px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  /* 
  .container--biochemical {
    width: 100%;
    max-width: 500px;
    min-width: 320px;
    margin: 10px auto;
  } */

  .biochemicalList {
    margin: 0 auto;
    /* padding: 0 20px; */
    width: 95%;
  }

  .biochemicalChart {
    max-width: 500px;
    min-width: 320px;
    border-radius: 10px;
    border: gray 1px solid;
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  .value {
    width: 100%;
    min-width: 260px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }

  .num {
    font-size: 40px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
  }

  .unit {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .button {
    width: 60px;
    height: 35px;
    font-size: 18px;
    font-weight: bold;
    line-height: 35px;
    color: white;
    background-color: #c0c0c0;
    border-radius: 20px;
    border: 0;
    text-align: center;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }

  .button:hover {
    background-color: gray;
  }

  /* h2 {
    margin-bottom: 10px;
  } */

  /* #inputList--TAG {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto; */
  /* 設定 */
  /* width: 300px;
    height: 300px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(10px 10px 20px black);
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex; */
  /* justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
  } */

  #inputList--TAG {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    /* 設定 */
    width: 400px;
    height: 580px;
    padding: 30px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    filter: drop-shadow(5px 5px 10px rgb(62, 62, 62));
    /* box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634); */
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

  /* .container--inputbox {
    width: 280px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
  }

  .container--value {
    width: 140px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .container--btn {
    width: 150px;
    display: flex;
    justify-content: space-between;
  } */

  .inputbox--text {
    width: 40%;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    width: max-content;
  }
  /* 
  .inputbox {
    width: 40%;
    height: 25px;
    font-size: 14px;
    line-height: 40px;
    outline: none;
    padding: 0 5px;
  } */

  .btn {
    width: 70px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 5px;
  }
}

.submit {
  background-color: #3db62a;
}

.cancel {
  background-color: #ffa217;
}
</style>