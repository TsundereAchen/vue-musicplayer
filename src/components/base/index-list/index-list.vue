<template>
    <scroll class="index-list" :probe-type='3' @scroll="onScroll">
        <ul>
            <li class="group" v-for="group in data" :key="group.title">
                <h2>{{group.title}}</h2>
                <ul>
                    <li class="item" v-for="item in group.list" :key="item.id">
                        <img v-lazy="item.pic" alt="">
                        <span class="name">{{item.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </scroll>
</template>

<script>
import Scroll from '../scroll/scroll'
export default {
    props: {
        data: []
    },
    components: {
        Scroll
    }
}
</script>

<style lang="scss" scoped>
.index-list {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .group {
        h2 {
            height: 30px;
            line-height: 30px;
            padding-left: 20px;
            font-size: $font-size-small;
            color: $color-text-l;
            background: $color-highlight-background;
        }
        .item {
            display: flex;
            align-content: center;
            padding: 20px 0 0 10px;
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            span {
                margin-left: 20px;
                line-height: 50px;
                color: $color-text-l;
                font-size: $font-size-medium;
            }
        }
    }
}
</style>
