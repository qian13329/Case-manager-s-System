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
      <!-- 新增病患資料 -->
      <div class="container-btn">
        <router-link :to="'/insertPInform'">
          <div>
            <img src="../assets/img/user.png" alt="新增病患資料" />
            <a class="btnText">新增病患資料</a>
          </div>
        </router-link>
      </div>
      <!-- <div v-for="i in 32">{{ i }}</div> -->
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
      // userData: userData,
      isCollapse: false,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    PCMenu() {
      this.isCollapse = !this.isCollapse; //點選摺疊按鈕後，對isCollapse進行取反
    },
  },
};
</script>

<style scoped>
.container-btn {
  display: flex;
  flex-flow: row wrap;
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
  .PCMenuPic {
    height: 40px;
    width: 40px;
    position: fixed;
    right: 20px;
  }

  .el-aside {
    /* padding-top: 50px; */
    top: 0;
    right: 0;
    position: fixed;
    width: 300px;
    height: 100%;
    background-color: #ece9db;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* visibility: collapse; */
  }

  .el-menu {
    background-color: #ece9db;
  }

  .el-menu div {
    height: 100px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    border-bottom: 1.8px solid #e9b485;
  }

  .el-menu div:hover {
    color: white;
  }

  ul.el-menu--collapse.el-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer {
    visibility: hidden;
  }

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

  .btnText {
    font-size: 40px;
    font-weight: bold;
    color: black;
    margin-left: 20px;
  }

  .container img {
    width: 70px;
    height: 70px;
  }
}

/* 768~1024 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
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

  .btnText {
    font-size: 30px;
    font-weight: bold;
    color: black;
    margin-left: 15px;
  }

  .container img {
    width: 50px;
    height: 50px;
  }
}

/* 551~767 */
@media screen and (min-width: 551px) and (max-width: 768px) {
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

  .btnText {
    font-size: 30px;
    font-weight: bold;
    color: black;
    margin-left: 15px;
  }

  .container img {
    width: 50px;
    height: 50px;
  }
}

/* <551 */
@media screen and (max-width: 550px) {
  .container-btn {
    max-width: 500px;
    min-width: 300px;
  }

  .container-btn div {
    min-width: 280px;
    height: 80px;

    margin: 30px 10px 0px 10px;
    padding-left: 30px;
  }

  .btnText {
    font-size: 26px;
    font-weight: bold;
    color: black;
    margin-left: 15px;
  }

  .container img {
    width: 45px;
    height: 45px;
  }
}
</style>