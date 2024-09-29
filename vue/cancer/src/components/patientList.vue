<template>
  <!-- <router-link :to="{ name: 'PatientList' }"> -->
  <div>
    <div class="patientListDiv" v-if="this.search == ''">
      <div v-for="items in item.patient" :key="items.pNum" :item="items">
        <router-link
          :to="{
            name: 'PatientList',
            params: { pNum: items.pNum, pID: items.pID },
          }"
        >
          <div class="patientList" :class="{ woman: items.pSex == 2 }">
            <div>
              <img src="../assets/img/man.png" v-if="items.pSex == 1" alt="" />
              <img
                src="../assets/img/woman.png"
                v-if="items.pSex == 2"
                alt=""
              />
            </div>
            <div class="patientList-text">
              <div>
                <a>{{ items.pName }}</a>
              </div>
              <div class="pNum">
                <a>{{ items.pNum }}</a>
              </div>
              <div class="room">
                <a>{{ items.room }}</a>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="patientListDiv" v-else>
      <router-link :to="{ name: 'PatientList', params: { pNum: item.pNum } }">
        <div class="patientList" :class="{ woman: item.pSex == 2 }">
          <div>
            <img src="../assets/img/man.png" v-if="item.pSex == 1" alt="" />
            <img src="../assets/img/woman.png" v-if="item.pSex == 2" alt="" />
          </div>
          <div class="patientList-text">
            <div>
              <a>{{ item.pName }}</a>
            </div>
            <div class="pNum">
              <a>{{ item.pNum }}</a>
            </div>
            <div class="room">
              <a>{{ item.room }}</a>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: this.searchContent,
    };
  },
  props: {
    item: Object,
    searchContent: String,
  },
  methods: {},

  mounted() {
    this.$emit("getStaffNum", this.item.staffNum);
    console.log("search:", this.search);
  },
};
</script>

<style scoped>
/* a {
  width: 100%;
} */

@media screen and (min-width: 1025px) {
  .patientListDiv {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .patientList {
    width: 200px;
    height: 300px;
    font-size: 25px;
    font-weight: bolder;
    color: black;
    background-color: #dee3ee;
    border-radius: 10px;
    /* border-bottom: 1px solid #ddd; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 20px;
    padding: 20px;
    margin-bottom: 40px;
  }

  .patientList img {
    width: 110px;
    height: 110px;
  }

  .woman {
    background: #ecdedd;
  }

  .patientList-text {
    height: 100px;
    text-align: center;
  }

  .patientList-text div {
    margin-bottom: 8px;
  }

  .pNum {
    font-size: 19px;
  }

  .room {
    font-size: 19px;
    color: gray;
  }
}

/* pad */
@media screen and (min-width: 767px) and (max-width: 1024px) {
  .patientListDiv {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .patientList {
    width: 160px;
    height: 250px;
    font-size: 22px;
    font-weight: bolder;
    color: black;
    background-color: #dee3ee;
    border-radius: 10px;
    /* border-bottom: 1px solid #ddd; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 20px;
    padding: 20px;
    margin-bottom: 40px;
  }

  .patientList img {
    width: 90px;
    height: 90px;
  }

  .woman {
    background: #ecdedd;
  }

  .patientList-text {
    height: 100px;
    text-align: center;
    margin-top: 8px;
  }

  .patientList-text div {
    margin-bottom: 8px;
  }

  .pNum {
    font-size: 19px;
  }

  .room {
    font-size: 19px;
    color: gray;
  }
}

/* phone row */
@media screen and (min-width: 551px) and (max-width: 767px) {
  .patientListDiv {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .patientList {
    width: 130px;
    height: 200px;
    font-size: 20px;
    font-weight: bolder;
    color: black;
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

  .patientList img {
    width: 60px;
    height: 60px;
  }

  .woman {
    background: #ecdedd;
  }

  .patientList-text {
    height: 100px;
    text-align: center;
    margin-top: 8px;
  }

  .patientList-text div {
    margin-bottom: 8px;
  }

  .pNum {
    font-size: 18px;
  }

  .room {
    font-size: 18px;
    color: gray;
  }
}

/* phone cloumn*/
@media screen and (max-width: 550px) {
  .patientListDiv {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .patientList {
    width: 150px;
    height: 110px;
    font-size: 18px;
    font-weight: bolder;
    color: black;
    background-color: #dee3ee;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 10px;
    padding: 15px;
    margin-bottom: 20px;
  }

  .patientList img {
    width: 55px;
    height: 55px;
  }

  .woman {
    background: #ecdedd;
  }

  .patientList-text {
    height: 80px;
    text-align: center;
    /* margin-top: 8px; */
  }

  .patientList-text div {
    margin-bottom: 8px;
  }

  .pNum {
    font-size: 16px;
  }

  .room {
    font-size: 15px;
    color: gray;
  }
}
</style>