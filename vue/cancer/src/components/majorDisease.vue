<template>
  <div class="bgColor">
    <div>
      <a class="basic-title">病例</a>
      <a id="case">{{ item.case }}</a>
    </div>
    <div>
      <a class="basic-title">期數</a>
      <a id="period">第{{ item.period }}期</a>
    </div>
    <div>
      <a class="basic-title">腫瘤大小</a>
      <a id="tumorSize">{{ item.tumorSize }}</a>
    </div>
    <div>
      <a class="basic-title">發現日期</a>
      <a id="pCancerTime">{{ item.pCancerTime }}</a>
    </div>
    <div>
      <a class="basic-title">淋巴轉移</a>
      <a id="lymphaticMtastasis">{{ item.lymphaticMtastasis }}</a>
    </div>
    <div>
      <a class="basic-title">轉移位置</a>
      <a id="transferLocation">{{ item.transferLocation }}</a>
    </div>
    <div>
      <a class="basic-title">治療方案</a>
      <a id="plan">{{ item.plan }}</a>
    </div>
    <!-- <div>
      <a class="basic-title">藥物</a>
      <a id="drug">{{ item.drug }}</a>
    </div> -->
    <!-- <div>
        <a class="basic-title">藥物過敏</a>
        <a id="DrugAllergy">{{ item.DrugAllergy }}</a>
      </div> -->
    <!-- <div>
      <a href="#depressionChart" class="depression">➜憂鬱指數</a>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>
    
<style scoped>
.depression {
  color: #d89c52;
  font-weight: bold;
}
@media screen and (min-width: 1240px) {
  .bgColor {
    background-color: #e5ecdb99;
    font-size: 24px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-top: 20px;
    border-radius: 12px;
  }

  .bgColor div {
    width: 250px;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #647e5f;
    font-weight: bold;
  }
}
/* computer */
@media screen and (min-width: 1025px) and (max-width: 1240px) {
  .bgColor {
    background-color: #e5ecdb99;
    font-size: 22px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  .bgColor div {
    max-width: 300px;
    min-width: 210px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #647e5f;
    font-weight: bold;
  }
}

/* pad */
@media screen and (min-width: 767px) and (max-width: 1024px) {
  .bgColor {
    background-color: #e5ecdb99;
    font-size: 22px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  .bgColor div {
    max-width: 300px;
    min-width: 210px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #647e5f;
    font-weight: bold;
  }
}

/* phone row */
@media screen and (min-width: 551px) and (max-width: 767px) {
  .bgColor {
    background-color: #e5ecdb99;
    font-size: 18px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  .bgColor div {
    max-width: 300px;
    min-width: 200px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #647e5f;
    font-weight: bold;
  }
}

/* phone cloumn */
@media screen and (max-width: 550px) {
  .bgColor {
    background-color: #e5ecdb99;
    font-size: 22px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  .bgColor div {
    max-width: 300px;
    min-width: 250px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .basic-title {
    width: 100px;
    color: #647e5f;
    font-weight: bold;
  }
}
</style>