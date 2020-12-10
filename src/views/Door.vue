<template>
  <div class="location">
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
        <van-row type="flex" justify="end" class="top" gutter="20">
          <van-col>
            <a href="tel:028-62577777">
              <van-icon name="phone-circle-o" />
            </a>
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
      </van-col>
    </van-row>
    <van-swipe
      ref="swiper"
      :loop="false"
      :show-indicators="false"
      @change="onChange"
    >
      <van-swipe-item @click="(num = 1), (showBox = false)">
        <div
          class="toppic"
          style="
            background-image: url(https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/B1.jpg);
          "
        ></div>
        <div
          class="bottompic"
          style="
            background-image: url(https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/A1.png);
          "
        >
          <!-- <img
            class="bottompic"
            src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/A1.png"
            width="100%"
          />-->
        </div>
      </van-swipe-item>
      <van-swipe-item @click="(num = 2), (showBox = false)">
        <div
          class="toppic"
          style="
            background-image: url(https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/B2.jpg);
          "
        ></div>
        <div
          class="bottompic"
          style="
            background-image: url(https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/A2.png);
          "
        ></div>
        <!-- <img
          class="bottompic"
          src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/A2.png"
          width="100%"
        />-->
      </van-swipe-item>
      <van-swipe-item @click="(num = 3), (showBox = false)">
        <div
          class="toppic"
          style="
            background-image: url(https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/C1.jpg);
          "
        ></div>
        <div
          class="bottompic"
          style="
            background-image: url('https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/C1.png');
          "
        >
          <!-- <img
            class="bottompic"
            src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/C1.png"
            width="100%"
          />-->
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- <div class="qwnav custom-indicator" :class="{ show: showclass }">
      
      <van-grid class="subnav" icon-size="20" :border="false">
        <van-grid-item
          v-for="(item, index) in navList"
          :key="index"
          :icon="item.icon"
          :text="item.name"
          :class="{ big: isIndex === index }"
          @click="onChange(index)"
        />
      </van-grid>
    </div> -->
    <div class="bgpic"></div>
    <van-icon
      name="clear"
      class="close"
      size="40"
      @click="(showBox = true), (num = 0)"
      v-if="showBox === false"
    />
    <iframe
      src="https://720yun.com/t/b8vkcl1e0r9"
      frameborder="no"
      class="ifr"
      v-if="num === 1"
    ></iframe>
    <iframe
      src="https://720yun.com/t/devksb7hppl"
      frameborder="no"
      class="ifr"
      v-if="num === 2"
    ></iframe>
    <iframe
      src="https://720yun.com/t/01vkOe8h719"
      frameborder="no"
      class="ifr"
      v-if="num === 3"
    ></iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: 0,
      showBox: true,
      current: null,
      showclass: true,
      open: false,
      isIndex: 0,
      num: 0,
      navList: [
        {
          icon: "flag-o",
          name: "B1户型",
        },
        {
          icon: "home-o",
          name: "B2户型",
        },
        {
          icon: "user-circle-o",
          name: "C1户型",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    onChange(index) {
      this.$refs.swiper.swipeTo(index);
      this.isIndex = index;
    },
    showAll() {
      this.showclass = true;
      this.open = false;
    },
    closeAll() {
      this.showclass = false;
      this.open = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.location {
  // background-color: #333;
  position: relative;
  overflow: hidden;
  top: 0;
  height: 100vh;
  .bg-black {
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    right: 1.25rem;
    z-index: 8;
    padding: 0.3rem 0.8rem;
    // background: rgba($color: #000000, $alpha: 0.3);

    .logo {
      display: inline-block;
      width: 10rem;
      height: 2.8rem;
      background-image: url("https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/futrueLogo.png");
      background-size: contain;
      background-repeat: no-repeat;
    }
    .top {
      color: rgb(245, 228, 202);
      font-size: 1.6rem;
      a {
        color: rgb(245, 228, 202);
      }
    }
  }

  .van-swipe {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    overflow: visible;
    z-index: 2;
    .van-swipe-item {
      .toppic {
        display: inline-block;
        background-size: cover;
        background-position: bottom;
        background-repeat: no-repeat;
        width: 100% /* 750/16 */;
        height: 19.2rem /* 600/16 */;
        margin-top: 2rem;
      }
    }
  }
}

.activeshow {
  z-index: 9;
  position: absolute;
}
.big {
  font-weight: bold;
  color: rgb(245, 228, 202) !important;
  /deep/.van-grid-item__text {
    color: rgb(245, 228, 202) !important;
  }
}
.bottompic {
  display: inline-block;
  width: 100%;
  height: 30%;
  margin-top: -0.3rem;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
.bgpic {
  position: absolute;
  width: 100%;
  height: 30%;
  top: 21.2rem;
  z-index: 1;
  background-image: url("https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/huxing.jpg");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
.ifr {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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