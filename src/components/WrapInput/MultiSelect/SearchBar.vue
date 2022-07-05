<template>
    <div class="search-bar">
        <input
            type="text"
            v-model="search"
            :placeholder="placeholder"
            class="search-input"
        />
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    data() {
        return {
            search: "",
        };
    },
    props: {
        placeholder: String,
    },
    watch: {
        search() {
            this.$emit("search", this.search);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-input {
    padding: 0px;
    width: 100%;
    height: 48px;
    border: 1px solid #999;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding-left: 10px;
}
.search-input:focus {
    /* border: 1px solid #007bc3; */
    /* box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32); */
    border-radius: 4px;
    outline: none;
}
input::after {
    clip-path: polygon(100% 40%, 0 40%, 52% 100%);
}
</style>