import { createApp } from 'vue'
import loading from './loading'

const loadingDirective = {
    mounted(el, binding) {
        const app = createApp(loading)
        const instance = app.mount(document.createElement('div'))
        el.instance = instance
        // 如果指令为true
        if (binding.value) {
            append(el)
        }
    },
    updated(el, binding) {
        // 组件更新后，判断值是否改变
        if (binding.value !== binding.oldValue) {
            binding.value ? append(el) : remove(el)
        }
    }
}

function append(el) {
    // loading组件对应的dom结构
    el.appendChild(el.instance.$el)
}

function remove(el) {
    el.removeChild(el.instance.$el)
}

export default loadingDirective
