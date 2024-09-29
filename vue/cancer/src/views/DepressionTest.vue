<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
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
      <form>
        <div class="title">憂鬱情緒檢測量表</div>
        <div class="dataList">
          <div class="patientData">
            <div>檢測病患</div>
            <input type="text" class="textbox" name="pName" />
          </div>
          <div class="patientData">
            <div>性別</div>
            <select name="pSex" id="pSex" class="small">
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
            <!-- <input type="text" class="textbox small" name="pSex" /> -->
          </div>
          <div class="patientData">
            <div>檢測時間</div>
            <input type="date" class="textbox" name="pDate" />
          </div>
          <div class="patientData">
            <div>總分</div>
            <input
              type="text"
              class="small"
              name="pScore"
              readonly="readonly"
            />
          </div>
        </div>
        <h2>
          <i
            >請您根據最近一星期內以來身體與情緒的真正感覺，勾選最符合的一項.ᐟ.ᐟ</i
          >
        </h2>
        <table class="questionTable">
          <tr class="trTable">
            <td>
              <div></div>
            </td>
            <td class="checkTable score">
              <div class="score">
                <div>沒有或極少</div>
                <div>(1天以下)</div>
                <div>0分</div>
              </div>
            </td>
            <td class="checkTable score">
              <div class="score">
                <div>有時候</div>
                <div>(1~2天)</div>
                <div>1分</div>
              </div>
            </td>
            <td class="checkTable score">
              <div class="score">
                <div>時常</div>
                <div>(3~4天)</div>
                <div>2分</div>
              </div>
            </td>
            <td class="checkTable score">
              <div class="score">
                <div>常常、總是</div>
                <div>(5~7天)</div>
                <div>3分</div>
              </div>
            </td>
          </tr>
          <depressionTest
            v-for="item in depressionTestList"
            :key="item.qID"
            :item="item"
          />
        </table>
        <!-- 按鈕 -->
        <div class="tableBn">
          <input class="bnTable" type="submit" value="送出" />
        </div>
      </form>
    </div>

    <div class="footer">
      <div class="footerBg">
        <router-link :to="'/CheckIndex'" class="router-link-footer">
          <div>
            <img src="../assets/img/check-un.png" alt="今日事務" />
            <a>今日事務</a>
          </div>
        </router-link>

        <router-link :to="'/index'" class="router-link-footer">
          <div>
            <img src="../assets/img/patient-un.png" alt="病患資料" />
            <a>病患資料</a>
          </div>
        </router-link>

        <router-link :to="'/depressionIndex'" class="router-link-footer">
          <div>
            <img src="../assets/img/broken-heart.png" alt="憂鬱症專區" />
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
  <!-- </div> -->
</template>

<script>
import depressionTestList from "../data/depressionTestList.json";
import depressionTest from "../components/depressionTest.vue";

export default {
  data() {
    return {
      depressionTestList: depressionTestList,
      isCollapse: false,
    };
  },
  components: {
    depressionTest,
    depressionTestList,
  },
  methods: {},
};
</script>

<style   scoped>
.container {
  font-weight: bold;
}

.tableBn {
  width: 200px;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.bnTable {
  /* margin-left: 2%; */
  font-size: 20px;
  color: #ffffff;
  font-weight: bolder;
  width: 90px;
  height: 35px;
  border: 0;
  background-color: #e9b485;
  border-radius: 10px;
}

.bnTable:hover {
  background-color: #d1a57f;
}

/* 電腦 */
@media screen and (min-width: 1025px) {
  .title {
    font-size: 40px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  .dataList {
    max-width: 900px;
    margin: 40px auto;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .patientData {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .textbox {
    width: 150px;
    height: 35px;
    margin-left: 10px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  .small {
    width: 70px;
    height: 35px;
    margin-left: 10px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  h2 {
    text-align: center;
    color: rgb(216, 6, 6);
    text-decoration: underline;
    margin: 60px;
  }

  .questionTable {
    margin: 0 auto;
    margin-top: 30px;
    width: 90%;
    max-width: 1200px;
    /* min-width: 1000px; */
    font-size: 25px;
    /* border-collapse: collapse; */
  }

  td {
    border-bottom: 1px dotted gray;
  }

  .score {
    font-size: 20px;
    width: 100px;
    text-align: center;
    margin-left: 20px;
  }

  input {
    width: 18px;
    height: 18px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  section.el-container {
    width: 0;
    height: 0;
  }

  .PCMenuPic {
    height: 40px;
    width: 40px;
    position: fixed;
    right: 20px;
    visibility: hidden;
  }

  .title {
    font-size: 35px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  .dataList {
    width: 95%;
    max-width: 800px;
    margin: 40px auto;
    font-size: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .patientData {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .textbox {
    width: 130px;
    height: 35px;
    margin-left: 10px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  .small {
    width: 50px;
    height: 35px;
    margin-left: 10px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  h2 {
    font-size: 20px;
    text-align: center;
    color: rgb(216, 6, 6);
    text-decoration: underline;
    margin: 60px;
  }

  .questionTable {
    margin: 0 auto;
    /* margin-top: 30px; */
    width: 90%;
    max-width: 1200px;
    /* min-width: 1000px; */
    font-size: 22px;
    /* border-collapse: collapse; */
  }

  td {
    border-bottom: 1px dotted gray;
  }

  .score {
    font-size: 20px;
    width: 100px;
    text-align: center;
  }

  input {
    width: 18px;
    height: 18px;
  }
}

@media screen and (min-width: 551px) and (max-width: 767px) {
  .PCMenuPic {
    height: 40px;
    width: 40px;
    position: fixed;
    right: 20px;
    visibility: hidden;
  }
  .container {
    min-width: 700px;
  }

  .title {
    font-size: 35px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  .dataList {
    width: 95%;
    max-width: 700px;
    margin: 40px auto;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .patientData {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .textbox {
    width: 120px;
    height: 28px;
    margin-left: 10px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  .small {
    width: 50px;
    height: 28px;
    margin-left: 10px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  h2 {
    font-size: 18px;
    text-align: center;
    color: rgb(216, 6, 6);
    text-decoration: underline;
    margin: 60px;
  }

  .questionTable {
    margin: 0 auto;
    /* margin-top: 30px; */
    width: 90%;
    max-width: 1200px;
    /* min-width: 1000px; */
    font-size: 20px;
    /* border-collapse: collapse; */
  }

  td {
    border-bottom: 1px dotted gray;
  }

  .score {
    font-size: 12px;
    width: 70px;
    text-align: center;
  }

  input {
    width: 18px;
    height: 18px;
  }
}

/* 手機 */
@media screen and (max-width: 550px) {
  .PCMenuPic {
    height: 40px;
    width: 40px;
    position: fixed;
    right: 20px;
    visibility: hidden;
  }
  .container {
    min-width: 500px;
  }

  .title {
    font-size: 28px;
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
  }

  .dataList {
    width: 320px;
    height: 100px;
    margin: 30px auto;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .patientData {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .textbox {
    width: 120px;
    height: 28px;
    margin-left: 10px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  .small {
    width: 50px;
    height: 28px;
    margin-left: 10px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
  }

  h2 {
    font-size: 16px;
    text-align: center;
    color: rgb(216, 6, 6);
    text-decoration: underline;
    margin: 40px;
  }

  .questionTable {
    margin: 0 auto;
    /* margin-top: 30px; */
    width: 90%;
    max-width: 1200px;
    /* min-width: 1000px; */
    font-size: 18px;
    /* border-collapse: collapse; */
  }

  td {
    border-bottom: 1px dotted gray;
  }

  .score {
    font-size: 6px;
    width: 40px;
    text-align: center;
  }

  input {
    width: 18px;
    height: 18px;
  }
}
</style>