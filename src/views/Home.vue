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
      <van-col span="12"> </van-col>
    </van-row>
    <div class="home">
      <iframe
        src="https://720yun.com/t/11vkclqb7ib"
        frameborder="no"
        class="ifr"
      ></iframe>
    </div>
    <van-row class="top">
      <van-col>
        <van-icon name="phone-circle-o" @click="show = true" />
        <van-popup v-model="show" :style="{ maxHeight: '40%', width: '60%' }">
          <van-contact-card
            type="edit"
            :name="item.name"
            :tel="item.tel"
            @click="call(item.tel)"
            v-for="(item, index) in person"
            :key="index"
          />
        </van-popup>
      </van-col>
      <van-col>
        <van-icon name="location-o" @click="map = true" />
      </van-col>
    </van-row>
    <van-popup
      v-model="map"
      position="bottom"
      round
      :style="{ height: '10%', paddingTop: '3rem' }"
    >
      <van-row gutter="20">
        <van-col span="12"
          ><van-button
            color="#1989fa"
            plain
            type="primary"
            url="https://ditu.amap.com/search?id=B0G0K7T9HI&city=510129&geoobj=106.550592%7C29.57641%7C106.566062%7C29.583712&query_type=IDQ&query=%E4%BA%94%E7%9F%BF%E8%A5%BF%E6%B9%96%E6%9C%AA%E6%9D%A5%E5%9F%8E%E6%8E%A5%E5%BE%85%E4%B8%AD%E5%BF%83(%E5%BB%BA%E8%AE%BE%E4%B8%AD)&zoom=17"
            >高德地图</van-button
          >
        </van-col>
        <van-col span="12">
          <van-button
            color="#1989fa"
            plain
            type="primary"
            url="https://map.baidu.com/poi/%E4%BA%94%E7%9F%BF%E6%9C%AA%E6%9D%A5%E5%9F%8E/@11551602.49,3547751.075,19z?uid=7332093ccc8d7ae142d63ea8&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&querytype=detailConInfo&da_src=shareurl"
            >百度地图</van-button
          ></van-col
        >
      </van-row>
    </van-popup>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      show: false,
      map: false,
      person: [
        {
          name: "王嘉",
          tel: "13550179089",
        },
      ],
    };
  },
  methods: {
    call(val) {
      console.log(val);
      window.location.href = "tel:" + val;
    },
  },
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
