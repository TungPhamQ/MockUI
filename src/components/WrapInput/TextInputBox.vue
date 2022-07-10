<template>
    <div>
        <div
            v-for="textInputBox in textInputBoxes"
            :key="textInputBox.key"
            class="input-box"
            :class="{ 'different-box-class': textInputBox.isDifferentBox }"
        >
            <h4 class="title">{{ textInputBox.title }}</h4>
            <br />
            <p class="description">{{ textInputBox.description }}</p>
            <br />

            <div
                v-for="item in textInputBox.input"
                :key="item.key"
                class="input-container"
            >
                <p v-if="item.required" class="required">必須</p>
                <p class="item-title">{{ item.title }}</p>
                <p class="description" style="display: block">
                    {{ item.description }}
                </p>
                <input
                    type="text"
                    :placeholder="item.placeholder"
                    class="value-box content"
                    :class="{ errorBox: item.error.isShow }"
                    v-model="item.value"
                    @blur="validateThisItem(item, textInputBox)"
                    :disabled="$store.state.currentStep == 4"
                />
                <p v-if="item.error.isShow" class="error">
                    {{ item.error.message }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TextInputBox",
    data() {
        return {};
    },
    props: {
        textInputBoxes: Array,
    },
    computed: {},
    methods: {
        validateThisItem(item, textInputBox) {
            if (item.required && !this.PassValidateRules(item, textInputBox)) {
                item.error.isShow = true;
                item.error.message = "invalid input";
                this.$store.commit("PUSH_TO_ERROR_BAG", item);
                return;
            }
            {
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
.input-title {
    display: inline;
}
</style>
