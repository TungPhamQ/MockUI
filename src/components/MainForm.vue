<template>
    <div class="main-form">
        <p>雇用契約について</p>
        <StepBar />
        <div class="deadline-date">
            <img class="icon-calendar" src="../assets/calendar.png" />
            <p>2021/09/01までご登録ください</p>
        </div>
        <WarningBox />

        <FormPage />
        <button @click="$store.commit('nextStep')">+step</button>
    </div>
</template>

<script>
import { mapState } from "vuex";
import StepBar from "./MainForm/StepBar.vue";
import WarningBox from "./MainForm/WarningBox.vue";
import FormPage from "./MainForm/FormPage.vue";
export default {
    props: {},
    components: { StepBar, WarningBox, FormPage },
    computed: mapState(["currentStep"]),
    method: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-form {
    background: rgb(190, 189, 189);
    width: 560px;
    height: 100%;
    margin: auto;
}

.deadline-date {
    position: relative;
}

.deadline-date p {
    display: inline;
    position: absolute;
}

.icon-calendar {
    display: inline-block;
    margin-right: 8px;
}
</style>
