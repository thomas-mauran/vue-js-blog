<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
    <ComponentFooter />
</template>

<script>
import ComponentFooter from './components/ComponentFooter.vue';
import AOS from 'aos';

export default {
    name: 'App',
    components: { ComponentFooter },
    mounted() {
        AOS.init();
    },
};
</script>

<style>
* {
    padding: 0px;
    margin: 0px;
}
p {
    font-size: 1.1em;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    padding: 0px 30px 0px 30px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
