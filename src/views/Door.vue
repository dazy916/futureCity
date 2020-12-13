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
      <!-- <van-col span="12">
        <van-row type="flex" justify="end" class="top" gutter="20">
          <van-col>
            <a href="tel:028-62577777">
              <van-icon name="phone-circle-o" />
            </a>
          </van-col>
          <van-col>
            
            <a
              href="https://map.baidu.com/poi/%E5%BD%AD%E5%B7%9E%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E8%90%A5%E9%94%80%E4%B8%AD%E5%BF%83/@11573795.195,3611603.14,19z?uid=efe7fe8242e04011afcb6687&ugc_type=3&ugc_ver=1&device_ratio=1&compat=1&querytype=detailConInfo&da_src=shareurl"
            >
              <van-icon name="location-o" />
            </a>
          </van-col>
        </van-row>
      </van-col> -->
    </van-row>
    <van-swipe
      ref="swiper"
      :loop="false"
      :show-indicators="false"
      @change="onChange"
    >
      <van-swipe-item>
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
      <van-swipe-item>
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
      <van-swipe-item>
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
    <div class="bgpic">
      <div class="container animation-3">
        <div class="shape shape1"></div>
        <div class="shape shape2"></div>
        <div class="shape shape3"></div>
        <div class="shape shape4"></div>
      </div>
      <div class="vr" @click="(num = isIndex + 1), (showBox = false)">
        VR浏览{{ num }}
      </div>
    </div>

    <van-icon
      name="clear"
      class="close"
      size="40"
      @click="(showBox = true), (num = null)"
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
      num: null,
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
    top: 1rem;
    left: 0.5rem;
    right: 0.5rem;
    z-index: 8;
    padding: 0.3rem 0.8rem;
    // background: rgba($color: #000000, $alpha: 0.3);

    .logo {
      display: inline-block;
      width: 10rem;
      height: 3.8rem;
      background-image: url("https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/logo.png");
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
        height: 18.5rem /* 600/16 */;
        margin-top: 2.8rem;
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
  .vr {
    position: absolute;
    top: 92%;
    left: 50%;
    z-index: 13;
    margin-left: -1.7rem;
    width: 3.4rem;
    height: 3.4rem;
    line-height: 3.4rem;
    border-radius: 50%;
    background-color: #fff;
    font-size: 0.875rem /* 14/16 */;
  }
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
@keyframes animation3shape1 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(5px, 5px);
  }
}
@keyframes animation3shape2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-5px, 5px);
  }
}
@keyframes animation3shape3 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(5px, -5px);
  }
}
@keyframes animation3shape4 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-5px, -5px);
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.container {
  margin-left: -2rem;
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 90%;
  left: 50%;
  z-index: 12;
  animation: rotation 1s infinite;
  .shape {
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    border: 0.1rem solid #ffb74d;
    border-radius: 50%;
  }
  .shape1 {
    left: 0;
    // border-color: #5c6bc0;
    border-top-left-radius: 10px;
    animation: animation3shape1 0.5s ease 0s infinite alternate;
  }
  .shape.shape2 {
    right: 0;
    // border-color: #8bc34a;
    border-top-right-radius: 10px;
    animation: animation3shape2 0.5s ease 0s infinite alternate;
  }
  .shape.shape3 {
    bottom: 0;
    // border-color: #ffb74d;
    border-bottom-left-radius: 10px;
    animation: animation3shape3 0.5s ease 0s infinite alternate;
  }

  .shape4 {
    bottom: 0;
    right: 0;
    // border-color: #f44336;
    border-bottom-right-radius: 10px;
    animation: animation3shape4 0.5s ease 0s infinite alternate;
  }
}
</style>