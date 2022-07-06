<template>
    <div class="select-option">
        <div
            v-for="item in selectAndSearch"
            :key="item.key"
            class="input-box"
            :class="{ 'different-box-class': item.isDifferentBox }"
        >
            <p v-if="item.required" class="required">必須</p>
            <h4 class="title">{{ item.title }}</h4>
            <SeachBar />
            <SelectOption :selectOptions="item.options" />
        </div>
    </div>
</template>

<script>
import SeachBar from "./SearchableOption/SeachBar.vue";
import SelectOption from "./SelectOption.vue";
export default {
    data() {
        return {};
    },
    props: { selectAndSearch: Array },
    methods: {},
    watch: {},
    components: { SeachBar, SelectOption },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    display: inline;
}
</style>
