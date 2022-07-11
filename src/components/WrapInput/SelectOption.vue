<template>
    <div class="select-option">
        <div
            v-for="item in selectOptions"
            :key="item.key"
            class="input-box"
            :class="{ 'different-box-class': item.isDifferentBox }"
        >
            <p v-if="item.required" class="required">必須</p>
            <p class="item-title">{{ item.title }}</p>

            <select :id="item.title" class="value-box content">
                <option value="" hidden>{{ item.placeholder }}</option>
                <option
                    class="item-title"
                    v-for="option in item.options"
                    :key="option.key"
                    :value="option.id"
                >
                    {{ option.name }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
        };
    },
    props: { selectOptions: Array },
    methods: {
        toggleList() {
            this.isShow = !this.isShow;
        },
    },
    watch: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.value-box {
    margin-bottom: 0 !important;
    height: 48px !important;
}
</style>
