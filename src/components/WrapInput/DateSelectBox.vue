<template>
    <div class="date-select-box">
        <div
            v-for="dateSelectBox in dateSelectBoxes"
            :key="dateSelectBox.key"
            class="input-box"
            :class="{ 'different-box-class': dateSelectBox.isDifferentBox }"
        >
            <h4 class="item-title" v-if="dateSelectBox.title">
                {{ dateSelectBox.title }}
            </h4>
            <!-- <br /> -->
            <p class="description" v-if="dateSelectBox.description">
                {{ dateSelectBox.description }}
            </p>
            <!-- <br /> -->
            <div v-for="input in dateSelectBox.input" :key="input.key">
                <p v-if="input.required" class="required">必須</p>

                <label :for="input.title" class="item-title">{{
                    input.title
                }}</label>

                <input
                    type="date"
                    :id="input.title"
                    :name="dateSelectBox.title"
                    :class="{ errorBox: input.error.isShow }"
                    @blur="validateThisItem(input)"
                    v-model="input.value"
                    min="1900-01-01"
                    max="3000-12-31"
                    class="value-box content"
                    :disabled="$store.state.currentStep == 4"
                />
                <p v-if="input.error.isShow" class="error">
                    {{ input.error.message }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dateSelectBoxes: Array,
    },
    data() {
        return {};
    },
    methods: {
        validateThisItem(item) {
            if (item.required && !item.value) {
                item.error.isShow = true;
                item.error.message = "invalid input";
                this.$store.commit("PUSH_TO_ERROR_BAG", item);
                return;
            } else if (item.required && item.value) {
                this.$store.commit("PUSH_TO_ERROR_BAG", item);
                item.error.isShow = false;
                item.error.message = "";
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.value-box {
    width: 160px !important;
    margin-left: 0 !important;
}

.error {
}
</style>
