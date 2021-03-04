<template>
  <div id="all">
    <leftBox/>
    <div id="aticalBody">

    </div>
    <rightBox/>
  </div>
</template>

<script>
import rightBox from './rightBox/rightBox'
import leftBox from './leftBox/leftBox'

export default {
  name: "blogBody",
  components: {
    rightBox,
    leftBox
  }
}
</script>

<style scoped>
#all {
    position: relative;
    margin: 1px;
    width: 100%;
    height: 100rem;
    display: flex;
    justify-content: center;
    background-color: #ffe;
    z-index: -1;
}

#all > div {
    display: inline-block;
}

#aticalBody {
    width: 50vw;
    height: 100%;
    margin-top: 3rem;
    background-color: #fff;
    box-shadow: 0 0 5px 0 #999;
    border-radius: 5px;
}
</style>