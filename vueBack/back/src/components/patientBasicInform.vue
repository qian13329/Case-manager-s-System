<template>
  <div>
    <div>
      <div class="patientInform">
        <!-- 個資 -->
        <div class="profile">
          <!--頭像+姓名+編號-->
          <!-- <div class="pic_name_num"> -->
          <!-- <img src="../assets/img/woman.png" width="120px" height="120px" /> -->
          <!-- <div class="img"></div> -->
          <!-- <div>
          <a class="pName">{{ item.pName }}</a>
          <a class="pNum">{{ item.pNum }}</a>
        </div> -->
          <!-- </div> -->
          <div class="mainInform">
            <div>
              <a class="mainInform--title">病歷號碼</a>
              <a style="color: #859a75">{{ item.pNum }}</a>
            </div>
            <div>
              <a class="mainInform--title">姓名</a>
              <a>{{ item.pName }}</a>
            </div>
            <div>
              <a class="mainInform--title">性別</a>
              <a v-if="item.pSex == 1">男</a>
              <a v-if="item.pSex == 2">女</a>
            </div>
            <div>
              <a class="mainInform--title">身分證字號</a>
              <a>{{ item.pID }}</a>
            </div>
            <div>
              <a class="mainInform--title">出生年月日</a
              ><a>{{ item.birthday }}</a>
            </div>
            <div>
              <a class="mainInform--title">年齡</a><a>{{ item.pAge }}</a>
            </div>
            <div>
              <a class="mainInform--title">聯絡方式</a>
              <a>{{ item.phone }}</a>
            </div>
            <div>
              <a class="mainInform--title">電子郵件</a>
              <a class="pMail">{{ item.email }}</a>
            </div>
            <div>
              <a class="mainInform--title">通訊地址</a>
              <a class="pAddress">{{ item.address }}</a>
            </div>
          </div>
          <div class="basicInform">
            <div>
              <a class="basicInform--title">職業</a>
              <a>{{ item.pProfession }}</a>
            </div>
            <div>
              <a class="basicInform--title">婚姻狀況</a>
              <a>{{ item.pMarriage }}</a>
            </div>
            <div>
              <a class="basicInform--title">子女數</a>
              <a>{{ item.pChild }}</a>
            </div>
            <div>
              <a class="basicInform--title">家人</a>
              <a>{{ item.pFamilySize }}</a>
            </div>
            <div>
              <a class="basicInform--title">教育程度</a>
              <a>{{ item.pEdu }}</a>
            </div>
            <div>
              <a class="basicInform--title">病史</a>
              <a>{{ item.pDisease }}</a>
            </div>
            <div>
              <a class="basicInform--title">使用藥物</a>
              <a>{{ item.pDrugs }}</a>
            </div>
            <div>
              <a class="basicInform--title">運動</a>
              <a>{{ item.pSport }}</a>
            </div>
          </div>
        </div>
      </div>
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
@media screen and (min-width: 1201px) {
  /* 個資 */
  .profile {
    margin: 35px auto;
    /* padding: 30px; */
    /* width: 100%; */
    width: 1000px;
    height: 680px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
  }

  .mainInform div {
    width: 470px;
    height: 80px;
    display: flex;
    align-items: center;
    text-align: justify;
  }

  .mainInform--title {
    width: 200px;
    font-weight: bolder;
  }

  .pAddress {
    width: 270px;
    /* padding-top: 30px; */
  }

  .basicInform div {
    width: 450px;
    height: 80px;
    display: flex;
    align-items: center;
  }

  .basicInform--title {
    width: 200px;
    font-weight: bolder;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  /* 個資 */
  .profile {
    margin: 35px auto;
    /* padding: 30px; */
    /* width: 100%; */
    width: 900px;
    height: 680px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
  }

  .mainInform div {
    width: 450px;
    height: 80px;
    display: flex;
    align-items: center;
    text-align: justify;
  }

  .mainInform--title {
    width: 180px;
    font-weight: bolder;
  }

  .pAddress {
    width: 270px;
    /* padding-top: 30px; */
  }

  .basicInform div {
    width: 420px;
    height: 80px;
    display: flex;
    align-items: center;
  }

  .basicInform--title {
    width: 180px;
    font-weight: bolder;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* 個資 */
  .profile {
    margin: 35px auto;
    /* padding: 30px; */
    /* width: 100%; */
    width: 680px;
    height: 680px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    word-wrap: normal;
  }

  .mainInform div {
    width: 360px;
    height: 80px;
    display: flex;
    align-items: center;
    text-align: justify;
  }

  .mainInform--title {
    width: 140px;
    font-weight: bolder;
  }

  .pMail {
    width: 200px;
  }

  .pAddress {
    width: 200px;
    padding-top: 30px;
  }

  .basicInform div {
    width: 300px;
    height: 80px;
    display: flex;
    align-items: center;
  }

  .basicInform--title {
    width: 130px;
    font-weight: bolder;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  /* 個資 */
  .profile {
    margin: 35px auto;
    /* padding: 30px; */
    /* width: 100%; */
    width: 500px;
    /* height: 1120px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    word-wrap: normal;
  }

  .mainInform div {
    width: 480px;
    height: 70px;
    display: flex;
    align-items: center;
    /*text-align: justify;*/
    border-bottom: 1px solid #000;
  }

  .mainInform--title {
    width: 150px;
    font-weight: bolder;
  }

  .pMail {
    width: 300px;
  }

  .pAddress {
    width: 320px;
  }

  .basicInform div {
    width: 480px;
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
  }

  .basicInform--title {
    width: 150px;
    font-weight: bolder;
  }
}
@media screen and (max-width: 550px) {
  /* 個資 */
  .profile {
    margin: 35px auto;
    /* padding: 30px; */
    /* width: 100%; */
    width: 400px;
    /* height: 1120px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    word-wrap: normal;
  }

  .mainInform div {
    width: 380px;
    height: 70px;
    display: flex;
    align-items: center;
    /*text-align: justify;*/
    border-bottom: 1px solid #000;
  }

  .mainInform--title {
    width: 150px;
    font-weight: bolder;
  }

  .pMail {
    width: 200px;
  }

  .pAddress {
    width: 220px;
  }

  .basicInform div {
    width: 380px;
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
  }

  .basicInform--title {
    width: 150px;
    font-weight: bolder;
  }
}
</style>