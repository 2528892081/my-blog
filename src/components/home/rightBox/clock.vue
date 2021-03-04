<template>
    <div id="clock">
        <div id="num">
            
            <div id="nums">
                <span id="no_1">
                    <div></div>
                    <div class="preset"></div>
                </span>
                <span id="no_2">
                    <div></div>
                    <div class="preset"></div>
                </span>
                <span id="no_3">
                    <div></div>
                    <div class="preset"></div>
                </span>
                <span id="no_4">
                    <div></div>
                    <div class="preset"></div>
                </span>
                <span id="no_5">
                    <div></div>
                    <div class="preset"></div>
                </span>

            </div>
            <!-- <div class="shadows"></div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "clock",
    data: () => {
        return {
            timer: ""
        }
    },
    created() {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            let date = new Date()
            let h = Number.parseInt(date.getHours());
            let m = Number.parseInt(date.getMinutes());
            //console.log(Math.floor(h/10),h%10,Math.floor(m/10),m%10)
            if (h < 10 ) {
                this.judgeNum(0, 'no_1');
                this.judgeNum(h, 'no_2');
            } else {
                this.judgeNum(Math.floor(h/10), 'no_1');
                this.judgeNum(h%10, 'no_2');
            }
            if (m < 10 ) {
                this.judgeNum(0, 'no_4');
                this.judgeNum(m, 'no_5');
            } else {
                this.judgeNum(Math.floor(m/10), 'no_4');
                this.judgeNum(m%10, 'no_5');
            }
            let divs = document.getElementById('no_3').querySelectorAll('div');
            if (divs[0].style.visibility === 'hidden') {
                divs[0].style.visibility = 'visible';
                divs[1].style.visibility = 'visible';
            } else {
                divs[0].style.visibility = 'hidden';
                divs[1].style.visibility = 'hidden';
            }
        },1000)
    },
    methods: {
        judgeNum(num, no){
            let divs = document.getElementById(no).querySelectorAll('div');
            divs[0].className = '';
            divs[1].className = 'preset ';
            switch (num){
                case 0:
                    divs[0].className = 'left top right';
                    divs[1].className += 'left bottom right';
                    break;
                case 1:  
                    divs[0].className = 'right';
                    divs[1].className += 'right';
                    break;
                case 2:  
                    divs[0].className = 'top right';
                    divs[1].className += 'top left bottom';
                    break;
                case 3:
                    divs[0].className = 'top right bottom';
                    divs[1].className += 'top bottom right';
                    break;
                case 4:
                    divs[0].className = 'left bottom right';
                    divs[1].className += 'top right';
                    break;
                case 5:
                    divs[0].className = 'left top bottom';
                    divs[1].className += 'top bottom right';
                    break;
                case 6:
                    divs[0].className = 'left top bottom';
                    divs[1].className += 'left top bottom right';
                    break;
                case 7:
                    divs[0].className = 'top right';
                    divs[1].className += 'right';
                    break;
                case 8:
                    divs[0].className = 'left top bottom right';
                    divs[1].className += 'left top bottom right';
                    break;
                default:
                    divs[0].className = 'left top bottom right';
                    divs[1].className += 'top bottom right';
                break;
            }
        }
    }
}
</script>

<style scoped>
#clock {
    width: 100%;
    height: 10vw;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 #999;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

#num {
    position: relative;
    width: 90%;
    height: 8vw;
    border-radius: 5px;
    background-color: #333;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}


#nums > span {
    display: inline-block;
    /* background-color: lightblue; */
}

#nums > span >div {
    width: 2.5vw;
    height: 2.5vw;
    border-radius: .3vw;
    /* background-color: lightblue; */
    margin: 0 .2vw;
    border: .3vw solid transparent;
}

#nums > #no_3 {

}

#nums > #no_3 > div {
    width: .1vw;
    height: .1vw;
    border-radius: 50%;
    margin: 1.5vw 1vw;
    background-color: #fff;
    border: .3vw solid #fff;
}

.shadows {
    position: absolute;
    width: 120%;
    height: 100%;
    box-shadow: 0 -1rem 5rem 0 #999 inset;

}

#nums > span > .preset {
    margin-top: -.3vw;
}

#nums > span >.top {
    /* border-color: transparent; */
    border-top: .3vw solid #fff;
}

#nums > span >.left {
    /* border-color: transparent; */
    border-left: .3vw solid #fff;
}

#nums > span >.right {
    /* border-color: transparent; */
    border-right: .3vw solid #fff;
}

#nums > span >.bottom {
    /* border-color: transparent; */
    border-bottom: .3vw solid #fff;
}

</style>