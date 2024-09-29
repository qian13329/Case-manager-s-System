<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      // userData: userData,
      isCollapse: false,
      authenticated: false,
      mockAccount: {
        staffNum: "abc",
        staffPassword: "123",
      },
    };
  },
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0px;
  padding: 0px;
  background-image: url(assets/img/bg.jpg);

  background: linear-gradient(
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0.85)
    ),
    url(assets/img/bg.jpg) no-repeat 0% 0% / cover;

  background-size: 100% 100vh;
  background-attachment: fixed;
}

.wrapper {
  width: 100%;
  font-family: "Microsoft JhengHei";
  margin: 0 auto;
}

/* 上方橫幅 */
.header {
  width: 100%;
  font-family: "Script";
  z-index: 2;
}

.banner {
  width: 100%;
  background-color: #8eb387;
  /*#6c9d61*/
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
}

.logo {
  font-weight: bold;
  color: white;
}

/* 內容 */
.container {
  width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

/* >1024 */
@media screen and (min-width: 1025px) {
  .header {
    height: 60px;
  }

  .banner {
    height: 60px;
    z-index: 2;
    display: flex;
    justify-content: space-between;
  }

  nav {
    display: flex;
    flex-direction: row;
    margin-right: 50px;
  }

  nav div {
    color: white;
    font-weight: bold;
    font-size: 22px;
    border-right: 1.8px solid white;
    padding: 0 20px;
  }

  nav div:hover {
    text-decoration: underline;
  }

  .logo {
    font-size: 35px;
    margin-left: 40px;
  }

  .hidden {
    display: none;
  }

  .container {
    padding-bottom: 20px;
  }

  .footer {
    visibility: hidden;
  }
}

/* 768~1024 */
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

  .header {
    height: 100px;
  }

  .banner {
    height: 100px;
    z-index: 2;
  }

  nav {
    display: none;
  }

  .back {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 25px;
    left: 30px;
  }

  .logo {
    font-size: 60px;
  }

  .container {
    padding-bottom: 100px;
  }

  /* 頁尾 */
  .footerBg {
    height: 100px;
    z-index: 2;
  }

  .footerBg img {
    width: 55px;
    height: 55px;
  }

  .footerBg div {
    width: 80px;
  }
}

/* 551~767 */
@media screen and (min-width: 551px) and (max-width: 768px) {
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

  .header {
    height: 80px;
  }

  .banner {
    height: 80px;
    z-index: 2;
  }

  nav {
    display: none;
  }

  .logo {
    font-size: 50px;
  }

  .back {
    width: 40px;
    height: 40px;
    position: fixed;
    top: 20px;
    left: 20px;
  }

  .container {
    padding-bottom: 90px;
  }

  /* 頁尾 */
  .footerBg {
    height: 90px;
    z-index: 2;
  }

  .footerBg img {
    width: 45px;
    height: 45px;
  }

  .footerBg div {
    width: 80px;
    font-size: 15px;
  }
}

/* <551 */
@media screen and (max-width: 550px) {
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

  .header {
    height: 55px;
  }

  .banner {
    height: 55px;
  }

  nav {
    display: none;
  }

  .logo {
    font-size: 30px;
  }

  .back {
    width: 25px;
    height: 25px;
    position: fixed;
    top: 15px;
    left: 15px;
  }

  .container {
    padding-bottom: 75px;
  }

  /* 頁尾 */
  .footerBg {
    height: 75px;
    z-index: 2;
  }

  .footerBg img {
    width: 30px;
    height: 30px;
  }

  .footerBg div {
    width: 70px;
    font-size: 12px;
  }
}

/* 頁尾 */
.footer {
  width: 100%;
  color: black;
}

.footerBg {
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
}

.footerBgAbsolute {
  position: relative;
}

.router-link-footer {
  color: black;
}

.router-link-href {
  color: black;
}

.footerBg div {
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footerBg a {
  margin-top: 7px;
}
</style>
