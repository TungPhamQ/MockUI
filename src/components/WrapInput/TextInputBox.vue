<template>
    <div class="text-input-box">
        <p>test text input</p>
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
    props: {},
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
}
</style>
