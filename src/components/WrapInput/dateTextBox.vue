<template>
    <div class="date-text-box">
        <div
            v-for="item in dateTextBox"
            :key="item.key"
            class="input-box"
            :class="{ 'different-box-class': item.isDifferentBox }"
        >
            <p v-if="item.required" class="required">必須</p>
            <h4 class="item-title">{{ item.name }}</h4>
            <div class="input-box-container">
                <div
                    v-for="item in item.values"
                    :key="item.id"
                    class="input-box-item"
                >
                    <input
                        type="text"
                        :value="item.value"
                        class="value-box content"
                        :placeholder="item.placeholder"
                    />
                    <label class="lable">{{ item.name }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dateTextBox: Array,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    display: inline;
}

.input-box-container {
    display: flex;
}
.input-box-item {
    display: flex;
    align-items: baseline;
}
.value-box {
    width: 116px !important;
}

.lable {
    margin: 0 16px 0 8px;
}
</style>
