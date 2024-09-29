<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <router-link :to="'/setting'" class="hidden">
          <div>
            <a href="#"><img src="../assets/img/back.png" class="back" /></a>
          </div>
        </router-link>
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
      <calendar />
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
            <img src="../assets/img/broken-heart-un.png" alt="憂鬱症專區" />
            <a>憂鬱症專區</a>
          </div>
        </router-link>

        <router-link :to="'/setting'" class="router-link-footer">
          <div>
            <img src="../assets/img/settings.png" alt="設定" />
            <a>設定</a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script src='https://unpkg.com/v-calendar'></script>
<script>
import calendar from "../components/schedule.vue";
export default {
  data() {
    return {
      // userData: userData,
      isCollapse: false,
    };
  },
  props: {
    item: Object,
  },
  methods: {},

  components: {
    calendar,
  },
};
</script>

<style scoped>
@media screen and (max-width: 551px) {
  .container {
    width: 100%;
    margin-top: 15px;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .schedule {
    padding-top: 40px;
  }

  table {
    margin: 0 auto;
    width: 95%;
    height: 600px;
    border-collapse: collapse;
    border: gray solid 1px;
    text-align: center;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  .container {
    width: 100%;
    max-width: 768px;
    margin-top: 15px;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .schedule {
    padding-top: 40px;
  }

  table {
    margin: 0 auto;
    width: 90%;
    height: 600px;
    border-collapse: collapse;
    border: gray solid 1px;
    text-align: center;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 100%;
    margin-top: 15px;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .schedule {
    padding-top: 40px;
  }

  table {
    margin: 0 auto;
    width: 650px;
    height: 600px;
    border-collapse: collapse;
    border: gray solid 1px;
    text-align: center;
  }
}

@media screen and (min-width: 1025px) {
  .container {
    width: 100%;
    margin-top: 15px;
  }

  h1 {
    text-align: center;
    padding-top: 40px;
  }

  .schedule {
    padding-top: 40px;
  }

  table {
    margin: 0 auto;
    width: 650px;
    height: 600px;
    border-collapse: collapse;
    border: gray solid 1px;
    text-align: center;
  }
}
</style>