<template>
  <van-nav-bar title="中国近代史" left-text="返回" left-arrow @click-left="onClickLeft"/>
  <van-tabs v-model:active="active">
    <van-tab title="章节练习">
      <div class="books-list">
        <div class="left-nav">
          <van-sidebar class="sidebar0" v-model="sidebarActive">
            <van-sidebar-item v-for="index in 24" :title="'第'+index+'章 鸦片战争'">
            </van-sidebar-item>
          </van-sidebar>
        </div>
        <div class="books-body">
          <van-list>
            <div class="books-body-item">
              <h2 class="cell-item-title">章节名称</h2>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容" value="0/30"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
            </div>
            <div class="books-body-item">
              <h2 class="cell-item-title">章节名称2</h2>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
            </div>
            <div class="books-body-item">
              <h2 class="cell-item-title">章节名称</h2>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
            </div>
            <div class="books-body-item">
              <h2 class="cell-item-title">章节名称</h2>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
            </div>
            <div class="books-body-item">
              <h2 class="cell-item-title">章节名称</h2>
              <van-cell-group class="cell-item" inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
              <van-cell-group inset>
                <van-cell class="cell-item" title="章节名称内容"></van-cell>
              </van-cell-group>
            </div>
          </van-list>
        </div>
      </div>
    </van-tab>
    <van-tab title="真题练习">
      <van-cell-group>
        <van-cell v-for="index in 8" :title="'考试真题'+ index " value="0/30"></van-cell>
      </van-cell-group>
    </van-tab>
    <van-tab title="考前模拟"> <van-cell-group>
      <van-cell v-for="index in 8" :title="'考前模拟'+ index " value="0/30"></van-cell>
    </van-cell-group></van-tab>
  </van-tabs>
</template>

<script setup>
import {ref} from 'vue';

const onClickLeft = () => history.back();
const active = ref(0);
const sidebarActive = ref(0);
</script>

<style scoped>
.books-list {
  display: flex;
  justify-content: space-between;

  .left-nav {
    width: 30%;
    height: calc(100vh - 100px);
    overflow: scroll;

    .sidebar0 {
      --van-sidebar-width: 95%;
    }
  }

  .books-body {
    width: 70%;
    background-color: #f7f8fa;
    height: calc(100vh - 100px);
    overflow: scroll;

    .books-body-item {
      .cell-item-title {
        margin: 0;
        padding: 32px 16px 16px;
        color: #969799;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
      }
    }

  }
}
</style>