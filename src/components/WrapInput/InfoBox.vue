<template>
    <div class="info-box">
        <div
            v-for="item in infos"
            :key="item.key"
            class="input-box"
            :class="{ 'different-box-class': item.isDifferentBox }"
        >
            <h4 class="title">{{ item.title }}</h4>
            <p
                v-for="(item, index) in item.content"
                :key="index"
                class="content"
                :class="{ 'value-box': item.haveContainerBox }"
            >
                {{ item.value }}
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
