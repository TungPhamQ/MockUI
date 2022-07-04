<template>
    <div class="wrap-input">
        {{ form }}
        <div v-for="(item, index) in form" :key="index">
            <!-- <InfoBox :infos="infos" v-if="name === 'infos'" />
            <UploadPhotoBox
                :photoBoxes="photoBoxes"
                v-if="name === 'photoBoxes'"
            />
            <TextInputBox
                :textInputBoxes="textInputBoxes"
                v-if="name === 'textInputBoxes'"
            />
            <CheckboxInputBox
                :checkBoxes="checkBoxes"
                v-if="name === 'checkBoxes'"
            />
            <RadioBox :radioBoxes="radioBoxes" v-if="name === 'radioBoxes'" />
            <DateTextBox
                :dateTextBox="dateTextBox"
                v-if="name === 'dateTextBox'"
            /> -->
            <InfoBox :infos="infos" />
            <UploadPhotoBox :photoBoxes="photoBoxes" />
            <TextInputBox :textInputBoxes="textInputBoxes" />
            <CheckboxInputBox :checkBoxes="checkBoxes" />
            <RadioBox :radioBoxes="radioBoxes" />
            <DateTextBox :dateTextBox="dateTextBox" />
        </div>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
import InfoBox from "../WrapInput/InfoBox.vue";
import TextInputBox from "../WrapInput/TextInputBox.vue";
import CheckboxInputBox from "../WrapInput/CheckboxInputBox.vue";
import UploadPhotoBox from "../WrapInput/UploadPhotoBox.vue";
import RadioBox from "../WrapInput/RadioBox.vue";
import DateTextBox from "../WrapInput/dateTextBox.vue";

export default {
    name: "WrapInput",
    props: {
        infos: Array,
        checkBoxes: Array,
        photoBoxes: Array,
        textInputBoxes: Array,
        radioBoxes: Array,
        dateTextBox: Array,
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
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
>>> .required {
    display: inline;
    background: #ed5d5d;
    color: #fff;
    margin-right: 4px;
    border-radius: 2px;
}
>>> .different-box-class {
    margin-top: 10px;
}

>>> .value-box {
    width: 528px;
    margin: auto;
    margin-top: 10px;
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
