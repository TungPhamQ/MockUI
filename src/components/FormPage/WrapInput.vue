<template>
    <div class="wrap-input">
        <div v-for="item in form" :key="item.key">
            <div v-if="currentStep === item.key">
                <div v-for="item in form" :key="item.key">
                    <InfoBox :infos="item.infos" />
                    <UploadPhotoBox :photoBoxes="item.photoBoxes" />
                    <TextInputBox :textInputBoxes="item.textInputBoxes" />
                    <CheckboxInputBox :checkBoxes="item.checkBoxes" />
                    <RadioBox :radioBoxes="item.radioBoxes" />
                    <DateTextBox :dateTextBox="item.dateTextBox" />
                    <DateSelectBox :dateSelectBoxes="item.dateSelectBoxes" />
                    <SelectOption :selectOptions="item.selectOptions" />
                    <SearchAndSelect :searchAndSelect="item.searchAndSelect" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
import { mapState } from "vuex";

import InfoBox from "../WrapInput/InfoBox.vue";
import TextInputBox from "../WrapInput/TextInputBox.vue";
import CheckboxInputBox from "../WrapInput/CheckboxInputBox.vue";
import UploadPhotoBox from "../WrapInput/UploadPhotoBox.vue";
import RadioBox from "../WrapInput/RadioBox.vue";
import DateTextBox from "../WrapInput/DateTextBox.vue";
import DateSelectBox from "../WrapInput/DateSelectBox.vue";
import SelectOption from "../WrapInput/SelectOption.vue";
import SearchAndSelect from "../WrapInput/SearchAndSelect.vue";

export default {
    name: "WrapInput",
    computed: mapState(["currentStep"]),

    props: {
        form: null,
    },
    // computed: mapState(["forms", "currentStep"]),
    components: {
        InfoBox,
        TextInputBox,
        CheckboxInputBox,
        UploadPhotoBox,
        RadioBox,
        DateTextBox,
        DateSelectBox,
        SelectOption,
        SearchAndSelect,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
>>> .errorBox {
    box-shadow: 0 0 4px #f4b6c1;
    border: 1px solid #aa4651 !important;
}
>>> .input-container {
    position: relative;
}
>>> .error {
    color: red;
    position: absolute;
    top: 75px;
}
>>> .required {
    display: inline;
    background: #ed5d5d;
    color: #fff;
    margin-right: 4px;
    border-radius: 2px;
    margin-bottom: 8px;
    padding: 0 8px;
}
>>> .different-box-class {
    margin-top: 10px;
}

>>> .value-box {
    width: 528px;
    margin: auto;
    margin-top: 8px;
    background: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;

    display: block;
    line-height: 42px;
    margin-bottom: 24px;
}

>>> .content {
    white-space: pre;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 42px;
    padding: 0 10px;
    color: #999999;
}

>>> .description {
    color: #666;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 22px;
    display: inline;
}

>>> .title {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 42px;
    color: #333333;
}

>>> .input-box {
    width: 100%;
    background: #f1f2f7;
    padding: 16px;
    /* margin-top: 10px; */
}

>>> .item-title {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 22px;
    display: inline;
}
</style>
