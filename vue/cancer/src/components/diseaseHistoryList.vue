<template>
  <div class="historyList">
    <!-- 就診資料 -->
    <div>
      <div @click="isActive = !isActive" class="historyList-title">
        <div>{{ item.date }}</div>
        <div v-if="!this.isActive">▼</div>
        <div v-else>▲</div>
      </div>
      <collapse>
        <div class="historyItem" v-show="isActive">
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
            <a class="itemValue">{{ item.lymphaticMtastasis }}</a>
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
    width: 900px;
    height: 380px;
    font-size: 24px;
    display: flex;
    flex-flow: column wrap;
    margin: 10px auto;
  }

  .itemDiv {
    width: 47%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }

  .itemTitle {
    width: 170px;
    font-weight: bold;
    margin: 10px;
    /*color: #859a75;*/
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
    height: 360px;
    font-size: 22px;
    display: flex;
    flex-flow: column wrap;
    align-content: flex-start;
    margin: 10px auto;
  }

  .itemDiv {
    width: 47%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    margin-right: 0;
  }

  .itemTitle {
    width: 150px;
    font-weight: bold;
    margin: 10px;
    /*color: #859a75;*/
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
    width: 450px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }

  .itemTitle {
    width: 200px;
    font-weight: bold;
    margin: 10px;
    /*color: #859a75;*/
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

  .itemTitle {
    width: 140px;
    font-weight: bold;
    margin: 10px;
    /*color: #859a75;*/
  }
}
</style>