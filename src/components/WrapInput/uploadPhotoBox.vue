<template>
    <div>
        <div v-for="item in photoBoxes" :key="item.key" class="different-box-class upload-photo-box">
            <h4>{{ item.title }}</h4>
            <p v-if="item.required" class="required">必須</p>
            <p>{{ item.description }}</p>
            <img src="">
            <div class=" import-box">
                <img src="../../assets/upload.png">
                <h5>{{ item.guide }}</h5>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "uploadPhotoBox",
    data() {
        return {

        }
    },
    props: {
        photoBoxes: Array
    },
    method: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.different-box-class {
    margin-top: 10px;
}

.upload-photo-box {
    width: 100%;
    background: #F1F2F7;
    padding-bottom: 10px;
}

.import-box {
    width: 528px;
    margin: auto;
    margin-top: 10px;
    background: #fff;
    border: 1px solid #DCDCDC;
    border-radius: 4px;
}

h4 {
    font-weight: 400;
    font-size: 1.125rem;
    margin-left: 16px;
    line-height: 42px;
}

p {
    display: inline;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 22px;
    margin: 0 16px;
    color: #666666;
}

h5 {
    white-space: pre;
    line-height: 22px;
}

.required {
    display: inline;
    background: #ED5D5D;
    color: #fff;
    margin: 17px;
    border-radius: 2px;

}
</style>
