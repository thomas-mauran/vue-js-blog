<template>
    <div class="lineCard">
        <img class="logo" :src="image" :alt="name" />
        <h1>{{ name }}</h1>
        <h3>{{ symbol }}</h3>
        <h3>{{ current_price }} $</h3>
        <h4 class="marketCap">Market cap : {{ market_cap }} $</h4>
        <h4 class="high_24h">High 24h : {{ high_24h }} $</h4>
    </div>
</template>

<script>
export default {
    name: 'ComponentLineCardCrypto',
    props: {
        symbol: String,
        name: String,
        id: Int16Array,
        image: String,
        current_price: Int16Array,
        market_cap: Int16Array,
        high_24h: Int16Array,
    },
};
</script>
<style>
.lineCard {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 3px 3px 10px 1px black;
    width: 90%;
    border-radius: 15px;
}

.lineCard h1 {
    padding: 20px;
}

.lineCard h3 {
    margin: 20px;
}

.lineCard h4 {
    margin: 20px;
}

.logo {
    margin: 2%;
    width: 50px;
}

.marketCap {
    color: rgb(201, 168, 79);
}

.high_24h {
    color: green;
}
</style>
