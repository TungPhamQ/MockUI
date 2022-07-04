<template>
    <div>
        <!-- <p>test text input</p> -->
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
                v-for="textInputItem in textInputBox.input"
                :key="textInputItem.key"
            >
                <p v-if="textInputItem.required" class="required">必須</p>
                <p class="item-title">{{ textInputItem.title }}</p>
                <input
                    type="text"
                    :placeholder="textInputItem.placeholder"
                    class="value-box content"
                />
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
    method: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-title {
    display: inline;
}
</style>
