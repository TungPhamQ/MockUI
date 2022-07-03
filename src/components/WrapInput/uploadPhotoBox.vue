<template>
    <div>
        <div
            v-for="item in photoBoxes"
            :key="item.key"
            class="different-box-class input-box"
        >
            <h4 class="title">{{ item.title }}</h4>
            <p v-if="item.required" class="required">必須</p>
            <p class="description">{{ item.description }}</p>
            <img src="" />
            <div class="value-box">
                <img src="../../assets/upload.png" />
                <h5>{{ item.guide }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "uploadPhotoBox",
    data() {
        return {};
    },
    props: {
        photoBoxes: Array,
    },
    method: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5 {
    white-space: pre;
    line-height: 22px;
}
</style>
