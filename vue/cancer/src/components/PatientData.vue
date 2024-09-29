<template>
  <div>
    <div class="container--Info">
      <!-- 照片 -->
      <div class="mainInfo--left">
        <img src="../assets/img/photo.jpg" class="photo" />
      </div>

      <!-- 主要個資 -->
      <div class="mainInfo--right">
        <div class="mainInfo-div">
          <div class="mainInfo-title"><a>編號</a></div>
          <div class="mainInfo-data">
            <a name="pNum" id="pNum">{{ item.pNum }}</a>
          </div>
        </div>
        <div class="mainInfo-div">
          <div class="mainInfo-title"><a>姓名</a></div>
          <div class="mainInfo-data">
            <a name="pName" id="pName">{{ item.pName }}</a>
          </div>
        </div>
        <div class="mainInfo-div">
          <div class="mainInfo-title"><a>性別</a></div>
          <div class="mainInfo-data">
            <a name="pSex" id="pSex" v-if="item.pSex == 1">男</a>
            <a name="pSex" id="pSex" v-if="item.pSex == 2">女</a>
          </div>
        </div>
        <div class="mainInfo-div">
          <div class="mainInfo-title"><a>年齡</a></div>
          <div class="mainInfo-data">
            <a name="pAge" id="pAge">{{ item.pAge }}</a>
          </div>
        </div>
        <div class="mainInfo-div">
          <div class="mainInfo-title"><a>身份證字號</a></div>
          <div class="mainInfo-data">
            <a name="pID" id="pID">{{ item.pID }}</a>
          </div>
        </div>
        <div class="mainInfo-div">
          <div class="mainInfo-title"><a>主治醫師</a></div>
          <div class="mainInfo-data">
            <a name="doctor" id="doctor">{{ item.staff.staffName }}</a>
          </div>
        </div>
        <div class="mainInfo-div">
          <div class="mainInfo-title history">
            <router-link :to="{ name: 'history', params: { pNum: item.pNum } }"
              ><a>➜歷史就診資料</a></router-link
            >
          </div>
        </div>
        <div class="mainInfo-div">
          <div class="mainInfo-title history">
            <a @click="addDocOrder">➜新增醫囑</a>
          </div>
        </div>

        <!-- 新增醫囑彈出視窗 -->
        <div class="addDocOrder" v-if="isPopup">
          <div class="addDocOrder__date">
            <input type="date" v-model="pDate" />
          </div>
          <div class="addDocOrder__doctor">
            <label for="doctor">主治醫師</label>
            <input type="text" id="doctor" />
          </div>
          <div class="addDocOrder__doctor">
            <label for="medication">藥名</label>
            <input type="text" id="medication" />
          </div>
          <div class="addDocOrder__doctor">
            <label for="dosage">劑量</label>
            <input type="text" id="dosage" />
          </div>
          <div class="addDocOrder__doctor">
            <label for="usage">使用方式</label>
            <input type="text" id="usage" />
          </div>
          <div class="addDocOrder__textarea">
            <label for="doctorOrder">醫囑</label>
            <textarea
              name=""
              id="doctorOrder"
              cols="20"
              rows="5"
              v-model="drSay"
            ></textarea>
          </div>
          <div class="addDocOrder__btn">
            <button class="submit" @click="insertDrSay()">送出</button>
            <button class="cancel" @click="cancel()">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { insertBiochemical } from "../services/api";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      isPopup: false,
      pDate: "",
      pNum: this.item.pNum,
      drSay: "",
      token: "",
    };
  },
  props: {
    item: Object,
    // item: {
    //   type: String,
    // },
  },
  methods: {
    addDocOrder() {
      this.isPopup = !this.isPopup;
    },
    insertDrSay() {
      insertBiochemical({
        pDate: this.pDate,
        pNum: this.pNum,
        drSay: this.drSay,
        token: this.token,
      }).then(() => {
        alert("新增成功");
        this.pDate = "";
        this.drSay = "";
        this.isPopup = false;
      });
    },
    cancel() {
      this.isPopup = false;
    },
  },

  mounted() {
    this.token = Cookies.get("token");
  },
};
</script>

<style scoped>
.submit {
  background-color: #3db62a;
}

.cancel {
  background-color: #ffa217;
}
@media screen and (min-width: 1240px) {
  .addDocOrder {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 3;
    /*設定*/
    width: 530px;
    height: 600px;
    filter: drop-shadow(5px 5px 10px rgb(62, 62, 62));
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }

  .addDocOrder label {
    width: 120px;
    font-weight: bolder;
    font-size: 22px;
  }

  .addDocOrder__date,
  .addDocOrder__doctor {
    display: flex;
    align-items: center;
    height: 70px;
    width: 390px;
  }

  .addDocOrder__doctor {
    display: flex;
    justify-content: flex-start;
  }

  .addDocOrder__textarea {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 17px 0;
    width: 390px;
  }

  .addDocOrder__textarea textarea {
    padding: 5px;
    font-size: 22px;
  }

  .addDocOrder__date {
    display: flex;
    justify-content: center;
  }

  .addDocOrder__date input[type="date"] {
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

  .addDocOrder__doctor input[type="text"] {
    width: 170px;
    height: 30px;
    font-size: 22px;
    outline: none;
    padding: 5px;
  }

  .addDocOrder__btn {
    width: 170px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin: 20px auto;*/
  }

  .addDocOrder__btn button {
    width: 80px;
    height: 35px;
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 10px;
  }

  .container--Info {
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 70px;
  }

  .mainInfo--left {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }

  .photo {
    width: 150px;
    height: 200px;
  }

  .mainInfo--right {
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 13px 0;
  }

  .mainInfo-title {
    width: 120px;
    color: #647e5f;
    font-weight: bold;
  }

  .history {
    width: 240px;
  }

  .mainInfo-data {
    width: 120px;
    padding-left: 15px;
  }
}
/* computer */
@media screen and (min-width: 1025px) and (max-width: 1240px) {
  .addDocOrder {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 3;
    /*設定*/
    width: 530px;
    height: 470px;
    filter: drop-shadow(5px 5px 10px rgb(62, 62, 62));
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }

  .addDocOrder label {
    width: 120px;
    font-weight: bolder;
    font-size: 22px;
  }

  .addDocOrder__date,
  .addDocOrder__doctor {
    display: flex;
    align-items: center;
    height: 70px;
    width: 390px;
  }

  .addDocOrder__doctor {
    display: flex;
    justify-content: flex-start;
  }

  .addDocOrder__textarea {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 17px 0;
    width: 390px;
  }

  .addDocOrder__textarea textarea {
    padding: 5px;
    font-size: 22px;
  }

  .addDocOrder__date {
    display: flex;
    justify-content: center;
  }

  .addDocOrder__date input[type="date"] {
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

  .addDocOrder__doctor input[type="text"] {
    width: 170px;
    height: 30px;
    font-size: 22px;
    outline: none;
    padding: 5px;
  }

  .addDocOrder__btn {
    width: 170px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin: 20px auto;*/
  }

  .addDocOrder__btn button {
    width: 80px;
    height: 35px;
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 10px;
  }

  .container--Info {
    /* width: 30%; */
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 30px 0 0;
  }

  .mainInfo--left {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }

  .photo {
    width: 150px;
    height: 200px;
  }

  .mainInfo--right {
    /* width: 350px; */
    min-width: 270px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
  }

  .mainInfo-title {
    width: 120px;
    color: #647e5f;
    font-weight: bold;
  }

  .history {
    width: 240px;
  }

  .mainInfo-data {
    width: 120px;
    padding-left: 15px;
  }
}

/* pad */
@media screen and (min-width: 767px) and (max-width: 1024px) {
  .addDocOrder {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 3;
    /*設定*/
    width: 500px;
    height: 450px;
    filter: drop-shadow(5px 5px 10px rgb(62, 62, 62));
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }

  .addDocOrder label {
    width: 120px;
    font-weight: bolder;
    font-size: 22px;
  }

  .addDocOrder__date,
  .addDocOrder__doctor {
    display: flex;
    align-items: center;
    height: 70px;
    width: 390px;
  }

  .addDocOrder__doctor {
    display: flex;
    justify-content: flex-start;
  }

  .addDocOrder__textarea {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 17px 0;
    width: 390px;
  }

  .addDocOrder__textarea textarea {
    padding: 5px;
    font-size: 22px;
  }

  .addDocOrder__date {
    display: flex;
    justify-content: center;
  }

  .addDocOrder__date input[type="date"] {
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

  .addDocOrder__doctor input[type="text"] {
    width: 170px;
    height: 30px;
    font-size: 22px;
    outline: none;
    padding: 5px;
  }

  .addDocOrder__btn {
    width: 170px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin: 20px auto;*/
  }

  .addDocOrder__btn button {
    width: 80px;
    height: 35px;
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 10px;
  }

  /* 主要資料 */
  .container--Info {
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .mainInfo--left {
    width: 200px;
  }

  .photo {
    width: 200px;
    height: 250px;
  }

  .mainInfo--right {
    width: 350px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 12px 0;
  }

  .mainInfo-title {
    width: 120px;
    color: #647e5f;
    font-weight: bold;
  }

  .history {
    width: 240px;
  }

  .mainInfo-data {
    width: 120px;
    padding-left: 15px;
  }
}

/* phone row */
@media screen and (min-width: 551px) and (max-width: 767px) {
  .addDocOrder {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 3;
    /*設定*/
    width: 450px;
    height: 400px;
    filter: drop-shadow(5px 5px 10px rgb(62, 62, 62));
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }

  .addDocOrder label {
    width: 110px;
    font-weight: bolder;
    font-size: 22px;
  }

  .addDocOrder__date,
  .addDocOrder__doctor {
    display: flex;
    align-items: center;
    height: 60px;
    width: 370px;
  }

  .addDocOrder__doctor {
    display: flex;
    justify-content: flex-start;
  }

  .addDocOrder__textarea {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 17px 0;
    width: 370px;
  }

  .addDocOrder__textarea textarea {
    padding: 5px;
    font-size: 22px;
  }

  .addDocOrder__date {
    display: flex;
    justify-content: center;
  }

  .addDocOrder__date input[type="date"] {
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

  .addDocOrder__doctor input[type="text"] {
    width: 170px;
    height: 30px;
    font-size: 22px;
    outline: none;
    padding: 5px;
  }

  .addDocOrder__btn {
    width: 170px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin: 20px auto;*/
  }

  .addDocOrder__btn button {
    width: 80px;
    height: 35px;
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 10px;
  }

  /* 主要資料 */
  .container--Info {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .mainInfo--left {
    align-items: center;
    margin-right: 50px;
  }

  .photo {
    width: 150px;
    height: 200px;
  }

  .mainInfo--right {
    width: 250px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 8px 0;
  }

  .mainInfo-title {
    width: 120px;
    color: #647e5f;
    font-weight: bold;
  }

  .history {
    width: 240px;
  }

  .mainInfo-data {
    width: 120px;
    padding-left: 15px;
  }
}

/* phone cloumn */
@media screen and (max-width: 550px) {
  .addDocOrder {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 3;
    /*設定*/
    width: 350px;
    height: 420px;
    filter: drop-shadow(5px 5px 10px rgb(62, 62, 62));
    background: #ffffff;
    border-radius: 10px;
    border: gray 1px solid;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }

  .addDocOrder label {
    width: 90px;
    font-weight: bolder;
    font-size: 20px;
  }

  .addDocOrder__date,
  .addDocOrder__doctor {
    display: flex;
    align-items: center;
    width: 260px;
    height: 50px;
  }

  .addDocOrder__doctor {
    display: flex;
    justify-content: flex-start;
    margin-top: 17px;
  }

  .addDocOrder__textarea {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 17px 0;
    width: 260px;
  }

  .addDocOrder__textarea textarea {
    padding: 5px;
    font-size: 22px;
  }

  .addDocOrder__date {
    display: flex;
    justify-content: center;
  }

  .addDocOrder__date input[type="date"] {
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

  .addDocOrder__doctor input[type="text"] {
    width: 170px;
    height: 30px;
    font-size: 22px;
    outline: none;
    padding: 5px;
  }

  .addDocOrder__btn {
    width: 170px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin: 20px auto;*/
  }

  .addDocOrder__btn button {
    width: 80px;
    height: 35px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    border: 0px;
    border-radius: 10px;
  }

  /* 主要資料 */
  .container--Info {
    min-width: 320px;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .mainInfo--left {
    align-items: center;
    margin-right: 30px;
  }

  .photo {
    width: 110px;
    height: 150px;
  }

  .mainInfo--right {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px 0;
  }

  .mainInfo-title {
    width: 100px;
    color: #647e5f;
    font-weight: bold;
  }

  .history {
    width: 200px;
  }

  .mainInfo-data {
    width: 100px;
    padding-left: 15px;
  }
}
.history {
  color: #d89c52;
}
</style>