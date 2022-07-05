<template>
    <div class="main-form">
        <p>雇用契約について</p>
        <StepBar />
        <div class="deadline-date">
            <img class="icon-calendar" src="../assets/calendar.png" />
            <p>2021/09/01までご登録ください</p>
        </div>
        <WarningBox v-if="isShowWarning" />

        <FormPage />
        <button @click="nextStep">入社手続きの入力に進む</button>
    </div>
</template>

<script>
import EventBus from "../EventBus";

import { mapState } from "vuex";
import StepBar from "./MainForm/StepBar.vue";
import WarningBox from "./MainForm/WarningBox.vue";
import FormPage from "./MainForm/FormPage.vue";
export default {
    props: {},
    components: { StepBar, WarningBox, FormPage },
    computed: mapState(["currentStep"]),
    data() {
        return {
            errorBag: [],
            isShowWarning: false,
        };
    },
    methods: {
        nextStep: function () {
            if (this.validForm()) {
                this.$store.commit("nextStep");
                this.isShowWarning = false;
                return;
            }
            {
                console.log("have to checkbox");
                this.isShowWarning = true;
            }
        },
        validForm() {
            if (this.errorBag.length) {
                return true;
            }
            return false;
        },
        errorBagSync(e) {
            this.errorBag = e;
        },
    },
    created() {
        // Listening the event hello
        EventBus.$on("checkValidate", this.errorBagSync);
    },
    destroyed() {
        // Stop listening the event hello with handler
        EventBus.$off("checkValidate", this.errorBagSync);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-form {
    /* background: rgb(190, 189, 189); */
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
