<template>
  <div id="musicBox">
    <div id="content">
      <div class="circleCD" @mouseenter="cloakShow()" @mouseleave="cloakShow()">
        <div class="cloak" v-show="isCloakShow" >
          <span class="iconfont fashion" v-if="!isListening" :class="{'pointOver': isOver}" @click="changePlayStatus()" @mouseover="isOver = !isOver" @mouseout="isOver = !isOver">&#xe653;</span>
          <span class="iconfont fashion" v-if="isListening" :class="{'pointOver': isOver}" @click="changePlayStatus()" @mouseover="isOver = !isOver" @mouseout="isOver = !isOver">&#xe619;</span>
        </div>
      </div>
      <div class="words">
          <p>{{this.doc1}}</p>
          <p class="middle-p">{{this.doc2}}</p>
          <p>{{this.doc3}}</p>
      </div>
      <audio id="audio" src="../../../assets/music/ruhai.mp3" loop="loop"></audio>
      
    </div>
  </div>
</template>

<script>
/*换成  大改！！！
  已知播放的时间，依据时间判断放哪句歌词就好了
*/
export default {
  name: "musicBox",
  data: () => {
    return {
      isCloakShow: false,
      isListening: false,
      isOver: false,
      audio: '',
      obj: {
        "title": "《入海》",
        "author": "毛不易",
        "txt": [
        "00:00.00=入海 - 毛不易",
        "00:03.68=词：马晓波",
        "00:04.54=曲：赵兆",
        "00:04.63=编曲：宋涛/赵兆",
        "00:04.86=出品：bilibili",
        "00:04.97=制作人：赵兆",
        "00:05.13=钢琴：赵兆",
        "00:05.26=吉他：薛峰",
        "00:05.39=贝斯：韩阳",
        "00:05.52=鼓：武勇恒",
        "00:05.66=小提琴：李朋",
        "00:05.82=大提琴：张平",
        "00:05.98=弦乐：国际首席爱乐乐团",
        "00:06.90=合唱团：悦伴歌声合唱团",
        "00:07.23=录音师：邢铜/李杨/王小四/妙妙",
        "00:07.73=混音：李游",
        "00:07.86=母带：李游",
        "00:08.34=录音棚：55TEC/金田录音棚/A8录音棚",
        "00:16.93=还有说不完的话",
        "00:20.58=风催着我们出发",
        "00:24.13=把笑和泪都留下",
        "00:27.58=留在这一年的夏",
        "00:31.68=对于未来的想法",
        "00:35.22=有太多疑问没有回答",
        "00:38.96=关于面包和理想",
        "00:41.70=还有平凡和伟大",
        "00:47.54=那就这样出发",
        "00:50.53=再见吧 和我一样匆忙的人啊",
        "00:56.48=你们的歌声",
        "00:58.42=在遥远的路上轻轻回响",
        "01:08.08=时间会回答成长",
        "01:10.76=成长会回答梦想",
        "01:15.01=梦想会回答生活",
        "01:18.76=生活回答你我的模样",
        "01:22.85=海洋会回答江湖",
        "01:25.70=江湖会回答河流",
        "01:30.27=河流会回答浪潮",
        "01:33.84=一起跃入人海",
        "01:37.65=做一朵奔涌的浪花",
        "02:09.71=还有说不完的话",
        "02:13.21=风催着我们出发",
        "02:16.86=那个平凡的背影",
        "02:20.29=去远方还是故乡",
        "02:24.29=迎着明天的风沙",
        "02:27.70=有太多孤单无人回响",
        "02:31.35=你是否和我一样",
        "02:34.11=带着倔强不投降",
        "02:39.16=那就这样出发",
        "02:42.66=再见吧 和我一样匆忙的人啊",
        "02:48.09=你们的歌声",
        "02:50.07=在深夜的梦里轻轻回响",
        "02:55.68=时间会回答成长",
        "02:58.31=成长会回答梦想",
        "03:02.80=梦想会回答生活",
        "03:06.20=生活回答你我的模样",
        "03:10.26=海洋会回答江湖",
        "03:13.12=江湖会回答河流",
        "03:17.57=河流会回答浪潮",
        "03:21.10=一起跃入人海",
        "03:24.64=做一朵奔涌的浪花",
        "03:56.65=时间会回答成长",
        "03:59.23=成长会回答梦想",
        "04:03.74=梦想会回答生活",
        "04:07.36=生活回答你我的模样",
        "04:11.16=海洋会回答江湖",
        "04:14.04=江湖会回答河流",
        "04:18.40=河流会回答浪潮",
        "04:22.01=一起跃入人海",
        "04:25.47=做一朵奔涌的浪花",
        "04:28.19=时间会回答成长",
        "04:30.70=成长会回答梦想",
        "04:35.00=梦想会回答生活",
        "04:38.75=生活回答你我的模样",
        "04:42.56=海洋会回答江湖",
        "04:45.38=江湖会回答河流",
        "04:49.81=河流会回答浪潮",
        "04:53.25=一起跃入人海",
        "04:56.77=做一朵奔涌的浪花",
        "05:02.86=让我们跃入人海",
        "05:06.87=做一朵奔涌的浪花",
        "05:22.60=还有说不完的话",
        "05:25.99=我们现在就要出发",
        "05:29.56=有些问题",
        "05:33.05=还不需要回答",
        "05:37.78=唱着这首歌",
        "05:39.90=向着海的方向"
        ]
      },
      timeout: '',
      doc1: '',
      doc2: '',
      doc3: ''
    }
  },
  mounted() {
    this.audio = document.getElementById("audio");
    this.handleWords();
  },
  methods: {
    cloakShow() {
      this.isCloakShow = !this.isCloakShow;
    },
    findRowWord(time) {
      let timer = this.word.timer;
      let flg;
      for (let i = 0 ; i < timer.length ; i++) {
        if (timer[i] > time) {
          flg = i - 1;
          break;
        }
      }
      return flg;
    },

    changePlayStatus() {
      this.isListening = !this.isListening;
      if (this.isListening) {
        this.audio.play();
        
        this.timeout = setInterval(() => {
          let ct = this.audio.currentTime;
          let index = this.findRowWord(ct);
          if (index === 0) {
            this.doc1 = '';
            this.doc2 = '';
            this.doc3 = '';
          } else {
            this.doc1 = this.word.text[index - 1];
            this.doc2 = this.word.text[index];
            this.doc3 = this.word.text[index + 1];
          }
          // console.log(this.doc1);
          // console.log(this.doc2);
          // console.log(this.doc3);
        }, 100)
      } else {
        this.audio.pause();
        clearInterval(this.timeout);
      }
    },
    handleWords() {
      this.word = {
        title: this.obj.title,
        author: this.obj.author,
        timer: [],
        text: []
      }
      let txt = this.obj.txt;
      for (let i = 0 ; i < txt.length ; i++) {
        let data = this.obj.txt[i].split("=");
        let time = data[0].split(":");
        let mm = Number.parseInt(time[0]), ss = Number.parseInt(time[1] * 100) / 100;
        this.word.timer.push(mm * 60 + ss);
        this.word.text.push(data[1]);
      }
      console.log(this.word);
      //this.playMusic(this.word.text, this.word.timer, 0);
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
  position: relative;
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

.words {
  width: 13.5vw;
  height: 4vh;
  position: absolute;
  right: 0;
  bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #ddd;
  font-size: 12px;
}

.middle-p {
    color: #fff;
    font-size: 14px;
    margin: .8rem 0 ;
}
</style>