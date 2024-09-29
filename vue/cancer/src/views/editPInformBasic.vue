<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <!-- 返回鍵 -->
        <div class="hidden">
          <router-link
            :to="{ name: 'PatientList', params: { pNum: this.thispNum } }"
            ><img src="../assets/img/back.png" class="back" @click="back"
          /></router-link>
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
      <div v-for="item in patientData" :key="item.pNum" :item="item">
        <div class="editForm">
          <!-- <div>
            <label for="staffNum">個管師</label>
            <input type="text" id="staffNum" v-model="item.staffNum" />
          </div> -->
          <div>
            <label for="pNum">病患編號</label>
            <a>{{ item.pNum }}</a>
          </div>
          <!-- <div>
            <label for="pID">身分證字號</label>
            <input type="text" id="pID" v-model="item.pID" />
          </div> -->
          <div>
            <label for="pName">姓名</label>
            <input type="text" id="pName" v-model="item.pName" />
          </div>
          <div>
            <label for="pSex">生理性別</label>
            <!-- <select id="pSex" v-model="item.pSex" disabled>
              <option value="1">男</option>
              <option value="2">女</option>
            </select> -->
            <a v-if="item.pSex == 1">男</a>
            <a v-if="item.pSex == 2">女</a>
          </div>
          <div>
            <label for="birthday">生日</label>
            <input type="date" id="birthday" v-model="item.birthday" disabled />
          </div>
          <!-- <div>
            <label for="pAge">年齡</label>
            <a>{{ item.pAge }}</a>
          </div> -->
          <div>
            <label for="room">病房號</label>
            <input type="text" id="room" v-model="item.room" />
          </div>
          <div>
            <label for="phone">聯絡電話</label>
            <input type="text" id="phone" v-model="item.phone" />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="mail" id="email" v-model="item.email" />
          </div>
          <div>
            <label for="address">地址</label>
            <input type="text" id="address" v-model="item.address" />
          </div>
          <div>
            <label for="pMarriage">婚姻</label>
            <select id="pMarriage" v-model="item.pMarriage">
              <option value="未婚">未婚</option>
              <option value="已婚">已婚</option>
              <option value="離婚">離婚</option>
            </select>
          </div>
          <div>
            <label for="pChild">子女數</label>
            <input type="number" id="pChild" v-model="item.pChild" />
          </div>
          <div>
            <label for="pDisease">病史</label>
            <input type="text" id="pDisease" v-model="item.pDisease" />
          </div>
          <div>
            <label for="pProfession">職業</label>
            <input type="text" id="pProfession" v-model="item.pProfession" />
          </div>
          <div>
            <label for="pReligion">宗教信仰</label>
            <input type="text" id="pReligion" v-model="item.pReligion" />
          </div>
          <div>
            <label for="pEdu">教育程度</label>
            <input type="text" id="pEdu" v-model="item.pEdu" />
          </div>
          <!-- <div>
            <label for="pDrugs">使用藥物</label>
            <input type="text" id="pDrugs" v-model="item.pDrugs" />
          </div> -->
          <!-- <div>
            <label for="pAllergy">藥物過敏</label>
            <input type="text" id="pAllergy" v-model="item.pAllergy" />
          </div> -->
          <div>
            <label for="pFamilySize">家庭人數</label>
            <input type="number" id="pFamilySize" v-model="item.pFamilySize" />
          </div>
          <div>
            <label for="pSport">運動習慣</label>
            <input type="text" id="pSport" v-model="item.pSport" />
          </div>
          <!-- <div class="headshot">
            <label for="pHeadshot">頭貼</label>
            <input type="file" id="pHeadshot" />
          </div> -->
          <!-- <div class="abc"></div> -->
        </div>
        <div
          class="btn"
          @click="
            updateItem(
              item.staffNum,
              item.pName,
              item.pSex,
              item.birthday,
              item.room,
              item.phone,
              item.email,
              item.address,
              item.pMarriage,
              item.pChild,
              item.pDisease,
              item.pProfession,
              item.pReligion,
              item.pEdu,
              item.pDrugs,
              item.pAllergy,
              item.pFamilySize,
              item.pSport
            )
          "
        >
          <button>確認</button>
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
import { patientInfo, updatePatient } from "../services/api";
import Cookies from "js-cookie";
export default {
  data() {
    // 為什麼要寫return返回
    // 因為不使用return包裹的數據會在項目的全局可見，會造成變量污染
    // 使用return包裹後數據中變量只在當前組件中生效，不會影響其他組件。
    return {
      patientData: [],
      token: "",
      staffNum: "",
      // pNum: "",
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

    // 所有病患
    getAllPatient() {
      patientInfo({
        pNum: this.thispNum,
        token: this.token,
      }).then((res) => {
        console.log(res);
        console.log("pNum:", this.thispNum);
        this.patientData = res.data;
      });
    },

    // 新增患者基本資料
    updateItem(
      staffNum,
      pName,
      pSex,
      birthday,
      room,
      phone,
      email,
      address,
      pMarriage,
      pChild,
      pDisease,
      pProfession,
      pReligion,
      pEdu,
      pDrugs,
      pAllergy,
      pFamilySize,
      pSport
    ) {
      this.getAge(birthday);
      updatePatient({
        staffNum: staffNum,
        pNum: this.thispNum,
        pName: pName,
        pSex: pSex,
        birthday: birthday,
        pAge: this.pAge,
        room: room,
        phone: phone,
        email: email,
        address: address,
        pMarriage: pMarriage,
        pChild: pChild,
        pDisease: pDisease,
        pProfession: pProfession,
        pReligion: pReligion,
        pEdu: pEdu,
        pDrugs: pDrugs,
        pAllergy: pAllergy,
        pFamilySize: pFamilySize,
        pSport: pSport,
        token: this.token,
      }).then(() => {
        alert("修改成功");
        this.$router.go(-1);
      });
    },

    getAge(birthday) {
      let birthdays = new Date(birthday.replace(/-/g, "/"));
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
    this.getAllPatient();

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
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  .editForm div {
    width: 320px;
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
    /* margin-top: 30px; */
  }
}

/* 768~1024 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    max-width: 1000px;
    padding-bottom: 100px;
  }

  .editForm {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  .editForm div {
    width: 320px;
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
  .container {
    padding-bottom: 90px;
  }

  .editForm {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  .editForm div {
    width: 320px;
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
    /* height: 70px; */
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
  .container {
    padding-bottom: 105px;
  }

  .editForm {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 20px;
  }

  .editForm div {
    min-width: 300px;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px auto;
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
    font-size: 18px;
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
    margin: 20px 0;
  }
}
</style>