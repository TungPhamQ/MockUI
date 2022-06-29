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
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import WrapInput from "./WrapInput.vue";

export default {
    name: "FormPage",
    props: {},
    computed: mapState(["forms", "currentStep"]),
    components: { WrapInput },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-name {
    color: red;
}
</style>
