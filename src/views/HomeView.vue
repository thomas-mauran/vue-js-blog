<template>
    <div class="home">
        <h1>Retrouvez ici mes derniers projets !</h1>
        <div class="cardGrid">
            <ComponentCard
                title="Crypto Tracker"
                text="Petite application pour suivre tes crypto favorites"
                img="crypto.png"
                link="/crypto-tracker"
                link_msg="Voir le projet"
            />
            <ComponentCard
                title="???"
                text="projet en cours de réalisation !"
                img="black-hole.png"
            />

            <ComponentCard
                title="???"
                text="projet en cours de réalisation !"
                img="black-hole.png"
            />
        </div>
    </div>
</template>

<script>
import ComponentCard from '@/components/ComponentCard.vue';
export default {
    name: 'HomeView',
    components: { ComponentCard },
};
</script>

<style>
.home .cardGrid {
    padding: 100px 400px 50px 400px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 400px;
    grid-row-gap: 100px;
}
</style>
