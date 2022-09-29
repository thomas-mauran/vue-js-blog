<template>
    <div class="about">
        <ComponentImageHover
            img1="images/me.jpg"
            alt1="Cat with a hat"
            img2="images/pfp.png"
            alt2="Cat with a hat"
        />

        <h1>Salut ...</h1>
        <p>Je m'appelles Thomas et je suis développeur</p>

        <div class="faqDiv">
            <ComponentFAQ
                title="Quel âge as-tu ?"
                text="J'ai 20 ans, je me fais vieux 👴🏼 ... "
            />
            <ComponentFAQ
                title="Tu fais des études ?"
                text="Affirmatif, je suis étudiant en Dev-Ops à l'école polytechnique de montpellier 👨🏻‍💻. Je suis également en alternance dans l'entreprise Kuzzle !"
            />
            <ComponentFAQ
                title="Plutot chien 🐕 ou chat 🐈 ?"
                text="Chat ! Le voila : "
                img_src="droo.png"
                img_alt="Mon chat obèse"
            />
        </div>
    </div>
</template>

<script>
import ComponentFAQ from '@/components/ComponentFAQ.vue';
import ComponentImageHover from '@/components/ComponentImageHover.vue';
export default {
    name: 'AboutView',
    components: { ComponentFAQ, ComponentImageHover },
};
</script>

<style>
.faqDiv {
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: left;
}
</style>
