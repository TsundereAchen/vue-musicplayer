<template>
    <div class="top-list">
        这是榜单
    </div>
</template>

<script>
import { getTopList } from '../service/top-list'
export default {
    data() {
        return {
            topList: []
        }
    },
    async created() {
        const res = await getTopList()
        console.log(res)
    }
}
</script>

<style lang="scss" scoped>

</style>
