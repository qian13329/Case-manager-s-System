<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0px;
  padding: 0px;
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
  height: 80px;
}

.banner {
  width: 100%;
  height: 80px;
  background-color: #8eb387;
  /*#6c9d61*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
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
  font-weight: bold;
  color: white;
  font-size: 45px;

  /* font-size: 35px; */
  margin-left: 40px;
}

/* 內容 */
.container {
  width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

.back {
  display: none;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .back {
    display: flex;
    width: 50px;
    height: 50px;
    position: fixed;
    top: 25px;
    left: 30px;
  }
}
</style>
