<template>
    <div class="loading">
        <div class="loading-container">
            <img width="20" height="20" src="./loading.gif" alt="">
            <p class="desc">{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: {
                type: String,
                default: ''
            }
        }
    },
    methods: {
        setTitle(title) {
            this.title = title
        }
    }
}
</script>

<style lang="scss" scoped>
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .loading-container {
        text-align: center;
        .desc {
            font-size: $font-size-small;
            color: $color-text-l;
            line-height: 20px;
        }
    }
}
</style>
