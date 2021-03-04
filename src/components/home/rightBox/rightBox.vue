<template>
    <div id="rightBox">
        <div id="box">
            <clock />
        </div>
    </div>
</template>

<script>
import clock from './clock'

export default {
    name:"rightBox",
    data: () => {
        return {

        }
    },
    components: {
        clock
    }
}
</script>

<style scoped>
#box {
    position: absolute;
    right: 2vw;
    margin-top: 3rem;
    width: 20vw;
    height: 15vh;
}


</style>