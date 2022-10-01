<template>
    <a class="aosDiv" data-aos="fade-up" :href="cryptoUrl">
        <div class="lineCard">
            <img class="logo" :src="image" :alt="name" />
            <h1>{{ name }}</h1>
            <h3>{{ symbol }}</h3>
            <h3>{{ current_price }} $</h3>
            <div class="high_low_box">
                <h4 class="marketCap">Market cap : {{ market_cap }} $</h4>
                <img class="high-low-icon" src="/images/rise.png" alt="rise" />
                <h4 class="high_24h">High 24h : {{ high_24h }} $</h4>
                <img class="high-low-icon" src="/images/fall.png" alt="fall" />
                <h4 class="low_24h">
                    Low 24h :
                    {{ low_24h }} $
                </h4>
            </div>
        </div>
    </a>
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
        low_24h: Int16Array,
    },
    computed: {
        cryptoUrl() {
            return '/crypto-tracker/' + this.id;
        },
    },
};
</script>
<style>
.aosDiv {
    width: 90%;
    text-decoration: none;
}
.lineCard {
    cursor: pointer;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 3px 3px 10px 1px black;
    border-radius: 15px;
    min-width: 500px;
    transition: 0.1s ease-in-out;
}

.lineCard:hover {
    transform: translateX(30px);
}

.lineCard h1 {
    padding: 20px;
    color: #2c3e50;
}

.lineCard h3 {
    margin: 0px 5% 0px 5%;
    color: #2c3e50;
}

.lineCard h4 {
    margin: 0px 2% 0px 2%;
}

.logo {
    margin: 2%;
    width: 50px;
}

.marketCap {
    color: rgb(79, 120, 201);
}

.high_24h {
    color: green;
}

.low_24h {
    color: rgb(182, 58, 58);
}

.high-low-icon {
    margin-left: 50px;
    width: 40px;
}

.high_low_box {
    display: flex;
    flex-direction: row;
}

.cryptoSeeMoreButton {
    padding: 15px;
    color: white;
    background: orange;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
}

@media only screen and (max-width: 1300px) {
    .marketCap {
        display: none;
    }
}

@media only screen and (max-width: 1000px) {
    .high_low_box {
        display: none;
    }
    .lineCard {
        justify-content: center;
    }
    .lineCard h3 {
        font-size: 1.3em;
    }
}
</style>
