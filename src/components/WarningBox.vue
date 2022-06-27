<template>
    <div class="warning-box">
        <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
        <h3>ご確認ください</h3>
        <p>表示されている内容を確認いただき、認識に相違が無ければ同意するにチェックをしてください。</p>
    </div>
</template>

<script>
export default {
    name: 'WarningBox',
    props: {
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warning-box {
    border: 1px solid #000;
}
</style>
