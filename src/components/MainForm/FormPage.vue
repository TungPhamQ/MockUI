<template>
    <div class="form-page">
        <div v-for="form in forms" :key="form.key">
            <div v-if="currentStep === form.key">
                <div class="form-name">{{ form.name }}</div>
                <WrapInput
                    :infos="form.infos"
                    :checkBoxes="form.checkBoxes"
                    :photoBoxes="form.photoBoxes"
                    :textInputBoxes="form.textInputBoxes"
                    :radioBoxes="form.radioBoxes"
                    :dateTextBox="form.dateTextBox"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import WrapInput from "../FormPage/WrapInput.vue";

import { form1 } from "../FormPage/form-1.js";
import { form2 } from "../FormPage/form-2.js";
import { form3 } from "../FormPage/form-3.js";

export default {
    name: "FormPage",
    props: {},
    computed: mapState(["currentStep"]),
    components: { WrapInput },
    data() {
        return {
            forms: [form1, form2, form3],
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-name {
    /* testing */
    color: red;
}
</style>
