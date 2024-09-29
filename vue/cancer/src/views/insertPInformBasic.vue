<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <!-- 返回鍵 -->
        <router-link :to="'/index'" class="hidden">
          <div>
            <a href="#"
              ><img src="../assets/img/back.png" class="back"
            /></a></div
        ></router-link>
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
      <h1>新 增 病 患</h1>
      <div class="addForm">
        <!-- <div>
          <label for="staffNum">個管師</label>
          <input type="text" id="staffNum" v-model="staffNum" />
        </div> -->
        <!-- <div>
          <label for="pNum">病患編號</label>
          <input type="text" id="pNum" v-model="pNum" />
        </div> -->
        <div>
          <label for="pID">身分證字號</label>
          <input type="text" id="pID" v-model="pID" />
        </div>
        <div>
          <label for="pName">姓名</label>
          <input type="text" id="pName" v-model="pName" />
        </div>
        <div>
          <label for="pSex">生理性別</label>
          <select id="pSex" v-model="pSex">
            <option value="1">男</option>
            <option value="2">女</option>
          </select>
        </div>
        <div>
          <label for="birthday">生日</label>
          <input type="date" id="birthday" v-model="birthday" />
        </div>
        <div>
          <label for="room">病房號</label>
          <input type="text" id="room" v-model="room" />
        </div>
        <div>
          <label for="phone">聯絡電話</label>
          <input type="text" id="phone" v-model="phone" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="mail" id="email" v-model="email" />
        </div>
        <div>
          <label for="address">地址</label>
          <input type="text" id="address" v-model="address" />
        </div>
        <div>
          <label for="pMarriage">婚姻</label>
          <select id="pMarriage" v-model="pMarriage">
            <option value="未婚">未婚</option>
            <option value="已婚">已婚</option>
            <option value="離婚">離婚</option>
          </select>
        </div>
        <div>
          <label for="pChild">子女數</label>
          <input type="number" id="pChild" v-model="pChild" />
        </div>
        <div>
          <label for="pDisease">病史</label>
          <input type="text" id="pDisease" v-model="pDisease" />
        </div>
        <div>
          <label for="pProfession">職業</label>
          <input type="text" id="pProfession" v-model="pProfession" />
        </div>
        <div>
          <label for="pReligion">宗教信仰</label>
          <input type="text" id="pReligion" v-model="pReligion" />
        </div>
        <div>
          <label for="pEdu">教育程度</label>
          <input type="text" id="pEdu" v-model="pEdu" />
        </div>
        <div>
          <label for="pDrugs">使用藥物</label>
          <input type="text" id="pDrugs" v-model="pDrugs" />
        </div>
        <div>
          <label for="pAllergy">藥物過敏</label>
          <input type="text" id="pAllergy" v-model="pAllergy" />
        </div>
        <div>
          <label for="pFamilySize">家庭人數</label>
          <input type="number" id="pFamilySize" v-model="pFamilySize" />
        </div>
        <div>
          <label for="pSport">運動習慣</label>
          <input type="text" id="pSport" v-model="pSport" />
        </div>
        <div class="headshot">
          <label for="pHeadshot">頭貼</label>
          <input type="file" id="pHeadshot" />
        </div>
        <!-- <div class="abc"></div> -->
      </div>
      <div class="btn">
        <button @click="addPInformBasic()">確認</button>
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
import { insertPatient } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    // 為什麼要寫return返回
    // 因為不使用return包裹的數據會在項目的全局可見，會造成變量污染
    // 使用return包裹後數據中變量只在當前組件中生效，不會影響其他組件。
    return {
      pID: "",
      pName: "",
      pSex: "",
      birthday: "",
      phone: "",
      pAge: "",
      room: "",
      email: "",
      address: "",
      pMarriage: "",
      pChild: "",
      pDisease: "",
      pProfession: "",
      pReligion: "",
      pEdu: "",
      pDrugs: "",
      pAllergy: "",
      pFamilySize: "",
      pSport: "",
      token: "",
      fullHeight: 0,
      fullWidth: 0,
      thisStaffNum: this.$route.params.staffNum,
    };
  },

  methods: {
    // 回上一頁
    back() {
      this.$router.go(-1);
    },

    // 新增患者基本資料
    addPInformBasic() {
      this.getAge();
      insertPatient({
        staffNum: this.thisStaffNum,
        pID: this.pID,
        pName: this.pName,
        pSex: this.pSex,
        birthday: this.birthday,
        pAge: this.pAge,
        room: this.room,
        phone: this.phone,
        email: this.email,
        address: this.address,
        pMarriage: this.pMarriage,
        pChild: this.pChild,
        pDisease: this.pDisease,
        pProfession: this.pProfession,
        pReligion: this.pReligion,
        pEdu: this.pEdu,
        pDrugs: this.pDrugs,
        pAllergy: this.pAllergy,
        pFamilySize: this.pFamilySize,
        pSport: this.pSport,
        token: this.token,
      }).then(() => {
        alert("新增成功");
        this.pNum = "";
        this.pID = "";
        this.pName = "";
        this.pSex = "";
        this.birthday = "";
        this.pAge = "";
        this.room = "";
        this.phone = "";
        this.email = "";
        this.address = "";
        this.pMarriage = "";
        this.pChild = "";
        this.pDisease = "";
        this.pProfession = "";
        this.pReligion = "";
        this.pEdu = "";
        this.pDrugs = "";
        this.pAllergy = "";
        this.pFamilySize = "";
        this.pSport = "";
      });
    },

    // 用生日計算年齡
    getAge() {
      let birthdays = new Date(this.birthday.replace(/-/g, "/"));
      let d = new Date();
      let age =
        d.getFullYear() -
        birthdays.getFullYear() -
        (d.getMonth() < birthdays.getMonth() ||
        (d.getMonth() == birthdays.getMonth() &&
          d.getDate() < birthdays.getDate())
          ? 1
          : 0);
      this.pAge = age;
    },
  },

  mounted() {
    this.token = Cookies.get("token");

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

h1 {
  text-align: center;
  margin-top: 50px;
}

/* >1024 */
@media screen and (min-width: 1025px) {
  .container {
    max-width: 1000px;
    margin: 0 auto;
    /*padding-bottom: 60px;*/
  }

  .addForm {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin: 0 auto;
    padding: 30px;
  }

  .addForm div {
    width: 320px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
  }

  .headshot {
    width: 380px;
    margin-left: 75px;
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

  .addForm input[type="file"] {
    width: 250px;
    height: 35px;
    font-size: 18px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background: none;
    padding-left: 10px;
  }

  .btn {
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .btn button {
    width: 120px;
    height: 40px;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
    background-color: #859a75;
    border: 0;
    border-radius: 10px;
    margin-bottom: 30px;
  }
}

/* 768~1024 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    max-width: 1000px;
    /*padding-bottom: 100px;*/
  }

  .addForm {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  .addForm div {
    width: 320px;
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

  .addForm input[type="file"] {
    width: 180px;
    height: 35px;
    font-size: 18px;
    border: 0;
    border-radius: 0;
    outline: none;
    background: none;
    padding: 0;
  }

  /* 稱空間的啦 */
  .abc {
    height: 0;
    margin: 0 auto;
  }

  .btn {
    width: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .btn button {
    width: 120px;
    height: 40px;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
    background-color: #859a75;
    border: 0;
    border-radius: 10px;
  }
}

/* 551~767 */
@media screen and (min-width: 551px) and (max-width: 768px) {
  .container {
    padding-bottom: 90px;
  }

  .addForm {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  .addForm div {
    width: 320px;
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

  .addForm input[type="file"] {
    width: 180px;
    height: 35px;
    font-size: 18px;
    border: 0;
    border-radius: 0;
    outline: none;
    background: none;
    padding: 0;
  }

  /* 稱空間的啦 */
  .abc {
    height: 0;
    margin: 0 auto;
  }

  .btn {
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .btn button {
    width: 120px;
    height: 40px;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
    background-color: #859a75;
    border: 0;
    border-radius: 5px;
    /*margin: 20px 0;*/
  }
}

/* <551 */
@media screen and (max-width: 550px) {
  .container {
    padding-bottom: 105px;
  }

  .addForm {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
  }

  .addForm div {
    min-width: 300px;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px auto;
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
    font-size: 18px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .addForm input[type="file"] {
    width: 180px;
    height: 35px;
    font-size: 17px;
    border: 0;
    border-radius: 0;
    outline: none;
    background: none;
    padding: 0;
  }

  /* 稱空間的啦 */
  .abc {
    height: 0;
    margin: 0 auto;
  }

  .btn {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
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
    margin: 10px 0;
  }
}
</style>