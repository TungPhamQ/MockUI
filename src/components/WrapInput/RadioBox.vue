<template>
    <div class="radio-box">
        <div v-for=" radioBox in radioBoxes" :key="radioBox.key">
            <p v-if="radioBox.required" class="required">必須</p>
            {{ radioBox.name }}
            <div class="radio-box-container">
                <div v-for="option in radioBox.options" :key="option.id" class="radio-box-item">
                    <input type="radio" :name="radioBox.name" :id="option.id" :value="option.value" />
                    <label :for="option.id">{{ option.value }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "RadioBox",
    props: {
        radioBoxes: Array,
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.radio-box {
    width: 100%;
    background: #F1F2F7;
    padding: 16px;
    margin-top: 10px;
}

.radio-box-container {
    display: flex;
}

.radio-box-item {
    border: 1px solid #DCDCDC;
    border-radius: 4px;
    background: #fff;
    width: 100%;
}

.required {
    display: inline;
    background: #ED5D5D;
    color: #fff;
    /* margin: 17px; */
    border-radius: 2px;
}

input {
    margin: 12px;
}
</style>
