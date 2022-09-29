<template>
    <div class="imgContainer">
        <img class="bigProfilePicture bottomImg" :src="img2" :alt="alt2" />

        <img class="bigProfilePicture topImg" :src="img1" :alt="alt1" />
    </div>
</template>

<script>
export default {
    name: 'ComponentImageHover',
    props: {
        img1: String,
        alt1: String,
        img2: String,
        alt2: String,
    },
};
</script>

<style>
.bigProfilePicture {
    margin-top: 50px;
    border-radius: 300px;
    max-width: 20%;
}

.imgContainer {
    position: relative;
    top: 0;
    left: 0;
}

.topImg {
    cursor: pointer;
    animation: opacityUp 0.3s ease-in-out forwards;
    position: relative;
    top: 0;
    left: 0;
    opacity: 1;
}

.bottomImg {
    position: absolute;
    top: 0%;
    left: 40%;
    animation: opacityUp 1s ease-in-out forwards;
}

.topImg:hover {
    animation: opacityDown 0.3s ease-in-out forwards;
}

@keyframes opacityDown {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes opacityUp {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
