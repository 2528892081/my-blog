<template>
    <div>
        <blogHead />
        <blogBody />
    </div>   
</template>

<script>
import blogHead from './blogHead'
import blogBody from './blogBody'

export default {
    name: "Home",
    components: {
        blogHead,
        blogBody
    }
}
</script>

<style scoped>

</style>