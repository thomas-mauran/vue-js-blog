<template>
    <h1>{{ id }}</h1>
    <!-- <img :src="globalData.small" alt="btc" /> -->
    <h1 v-if="globalData.image.small">{{ globalData.image.small }}</h1>
    <!-- <h1 v-for="prices in dataSetGraph" :key="prices">
        {{ dataSetGraph.prices[0][1] }}
    </h1> -->
</template>

<!-- https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=30&interval=daily -->

<script>
export default {
    name: 'CryptoInfoVue',
    data: () => {
        return {
            id: '',
            dataSetGraph: {},
            globalData: {},
        };
    },
    /* Tu peux aussi faire comme ça
    data: function() {
        return {
            id: '',
            dataSetGraph: {},
            globalData: {},
        };
    },*/
    methods: {
        retrieveGlobalData() {
            fetch(
                'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=true&developer_data=false&sparkline=false'
            )
                .then((response) => response.json())
                .then((data) => {
                    this.globalData = data;
                    console.log(this.globalData);
                });
        },
        retrieveGraphData() {
            fetch(
                `https://api.coingecko.com/api/v3/coins/${this.id}/market_chart?vs_currency=eur&days=30&interval=daily`
            )
                .then((response) => response.json())
                .then((data) => (this.dataSetGraph = data));
        },
    },
    mounted() {
        this.id = this.$route.params.id;
        this.retrieveGlobalData();

        this.retrieveGraphData();
    },
};
</script>

<style></style>
