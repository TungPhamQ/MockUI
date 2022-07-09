<template>
    <div class="main-form">
        <p>雇用契約について</p>
        <StepBar class="step-bar" />
        <div class="deadline-date">
            <img class="icon-calendar" src="../assets/calendar.png" />
            <p>2021/09/01までご登録ください</p>
        </div>
        <WarningBox v-if="isShowWarning" />

        <FormPage />
        <div v-if="currentStep == 1" class="chat-info">
            <img src="../assets/chat-info-1.png" />
            <p>
                雇用契約や入社手続きについて <br />
                ご不明点はお問い合わせください
            </p>
        </div>
        <div class="btn">
            <button @click="nextStep" v-if="currentStep == 1">
                入社手続きの入力に進む</button
            ><button @click="nextStep" v-if="currentStep > 1">
                扶養控除申告の入力に進む
            </button>
        </div>
    </div>
</template>

<script>
// import EventBus from "../EventBus";

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
                console.log("have invalid input");
                this.isShowWarning = true;
            }
        },
        validForm() {
            if (this.$store.state.errorBag.length) {
                return false;
            }
            return true;
        },
    },
    // created() {
    //     // Listening the event hello
    //     EventBus.$on("checkValidate", this.errorBagSync);
    // },
    // destroyed() {
    //     // Stop listening the event hello with handler
    //     EventBus.$off("checkValidate", this.errorBagSync);
    // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.step-bar {
    margin: 24px 0;
}
.main-form {
    /* background: rgb(190, 189, 189); */
    width: 560px;
    height: 100%;
    margin: auto;
}

.deadline-date {
    position: relative;
    margin: 16px 0;
}

.deadline-date p {
    display: inline;
    position: absolute;
}

.icon-calendar {
    display: inline-block;
    margin-right: 8px;
}
.chat-info {
    margin: 16px 0;
    background: #f1f2f7;
    position: relative;
}
.chat-info img {
    margin: 21px 23px;
}
.chat-info p {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 30px;
    display: inline-block;
    position: absolute;
    top: 24px;
    left: 92px;
}
.btn button {
    width: 100%;
    background: #b2b1ff;
    border: 1px solid #b2b1ff;
    color: #fff;
    height: 48px;
    border-radius: 3px;
    margin: 16px 0;

    font-weight: 700;
    font-size: 1.125rem;
    line-height: 24px;
}
.btn button:hover {
    background: #9c9aff;
    cursor: pointer;
}
</style>
