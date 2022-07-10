<template>
    <div class="form-page">
        <div v-for="form in forms" :key="form.key">
            <WrapInput :form="form" />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import WrapInput from "../FormPage/WrapInput.vue";

import { form1 } from "../FormPage/form-1.js";
import { form2 } from "../FormPage/form-2.js";
import { form3 } from "../FormPage/form-3.js";
import { form4 } from "../FormPage/form-4.js";

export default {
    name: "FormPage",
    props: {},
    computed: mapState(["currentStep"]),
    components: { WrapInput },
    data() {
        return {
            forms: [form1, form2, form3, form4],
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
