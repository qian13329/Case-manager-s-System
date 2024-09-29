<template>
    <div class="staffList">
      <router-link :to="{ name: 'staffInform', params: { staffNum: item.staffNum } }">
        <!-- <router-link> -->
        <!-- :to="{ name: 'staffInform', params: { staffNum: item.staffNum } }" -->
        <div class="staffList-text">
          <div class="staffNum">
            <a>{{ item.staffNum }}</a>
          </div>
          <div class="staffName">
            <a>{{ item.staffName }}</a>
          </div>
          <!-- <div class="staffID">
          <a>{{ item.staffID }}</a>
        </div> -->
          <div class="staffSex">
            <a v-if="item.staffSex == 1">男</a>
            <a v-if="item.staffSex == 2">女</a>
            <!-- <a>{{ item.staffSex }}</a> -->
          </div>
          <div class="identify">
            <a v-if="item.identify == 1">護理師</a>
            <a v-if="item.identify == 2">醫師</a>
            <a v-if="item.identify == 3">管理員</a>
          </div>
        </div>
      </router-link>
    </div>
</template>

<script>
import staffBasicInfo from "./staffBasicInform.vue";
// import {staffList} from "../services/api"
export default {
  data() {
    return {
      staffBasicInfo: [],
    };
  },
  props: {
    item: Object,
  },
  components: {
    // 放components
    staffBasicInfo,
  },
  mounted() {
    // console.log("search:", this.searchContent);
    console.log("search1:", this.search);
  },

};
</script>

<style scoped>
.staffList {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 1025px) {
  .staffList-text {
    margin: 8px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
    /* min-width: 1000px; */
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 22px;
    transition: 0.2s;
  }

  .staffList-text:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634);
  }

  .staffList-text div {
    width: 130px;
    text-align: center;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .staffList-text {
    margin: 8px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
    /* min-width: 1000px; */
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 22px;
    transition: 0.2s;
  }

  .staffList-text:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634);
  }

  .staffList-text div {
    width: 130px;
    text-align: center;
  }
}

@media screen and (min-width: 551px) and (max-width: 767px) {
  .staffList-text {
    margin: 8px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
    /* min-width: 1000px; */
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 18px;
    transition: 0.2s;
  }

  .staffList-text:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634);
  }

  /* .staffList-text div {
    width: 100px;
    text-align: center;
  } */

  /* .staffID,
  .staffSex {
    width: 100px;
    text-align: center;
  } */

  .staffNum,
  .staffName,
  .identify,
  .staffSex {
    width: 60px;
    text-align: center;
  }
}

@media screen and (max-width: 550px) {

  /* .staffList{
    min-width:400px
  } */
  .staffList-text {
    margin: 8px auto;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
    /* min-width: 1000px; */
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ece9db;
    color: #000;
    font-size: 16px;
    transition: 0.2s;
  }

  .staffList-text:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634);
  }

  /* .staffList-text div {
    width: 100px;
    text-align: center;
  } */

  /* .staffID {
    width: 100px;
    text-align: center;
  } */

  .staffNum,
  .staffName,
  .identify,
  .staffSex {
    width: 60px;
    text-align: center;
  }
}
</style>