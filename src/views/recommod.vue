<template>
    <div class="recommod">
        这是推荐页面
    </div>
</template>

<script>
import { getRecommend } from '../service/recommend'
export default {
    async created() {
        const res = await getRecommend()
        console.log(res)
    }
}
</script>
