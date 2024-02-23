<template>
  <van-nav-bar title="中国近代史" left-text="返回" left-arrow @click-left="onClickLeft"/>
  <div class="detail">
    <h2 class="cell-item-title">1/30 单选题</h2>
    <div style="margin-bottom: 10px;"><span>下列说法不正确的是 （）</span></div>
    <van-space direction="vertical" fill>
      <van-cell-group inset>
        <van-cell class="cell-item"	title="A 数据流。。。。。。。。。。。。。。。。。。。" style="background: #4acb5e; color: white">
          <template #right-icon>
            <van-icon name="success" size="30"/>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group inset>
        <van-cell class="cell-item" title="B 数据流。。。。。。。。。" style="background: #ec4a4a; color: white">
          <template #right-icon>
            <van-icon name="cross" size="30"/>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group inset>
        <van-cell class="cell-item" title="C 数据流。。。。。。。。。"></van-cell>
      </van-cell-group>
      <van-cell-group inset>
        <van-cell class="cell-item" title="D 数据流。。。。。。。。。"></van-cell>
      </van-cell-group>
    </van-space>
  </div>
</template>

<script setup>
const onClickLeft = () => history.back();

</script>

<style scoped>
.detail {
  margin: 0;
  padding-left: 30px;
  padding-right: 30px;

  .cell-item {
    background-color: #efefef;
    height: 60px;
    word-break: break-all;
    line-break:anywhere;
    text-align:left;
    align-items: center;
  }

}
</style>