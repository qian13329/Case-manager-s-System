<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <!-- 返回鍵 -->
        <div class="hidden">
          <a href="#"
            ><img src="../assets/img/back.png" class="back" @click="back"
          /></a>
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
      <!-- 就診資料 -->
      <div>
        <historySearch
          v-for="item in patientData"
          :key="item.pNum"
          :item="item"
        />
      </div>
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
import historySearch from "../components/historySearch.vue";
import { patientInfo } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      patientData: [],
      // isCollapse: false,
      token: "",
      thispNum: this.$route.params.pNum,
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
        this.patientData=(res.data);
      });
    },
  },

  components: {
    historySearch,
  },

  mounted() {
    this.token = Cookies.get("token");
    this.getAllPatient();
  },
};
</script>

<style scoped>
@media screen and (min-width: 1025px) {
  .container {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 60px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 90%;
    margin: 0 auto;
    margin-top: 60px;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  .container {
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
  }
}

@media screen and (max-width: 550px) {
  .container {
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
  }
}
</style>