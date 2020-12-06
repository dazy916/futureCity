<template>
  <div class="door">
    <template v-if='showBox'>
      <van-row gutter="20" style="margin-top:10rem">
        <van-col span="8">
          <van-button type="info" @click="num=1, showBox=false">户型一</van-button></van-col>
        <van-col span="8">
          <van-button type="info" @click="num=2, showBox=false">户型二</van-button></van-col>
        <van-col span="8">
          <van-button type="info" @click="num=3, showBox=false">户型三</van-button></van-col>
      </van-row>
    </template>
    <van-icon name="clear" class="close" @click="showBox=true, num=0" v-if='showBox===false'/>
    <iframe src="https://720yun.com/t/c4vkshp7r8b" frameborder="no" class="ifr" v-if='num===1'></iframe>
    <iframe src="https://720yun.com/t/10vksh2mdpb" frameborder="no" class="ifr" v-if='num===2'></iframe>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return{
      num:0,
      showBox:true
    }
  }
})
</script>
<style lang="scss" scoped>
.ifr {
  z-index: 99;
  width: 100%;
  height: 100%;
}
.close{
  z-index: 100;
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: #fff;
}
</style>
