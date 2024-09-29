<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <!-- 返回鍵 -->
        <router-link :to="'/insertPInform'" class="hidden"
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
      <form action="">
        <div>
          <label for="pID">身分證字號</label>
          <input type="text" id="pID" v-model="pID" />
        </div>
        <div>
          <label for="pTAG">三酸甘油脂</label>
          <input type="text" id="pTAG" v-model="pTAG" />
        </div>
        <div>
          <label for="pHDL">高密度脂蛋白</label>
          <input type="text" id="pHDL" v-model="pHDL" />
        </div>
        <div>
          <label for="pVAT">腹部脂肪</label>
          <input type="text" id="pVAT" v-model="pVAT" />
        </div>
        <div>
          <label for="pAC">空腹血糖</label>
          <input type="text" id="pAC" v-model="pAC" />
        </div>
        <div>
          <label for="p5HTTLPR">血清素運送基因- 5羥色胺</label>
          <input type="text" id="p5HTTLPR" v-model="p5HTTLPR" />
        </div>
        <div>
          <label for="pVitaminD">維生素D</label>
          <input type="text" id="pVitaminD" v-model="pVitaminD" />
        </div>
        <div class="btn">
          <button @click="addPInformBiochemical">送出</button>
        </div>
      </form>
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
      pID: "",
      pTAG: "",
      pHDL: "",
      pVAT: "",
      pAC: "",
      p5HTTLPR: "",
      pVitaminD: "",
      isCollapse: false,
    };
  },

  methods: {
    // 回上一頁
    back() {
      this.$router.go(-1);
    },

    // 新增患者生化資料
    addPInformBiochemical() {
      insertPInformBiochemical({
        pID: this.pID,
        pTAG: this.pTAG,
        pHDL: this.pHDL,
        pVAT: this.pVAT,
        pAC: this.pAC,
        p5HTTLPR: this.p5HTTLPR,
        pVitaminD: this.pVitaminD,
      }).then(() => {
        alert("新增成功");
        this.pID = "";
        this.pTag = "";
        this.pHDL = "";
        this.pVAT = "";
        this.pAC = "";
        this.p5HTTLPR = "";
        this.pVitaminD = "";
      });
    },
  },
};
</script>

<style scoped>
.btn button:hover {
  background-color: #a7b59d;
}

/* >1024 */
@media screen and (min-width: 1025px) {
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  form {
    width: 768px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  form div {
    width: 500px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
  }

  form input {
    width: 180px;
    height: 35px;
    font-size: 20px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  form select {
    width: 180px;
    height: 35px;
    font-size: 18px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .btn {
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .btn button {
    width: 150px;
    height: 40px;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
    background-color: #859a75;
    border: 0;
    border-radius: 5px;
    margin-top: 30px;
  }
}

/* 768~1024 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  form {
    width: 768px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  form div {
    width: 500px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
  }

  form input {
    width: 180px;
    height: 35px;
    font-size: 20px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  form select {
    width: 180px;
    height: 35px;
    font-size: 18px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .btn {
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .btn button {
    width: 150px;
    height: 40px;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
    background-color: #859a75;
    border: 0;
    border-radius: 5px;
    margin-top: 30px;
  }
}

/* 551~767 */
@media screen and (min-width: 551px) and (max-width: 768px) {
  form {
    width: 100%;
    display: flex;
    /* flex-flow: row wrap; */
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  form div {
    width: 500px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
  }

  form input {
    width: 180px;
    height: 35px;
    font-size: 20px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  form select {
    width: 180px;
    height: 35px;
    font-size: 18px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    padding-left: 10px;
  }

  .btn {
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .btn button {
    width: 150px;
    height: 40px;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
    background-color: #859a75;
    border: 0;
    border-radius: 5px;
    margin-top: 30px;
  }
}

/* <551 */
@media screen and (max-width: 550px) {
  form {
    width: 100%;
    display: flex;
    /* flex-flow: row wrap; */
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
  }

  form div {
    width: 210px;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 20px auto;
  }

  form label {
    margin-left: 3px;
  }

  form input {
    width: 210px;
    height: 35px;
    font-size: 16px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    margin: 0 auto;
    margin-top: 10px;
    padding-left: 10px;
  }

  form select {
    width: 210px;
    height: 35px;
    font-size: 16px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background-color: #ece9db;
    margin: 0 auto;
    padding-left: 10px;
  }

  .btn {
    width: 210px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .btn button {
    width: 80px;
    height: 30px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
    background-color: #859a75;
    border: 0;
    border-radius: 5px;
    margin-top: 30px;
  }
} ;
</style>