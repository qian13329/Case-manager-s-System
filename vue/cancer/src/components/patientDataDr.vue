<template>
  <div class="mainInfo--doctor" v-if="item.pNum === $route.params.pNum">
    <div class="mainInfo-div-doctor">
      <div class="mainInfo-title-doctor"><a>醫師的囑咐</a></div>
      <div class="mainInfo-data-doctor">
        <a name="pDoctorSay" id="pDoctorSay">{{ item.pDoctorSay }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    item: {
      type: String,
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1240px) {
  .mainInfo--doctor {
    max-width: 1320px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 15px auto;
  }

  .mainInfo-div-doctor {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .mainInfo-title-doctor {
    font-size: 32px;
    color: black;
    font-weight: bold;
  }

  .mainInfo-data-doctor {
    width: 100%;
    height: 150px;
    border: 1.8px solid #959595;
    border-radius: 15px;
    font-size: 22px;
    margin-top: 10px;
    padding: 10px;
  }
}
/* computer */
@media screen and (min-width: 1025px) and (max-width: 1240px) {
  .mainInfo--doctor {
    width: 100%;
    min-width: 270px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 30px;
  }

  .mainInfo-div-doctor {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .mainInfo-title-doctor {
    font-size: 32px;
    color: black;
    font-weight: bold;
  }

  .mainInfo-data-doctor {
    width: 100%;
    height: 150px;
    border: 1.8px solid #959595;
    border-radius: 15px;
    font-size: 22px;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
  }
}

/* pad */
@media screen and (min-width: 767px) and (max-width: 1024px) {
  .mainInfo--doctor {
    width: 100%;
    /* max-width: 825px; */
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 30px;
    padding-top: 0;
  }

  .mainInfo-div-doctor {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .mainInfo-title-doctor {
    width: 100%;
    max-width: 825px;
    font-size: 30px;
    color: black;
    font-weight: bold;
    margin: 0 auto;
  }

  .mainInfo-data-doctor {
    width: 100%;
    max-width: 825px;
    height: 150px;
    border: 1.8px solid #959595;
    border-radius: 15px;
    font-size: 20px;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
  }
}

/* phone row */
@media screen and (min-width: 551px) and (max-width: 767px) {
  .mainInfo--doctor {
    width: 100%;
    /* max-width: 825px; */
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 30px;
    padding-top: 0;
  }

  .mainInfo-div-doctor {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .mainInfo-title-doctor {
    width: 100%;
    max-width: 825px;
    font-size: 28px;
    color: black;
    font-weight: bold;
    margin: 0 auto;
  }

  .mainInfo-data-doctor {
    width: 100%;
    height: 150px;
    border: 1.8px solid #959595;
    border-radius: 15px;
    font-size: 18px;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
  }
}

/* phone cloumn */
@media screen and (max-width: 550px) {
  .mainInfo--doctor {
    width: 100%;
    min-width: 320px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .mainInfo-div-doctor {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .mainInfo-title-doctor {
    width: 100%;
    max-width: 825px;
    font-size: 26px;
    color: black;
    font-weight: bold;
    margin: 0 auto;
  }

  .mainInfo-data-doctor {
    width: 100%;
    height: 150px;
    border: 1.8px solid #959595;
    border-radius: 15px;
    font-size: 18px;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
  }
}
</style>