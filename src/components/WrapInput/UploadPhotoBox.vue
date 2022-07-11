<template>
    <div>
        <div
            v-for="item in photoBoxes"
            :key="item.key"
            class="input-box"
            :class="{ 'different-box-class': item.isDifferentBox }"
        >
            <h4 class="title">{{ item.title }}</h4>
            <p v-if="item.required" class="required">必須</p>
            <p class="description">{{ item.description }}</p>
            <br />
            <img
                class="preview-img"
                v-if="item.previewImage"
                :src="url ? url : require('../../assets/photo_import.png')"
            />
            <div class="value-box">
                <input type="file" @change="onFileChange" />
                <img src="../../assets/upload.png" />
                <h5>{{ item.guide }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: null,
        };
    },
    props: {
        photoBoxes: Array,
    },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
            this.$emit("updateFile", this.url);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5 {
    white-space: pre;
    line-height: 22px;
}

.value-box {
    text-align: center;
    cursor: pointer;
    position: relative;
}

.value-box input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

.preview-img {
    width: 120px;
    height: 160px;
    margin-left: 200px;
}
</style>
