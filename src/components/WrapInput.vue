<template>
    <div class="wrap-input">
        <InfoBox :infos="infos" />
        <UploadPhotoBox :photoBoxes="photoBoxes" />
        <TextInputBox :inputBoxes="inputBoxes" />
        <CheckboxInputBox :checkBoxes="checkBoxes" />

    </div>
</template>

<script>
// import { mapState } from 'vuex'
import InfoBox from './WrapInput/InfoBox.vue'
import TextInputBox from './WrapInput/TextInputBox.vue'
import CheckboxInputBox from './WrapInput/CheckboxInputBox.vue'
import UploadPhotoBox from './WrapInput/uploadPhotoBox.vue'

export default {
    name: "WrapInput",
    props: {
        infos: Array,
        checkBoxes: Array,
        photoBoxes: Array,
        inputBoxes: Array,
    },
    // computed: mapState(["forms", "currentStep"]),
    components: { InfoBox, TextInputBox, CheckboxInputBox, UploadPhotoBox }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
