<template>
  <highcharts :options="options" class="highcharts"></highcharts>
</template>

<script>
// import BiochemicalValue from '../data/TAG_Data.json';
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props:[
    "cahrtData",
    "options",
  ],
  mounted(){
    this.renderChart(this.cahrtData,this.options);
  },
  // mounted() {
  //   const dates = [
  //     '2020/07/05',
  //     '2020/07/06',
  //     '2020/07/07',
  //     '2020/07/08',
  //     '2020/07/09',
  //     '2020/07/10',
  //   ]
  //   const totals = [50, 40, 71, 51, 25, 49]

  //   this.renderChart({
  //     labels: dates,
  //     datasets: [
  //       {
  //         label: 'demo',
  //         data: totals,
  //       },
  //     ],
  //   },
  //   {
  //     responsive: true,
  //     maintainAspectRatio: false,
  //   })
  // },
};
</script>

<style scoped>
@media screen and (min-width: 1240px) {
  .highcharts {
    width: 800px;
    height: 260px;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1240px) {
  .highcharts {
    width: 600px;
    height: 260px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .highcharts {
    width: 500px;
    height: 220px;
  }
}
@media screen and (min-width: 551px) and (max-width: 767px) {
  .highcharts {
    width: 450px;
    min-width: 320px;
    height: 200px;
  }
}
@media screen and (max-width: 550px) {
  .highcharts {
    width: 100%;
    height: 200px;
  }
}
</style>