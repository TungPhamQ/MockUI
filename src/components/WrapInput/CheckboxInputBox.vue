<template>
    <div>
        <div
            class="checkbox-input-container input-box"
            v-for="item in checkBoxes"
            :key="item.key"
            :class="{ 'different-box-class': item.isDifferentBox }"
        >
            <p v-if="item.required" class="required">必須</p>
            <h4 class="title">{{ item.title }}</h4>
            <label class="checkbox-input-item value-box">
                <input
                    type="checkbox"
                    v-model="item.value"
                    @change="disableInputBelow(item.value)"
                    :required="item.required"
                    :disabled="$store.state.currentStep == 4"
                />
                {{ item.content }}
            </label>
            <!-- <p v-if="item.error.isShow" class="error">
                {{ item.error.message }}
            </p> -->
        </div>
    </div>
</template>

<script>
// import EventBus from "../../EventBus";

export default {
    name: "CheckboxInputBox",
    data() {
        return {
            errorBag: [],
        };
    },
    props: {
        checkBoxes: Array,
    },
    methods: {
        validateThisItem(item) {
            if (item.required && !item.value) {
                item.error.isShow = true;
                item.error.message = "You have to check the box";
                this.$store.commit("PUSH_TO_ERROR_BAG", item);
                return;
            } else if (item.required && item.value) {
                this.$store.commit("PUSH_TO_ERROR_BAG", item);
                item.error.isShow = false;
                item.error.message = "";
            }
        },
        disableInputBelow(value) {
            if (!value) {
                console.log("Disabling input below");
                this.$store.commit("DISABLING_INPUT");
            }
        },
    },
    watch: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checkbox-input-container {
    background: #f1f2f7;
    width: 100%;
    padding: 16px;
    position: relative;
}

.checkbox-input-item {
    display: block;
    background: #fff;
    width: 528px;
    margin: auto;
    line-height: 42px;
    border: 1px solid #dcdcdc;
}

input {
    margin: 12px;
}
</style>
