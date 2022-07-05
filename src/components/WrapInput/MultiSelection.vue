<template>
    <div class="multi-select">
        <div
            v-for="item in multiSelect"
            :key="item.key"
            class="input-box"
            :class="{ 'different-box-class': item.isDifferentBox }"
        >
            <p v-if="item.required" class="required">必須</p>
            <h4 class="item-title">{{ item.title }}</h4>
            <SearchBar
                :placeholder="item.placeholder"
                @click.native="toggleList"
                @search="getSearch"
            />
            <ListDropdown
                :selected="selected"
                @selectNewOption="updateSelectOption"
                @toggleList="toggleList"
                v-if="isShow"
                :search="search"
            />
        </div>
    </div>
</template>

<script>
import SearchBar from "./MultiSelect/SearchBar.vue";
import ListDropdown from "./MultiSelect/ListDropdown.vue";
export default {
    data() {
        return {
            selected: [],
            isShow: false,
            search: "",
        };
    },
    props: {
        multiSelect: Array,
    },
    methods: {
        updateSelectOption(e) {
            this.selected = e;
        },
        toggleList() {
            this.isShow = !this.isShow;
        },
        getSearch(e) {
            this.search = e;
        },
    },
    watch: {},
    components: { SearchBar, ListDropdown },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
