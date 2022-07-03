<template>
    <div class="warning-box">
        <div>
            <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
            <h3>ご確認ください</h3>
        </div>
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
    background: #F1F2F7;

}

.svg-inline--fa,
.fa-triangle-exclamation {
    color: #B2B1FF;
    margin-left: 16px;
}

h3 {
    display: inline;
    font-weight: 700;
    font-size: 1.125rem;
}

p {
    color: #666666;
    font-weight: 400;
    font-size: 0.875rem;
    margin: 16px;
}
</style>
