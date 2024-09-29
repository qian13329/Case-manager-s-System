<template>
  <div class="bgColor">
    <div>
      <a class="basic-title">職業</a>
      <a id="pProfession">{{ item.pProfession }}</a>
    </div>
    <div>
      <a class="basic-title">婚姻</a>
      <a id="pMarriage">{{ item.pMarriage }}</a>
    </div>
    <div>
      <a class="basic-title">家庭人數</a>
      <a id="pFamilySize">{{ item.pFamilySize }}</a>
    </div>
    <div>
      <a class="basic-title">子女數</a>
      <a id="pChild">{{ item.pChild }}</a>
    </div>
    <div>
      <a class="basic-title">宗教信仰</a>
      <a id="pReligion">{{ item.pReligion }}</a>
    </div>
    <div>
      <a class="basic-title">教育程度</a>
      <a id="pEdu">{{ item.pEdu }}</a>
    </div>
    <div>
      <a class="basic-title">病史</a>
      <a id="pDisease">{{ item.pDisease }}</a>
    </div>
    <!-- <div>
      <a class="basic-title">使用藥物</a>
      <a id="pDrugs">{{ item.pDrugs }}</a>
    </div> -->
    <div>
      <a class="basic-title">運動習慣</a>
      <a id="pSport">{{ item.pSport }}</a>
    </div>
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
    max-width: 400px;
    min-width: 250px;
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
    border-radius: 12px;
    margin-top: 20px;
    padding: 15px;
  }

  .bgColor div {
    max-width: 350px;
    min-width: 220px;
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
    max-width: 825px;
    background-color: #e5ecdb99;
    font-size: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    margin-top: 20px;
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
    font-size: 22px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    margin-top: 20px;
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
    border-radius: 12px;
    margin-top: 20px;
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