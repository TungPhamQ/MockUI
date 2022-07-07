<template>
    <div class="select-option">
        <div
            v-for="item in searchAndSelect"
            :key="item.key"
            class="input-box"
            :class="{ 'different-box-class': item.isDifferentBox }"
        >
            {{ item.name }}
            <div class="custom-select">
                <summary class="value-box content" @click="toggleList">
                    <!-- <input
                        type="radio"
                        :name="item.title"
                        id="default"
                        title="選択してください"
                        checked
                    /> -->
                    <SearchBar />
                    <input
                        v-for="option in item.options"
                        :key="option.key"
                        type="radio"
                        :name="item.title"
                        :id="option.name"
                        :title="option.name"
                    />
                </summary>
                <ul class="list" v-if="isShow">
                    <li>
                        <label
                            v-for="option in item.options"
                            :key="option.key"
                            :for="option.name"
                            >{{ option.name }}
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from "./SearchableOption/SearchBar.vue";
export default {
    components: { SearchBar },
    data() {
        return {
            isShow: false,
        };
    },
    props: { searchAndSelect: Array },
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
.content {
    padding: 0 !important;
}

.option {
    height: 148px;
}

body {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: sans-serif;
    padding: 5rem;
}

div {
    position: relative;
    /* margin-right: 1rem; */
}

div {
    /* z-index: 100; */
}

summary {
    padding: 1rem;
    cursor: pointer;
    border-radius: 5px;
    background-color: #ddd;
    list-style: none;
    position: relative;
}

summary::-webkit-div-marker {
    display: none;
}

div summary:before {
    content: "";
    display: block;
    height: 100vh;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
}

summary:after {
    /* content: "";
    position: absolute;
    display: inline-block;
    top: 13px;
    right: 10px;
    width: 0.5rem;
    height: 0.5rem;
    border-bottom: 1px solid currentColor;
    border-left: 1px solid currentColor;
    border-bottom-left-radius: 2px;
    transform: rotate(45deg) translate(50%, 0%);
    transform-origin: center center;
    transition: transform ease-in-out 100ms; */
}

summary:focus {
    outline: none;
}

div summary:after {
    transform: rotate(-45deg) translate(0%, 0%);
}

ul {
    width: 528px;
    background: #fff;
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    margin: 0;
    box-sizing: border-box;
    border-radius: 5px;
    max-height: 200px;
    overflow-y: auto;
    list-style-type: none;
    overflow-y: scroll;
    height: 100px;
}

li {
    margin: 0;
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;
}

li:first-child {
    padding-top: 0;
}

li:last-child {
    padding-bottom: 0;
    border-bottom: none;
}

/* FAKE SELECT */

summary.radios {
    counter-reset: radios;
}

summary.radios:before {
    content: var(--selection);
}

input[type="radio"] {
    counter-increment: radios;
    appearance: none;
    display: none;
}

input[type="radio"]:checked {
    display: inline;
    --display: block;
}

input[type="radio"]:after {
    content: attr(title);
    display: inline;
    font-size: 1rem;
}

ul.list {
    counter-reset: labels;
}

label {
    width: 100%;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    /* line-height: 42px; */
    padding: 0.5rem;
}
label:hover {
    background: rgb(167, 166, 166);
}

label span {
    --display: none;
    display: var(--display);
    width: 1rem;
    height: 1rem;
    border: 1px solid #727272;
    border-radius: 3px;
}
</style>
