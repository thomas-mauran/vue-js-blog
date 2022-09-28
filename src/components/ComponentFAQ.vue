<template>
    <details class="question">
        <summary class="title">
            <b>{{ title }}</b>
        </summary>
        <p class="text">{{ text }}</p>
        <div v-if="img_src" class="imgDiv">
            <img class="image" :src="'images/' + img_src" :alt="img_alt" />
        </div>
    </details>
</template>

<script>
export default {
    name: 'ComponentFAQ',
    props: {
        title: String,
        text: String,
        img_src: String,
        img_alt: String,
    },
};
</script>

<style>
b {
    font-size: 1.4em;
}

.imgDiv {
    display: flex;
    justify-content: center;
}
.image {
    width: 15%;
    border-radius: 20px;
    min-width: 200px;
}

.question {
    cursor: pointer;
    width: 80%;
    padding: 20px;
    margin: 20px 0px 20px 0px;
    box-shadow: 3px 3px 10px 1px black;
    border-radius: 20px;
}

.question .title {
    margin-bottom: 20px;
}

.question .text {
    margin-left: 20px;
}

details {
    transition: 0.1s ease-in-out;
}
details:hover {
    transform: scale(1.01);
}
details[open] summary ~ * {
    animation: sweep 0.5s ease-in-out;
}

@keyframes sweep {
    0% {
        opacity: 0;
        transform: translateX(-10px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
