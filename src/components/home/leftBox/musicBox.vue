<template>
  <div id="musicBox">
    <div id="content">
      <div class="circleCD">
        <div class="cloak" v-show="isCloakShow"  @mouseenter="cloakShow(true)" @mouseleave="cloakShow(false)">
          <span class="iconfont fashion" v-if="!isListening">&#xe653;</span>
          <span class="iconfont fashion" v-if="isListening">&#xe619;</span>
        </div>
      </div>
      <audio src="https://music.163.com/outchain/player?id=1449782341"></audio>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "musicBox",
  data: () => {
    return {
      isCloakShow: true,
      isListening: false
    }
  },
  methods: {
    cloakShow(status) {
      console.log(status)
      this.isCloakShow = status;
    }
  }
}
</script>

<style scoped>
#musicBox {
  height: 5vw;
  width: 20vw;
  background-color: #fff;
  box-shadow: 0 0 5px 0 #999;
  display: flex;
  justify-content: center;
  align-items: center;
}

#content {
  background-color: rgb(51, 51, 51);
  width: 19.5vw;
  height: 4vw;
  border-top: .2vw solid #999;
}

.circleCD {
  width: 6vw;
  height: 4vw;
  background: no-repeat url('../../../assets/musicPic/maobuyi.jpg');
  background-size: cover;
  background-color: #999;
  background-position-y: -1vw;
  border-right: .1vw solid #f93;
}

.cloak {
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, .5);
}


.fashion {
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 2vw;
  line-height: 4vw;
  color: rgba(255, 153, 51, .7);
  text-align: center;
  vertical-align: center;
}

</style>