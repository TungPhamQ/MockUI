<template>
    <div id="app">
        <NavBar v-if="currentStep < 6" />
        <MainForm></MainForm>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MainForm from "./components/MainForm.vue";
import { mapState } from "vuex";

export default {
    name: "App",
    components: {
        NavBar,
        MainForm,
    },
    computed: mapState(["currentStep"]),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap");

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Noto Sans JP", sans-serif;
}
</style>
