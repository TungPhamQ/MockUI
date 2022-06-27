<template>
    <div class="wrap-input">
        <InfoBox />
        <TextInputBox />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import InfoBox from './WrapInput/InfoBox.vue'
import TextInputBox from './WrapInput/TextInputBox.vue'

export default {
    name: "WrapInput",
    props: {},
    computed: mapState(["forms", "currentStep"]),
    components: { InfoBox, TextInputBox }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
