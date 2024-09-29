<template>
  <div class="staffInform" v-if="item.staffNum === $route.params.staffNum">
  <!-- <div class="staffInform" v-if="item.staffNum === this.$route.query.staffNum"> -->
    <!-- 個資 -->
    <div class="profile">
      <!--頭像+姓名+編號-->
      <div class="pic_name_num">
        <!-- <img src="../assets/img/woman.png" width="120px" height="120px" /> -->
        <div class="img" >
          <img src="../assets/img/man.png"  v-if="item.staffSex=='1' " width="180px" height="180px"/>
          <img src="../assets/img/woman.png" v-if="item.staffSex=='2' " width="180px" height="180px"/>
        </div>
        <div>
          <a class="staffName">{{ item.staffName }}</a>
          <a class="staffNum">{{ item.staffNum }}</a>
        </div>
      </div>
      <div class="mainInform">
        <div>
          <a class="mainInform--title">性　　　別：</a>
          <a v-if="item.staffSex=='1'">男</a>
          <a v-if="item.staffSex=='2'">女</a>
        </div>
        <div>
          <a class="mainInform--title">身分證字號：</a>
          <a>{{ item.staffID }}</a>
        </div>
        <div>
          <a class="mainInform--title">出生年月日：</a
          ><a>{{ item.staffBirthday }}</a>
        </div>
        <div>
          <a class="mainInform--title">聯絡方式　：</a>
          <a>{{ item.staffPhone }}</a>
        </div>
        <div>
          <a class="mainInform--title">電子郵件　：</a>
          <a>{{ item.staffEmail }}</a>
        </div>
        <div>
          <a class="mainInform--title">通訊地址　：</a>
          <a class="staffAddress">{{ item.staffAddress }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
@media screen and (min-width: 1201px) {
  /* 個資 */
  .profile {
    margin: 35px auto;
    /* padding: 30px; */
    /* width: 100%; */
    width: 1000px;
    height: 450px;
    font-weight: bolder;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .pic_name_num {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* height: 210px; */
    width: 200px;
    margin-right: 60px;
  }

  .img {
    width: 180px;
    height: 240px;
    /* background-color: #a7b59d; */
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .man{
    width: 200px;
    height: 300px;
    background-color: #dee3ee;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 20px;
    padding: 20px;
    margin-bottom: 40px;
  }
  .woman{
    width: 200px;
    height: 300px;
    background-color: #ecdedd;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 20px;
    padding: 20px;
    margin-bottom: 40px;
  }

  .pic_name_num div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
  }

  .staffName {
    font-size: 28px;
  }

  .staffNum {
    font-size: 25px;
    color: #859a75;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .mainInform {
    display: flex;
    flex-direction: column;
    line-height: 70px;
  }

  .mainInform div {
    /* height: 70px; */
    /* width: 100%; */
    width: 750px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 25px;
  }

  .mainInform--title {
    width: 180px;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  /* 個資 */
  .profile {
    margin: 35px auto;
    /* padding: 30px; */
    /* width: 100%; */
    width: 900px;
    height: 420px;
    font-weight: bolder;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .pic_name_num {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* height: 210px; */
    width: 200px;
    margin-right: 60px;
  }

  .img {
    width: 180px;
    height: 240px;
    /* background-color: #a7b59d; */
    margin-bottom: 20px;
  }

  .pic_name_num div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
  }

  .staffName {
    font-size: 28px;
  }

  .staffNum {
    font-size: 25px;
    color: #859a75;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .mainInform {
    display: flex;
    flex-direction: column;
    /* line-height: 70px; */
  }

  .mainInform div {
    height: 70px;
    /* width: 100%; */
    max-width: 700px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 25px;
  }

  .mainInform--title {
    width: 170px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* 個資 */
  .profile {
    margin: 35px auto;
    /* padding: 30px; */
    /* width: 100%; */
    width: 700px;
    height: 400px;
    font-weight: bolder;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .pic_name_num {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* height: 210px; */
    width: 180px;
    margin-right: 40px;
  }

  .img {
    width: 150px;
    height: 220px;
    /* background-color: #a7b59d; */
    margin-bottom: 20px;
  }

  .pic_name_num div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
  }

  .staffName {
    font-size: 26px;
  }

  .staffNum {
    font-size: 23px;
    color: #859a75;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .mainInform {
    display: flex;
    flex-direction: column;
    /* line-height: 70px; */
  }

  .mainInform div {
    height: 70px;
    /* width: 100%; */
    width: 470px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 23px;
  }

  .mainInform--title {
    width: 150px;
  }

  .staffAddress {
    width: 300px;
  }
}
@media screen and (min-width: 551px) and (max-width: 768px) {
  /* 個資 */
  .profile {
    margin: 55px auto;
    /* padding: 30px; */
    /* width: 100%; */
    width: 500px;
    height: 640px;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .pic_name_num {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    /* height: 210px; */
    width: 450px;
    /* margin-right: 40px; */
    margin-bottom: 20px;
  }

  img{
    height: 150px;
    width: 150px;
  }

  .img {
    width: 150px;
    height: 200px;
    /* background-color: #a7b59d; */
    margin-right: 30px;
    /* margin-bottom: 20px; */
  }

  .pic_name_num div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
  }

  .staffName {
    font-size: 26px;
  }

  .staffNum {
    font-size: 23px;
    color: #859a75;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .mainInform {
    display: flex;
    flex-direction: column;
    /* line-height: 70px; */
  }

  .mainInform div {
    height: 70px;
    /* width: 100%; */
    width: 470px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 23px;
  }

  .mainInform--title {
    width: 150px;
  }

  .staffAddress {
    width: 320px;
  }
}

@media screen and (max-width: 550px) {
  /* 個資 */
  .profile {
    margin: 55px auto;
    /* padding: 30px; */
    /* width: 100%; */
    width: 400px;
    height: 580px;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .pic_name_num {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    /* height: 210px; */
    width: 350px;
    /* margin-right: 40px; */
    margin-bottom: 20px;
  }

  .img {
    width: 150px;
    height: 200px;
    /* background-color: #a7b59d; */
    margin-right: 30px;
    /* margin-bottom: 20px; */
  }

  .pic_name_num div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
  }

  .staffName {
    font-size: 24px;
  }

  .staffNum {
    font-size: 22px;
    color: #859a75;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .mainInform {
    display: flex;
    flex-direction: column;
    /* line-height: 70px; */
  }

  .mainInform div {
    height: 60px;
    /* width: 100%; */
    width: 370px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
  }

  .mainInform--title {
    width: 150px;
  }

  .staffAddress {
    width: 270px;
  }
}
</style>