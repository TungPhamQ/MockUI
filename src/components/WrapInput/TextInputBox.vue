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

            <div v-for="item in textInputBox.input" :key="item.key">
                <p v-if="item.required" class="required">必須</p>
                <p class="item-title">{{ item.title }}</p>
                <p class="description" style="display: block">
                    {{ item.description }}
                </p>
                <input
                    type="text"
                    :placeholder="item.placeholder"
                    class="value-box content"
                    @input="validateThisItem(item)"
                />

                <p class="error">{{ item.error }}</p>
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
    methods: {
        validateThisItem(item) {
            if (item.required && item.value) {
                item.error.isShow = true;
                item.error.message = "invalid input";
                this.$store.commit("PUSH_TO_ERROR_BAG", item.error);
                return true;
            }
            {
                this.$store.commit("PUSH_TO_ERROR_BAG", item.error);
                item.error.isShow = false;
                item.error.message = "";
                return false;
            }
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
