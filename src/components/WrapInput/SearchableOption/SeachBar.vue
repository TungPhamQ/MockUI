<template>
    <div class="search-box">
        <input
            type="text"
            v-model="search"
            placeholder="フリーワードで検索できます"
            class="search-input"
        />
    </div>
</template>

<script>
export default {
    data() {
        return { search: "" };
    },
    props: {},
    methods: {},
    watch: {
        search() {
            this.$emit("search", this.search);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-box {
    padding: 0px;
    width: 100%;
    height: 48px;
    border: 1px solid #999;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding-left: 10px;
    background: #fff;
    position: relative;
}
.search-box:before {
    content: url(../../../assets/search.png);
    position: absolute;
    top: 12px;
    left: 13px;
}

.search-box:focus {
    border-radius: 4px;
    outline: none;
}

.search-input {
    border: none;
    height: 100%;
    width: 93%;
    float: right;
}
</style>
