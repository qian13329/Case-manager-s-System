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
      <div class="profile">
        <div class="profile__pic">
          <img
            src="../assets/img/profile-pic.png"
            alt="個人頭像"
            width="90px"
            height="90px"
          />
        </div>
        <div
          class="profile__user"
          v-for="item in staffData"
          :key="item.staffNum"
          :item="item"
        >
          <a class="profile__user--name">{{ item.staffName }}</a>
          <a class="profile__user--num">{{ item.staffNum }}</a>
        </div>
      </div>
      <div class="DrMenu">
        <router-link :to="'/settingProfile'" class="router-link-href">
          <div>
            <a>個人資料</a>
            <a>></a>
          </div>
        </router-link>
        <router-link :to="'/settingUpdatePwd'" class="router-link-href">
          <div>
            <a>更改密碼</a>
            <a>></a>
          </div>
        </router-link>
        <div @click="handleLogout()">
          <a>登出</a>
          <a>></a>
        </div>
        <!-- <router-link v-else to="/login">Login</router-link> -->
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

<script>
import { staffInform, logout } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      // userData: userData,
      authenticated: false,
      mockAccount: {
        staffNum: "abc",
        staffPassword: "123",
      },
      staffData: [],
      token: "",
    };
  },
  props: {
    item: Object,
  },
  methods: {
    // logout() {
    //   sessionStorage.clear();
    //點選登出之後來到首頁頁面
    // .then(() => {
    // this.$router.replace("/login");
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    // setAuthenticated(status) {
    //   this.authenticated = status;
    // },
    handleLogout() {
      logout({
        token: this.token,
      }).then((res) => {
        console.log(res);
        Cookies.remove("token");
        this.$router.push({ name: "Login" });
      });
    },
    gatStaffInform() {
      staffInform({
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.staffData.push(res.data);
      });
    },
  },
  mounted() {
    //if (!this.authenticated) {
    //  this.$router.replace({ name: "login" });
    //}
    this.token = Cookies.get("token");
    this.gatStaffInform();
  },
};
</script>

<style scoped>
@media screen and (max-width: 551px) {
  .container {
    width: 100%;
    /* max-width: 700px; */
    min-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  .profile {
    /* width: 100%; */
    min-width: 300px;
    padding-top: 70px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile__pic img {
    width: 75px;
    height: 75px;
  }

  .profile__user {
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .profile__user--name {
    font-size: 25px;
    font-weight: bolder;
    margin-bottom: 5px;
  }

  .profile__user--num {
    font-size: 20px;
    margin-top: 5px;
  }

  .DrMenu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .DrMenu div {
    /* max-width: 700px; */
    min-width: 300px;
    height: 90px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bolder;
    border-bottom: rgba(128, 128, 128, 0.685) solid 1px;
    padding-right: 15px;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  .container {
    width: 100%;
    max-width: 700px;
    min-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  .profile {
    /* width: 100%; */
    max-width: 700px;
    min-width: 480px;
    padding-top: 70px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile__user {
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }

  .profile__user--name {
    font-size: 27px;
    font-weight: bolder;
    padding-bottom: 3px;
  }

  .profile__user--num {
    font-size: 20px;
    padding-top: 3px;
  }

  .DrMenu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .DrMenu div {
    width: 100%;
    /* max-width: 700px; */
    min-width: 480px;
    height: 90px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 25px;
    font-weight: bolder;
    border-bottom: rgba(128, 128, 128, 0.685) solid 1px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile {
    width: 600px;
    padding-top: 70px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile__user {
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  .profile__user--name {
    font-size: 27px;
    font-weight: bolder;
    padding-bottom: 4px;
  }

  .profile__user--num {
    font-size: 20px;
    padding-top: 4px;
  }

  .DrMenu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .DrMenu div {
    width: 600px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 25px;
    font-weight: bolder;
    border-bottom: rgba(128, 128, 128, 0.685) solid 1px;
  }
}

@media screen and (min-width: 1025px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile {
    width: 600px;
    padding-top: 70px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile__user {
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  .profile__user--name {
    font-size: 27px;
    font-weight: bolder;
    padding-bottom: 4px;
  }

  .profile__user--num {
    font-size: 20px;
    padding-top: 4px;
  }

  .DrMenu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .DrMenu div {
    width: 600px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 25px;
    font-weight: bolder;
    border-bottom: rgba(128, 128, 128, 0.685) solid 1px;
  }
}
</style>