<template>
    <div class="form-page">
        <div v-for="form in forms" :key="form.key">
            <div v-if="currentStep === form.key">{{ form.name }}</div>
        </div>
        <WrapInput />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import WrapInput from './WrapInput.vue'

export default {
    name: "FormPage",
    props: {},
    computed: mapState(["forms", "currentStep"]),
    components: { WrapInput }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
