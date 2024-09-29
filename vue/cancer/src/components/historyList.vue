<template>
  <div class="historyList">
    <!--  -->
    <!-- 就診資料 -->
    <div>
      <div @click="isActive = !isActive" class="historyList-title">
        <div>{{ item.pDate }}</div>
        <div v-if="!this.isActive">▼</div>
        <div v-else>▲</div>
      </div>
      <collapse>
        <div class="historyItem" v-show="isActive">
          <div class="itemDiv">
            <div class="itemTitle"><a>三酸甘油脂</a></div>
            <!-- value要寫超標是紅色 -->
            <a class="itemValue">{{ item.pTAG }}</a>
            <a class="itemUnit">mg/dl</a>
          </div>
          <div class="itemDiv">
            <div class="itemTitle"><a>高密度脂蛋白</a></div>
            <a class="itemValue">{{ item.pHDL }}</a>
            <a class="itemUnit">mg/dl</a>
          </div>
          <div class="itemDiv">
            <div class="itemTitle"><a>腹部脂肪</a></div>
            <a class="itemValue">{{ item.pVAT }}</a>
            <a class="itemUnit">mg/dl</a>
          </div>
          <div class="itemDiv">
            <div class="itemTitle"><a>空腹血糖</a></div>
            <a class="itemValue">{{ item.pAC }}</a>
            <a class="itemUnit">單位</a>
          </div>
          <div class="itemDiv">
            <div class="itemTitle HTTLPR"><a>血清素運送基因- 5羥色胺</a></div>
            <a class="itemValue">{{ item.p5HTTLPR }}</a>
            <a class="itemUnit">單位</a>
          </div>
          <div class="itemDiv">
            <div class="itemTitle"><a>維生素D</a></div>
            <a class="itemValue">{{ item.pVitaminD }}</a>
            <a class="itemUnit">ng/ml</a>
          </div>
          <div class="itemDiv">
            <div class="itemTitle dpScore"><a>憂鬱情緒檢測分數</a></div>
            <!-- <a class="itemValue">{{ item.dpScore }}</a> -->
          </div>
          <div class="itemTitle-doctorSay">
            <div class="itemTitle"><a>醫師診斷</a></div>
            <div class="doctorSay">
              <!-- <a>{{ item.doctorSay }}</a> -->
            </div>
          </div>
        </div>
      </collapse>
    </div>
  </div>
</template>

<script>
import collapse from "../assets/js/collapse.js";
export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    item: Object,
  },
  components: {
    collapse,
  },
};
</script>

<style scoped>
@media screen and (min-width: 1025px) {
  .historyList {
    margin: 25px auto;
  }

  .historyList-title {
    height: 55px;
    font-size: 26px;
    font-weight: bold;
    background-color: #d8d6cb;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .historyItem {
    height: 380px;
    font-size: 24px;
    display: flex;
    flex-flow: column wrap;
    padding: 10px;
  }

  .itemDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }

  .itemTitle-doctorSay {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  .itemTitle {
    width: 170px;
    font-weight: bold;
    margin: 10px;
    /*color: #859a75;*/
  }

  .HTTLPR {
    width: 280px;
  }

  .dpScore {
    width: 200px;
  }

  .itemValue {
    margin: 0 15px;
  }

  .doctorSay {
    width: 500px;
    height: 120px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: auto;
    margin: 10px;
    padding: 7px;
  }
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
  .historyList {
    width: 100%;
    margin: 25px auto;
  }

  .historyList-title {
    height: 55px;
    font-size: 26px;
    font-weight: bold;
    background-color: #d8d6cb;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .historyItem {
    width: 100%;
    height: 420px;
    font-size: 22px;
    display: flex;
    flex-flow: column wrap;
    align-content: space-between;
    margin: 0 auto;
    padding: 10px 0;
  }

  .itemDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }

  .itemTitle-doctorSay {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 10px;
    margin-right: 20px;
  }

  .itemTitle {
    width: 170px;
    font-weight: bold;
    margin: 10px;
    /*color: #859a75;*/
  }

  .HTTLPR {
    width: 170px;
  }

  .dpScore {
    width: 200px;
  }

  .itemValue {
    margin: 0 15px;
  }

  .itemUnit {
    margin-right: 10px;
  }

  .doctorSay {
    height: 150px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: auto;
    margin: 10px;
    padding: 7px;
  }
}

@media screen and (min-width: 551px) and (max-width: 767px) {
  .historyList {
    width: 100%;
    margin: 25px auto;
  }

  .historyList-title {
    height: 50px;
    font-size: 24px;
    font-weight: bold;
    background-color: #d8d6cb;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .historyItem {
    width: 100%;
    /* height: 400px; */
    font-size: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 10px 0;
  }

  .itemDiv {
    width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }

  .itemTitle-doctorSay {
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  .itemTitle {
    width: 200px;
    font-weight: bold;
    margin: 10px;
    /*color: #859a75;*/
  }

  .HTTLPR {
    width: 180px;
    margin-right: 30px;
  }

  .dpScore {
    width: 200px;
  }

  .itemValue {
    margin: 0 20px 0 15px;
  }

  .itemUnit {
    margin-right: 10px;
  }

  .doctorSay {
    height: 150px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: auto;
    margin: 10px;
    padding: 7px;
  }
}

@media screen and (max-width: 550px) {
  .historyList {
    width: 100%;
    margin: 25px auto;
  }

  .historyList-title {
    width: 100%;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    background-color: #d8d6cb;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .historyItem {
    width: 100%;
    /* height: 400px; */
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 10px 0;
  }

  .itemDiv {
    width: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }

  .itemTitle-doctorSay {
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px;
  }

  .itemTitle {
    width: 140px;
    font-weight: bold;
    margin: 10px;
    /*color: #859a75;*/
  }

  .HTTLPR {
    width: 140px;
  }

  .dpScore {
    width: 160px;
  }

  .itemValue {
    margin: 0 15px;
  }

  .itemUnit {
    margin-right: 10px;
  }

  .doctorSay {
    height: 150px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: auto;
    margin: 10px;
    padding: 7px;
  }
}
</style>