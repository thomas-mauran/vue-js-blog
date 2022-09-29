<template>
    <h1>Hello world</h1>
    <div class="listContainer" :v-for="items in list" :key="dataSet.id">
        <h1>{{ items.id }}</h1>
    </div>
</template>
<script>
export default {
    name: 'CryptoTrackerVue',

    data() {
        return {
            dataSet: {},
        };
    },
    methods: {
        retrieveData() {
            let xml = new XMLHttpRequest();
            xml.open('GET', 'https://api.coingecko.com/api/v3/coins/list');
            xml.onload = () => {
                if (xml.status != 200) {
                    console.log(`Error : ${xml.statusText}`);
                } else {
                    console.log(xml.responseText);
                }
            };
            xml.send();
        },
    },
    beforeMount() {
        this.retrieveData();
    },
};
</script>
<style></style>
