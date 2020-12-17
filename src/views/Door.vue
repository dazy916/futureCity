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
    </van-row>
    <van-swipe
      ref="swiper"
      :loop="true"
      touchable
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
            background-image: url(https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/B1.png);
          "
        >
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
            background-image: url(https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/B2.png);
          "
        ></div>
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
            background-image: url('https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/C1.png');
          "
        >
        </div>
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        <div class="round" @click="onChange(0)"></div>
        <div class="round" @click="onChange(1)"></div>
        <div class="round" @click="onChange(2)"></div>
      </div>
     <div class="container animation-3">
        <div class="shape shape1"></div>
        <div class="shape shape2"></div>
        <div class="shape shape3"></div>
        <div class="shape shape4"></div>
      </div>
    </van-swipe>
      <div class="vr" @click="toIndex">
        VR浏览
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
    toIndex(){
      console.log(123)
     this.num = this.isIndex+1
     this.showBox = false
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
    
  }

  .van-swipe {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    overflow: visible;
    z-index: 2;
    .custom-indicator{
      position: fixed;
      top: 13%;
      left: 18%;
      width: 30rem;
      font-size: 10rem;
      display: flex;
      .round{
        width: 5.2rem;
        height: 5.2rem;
        border-radius: 50%;
        background-color: none;
        margin-right: 0;
        // background: red;
      }
    }
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
  height: 32%;
  margin-top: -0.3rem;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
.bgpic {
  position: absolute;
  width: 100%;
  height: 35%;
  top: 21.2rem;
  z-index: 1;
  // background-image: url("https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/xiaoqu");
  // background-size: cover;
  // background-position: bottom;
  // background-repeat: no-repeat;
  
}
.vr {
    position: absolute;
    top: 70%;
    left: 50%;
    z-index: 8;
    margin-left: -1.7rem;
    width: 3.4rem;
    height: 3.4rem;
    line-height: 3.4rem;
    border-radius: 50%;
    background-color: #fff;
    font-size: 0.875rem /* 14/16 */;
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
  top: 69.5%;
  left: 50%;
  z-index: 13;
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