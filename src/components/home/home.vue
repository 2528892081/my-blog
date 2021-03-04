<template>
    <div>
        <blogHead />
        <blogNav />
        <blogBody />
    </div>   
</template>

<script>
import blogHead from './blogHead'
import blogBody from './blogBody'
import blogNav from './blogNav'

export default {
    name: "Home",
    components: {
        blogHead,
        blogBody,
        blogNav
    }
}
</script>

<style scoped>

</style>