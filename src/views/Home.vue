<template>
  <div>
    <van-row
      class="bg-black"
      type="flex"
      justify="space-between"
      align="center"
    >
      <van-col>
        <div class="logo"></div>
      </van-col>
      <van-col span="12">
        
      </van-col>
    </van-row>
    <div class="home">
      <iframe
        src="https://720yun.com/t/11vkclqb7ib"
        frameborder="no"
        class="ifr"
      ></iframe>
    </div>
    <van-row  class="top">
          <van-col>
              <van-icon name="phone-circle-o" @click="show = true"/>
           <van-popup v-model="show">
              <van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" />
              <van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" />
              <van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" />
              <van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" />
           </van-popup>
          </van-col>
          <van-col>
            <!-- <a href="http://j.map.baidu.com/29/Kj8"> -->
            <a
              href="https://map.baidu.com/poi/%E5%BD%AD%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E8%90%A5%E9%94%80%E4%B8%AD%E5%BF%83/@11573795.195,3611603.14,19z?uid=efe7fe8242e04011afcb6687&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&querytype=detailConInfo&da_src=shareurl"
            >
              <van-icon name="location-o" />
            </a>
          </van-col>
        </van-row>
        
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return{
      show:false
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  // background-image: url("https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/west.jpg");
  // background-size: cover;
  // background-position: center;
}
.ifr {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
}
.close {
  z-index: 100;
  position: absolute;
  right: 2rem;
  top: 1rem;
  color: #fff;
}
</style>
