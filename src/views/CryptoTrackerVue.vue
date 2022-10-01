<template>
    <h1>Voici les 100 cryptos les plus importantes du marché 🚀 !</h1>
    <p>Vous pouvez accéder aux pages de chaque crypto en cliquant dessus</p>
    <div class="listContainer">
        <ComponentLineCardCrypto
            v-for="items in dataSet"
            :key="items.id"
            :name="items.name"
            :id="items.id"
            :symbol="items.symbol"
            :image="items.image"
            :current_price="items.current_price"
            :market_cap="items.market_cap"
            :high_24h="items.high_24h"
            :low_24h="items.low_24h"
        />
    </div>
</template>

<script>
import ComponentLineCardCrypto from '@/components/ComponentLineCardCrypto.vue';
export default {
    name: 'CryptoTrackerVue',
    data() {
        return {
            dataSet: [],
        };
    },
    methods: {
        retrieveData() {
            // Simple GET request using fetch
            fetch(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc'
            )
                .then((response) => response.json())
                .then((data) => (this.dataSet = data));
        },
    },
    mounted() {
        this.retrieveData();
    },
    components: { ComponentLineCardCrypto },
};
</script>
<style>
.listContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
