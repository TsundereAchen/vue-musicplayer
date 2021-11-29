<template>
    <div ref="rootRef">
        <slot></slot>
    </div>
</template>

<script>
import { ref } from 'vue'
import useScroll from './use-scroll'
export default {
    props: {
        probeType: {
            type: Number,
            default: 0
        }
    },
    // 定义自定义事件
    emits: ['scroll'],
    setup(props, { emits }) {
        const rootRef = ref(null)
        const scroll = useScroll(rootRef, props, { emits })
        return {
            rootRef,
            scroll
        }
    }
}
</script>
