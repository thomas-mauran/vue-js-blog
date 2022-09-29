<template>
    <h1>Welcome to my first vue app !</h1>
    <ComponentGraph />
</template>

<script>
import ComponentGraph from '@/components/ComponentGraph.vue';
export default {
    name: 'HomeView',
    components: { ComponentGraph },
};
</script>
