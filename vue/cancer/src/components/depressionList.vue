<template>
  <div class="dpContent" v-if="item.pID == $route.params.pID">
    <div class="dpText">
      <div>
        <a>程度：</a>
        <a>{{ item.score }}</a>
      </div>
      <div>
        <a>症狀：</a>
        <a>{{ item.pDate }}</a>
      </div>
    </div>
    <Chart :cahrtData="chartData" :options="options"/>
  </div>
</template>

<script>
import { chart } from "highcharts";
import Chart from "../components/depressionChart.vue";
export default {
  components: {Chart},
  props:{
    item:Object,
  },
  data() {
    return {
      chartData:{
        labels:[
          "er","we",'we',
        ],
        datasets:[
          {
            label : "Data 1",
            data:[2,3,5,3,10,2],
            backgroundColor:"FC2525",
            pointBackgroundColor:"rgba(171,71,188,1)"
          },
        ]
      },
      options:{
        responsive:true,
        maintainAspectRatio:false,
        // title:{
        //   display:true,
        //   text:"My Data"
        // }
      }
    }
  },
  async created() {
    let { data } = await axios.get(
      'https://api.covidtracking.com/v1/us/daily.json'
    )
    console.log(data)
  },
};
</script>

<style scoped>
@media screen and (min-width: 1240px) {
  .dpContent {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    border: gray 1px solid;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
    padding: 15px;
  }

  .dpText {
    width: 300px;
    height: 240px;
    font-size: 22px;
  }

  .dpText div {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1240px) {
  .dpContent {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    border: gray 1px solid;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
    padding: 15px;
  }

  .dpText {
    width: 250px;
    height: 240px;
    font-size: 22px;
  }

  .dpText div {
    display: flex;
    flex-direction: row;
    margin: 15px 0;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .dpContent {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    border: gray 1px solid;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
    padding: 15px;
  }

  .dpText {
    width: 250px;
    height: 240px;
    font-size: 22px;
  }

  .dpText div {
    display: flex;
    flex-direction: row;
    margin: 15px 0;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .dpContent {
    width: 100%;
    height: 250px;
    border-radius: 10px;
    border: gray 1px solid;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  .dpText {
    height: 200px;
    font-size: 20px;
  }

  .dpText div {
    display: flex;
    flex-direction: row;
    margin: 15px 0;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  .dpContent {
    width: 100%;
    height: 250px;
    border-radius: 10px;
    border: gray 1px solid;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 15px;
  }

  .dpText {
    width: 150px;
    min-width: 120px;
    height: 200px;
    font-size: 18px;
  }

  .dpText div {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 15px 0;
  }
}

@media screen and (max-width: 550px) {
  .dpContent {
    width: 100%;
    min-width: 320px;
    border-radius: 10px;
    border: gray 1px solid;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }

  .dpText {
    width: 80%;
    height: 50px;
    font-size: 18px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 10px;
  }

  .dpText div {
    display: flex;
    flex-direction: row;
    margin: 0 15px;
  }
}
</style>