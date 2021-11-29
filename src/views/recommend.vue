<template>
    <div class="recommend" v-loading:[titleText]="loading">
        <scroll class="recommend-content">
            <div>
                <div class="slider-wrapper">
                    <div class="slider-content">
                        <slider v-if="sliders.length" :sliders="sliders"></slider>
                    </div>
                    </div>
                    <div class="recommend-list">
                        <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
                        <ul>
                            <li class="item" v-for="item in albums" :key="item.id" >
                                <div class="icon">
                                    <img width="60" height="60" v-lazy="item.pic">
                                </div>
                                <div class="text">
                                    <h2>{{item.username}}</h2>
                                    <p class="title">{{item.title}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </scroll>
    </div>
</template>

<script>
import { getRecommend } from '../service/recommend'
import Slider from '@/components/base/slider/slider'
import Scroll from '../components/base/scroll/scroll'
export default {
    data() {
        return {
            sliders: [],
            albums: [],
            titleText: '加载中...'
        }
    },
    components: {
        Slider,
        Scroll
    },
    computed: {
        loading() {
            return !this.sliders.length && !this.albums.length
        }
    },
    async created() {
        const res = await getRecommend()
        this.sliders = res.sliders
        this.albums = res.albums
    }
}
</script>

<style lang="scss" scoped>
.recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .recommend-content {
        height: 100%;
        overflow: hidden;
        .slider-wrapper {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 40%;
        overflow: hidden;
        .slider-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }
    .recommend-list {
        .list-title {
            height: 65px;
            line-height: 65px;
            color: #ffcd32;
            text-align: center;
        }
        .item {
            display: flex;
            align-items: center;
            padding: 0 20px 20px 20px;
            .icon {
                flex: 0 0 60px;
                width: 60px;
                padding-right: 20px;
            }
            .text {
                display: flex;
                justify-content: center;
                flex-direction: column;
                h2 {
                    color: #fff;
                    margin-bottom: 10px;
                }
                p {
                    color: hsla(0,0%,100%,.3);;
                }
            }
        }
    }
}
}
</style>
