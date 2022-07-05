<template>
    <div>
        <div
            class="checkbox-input-container input-box"
            v-for="checkBox in checkBoxes"
            :key="checkBox.key"
            :class="{ 'different-box-class': checkBox.isDifferentBox }"
        >
            <p v-if="checkBox.required" class="required">必須</p>
            <h4 class="title">{{ checkBox.title }}</h4>
            <label class="checkbox-input-item">
                <input
                    type="checkbox"
                    v-model="checkBox.value"
                    @input="checkValidate(checkBox.value)"
                />
                {{ checkBox.content }}
            </label>
        </div>
    </div>
</template>

<script>
import EventBus from "../../EventBus";

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
        checkValidate(value) {
            if (!value) {
                this.errorBag.push("checkBox");
                EventBus.$emit("checkValidate", this.errorBag);
            } else {
                const index = this.errorBag.indexOf("checkBox");
                this.errorBag.splice(index, 1);
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
