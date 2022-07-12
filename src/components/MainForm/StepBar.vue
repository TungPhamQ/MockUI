<template>
    <div>
        <div class="step-bar">
            <div class="step-icon">
                <font-awesome-icon
                    icon="fa-solid fa-check"
                    class="check-icon"
                    :class="{ done: $store.state.currentStep >= 1 }"
                />
            </div>

            <div class="step-icon">
                <font-awesome-icon
                    icon="fa-solid fa-pen"
                    class="pen-icon"
                    :class="{
                        active: $store.state.currentStep == 2,
                        done: $store.state.currentStep > 2,
                    }"
                />
            </div>

            <div class="step-icon">
                <font-awesome-icon
                    icon="fa-solid fa-check"
                    class="check-icon"
                    :class="{ done: $store.state.currentStep == 4 }"
                />
            </div>

            <div class="step-icon">
                <font-awesome-icon icon="fa-solid fa-pen" class="pen-icon" />
            </div>

            <div class="step-icon">
                <font-awesome-icon
                    icon="fa-solid fa-check"
                    class="check-icon"
                />
            </div>
        </div>
        <div class="step-bar-line" :style="{ width: barWidth + 'px' }"></div>
    </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
    name: "StepBar",
    props: {},
    data() {
        return {
            BarWidthEachStep: 130,
            backgroundStepbar: "#B2B1FF",
            colorStepbar: "#6563FF",
            isActive: true,
        };
    },
    computed: {
        barWidth() {
            if (this.$store.state.currentStep < 3) {
                return Math.round(
                    (this.$store.state.currentStep - 1) * this.BarWidthEachStep
                );
            } else
                return Math.round(
                    (this.$store.state.currentStep - 2) * this.BarWidthEachStep
                );
        },
        // mapState({"currentStep"}),
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.step-bar {
    width: 560px;
    height: 40px;
    position: relative;
    display: flex;
    justify-content: space-between;
}

.step-bar::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #dcdcdc;
    top: 50%;
    z-index: 1;
}

.step-bar-line {
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #b2b1ff;
    top: 50%;
    z-index: 2;
}

svg:not(:root).svg-inline--fa,
svg:not(:host).svg-inline--fa {
    width: 23px;
    height: 23px;
    padding: 9px;
    border-radius: 50%;

    color: #fff;
    background: #dcdcdc;
}

.step-icon {
    z-index: 101;
}

.active {
    background: #b2b1ff !important;
    color: #fff !important;
}

.done {
    background: #b2b1ff !important;
    color: #6563ff !important;
}
</style>
