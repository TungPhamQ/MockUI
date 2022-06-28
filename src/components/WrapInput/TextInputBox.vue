<template>
    <div>
        <!-- <p>test text input</p> -->
        <div v-for="inputBox in inputBoxes" :key="inputBox.key" class="text-input-box">
            <h4>{{ inputBox.title }}</h4>
            <br>
            <p>{{ inputBox.description }}</p>
            <br>

            <div v-for="inputItem in inputBox.input" :key="inputItem.key">
                <p v-if="inputItem.required" class="required">必須</p>
                <p class="input-title">{{ inputItem.title }}</p>
                <input type="text" :placeholder="inputItem.placeholder" class="input-box">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "TextInputBox",
    data() {
        return {
            input: [
                {
                    title: '',
                    key: '',
                    value: '',
                    required: true,
                    placeholder: '',
                }
            ]
        }
    },
    props: {
        inputBoxes: Array
    },
    method: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-box {
    width: 528px;
    margin: auto;
    background: #fff;
    border: 1px solid #DCDCDC
}

.required {
    display: inline;
    background: #ED5D5D;
    color: #fff;
    margin-right: 4px;
    border-radius: 2px;
}

.input-title {
    display: inline
}

.input-box {
    display: block;
    /* background: #fff;    */
    width: 528px;
    margin: auto;
    line-height: 42px;
    border: 1px solid #DCDCDC;
    border-radius: 4px;
    margin-bottom: 24px;

}

.text-input-box {
    width: 100%;
    background: #F1F2F7;
    padding: 16px;
    margin-top: 10px;
}
</style>
