<template>
  <highcharts :options="options" class="highcharts"></highcharts>
</template>

<script>
// import BiochemicalValue from '../data/TAG_Data.json';
export default {
  props: {
    label: {
      type: Array,
    },
    chartData: {
      type: Array,
    },
  },
  data() {
    return {
      // label: this.label,
      // chartData: this.chartData,
      options: {
        chart: { type: "spline" },
        title: { text: "" },
        xAxis: {
          categories: [
            this.label[0],
            this.label[1],
            this.label[2],
            this.label[3],
            this.label[4],
            this.label[5],
            this.label[6],
          ],
          labels: {
            style: {
              fontSize: "15px",
            },
          },
        },
        yAxis: {
          title: { text: "數值" },
        },
        series: [
          {
            name: "mg/dl",
            data: [
              this.chartData[0],
              this.chartData[1],
              this.chartData[2],
              this.chartData[3],
              this.chartData[4],
              this.chartData[5],
              this.chartData[6],
            ],
            // data: [1, 10],
          },
        ],
        computed: {
          xAxisCate() {
            return Object.keys(this.data);
          },
          seriesData() {
            return Object.values(this.data);
          },
          options() {
            let options = Object.assign(this.options, {});
            options.xAxis.categories = this.xAxisCate;
            options.series[0].data = this.seriesData;
            return options;
          },
        },
      },
    };
  },

  mounted() {
    // console.log(this.chartData[0]);
  },
};
</script>

<style scoped>
.highcharts {
  border-radius: 10px;
}
@media screen and (min-width: 1240px) {
  .highcharts {
    width: 400px;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1239px) {
  .highcharts {
    width: 320px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .highcharts {
    width: 500px;
  }
}
@media screen and (min-width: 551px) and (max-width: 767px) {
  .highcharts {
    width: 450px;
    min-width: 320px;
  }
}
@media screen and (max-width: 550px) {
  .highcharts {
    max-width: 490px;
    min-width: 300px;
    height: 200px;
  }
}
</style>