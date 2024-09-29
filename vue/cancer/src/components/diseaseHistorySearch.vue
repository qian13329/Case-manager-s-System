<template>
  <div class="container--history">
    <div class="history--search">
      <!-- 患者編號 -->
      <div class="history--pNum">
        <a>編號：</a>
        <a style="color: #859a75">{{ item.pNum }}</a>
      </div>
      <!-- 患者姓名 -->
      <div class="history--pName">
        <a>姓名：</a>
        <a>{{ item.pName }}</a>
      </div>

      <!-- 查詢日期 -->
      <div class="historySearch">
        <form action="">
          <div>
            <label for="date">日期：</label>
            <input type="date" id="date" />
            <button type="submit">查詢</button>
          </div>
        </form>
      </div>
    </div>

    <div class="selection">
      <div>
        <router-link :to="{ name: 'history', params: { pNum: item.pNum } }"
          ><a>歷史就診資料</a></router-link
        >
      </div>
      <div class="selection--diseaseHistory">
        <router-link
          :to="{ name: 'diseaseHistory', params: { pNum: item.pNum } }"
          ><a>歷史病症資料</a></router-link
        >
      </div>
    </div>

    <div>
      <diseaseHistoryList
        v-for="item in diseaseHistoryData"
        :key="item.pID"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import diseaseHistoryList from "../components/diseaseHistoryList.vue";
import { allMainInfo } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      diseaseHistoryData: [],
      pDate: "",
      token: "",
      thispNum: this.$route.params.pNum,
    };
  },
  props: {
    item: Object,
  },

  components: {
    diseaseHistoryList,
  },

  methods: {
    // 所有歷史就診資料
    getAllHistory() {
      allMainInfo({
        pNum: this.thispNum,
        token: this.token,
      }).then((res) => {
        console.log(this.thispNum);
        this.diseaseHistoryData = res.data;
      });
    },
  },

  mounted() {
    this.token = Cookies.get("token");
    this.getAllHistory();
  },
};
</script>

<style scoped>
.selection--diseaseHistory {
  color: #859a75;
}

@media screen and (min-width: 1025px) {
  .container--history {
    margin: 0 auto;
  }

  .history--search {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 40px;
  }

  /* 病患編號 */
  .history--pNum {
    font-weight: bolder;
    font-size: 28px;
  }

  /* 病患姓名 */
  .history--pName {
    font-weight: bolder;
    font-size: 28px;
  }

  /* 查詢日期 */
  form {
    font-size: 28px;
    font-weight: bolder;
  }

  form div {
    width: 320px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  input[type="date"] {
    width: 150px;
    height: 35px;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: #ece9db;
    border-radius: 10px;
    padding: 0 8px;
  }

  button {
    width: 55px;
    height: 35px;
    border: none;
    background-color: #859a75;
    color: white;
    border-radius: 10px;
    font-size: 16px;
    /*margin-left: 10px;*/
  }

  button:hover {
    background-color: #a7b59d;
  }

  .selection {
    width: 600px;
    font-size: 26px;
    font-weight: bold;
    text-decoration: underline;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px auto;
    margin-top: 70px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container--history {
    margin: 0 auto;
  }

  .history--search {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 40px;
  }

  .history--pNum {
    font-weight: bolder;
    font-size: 28px;
  }

  .history--pName {
    font-weight: bolder;
    font-size: 28px;
  }

  form {
    font-size: 28px;
    font-weight: bolder;
  }

  form div {
    width: 320px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  input[type="date"] {
    width: 150px;
    height: 35px;
    border: none;
    outline: none;
    background-color: #ece9db;
    border-radius: 10px;
  }

  button {
    width: 55px;
    height: 35px;
    border: none;
    background-color: #859a75;
    color: white;
    border-radius: 10px;
    font-size: 16px;
    /*margin-left: 10px;*/
  }

  button:hover {
    background-color: #a7b59d;
  }

  .selection {
    width: 500px;
    font-size: 24px;
    font-weight: bold;
    text-decoration: underline;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px auto;
    margin-top: 60px;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  .container--history {
    margin: 0 auto;
  }

  .history--search {
    margin: 0 auto;
    width: 340px;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin-bottom: 40px;
  }

  .history--pNum {
    width: 170px;
    font-weight: bolder;
    font-size: 25px;
    text-align: center;
  }

  .history--pName {
    width: 170px;
    font-weight: bolder;
    font-size: 25px;
    text-align: center;
  }

  form {
    margin-top: 20px;
    font-size: 25px;
    font-weight: bolder;
  }

  form div {
    width: 320px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  input[type="date"] {
    width: 150px;
    height: 35px;
    border: none;
    outline: none;
    background-color: #ece9db;
    border-radius: 10px;
  }

  button {
    width: 55px;
    height: 35px;
    border: none;
    background-color: #859a75;
    color: white;
    border-radius: 10px;
    font-size: 16px;
    margin-left: 12px;
  }

  button:hover {
    background-color: #a7b59d;
  }

  .selection {
    width: 400px;
    font-size: 24px;
    font-weight: bold;
    text-decoration: underline;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px auto;
    margin-top: 60px;
  }
}

@media screen and (max-width: 550px) {
  .container--history {
    margin: 0 auto;
  }

  .history--search {
    margin: 0 auto;
    width: 300px;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin-bottom: 40px;
  }

  .history--pNum {
    width: 150px;
    font-weight: bolder;
    font-size: 20px;
    text-align: center;
  }

  .history--pName {
    width: 150px;
    font-weight: bolder;
    font-size: 20px;
    text-align: center;
  }

  form {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bolder;
  }

  form div {
    width: 320px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  input[type="date"] {
    width: 140px;
    height: 30px;
    border: none;
    outline: none;
    background-color: #ece9db;
    border-radius: 10px;
    padding: 0 5px;
  }

  button {
    width: 55px;
    height: 30px;
    border: none;
    background-color: #859a75;
    color: white;
    border-radius: 10px;
    font-size: 16px;
    margin-left: 17px;
  }

  button:hover {
    background-color: #a7b59d;
  }

  .selection {
    width: 85%;
    max-width: 350px;
    min-width: 250px;
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px auto;
    margin-top: 50px;
  }
}
</style>