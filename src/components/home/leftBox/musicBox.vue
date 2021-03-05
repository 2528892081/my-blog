<template>
  <div id="musicBox">
    <div id="content">
      <div class="circleCD" @mouseenter="cloakShow()" @mouseleave="cloakShow()">
        <div class="cloak" v-show="isCloakShow" >
          <span class="iconfont fashion" v-if="!isListening" :class="{'pointOver': isOver}" @click="changePlayStatus()" @mouseover="isOver = !isOver" @mouseout="isOver = !isOver">&#xe653;</span>
          <span class="iconfont fashion" v-if="isListening" :class="{'pointOver': isOver}" @click="changePlayStatus()" @mouseover="isOver = !isOver" @mouseout="isOver = !isOver">&#xe619;</span>
        </div>
      </div>
      <audio id="audio" src="../../../assets/music/ruhai.mp3" loop="loop"></audio>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "musicBox",
  data: () => {
    return {
      isCloakShow: false,
      isListening: false,
      isOver: false,
      audio: ''
    }
  },
  mounted() {
    this.audio = document.getElementById("audio");
  },
  methods: {
    cloakShow() {
    //   console.log(1)
      this.isCloakShow = !this.isCloakShow;
    },
    changePlayStatus() {
        this.isListening = !this.isListening;
        if (this.isListening) {
            this.audio.play();
        } else {
             this.audio.pause();
        }
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
  display: flex;
  justify-content: center;
  align-items: center;
}


.fashion {
  display: inline-block;

  font-size: 2vw;
  line-height: 4vw;
  color: rgba(255, 153, 51, .7);
  text-align: center;
  vertical-align: center;
  cursor: default;
}


.pointOver {
    color: rgba(255, 153, 51, 1);
    cursor: pointer;
}
</style>