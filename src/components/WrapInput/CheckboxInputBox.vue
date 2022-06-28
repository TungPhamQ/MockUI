<template>
    <div>
        <div class="checkbox-input-container" v-for="checkBox in checkBoxes" :key="checkBox.key">
            <p v-if="checkBox.required" class="required">必須</p>
            <h3>{{ checkBox.title }}</h3>
            <label class="checkbox-input-item">
                <input type="checkbox" v-model="checkBox.value" />
                {{ checkBox.content }}
            </label>
        </div>
    </div>
</template>

<script>

export default {
    name: "CheckboxInputBox",
    data() {
        return {

        }
    },
    props: {
        checkBoxes: Array,
    },
    method: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.required {
    display: inline;
    background: #ED5D5D;
    color: #fff;
    margin: 17px;
    border-radius: 2px;

}

.checkbox-input-container {
    background: #F1F2F7;
    width: 100%;
}

.checkbox-input-item {
    display: block;
    background: #fff;
    width: 528px;
    margin: auto;
    line-height: 42px;
    border: 1px solid #DCDCDC;
}

input {
    margin: 12px;
}
</style>
