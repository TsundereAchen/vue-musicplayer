<template>
    <div class="singer" v-loading="!singers.length">
        <index-list :data="singers"></index-list>
    </div>
</template>

<script>
import { getSingerList } from '../service/singer'
import IndexList from '../components/base/index-list/index-list'

export default {
    data() {
        return {
            singers: []
        }
    },
    components: {
        IndexList
    },
    async created() {
        const res = await getSingerList()
        this.singers = res.singers
    }
}
</script>

<style lang="scss" scoped>
.singer {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
}
</style>
