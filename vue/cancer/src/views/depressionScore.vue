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
      <!-- 圖表 -->
      <depressionChartView />
    </div>

    <!-- footer -->
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
</template>

<script>
import depressionChartView from "../components/depressionChart.vue";
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    PCMenu() {
      this.isCollapse = !this.isCollapse; //點選摺疊按鈕後，對isCollapse進行取反
    },
  },
  components: {
    depressionChartView,
  },
};
</script>

<style scoped>
@media screen and (min-width: 1025px) {
  .range-table {
    border-collapse: collapse;
    width: 800px;
    height: 600px;
    font-size: 20px;
    margin: 0 auto;
    border: 1.5px solid #6e6e6e78;
  }

  .range-table p {
    width: 600px;
    margin: 0 auto;
  }

  .table-score {
    width: 130px;
    text-align: center;
    font-weight: bolder;
    background-color: #cecece78;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
}
@media screen and (min-width: 551px) and (max-width: 767px) {
}
@media screen and (max-width: 550px) {
}
</style>