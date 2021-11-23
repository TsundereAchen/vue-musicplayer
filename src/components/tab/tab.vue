<template>
    <div class="tab">
        <router-link class="tab-item" v-for="item in tabs" :key="item.path" :to="item.path">
            <div class="tab-link">{{item.name}}</div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {
                    name: '推荐',
                    path: '/recommod'
                },
                 {
                    name: '歌手',
                    path: '/singer'
                },
                 {
                    name: '排行',
                    path: '/top-list'
                },
                 {
                    name: '搜索',
                    path: '/search'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: $font-size-medium;
    .tab-item {
        flex: 1;
        text-align: center;
        padding: 0 20px;
        .tab-link {
            color: $color-text-l;
            // padding-bottom: 5px;
        }
        &.router-link-active {
            .tab-link {
                color: $color-theme;
                border-bottom: 2px solid $color-theme;
            }
        }
    }
}
</style>
