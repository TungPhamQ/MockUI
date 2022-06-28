<template>
    <div class="info-box">
        <div v-for="info in infos" :key="info.key" class="content-box"
            :class="{ 'different-box-class': info.isDifferentBox }">
            <h4>{{ info.title }}</h4>
            <p v-for="(value, index) in info.content" :key="index" class="content-value-box">{{ value.value }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: "InfoBox",
    props: {
        infos: Array
    },
    data() {
        return {
        }
    },
    method: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    color: #333333;
}

.content-box {
    width: 100%;
    background: #F1F2F7;
    padding-bottom: 10px;
}

.content-value-box {
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
    line-height: 42px;
    margin-left: 16px;
}

p {
    white-space: pre;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 22px;
    padding: 0 8px;
}

.different-box-class {
    margin-top: 10px;
}
</style>
