<template>
    <div id="bloghead">
        <div id="images" class="container" @mouseenter="picEnter($event)" @mousemove="picMove($event)" @mouseleave="picLeave($event)">
                <img src="../../assets/blog_banner/1.png" alt="" :style="{filter: blur()}">
                <img src="../../assets/blog_banner/2.png" alt="">
                <img src="../../assets/blog_banner/3.png" alt="">
                <img src="../../assets/blog_banner/4.png" alt="">
                <img src="../../assets/blog_banner/5.png" alt="">
                <img src="../../assets/blog_banner/6.png" alt="">
        </div>
        <div class="content">
            <img src="../../assets/headlogo.jpg" alt="there will be a pic" class="icon">
            <span class="title">MyBlog</span>
        </div>
    </div>
</template>

<script>

export default {
    name: "blogHead",
    prop: () => {
        return {
            isOffset: true,
            mouseCenter: window.outerWidth / 2,
            mouseXStart: window.outerWidth / 2,
            mouseXNow:window.outerWidth / 2,
            blurValue: 2,
            offset: 0,
            images: []
        }
    },
    methods: {
        picEnter(e) {
            this.isOffset = !this.isOffset;
            this.mouseXStart = e.offsetX;
            this.images = document.getElementById('images').querySelectorAll('img');
            
            //console.log(this.images)
        },
        picLeave() {
            this.mouseXStart = window.outerWidth / 2;
            this.mouseXNow = window.outerWidth / 2;
            for (let item of this.images) {
                item.style.filter = "blur("+ 0 + 'px'+ ")"
                item.style.left = 0 +"px";
            }
        },
        picMove(e) {
            this.mouseXNow= e.offsetX;
            let blur = 20, offset = 50;
            let percent = Math.abs((this.mouseXNow - this.mouseXStart) / window.outerWidth) > 0.1 ? 0.1 : Math.abs((this.mouseXNow - this.mouseXStart) / window.outerWidth); 
            this.blurValue = percent * blur;  
            this.offset = offset * percent * 10; 
            for (let i = 0; i < this.images.length ; i++) {
                this.images[i].style.filter = "blur("+ this.blurValue + 'px'+ ")"
                if (i >0 && i< 5)
                this.images[i].style.left = this.offset +"px";
            }
        },
        blur() {
            console.log(this.blurValue);
            return 'blur(' + this.blurValue + 'px)'
        }
    }
}
</script>

<style scoped>
#blogHead {
    position: relative;
    display: flex;
    justify-content: center;
}

.container {
    position: relative;
    height: 150px;
    width: 100%;
    overflow: hidden;
    
}

.container > img {
    position: absolute;
    width: 100%;
    transition: .5 all;
}

.content {
    width: 350px;
    padding: 40px 0;
    top: 0;
    position: absolute;
    display: flex;
    justify-content: center;
}

.icon {
    display: inline-block;
    height: 70px;
    width: 70px;
    vertical-align: -10px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin: 0 20px;
}

.title {
    background-color: rgba(255, 255, 255, .7);
    height: 70px;
    padding: 0 20px;
    font-weight: 700;
    font-size: 30px;
    line-height: 70px;
    box-shadow: 0 0 5px 0 #999;
}


</style>