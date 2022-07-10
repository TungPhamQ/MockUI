<template>
    <div class="date-select-box">
        <div
            v-for="dateSelectBox in dateSelectBoxes"
            :key="dateSelectBox.key"
            class="input-box"
            :class="{ 'different-box-class': dateSelectBox.isDifferentBox }"
        >
            <h4 class="item-title">{{ dateSelectBox.title }}</h4>
            <br />
            <p class="description">{{ dateSelectBox.description }}</p>
            <br />
            <div v-for="input in dateSelectBox.input" :key="input.key">
                <p v-if="input.required" class="required">必須</p>
                <label :for="input.title" class="item-title">{{
                    input.title
                }}</label>
                <input
                    type="date"
                    :id="input.title"
                    :name="dateSelectBox.title"
                    value=""
                    min="1900-01-01"
                    max="3000-12-31"
                    class="value-box content"
                    :disabled="$store.state.currentStep == 4"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dateSelectBoxes: Array,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.value-box {
    width: 160px !important;
    margin: 0 !important;
}
</style>
