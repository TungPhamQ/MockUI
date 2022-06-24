<template>
    <div class="nav-bar">
        <img src="../assets/logo.png">
        <ul>
            <li class="under-line active">入社手続き</li>
            <li>ヘルプ</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
    width: 100vw;
    height: 64px;
    box-shadow: 0px 0px 8px rgba(102, 102, 102, 0.24);
    font-weight: 700;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 0 12px 20px;
}

ul {
    list-style: none;
    width: 100%;
}

li {
    margin-left: 10px;
    display: inline;
    color: #999999
}

.active {
    color: #000;
    position: relative;

}

.active::after {
    content: "";
    height: 4px;
    background-color: #007BC3;
    border-radius: 6px;

    display: inline-block;
    position: absolute;
    width: 100%;
    bottom: -20px;
    left: 0;
}

img {
    height: 40px;
    width: 40px;
}
</style>
