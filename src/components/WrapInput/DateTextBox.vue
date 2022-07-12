<template>
    <div class="date-text-box">
        <div
            v-for="item in dateTextBox"
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
                    <input
                        type="number"
                        v-model="input.value"
                        class="value-box content"
                        :class="{ errorBox: input.error.isShow }"
                        :placeholder="input.placeholder"
                        @blur="validateThisItem(input, item)"
                        :disabled="$store.state.currentStep == 4"
                    />
                    <label class="lable">{{ input.name }}</label>
                    <p v-if="input.error.isShow" class="error">
                        {{ input.error.message }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dateTextBox: Array,
    },
    methods: {
        validateThisItem(item, textInputBox) {
            if (item.required && !this.PassValidateRules(item, textInputBox)) {
                item.error.isShow = true;
                item.error.message = "invalid input";
                this.$store.commit("PUSH_TO_ERROR_BAG", item);
                return;
            } else if (
                item.required &&
                this.PassValidateRules(item, textInputBox)
            ) {
                this.$store.commit("PUSH_TO_ERROR_BAG", item);
                item.error.isShow = false;
                item.error.message = "";
            }
        },
        PassValidateRules(item, textInputBox) {
            if (
                item.value.length >= textInputBox.validateRules.min &&
                item.value.length < textInputBox.validateRules.max
            ) {
                return true;
            }
            return false;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    display: inline;
}

.input-box-container {
    display: flex;
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
