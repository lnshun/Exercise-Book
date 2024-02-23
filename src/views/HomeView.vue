<template>
<div>
  <div>
    <van-grid :border="false" :column-num="3" :gutter="2" :icon-size="100">
      <van-grid-item v-for="value in 24" :key="value" icon="https://img2.baidu.com/it/u=2046124054,1526938081&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=751" text="练习册"/>
    </van-grid>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>

</style>