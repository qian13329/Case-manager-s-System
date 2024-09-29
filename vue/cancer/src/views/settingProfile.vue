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
      <div class="profile">
        <div class="profile__pic">
          <img
            src="../assets/img/profile-pic.png"
            alt="個人頭像"
            width="90px"
            height="90px"
          />
        </div>
      </div>
      <div
        class="DrMenu"
        v-for="item in staffData"
        :key="item.staffNum"
        :item="item"
      >
        <div>
          <a>姓名</a>
          <a>{{ item.staffName }}</a>
        </div>
        <div>
          <a>編號</a>
          <a>{{ item.staffNum }}</a>
        </div>
        <div>
          <a>性別</a>
          <a v-if="item.staffSex == 1">男</a>
          <a v-if="item.staffSex == 2">女</a>
        </div>
        <div>
          <a>電話</a>
          <a>{{ item.staffPhone }}</a>
        </div>
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
import { staffInform } from "../services/api";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      staffData: [],
      token: "",
    };
  },
  props: {
    item: Object,
  },
  methods: {
    getStaffInform() {
      staffInform({
        token: this.token,
      }).then((res) => {
        this.staffData.push(res.data);
      });
    },
  },
  mounted() {
    this.token = Cookies.get("token");
    this.getStaffInform();
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
  }

  .profile {
    min-width: 320px;
    padding-top: 70px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .profile__pic img {
    width: 75px;
    height: 75px;
  }

  .DrMenu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .DrMenu div {
    width: 100%;
    /* max-width: 700px; */
    min-width: 320px;
    height: 90px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bolder;
    border-bottom: rgba(128, 128, 128, 0.685) solid 1px;
    padding: 0 10px;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  .container {
    width: 100%;
    min-width: 768px;
  }

  .profile {
    padding-top: 70px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile__pic {
    /* padding-left: 30px; */
    margin: 0 auto;
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

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 100%;
  }

  .profile {
    padding-top: 70px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile__pic {
    /* padding-left: 30px; */
    margin: 0 auto;
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
    width: 100%;
  }

  .profile {
    padding-top: 70px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile__pic {
    /* padding-left: 30px; */
    margin: 0 auto;
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