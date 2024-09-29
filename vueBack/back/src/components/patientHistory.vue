<template>
  <!-- <div  v-for="items in item.patient" :key="items.pNum" :item="items"> -->
  <div class="historyList" v-if="item.pNum === $route.params.pNum">
    <!-- 就診資料 -->
    <div @click="isActive = !isActive" class="historyList-title">
      <div>{{ item.date }}</div>
      <div v-if="!this.isActive">▼</div>
      <div v-else>▲</div>
    </div>
    <collapse>
      <div class="historyItem" v-show="isActive">
        <!-- <div class="itemDiv">
            <a class="itemDiv--title">主治醫師</a>
            <a>{{ item.doctor }}</a>
          </div> -->
        <!-- 癌症資料 -->
        <!-- <h2>癌症資料</h2> -->
        <div class="itemDiv">
          <div class="itemTitle"><a>發現日期</a></div>
          <a class="itemValue">{{ item.pCancerTime }}</a>
        </div>
        <div class="itemDiv">
          <div class="itemTitle"><a>病例</a></div>
          <a class="itemValue">{{ item.case }}</a>
        </div>
        <div class="itemDiv">
          <div class="itemTitle"><a>期數</a></div>
          <a class="itemValue">第{{ item.period }}期</a>
        </div>
        <div class="itemDiv">
          <div class="itemTitle"><a>腫瘤大小</a></div>
          <a class="itemValue">{{ item.tumorSize }}</a>
        </div>
        <div class="itemDiv">
          <div class="itemTitle"><a>淋巴轉移</a></div>
          <a class="itemValue" v-if="item.lymphaticMtastasis == 1">有</a>
          <a class="itemValue" v-if="item.lymphaticMtastasis == 2">無</a>
        </div>
        <div class="itemDiv">
          <div class="itemTitle"><a>轉移位置</a></div>
          <a class="itemValue">{{ item.transferLocation }}</a>
        </div>
        <div class="itemDiv">
          <div class="itemTitle"><a>治療方案</a></div>
          <a class="itemValue">{{ item.plan }}</a>
        </div>
        <div class="itemDiv">
          <div class="itemTitle"><a>藥物</a></div>
          <a class="itemValue">{{ item.drug }}</a>
        </div>
        <div class="itemDiv">
          <div class="itemTitle"><a>藥物過敏</a></div>
          <a class="itemValue">{{ item.DrugAllergy }}</a>
        </div>
        <div class="itemDiv">
          <a class="itemDiv--title">憂鬱指數</a>
          <a>{{ item.dpScore }}</a>
        </div>
        <div class="itemDiv--doctorSay">
          <a class="itemDiv--title">醫師診斷</a>
          <div class="doctorSay">
            <a>{{ item.doctorSay }}</a>
          </div>
        </div>
      </div>
    </collapse>
  </div>
  <!-- </div> -->
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
.historyList {
  display: flex;
  flex-direction: column;
}

.itemDiv {
  border-bottom: 1px solid #000;
}

.historyList-title {
  font-weight: bolder;
}

@media screen and (min-width: 1201px) {
  .historyList-title {
    margin: 8px auto;
    padding: 0 30px;
    width: 1000px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 24px;
    /* font-weight: bolder; */
    transition: 0.2s;
  }

  .historyItem {
    margin: 20px auto;
    width: 950px;
    /* height: 420px; */
    font-size: 24px;
    display: flex;
    flex-wrap: wrap;
  }

  .itemDiv {
    display: flex;
    /*flex-direction: row;*/
    align-items: center;
    margin: 20px;
    width: 435px;
    height: 40px;
    justify-content: flex-start;
  }

  .itemTitle {
    font-weight: bolder;
    width: 200px;
  }

  .itemDiv--title {
    width: 170px;
    font-weight: bolder;
  }

  .itemDiv--doctorSay {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .doctorSay {
    width: 900px;
    height: 150px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: auto;
    /*margin: 10px;*/
    margin-top: 20px;
    padding: 7px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .historyList-title {
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
    font-size: 24px;
    /*font-weight: bolder;*/
    transition: 0.2s;
  }

  .historyItem {
    margin: 20px auto;
    width: 845px;
    /* height: 420px; */
    font-size: 24px;
    display: flex;
    flex-wrap: wrap;
  }

  .itemDiv {
    display: flex;
    /*flex-direction: row;*/
    align-items: center;
    margin: 20px;
    width: 380px;
    height: 40px;
    justify-content: flex-start;
  }

  .itemTitle,
  .itemDiv--title {
    width: 170px;
    font-weight: bolder;
  }

  .itemDiv--doctorSay {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .doctorSay {
    width: 800px;
    height: 150px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: auto;
    /*margin: 10px;*/
    margin-top: 20px;
    padding: 7px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .historyList-title {
    margin: 8px auto;
    padding: 0 30px;
    width: 90%;
    max-width: 700px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 23px;
    /*font-weight: bolder;*/
    transition: 0.2s;
  }

  .historyItem {
    margin: 20px auto;
    width: 700px;
    /* height: 420px; */
    font-size: 23px;
    display: flex;
    flex-wrap: wrap;
  }

  .itemDiv {
    display: flex;
    /*flex-direction: row;*/
    align-items: center;
    margin: 20px;
    width: 300px;
    height: 40px;
    justify-content: flex-start;
  }

  .itemTitle,
  .itemDiv--title {
    width: 170px;
    font-weight: bolder;
  }

  .itemDiv--doctorSay {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .doctorSay {
    width: 650px;
    height: 120px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: auto;
    /*margin: 10px;*/
    margin-top: 20px;
    padding: 7px;
  }
}
@media screen and (min-width: 551px) and (max-width: 768px) {
  .historyList-title {
    margin: 8px auto;
    padding: 0 30px;
    width: 90%;
    max-width: 700px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 23px;
    /*font-weight: bolder;*/
    transition: 0.2s;
  }

  .historyItem {
    margin: 20px auto;
    width: 85%;
    /* max-width: 530px; */
    /* height: 420px; */
    font-size: 22px;
    display: flex;
    flex-wrap: wrap;
  }

  .itemDiv {
    display: flex;
    /*flex-direction: row;*/
    align-items: center;
    margin: 20px;
    /* margin: 10px; */
    width: 90%;
    /* max-width: 250px; */
    height: 40px;
    justify-content: flex-start;
  }

  .itemTitle,
  .itemDiv--title {
    width: 200px;
    font-weight: bolder;
  }

  .itemDiv--doctorSay {
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 500px;
  }

  .doctorSay {
    /* width: 500px; */
    width: 100%;
    height: 120px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: auto;
    /*margin: 10px;*/
    margin-top: 20px;
    padding: 7px;
  }
}
@media screen and (max-width: 550px) {
  .historyList-title {
    margin: 8px auto;
    padding: 0 30px;
    width: 90%;
    max-width: 500px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 22px;
    /*font-weight: bolder;*/
    transition: 0.2s;
  }

  .historyItem {
    margin: 0 auto;
    width: 400px;
    /* height: 420px; */
    font-size: 20px;
  }

  .itemDiv {
    display: flex;
    /*flex-direction: row;*/
    align-items: center;
    margin: 30px auto;
    max-width: 400px;
    width: 80%;
    height: 40px;
    justify-content: flex-start;
  }

  .itemTitle,
  .itemDiv--title {
    width: 170px;
    font-weight: bolder;
  }

  .itemDiv--doctorSay {
    display: flex;
    flex-direction: column;
    margin: 40px 40px;
    /* height: 350px; */
  }

  .doctorSay {
    width: 100%;
    /* max-width: 300px; */
    height: 120px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: auto;
    /*margin: 10px;*/
    margin-top: 20px;
    padding: 7px;
  }
}
</style>