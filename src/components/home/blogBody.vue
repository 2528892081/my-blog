<template>
  <div id="all">
    <div id="aticalBody">

    </div>
    <rightBox/>
  </div>
</template>

<script>
import rightBox from './rightBox/rightBox'

export default {
  name: "blogBody",
  components: {
      rightBox
  }
}
</script>

<style scoped>
#all {
    position: relative;
    width: 100%;
    height: 100rem;
    display: flex;
    justify-content: center;
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