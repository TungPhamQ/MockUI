<template>
    <form class="main-form" @submit="onSubmit">
        <section class="input-form" v-if="currentStep < 5">
            <div class="prevStep" v-if="currentStep > 1">
                <img src="../assets/ArrowLeft.png" />
                <p @click="prevStep">雇用契約に戻る</p>
            </div>
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
                <button type="submit" v-if="currentStep == 1">
                    入社手続きの入力に進む</button
                ><button
                    type="submit"
                    v-if="currentStep > 1"
                    :class="{ 'step2-button': $store.state.currentStep == 2 }"
                >
                    扶養控除申告の入力に進む
                </button>
            </div>
        </section>

        <section class="confirm-form">
            <div v-if="currentStep === 5" class="step5-container">
                <h3>入社手続きの申請ありがとうございました。</h3>
                <img src="../assets/accept.png" />
                <p>
                    申請がありがとうございました。<br />
                    入社手続きの承認をお待ちください。
                </p>
                <button @click="nextStep">申請した内容を見る</button>
            </div>

            <div v-if="currentStep === 6" class="last-step-window">
                <div class="last-step-container">
                    <h3>入社手続きの申請をします</h3>
                    <button class="x-btn" @click="toStepOne">X</button>
                    <div class="warning-box-last-step">
                        <WarningBox />
                    </div>
                    <button class="return-btn" @click="toStepOne">戻る</button>
                    <input
                        @click="submitForm"
                        type="submit"
                        class="accept-btn"
                        value="申請する"
                    />
                </div>
            </div>
        </section>
    </form>
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
        onSubmit(event) {
            event.preventDefault();
            this.nextStep();
        },
        prevStep: function () {
            this.$store.commit("prevStep");
        },
        nextStep: function () {
            if (this.validForm()) {
                this.$store.commit("nextStep");
                window.scrollTo(0, 0);
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
        toStepOne() {
            this.$store.commit("BACK_TO_STEP_ONE");
        },
        submitForm() {
            alert("THANK YOU FOR SUBMITTING");
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


<style scoped>
.prevStep {
    cursor: pointer;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    color: #666666;
}

.prevStep p {
    display: inline;
}
.step-bar {
    margin: 24px 0;
}
.main-form {
    /* background: rgb(190, 189, 189); */

    height: 100%;
}
.input-form {
    width: 560px;
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

.step2-button {
    background: #fff !important;
    border: 1px solid #b2b1ff;
    color: #b2b1ff !important;
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

.step5-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.step5-container h3 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 52px;

    margin-top: 92px;
    margin-bottom: 80px;
}

.step5-container img {
    width: 128px;
    height: 128px;
    margin-bottom: 36px;
}

.step5-container p {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 30px;
    margin-bottom: 32px;
}

.step5-container button {
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;

    padding: 12px 16px;

    color: #007bc3;

    border: 1px solid #007bc3;
    border-radius: 8px;
    background: #ffffff;
    cursor: pointer;
}
/*step 6*/
.last-step-window {
    width: 100vw;
    height: 100vh;
    background: #b8bac4;

    padding: 50px;
}

.last-step-container {
    position: relative;

    width: 608px;
    margin: auto;
    height: 276px;
    background: #fff;
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(102, 102, 102, 0.32);
    border-radius: 10px;
}
.last-step-container h3 {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 42px;

    position: absolute;
    top: 32px;
    left: 48px;
}
.warning-box-last-step {
    position: absolute;
    top: 50px;
    left: 47px;
    width: 513px;
    height: 121px;
    margin: 0;
    margin-bottom: 16px;
}

.x-btn {
    border: none;
    width: 18px;
    height: 18px;
    font-size: 26px;
    background: #fff;
    position: absolute;
    top: 19px;
    right: 38px;
    cursor: pointer;
}
.return-btn {
    width: 132px;
    height: 40px;

    background: #ffffff;
    border: 1px solid #6563ff;
    border-radius: 4px;

    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    color: #6563ff;

    position: absolute;
    bottom: 15px;
    right: 191px;
    cursor: pointer;
}

.accept-btn {
    width: 132px;
    height: 40px;

    background: #6563ff;
    border: 1px solid #6563ff;

    border-radius: 4px;

    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
    color: #ffffff;

    position: absolute;
    bottom: 15px;
    right: 47px;
    cursor: pointer;
}
</style>
