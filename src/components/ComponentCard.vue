<template>
    <div class="Card">
        <h2>{{ title }}</h2>
        <div class="imgDiv">
            <img class="CardImg" :src="'images/' + img" :alt="img_alt" />
        </div>
        <p>{{ text }}</p>

        <div v-if="link" class="div-link">
            <a v-bind:href="link" target="_blank" rel="noopener noreferrer">{{
                link_msg
            }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComponentCard',
    props: {
        title: String,
        img: String,
        img_alt: String,
        text: String,
        link: String,
        link_msg: String,
    },
};
</script>

<style>
.Card {
    cursor: pointer;
    display: grid;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 3px 3px 10px 1px black;
    transition: ease-in-out 0.1s;
    min-width: 200px;
}

.Card:hover {
    transform: scale(1.1);
}

.Card h2 {
    padding: 20px;
}

.Card .div-link {
    margin-top: 20px;
}

.Card .imgDiv {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.Card .imgDiv .CardImg {
    display: flex;
    max-height: 170px;
}

.Card a {
    border-radius: 20px;
    padding: 2%;
    text-decoration: none;
    color: white;
    background-color: #42b983;
}
</style>
