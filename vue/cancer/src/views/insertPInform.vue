<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <!-- 返回鍵 -->
        <router-link :to="'/index'" class="hidden"
          ><div>
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
            <router-link :to="'/'"><a>病患資料</a></router-link>
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
      <!-- 新增病患資料 -->
      <div class="container-btn">
        <router-link :to="'/insertPInformBasic'">
          <div>
            <img src="../assets/img/PInformBasic.png" />
            <a class="container-title">新增患者基本資料</a>
          </div>
        </router-link>

        <router-link :to="'/insertPInformBiochemical'">
          <div>
            <img src="../assets/img/PInformBiochemical.png" />
            <a class="container-title">新增患者生化資料</a>
          </div>
        </router-link>

        <router-link :to="'/insertPInformCancer'">
          <div>
            <img src="../assets/img/PInformCancer.png" />
            <a class="container-title">新增患者癌症資料</a>
          </div>
        </router-link>
      </div>
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
export default {
  data() {
    return {
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },

  },
};
</script>

<style scoped>
.container-btn {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.container-btn div {
  border: 1px solid black;
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
}

/* >1024 */
@media screen and (min-width: 1025px) {
  .container-btn {
    max-width: 1600px;
    min-width: 1025px;
  }

  .container-btn div {
    width: 480px;
    height: 100px;

    /* margin-top: 40px; */
    margin: 40px 20px 0px 20px;
    padding-left: 40px;
  }

  .container img {
    width: 70px;
    height: 70px;
  }

  .container-title {
    font-size: 40px;
    font-weight: bold;
    color: black;
    margin-left: 20px;
  }
}

/* 768~1024 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .menu {
    height: 40px;
    width: 40px;
    position: fixed;
    right: 20px;
    visibility: hidden;
  }
  .container-btn {
    max-width: 1024px;
    min-width: 768px;
  }

  .container-btn div {
    width: 350px;
    height: 80px;

    /* margin-top: 40px; */
    margin: 40px 20px 0px 20px;
    padding-left: 30px;
  }

  .container img {
    width: 50px;
    height: 50px;
  }

  .container-title {
    font-size: 30px;
    font-weight: bold;
    color: black;
    margin-left: 15px;
  }
}

/* 551~767 */
@media screen and (min-width: 551px) and (max-width: 768px) {
  .menu {
    height: 40px;
    width: 40px;
    position: fixed;
    right: 20px;
    visibility: hidden;
  }
  .container-btn {
    max-width: 767px;
    min-width: 501px;
  }

  .container-btn div {
    min-width: 350px;
    height: 80px;

    /* margin-top: 40px; */
    margin: 40px 20px 0px 20px;
    padding-left: 30px;
  }

  .container img {
    width: 50px;
    height: 50px;
  }

  .container-title {
    font-size: 30px;
    font-weight: bold;
    color: black;
    margin-left: 15px;
  }
}

/* <551 */
@media screen and (max-width: 550px) {
  .menu {
    height: 40px;
    width: 40px;
    position: fixed;
    right: 20px;
    visibility: hidden;
  }
  .container-btn {
    max-width: 500px;
    min-width: 320px;
  }

  .container-btn div {
    min-width: 280px;
    height: 80px;

    /* margin-top: 40px; */
    margin: 30px 20px 0px 20px;
    padding-left: 10px;
  }

  .container img {
    width: 45px;
    height: 45px;
  }

  .container-title {
    font-size: 26px;
    font-weight: bold;
    color: black;
    margin-left: 10px;
  }
}
</style>