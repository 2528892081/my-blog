<template>
    <div>
        <div class="nav">
            <a class="item" :class="{active: isActive}" :key="item.id" v-for="(item, index) in list"  href="item.url" @click.prevent @mouseover="isActive(index)" @mouseleave="Index = -1">{{item.value}}<i v-show="Index == index?true:false" class="bottom-bar"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "blogNav",
    data: () => {
        return {
            list: [{
                id: 1,
                value: "文章列表",
                url: "javascript:;"
            }, {
                id: 2,
                value: "相册",
                url: "javascript:;"
            },{
                id: 3,
                value: "关于我",
                url: "javascript:;"
            }],
            Index: -1
        }
    },
    methods: {
        isActive(index) {
            this.Index = index;
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #333;
}
.nav {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px 0 #999;
    background-color: #fff;
}

.item {
    display: inline-block;
    position: relative;
    height: 3rem;
    line-height: 3rem;
    font-size: 1rem;
    padding: 0 2vh;
    border: 2px solid transparent;
    font-weight: 500;
}

.bottom-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    display: inline-block;
    height: .2rem;
    width: 100%;
    background-color: #f93;
}
</style>