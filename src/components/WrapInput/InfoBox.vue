<template>
    <div class="info-box">
        <div
            v-for="info in infos"
            :key="info.key"
            class="input-box"
            :class="{ 'different-box-class': info.isDifferentBox }"
        >
            <h4 class="title">{{ info.title }}</h4>
            <p
                v-for="(value, index) in info.content"
                :key="index"
                class="value-box content"
            >
                {{ value.value }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoBox",
    props: {
        infos: Array,
    },
    data() {
        return {};
    },
    method: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    color: #333333;
}

.content {
    color: #333 !important;
}
</style>
