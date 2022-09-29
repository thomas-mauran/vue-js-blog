<template>
    <div class="main">
        <h1>Voila comment me contacter :</h1>

        <div class="cardGrid">
            <ComponentCard
                title="Addresse Mail"
                img="mail.png"
                img_alt="Mail logo"
                text="Vous pouvez me contacter en
    utilisant cette addresse mail : thomasmauran@yahoo.com"
            />
            <ComponentCard
                title="Profil github"
                img="github.png"
                text="Retrouvez mon profil github en cliquant sur le lien ci dessous "
                link="https://github.com/thomas-mauran"
                link_msg="Cliquez ici"
            />
            <ComponentCard
                title="Téléphone"
                img="phone.png"
                text="Mon numéro de téléphone pour me contacter rapidement"
            />
        </div>
    </div>
</template>

<script>
import ComponentCard from '@/components/ComponentCard.vue';

export default {
    name: 'ContactView',
    components: { ComponentCard },
};
</script>

<style>
.cardGrid {
    padding: 200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 15%;
    grid-row-gap: 0px;
    text-align: center;
}
</style>
