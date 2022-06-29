<template>
    <div>
        <!-- <p>test text input</p> -->
        <div
            v-for="textInputBox in textInputBoxes"
            :key="textInputBox.key"
            class="text-input-box"
        >
            <h4>{{ textInputBox.title }}</h4>
            <br />
            <p>{{ textInputBox.description }}</p>
            <br />

            <div
                v-for="textInputItem in textInputBox.input"
                :key="textInputItem.key"
            >
                <p v-if="textInputItem.required" class="required">必須</p>
                <p class="input-title">{{ textInputItem.title }}</p>
                <input
                    type="text"
                    :placeholder="textInputItem.placeholder"
                    class="input-box"
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
.content-box {
    width: 528px;
    margin: auto;
    background: #fff;
    border: 1px solid #dcdcdc;
}

.required {
    display: inline;
    background: #ed5d5d;
    color: #fff;
    margin-right: 4px;
    border-radius: 2px;
}

.input-title {
    display: inline;
}

.input-box {
    display: block;
    /* background: #fff;    */
    width: 528px;
    margin: auto;
    line-height: 42px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-bottom: 24px;
}

.text-input-box {
    width: 100%;
    background: #f1f2f7;
    padding: 16px;
    margin-top: 10px;
}
</style>
