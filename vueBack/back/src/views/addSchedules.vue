<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <router-link :to="'index'"><a class="logo">癌憂Away</a></router-link>
      </div>
    </div>
    <div class="container">
      <div class="big-calendar">
        <calendar />
      </div>
      <div class="choose">
        <form action="">
          <div class="choose-dNum">
            <label>員工編號：</label><input type="text" />
          </div>
          <div class="choose-shiftDate">
            <label>值班日期：</label><input type="date" />
          </div>
          <div class="choose-shiftPeriod">
            <label>值班時段：</label>
            <div class="period">
              <div>
                <input
                  type="checkbox"
                  id="dayShift"
                  name="dPeriod"
                  value="dayShift"
                />
                <label for="dayShift">早班</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="middleShift"
                  name="dPeriod"
                  value="middleShift"
                />
                <label for="middleShift">中班</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="eveningShift"
                  name="dPeriod"
                  value="eveningShift"
                />
                <label for="eveningShift">晚班</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="nightShift"
                  name="dPeriod"
                  value="nightShift"
                />
                <label for="nightShift">小夜班</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="graveyardShift"
                  name="dPeriod"
                  value="graveyardShift"
                />
                <label for="graveyardShift">大夜班</label>
              </div>
            </div>
          </div>
          <div class="btn"><button type="sumit">確認</button></div>
        </form>
      </div>
    </div>

    <div class="footer"></div>
  </div>
</template>

<script>
import index from "./index.vue";
import calendar from "../components/calendar.vue";
export default {
  components: {
    index,
    calendar,
  },
};
</script>

<style scoped>
@media screen and (min-width: 1201px) {
  .container {
    margin: 70px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .big-calendar {
    width: 700px;
    height: 800px;
    margin-right: 40px;
    background-color: #ece9db;
  }

  /* 選擇員工、日期、時段 */
  .choose {
    margin-left: 40px;
    width: 500px;
    display: flex;
    align-items: center;
  }

  form {
    font-size: 25px;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    /* line-height: 60px; */
  }

  /* form div {
  height: 60px;
  display: flex;
  align-items: center;
  font-weight: bolder;
} */

  .choose-dNum,
  .choose-shiftDate {
    height: 80px;
    display: flex;
    align-items: center;
  }

  .choose-shiftPeriod {
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 15px 0;
  }

  /* 時段 */
  .period {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 250px;
    margin-left: 20px;
  }

  .period div {
    margin-right: 15px;
    width: 110px;
    /*height: 60px;*/
    display: flex;
    align-items: center;
  }

  input[type="text"],
  input[type="date"] {
    outline: none;
    border: none;
    background-color: #ece9db;
    padding-left: 10px;
    border-radius: 10px;
    width: 180px;
    height: 30px;
    font-size: 18px;
    margin-left: 15px;
  }

  input[type="checkbox"] {
    margin-right: 15px;
  }

  .btn {
    height: 60px;
    display: flex;
    align-items: center;
  }

  .btn button {
    width: 70px;
    height: 30px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
    background-color: #859a75;
    border-radius: 5px;
  }

  .btn button:hover {
    background-color: #a7b59d;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
}
</style>