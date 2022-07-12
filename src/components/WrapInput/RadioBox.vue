<template>
    <div>
        <div
            v-for="radioBox in radioBoxes"
            :key="radioBox.key"
            class="input-box"
            :class="{ 'different-box-class': radioBox.isDifferentBox }"
        >
            <p v-if="radioBox.required" class="required">必須</p>
            {{ radioBox.name }}
            <div class="radio-box-container">
                <div
                    v-for="option in radioBox.options"
                    :key="option.id"
                    class="radio-box-item value-box"
                >
                    <input
                        type="radio"
                        :name="radioBox.name"
                        :id="option.id"
                        :value="option.value"
                        :disabled="$store.state.currentStep == 4"
                    />
                    <label :for="option.id">{{ option.value }}</label>
                </div>
                <p v-if="radioBox.error.isShow" class="error">
                    {{ radioBox.error.message }}
                </p>
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
    methods: {
        validateThisItem(item) {
            if (item.required && !item.value) {
                console.log("not ok");
                item.error.isShow = true;
                item.error.message = "invalid input";
                this.$store.commit("PUSH_TO_ERROR_BAG", item);
                return;
            } else if (item.required && item.value) {
                console.log("ok");

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
.radio-box-container {
    display: flex;
}

.radio-box-item {
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: #fff;
    width: 100%;
    text-align: center;
}

input {
    margin: 12px;
}
</style>
