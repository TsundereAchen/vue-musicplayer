<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">Music</h1>
  </div>
</template>

<script>
export default {
  name: 'm-header'
}
</script>

<style lang="scss" scoped>
.header {
  color: $color-theme;
  text-align:center;
  height: 44px;
  .icon {
    display: inline-block;
    width: 30px;
    height: 32px;
    vertical-align: top;
    margin-top: 6px;
    margin-right: 9px;
    @include bg-image('logo');
    background-size: 30px 32px;
  }
  .text {
    display: inline-block;
    font-size: $font-size-large;
    line-height: 44px;
  }
}
</style>
