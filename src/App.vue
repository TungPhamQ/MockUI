<template>
    <div id="app">
        <NavBar />
        <MainForm></MainForm>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MainForm from "./components/MainForm.vue";

export default {
    name: "App",
    components: {
        NavBar,
        MainForm,
    },
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
