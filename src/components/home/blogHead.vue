<template>
    <div id="bloghead">
        <div id="images" class="container" @mouseenter="picEnter($event)" @mousemove="picMove($event)" @mouseleave="picLeave()">
                <img src="../../assets/blog_banner/1.png" alt="" >
                <img src="../../assets/blog_banner/2.png" alt="" >
                <img src="../../assets/blog_banner/3.png" alt="" >
                <img src="../../assets/blog_banner/4.png" alt="" >
                <img src="../../assets/blog_banner/5.png" alt="" >
                <img src="../../assets/blog_banner/6.png" alt="" >
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
            mousePos1: 0,
            mousePos2: 0,
            mouseXNow: 0,
            blur: 40,
            offset: 500,
            images: [],
            timeout:""
        }
    },
    mounted() {
        this.mousePos1 = window.outerWidth / 3;
        this.mousePos2 = window.outerWidth * 2 / 3;
        this.images = document.getElementById("images").querySelectorAll("img");
    },
    methods: {
        picEnter(e) {
            this.images[1].style.filter = "blur(" + 0 + "px)";
            this.images[3].style.filter = "blur(" + 0 + "px)";
            this.timeout = setTimeout(() => {
                for (let i = 0 ; i < this.images.length ; i++) {
                    this.images[i].style.filter = "blur(" + 2 + "px)";
                    this.images[i].style.transform = "translateX(" + 0 + "px)";
                }
                if (e.offset > this.mousePos2) {
                    this.images[4].style.filter = "blur(" + 0 + "px)";
                    this.images[5].style.filter = "blur(" + 0 + "px)";
                } else if (e.offset < this.mousePos2){
                    this.images[1].style.filter = "blur(" + 0 + "px)";
                    this.images[2].style.filter = "blur(" + 0 + "px)";
                } else {
                    this.images[3].style.filter = "blur(" + 0 + "px)";
                }
            }, 100)
        },
        picLeave() {
            for (let i = 0 ; i < this.images.length ; i++) {
                this.images[i].style.filter = "blur(" + 2 + "px)";
                this.images[i].style.transform = "translateX(" + 0 + "px)";
            }
        },
        picMove(e) {       
            clearTimeout(this.timeout);
            //console.log(e.offsetX, this.mousePos1, this.mousePos2);
            this.timeout = setTimeout(() => {
                for (let i = 0 ; i < this.images.length ; i++) {
                    this.images[i].style.filter = "blur(" + 2 + "px)";
                    this.images[i].style.transform = "translateX(" + 0 + "px)";
                }
                if (e.offsetX > this.mousePos2) {
                    let offset = 2 - ((e.offsetX - this.mousePos1) / this.mousePos1);
                    this.images[4].style.filter = "blur(" + offset + "px)";
                    this.images[5].style.filter = "blur(" + offset + "px)";
                } else {
                    let offset = 2 + ((e.offsetX - this.mousePos2) / this.mousePos2) * 2;
                    this.images[1].style.filter = "blur(" + offset + "px)";
                    this.images[2].style.filter = "blur(" + offset + "px)";
                }
            }, 5)
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
    height: 15vh;
    width: 100%;
    overflow: hidden;
    
}

.container > img {
    position: absolute;
    left: 0;
    width: 100%;
    transition: .5 all;
    filter: blur(2px);
    transform: translateX(0px);
}

.content {
    width: 30vh;
    top: 3vh;
    position: absolute;
    display: flex;
    justify-content: center;
}

.icon {
    display: inline-block;
    height: 7vh;
    width: 7vh;
    vertical-align: -10px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin: 0 2vh;
}

.title {
    background-color: rgba(255, 255, 255, .7);
    height: 7vh;
    padding: 0 2vh;
    font-weight: 700;
    font-size: 3vh;
    line-height: 7vh;
    box-shadow: 0 0 5px 0 #999;
}

</style>