<template>
    <div class="number-input-box">
        <div
            v-for="item in numberInputBox"
            :key="item.key"
            class="input-box"
            :class="{ 'different-box-class': item.isDifferentBox }"
        >
            <p v-if="item.required" class="required">必須</p>
            <h4 class="item-title">{{ item.name }}</h4>
            <div class="input-box-container">
                <div
                    v-for="input in item.values"
                    :key="input.id"
                    class="input-box-item"
                >
                    {{ input.value }}
                    <input
                        type="number"
                        v-model="input.value"
                        class="value-box content"
                        :placeholder="input.placeholder"
                        :disabled="$store.state.currentStep == 4"
                    />
                    <label class="lable">{{ input.name }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        numberInputBox: Array,
    },
    methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-zip-code-button {
    background: #b2b1ff;
    width: 116px;
    height: 32px;
    color: #fff;
    border: 1px solid #b2b1ff;
    border-radius: 4px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
}
.title {
    display: inline;
}

.input-box-container {
    display: flex;
    align-items: baseline;
}
.input-box-item {
    display: flex;
    align-items: baseline;
}
.value-box {
    width: 116px !important;
}

.lable {
    margin: 0 16px 0 8px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}
</style>
