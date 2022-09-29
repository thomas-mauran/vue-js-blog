<template>
    <h1>Voici le graphique</h1>

    <!--     
    <div id="chart">
        <apexchart
            class="chart"
            type="line"
            height="350"
            :options="chartOptions"
            :series="series"
        ></apexchart>
    </div> -->
</template>

<script>
// import VueApexCharts from 'vue3-apexcharts';

export default {
    name: 'ComponentGraph',

    // data() {
    //     return {
    //         series: [
    //             {
    //                 name: 'Desktops',
    //                 data: [100, 41, 35, 51, 49, 62, 69, 91, 148],
    //             },
    //         ],
    //         chartOptions: {
    //             chart: {
    //                 height: 350,
    //                 type: 'line',
    //                 zoom: {
    //                     enabled: false,
    //                 },
    //             },
    //             dataLabels: {
    //                 enabled: false,
    //             },
    //             stroke: {
    //                 curve: 'straight',
    //             },
    //             title: {
    //                 text: 'Product Trends by Month',
    //                 align: 'left',
    //             },
    //             grid: {
    //                 row: {
    //                     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    //                     opacity: 0.5,
    //                 },
    //             },
    //             xaxis: {
    //                 categories: [
    //                     'Jan',
    //                     'Feb',
    //                     'Mar',
    //                     'Apr',
    //                     'May',
    //                     'Jun',
    //                     'Jul',
    //                     'Aug',
    //                     'Sep',
    //                 ],
    //             },
    //         },
    //     };
    // },
};
</script>

<style>
.chart {
    width: 500px;
}
</style>
