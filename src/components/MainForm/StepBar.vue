<template>
    <div class="step-bar">
        <!-- <img src="../assets/check.png"> -->

        <div class="step-icon">
            <font-awesome-icon icon="fa-solid fa-check" class="check-icon" />
        </div>

        <div class="step-icon">
            <font-awesome-icon icon="fa-solid fa-pen" class="pen-icon" />
        </div>

        <div class="step-icon">
            <font-awesome-icon icon="fa-solid fa-check" class="check-icon" />
        </div>

        <div class="step-icon">
            <font-awesome-icon icon="fa-solid fa-pen" class="pen-icon" />
        </div>

        <div class="step-icon">
            <font-awesome-icon icon="fa-solid fa-check" class="check-icon" />
        </div>
    </div>
</template>

<script>
export default {
    name: "StepBar",
    props: {},
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

svg:not(:root).svg-inline--fa,
svg:not(:host).svg-inline--fa {
    width: 23px;
    height: 23px;
    padding: 9px;
    background: #b2b1ff;
    border-radius: 50%;
    color: #6563ff;
}

.step-icon {
    z-index: 101;
}

.pen-icon {
}
</style>
