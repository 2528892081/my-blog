<template>
  <div id="leftBox">
    <musicBox/>
  </div>
</template>

<script>
import musicBox from './musicBox'

export default {
  name: "leftBox",
  data:()=> {
    return {

    }
  },
  components: {
    musicBox
  }
}
</script>
<style scoped>
#leftBox {
  position: absolute;
  left: 2vw;
  top: 3rem;
}
</style>