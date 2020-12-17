<template>
  <div class="location">
    <van-swipe
      ref="swiper"
      :loop="false"
      :show-indicators="false"
      @change="onChange"
    >
      <van-swipe-item>
        <div
          class="showimg"
          style="
            background-image: url(https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/newquwei);
          "
        ></div>
        <!-- <img
          class="bottompic"
          src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/quwei.png"
          height="100%"
        /> -->
      </van-swipe-item>
      <van-swipe-item>
        <!-- <div
          class="showimg"
          style="background-image: url(https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/sz.png);"
        ></div>-->

        <!-- <img
          class="bottompic"
          src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/sz.png"
          width="100%"
        /> -->
      </van-swipe-item>
      <van-swipe-item>
        <!-- <div
          class="showimg"
          style="background-image: url(https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/jy.png);"
        ></div>-->

        <!-- <img
          class="bottompic"
          src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/jy.png"
          width="100%"
        /> -->
      </van-swipe-item>
      <van-swipe-item>
        <!-- <div
          class="showimg"
          style="background-image: url(https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/yl.png);"
        ></div>-->

        <!-- <img
          class="bottompic"
          src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/yl.png"
          width="100%"
        /> -->
      </van-swipe-item>
      <van-swipe-item>
        <!-- <div
          class="showimg"
          style="background-image: url(https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/xx.png);"
        ></div>-->
        <!-- <img
          class="bottompic"
          src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/xx.png"
          width="100%"
        /> -->
      </van-swipe-item>
    </van-swipe>
    <div class="qwnav custom-indicator" :class="{ show: showclass }">
     
      <van-grid class="subnav" icon-size="20" column-num="5" :border="false">
        <van-grid-item
          v-for="(item, index) in navList"
          :key="index"
          :text="item.name"
          :class="{ big: isIndex === index }"
          @click="onChange(index)"
        />
      </van-grid>
    </div>
    <!-- <div class="bg">
      <img
        class="bottompic"
        src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/qw.png"
        width="100%"
      />
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: 0,
      current: null,
      showclass: false,
      open: true,
      isIndex: 0,
      navList: [
        {
          icon: "flag-o",
          name: "交通配套",
        },
        {
          icon: "hotel-o",
          name: "医疗配套",
        },
        {
          icon: "user-circle-o",
          name: "教育配套",
        },
        {
          icon: "car-o",
          name: "商业配套",
        },
        {
          icon: "goods-collect-o",
          name: "休闲配套",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    onChange(index) {
      // this.$refs.swiper.swipeTo(index);
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
  .van-swipe {
    height: 100%;
    z-index: 9;
  }
}
.qwnav {
  z-index: 10;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  top: 4rem;
  // right: .6rem;
  width: 100%;
  justify-content: space-around;
  border-radius: 10rem;
  // padding: 0.2rem;
  &.show {
    height: 15rem;
    .subnav {
      flex: 1;
      display: inherit;
    }
  }
  .subnav {
    // display: none;
    color: #fff;
  }
  /deep/.van-grid-item {
    border-radius: 1.5rem;
    background-color: rgba($color: #22364a, $alpha: 0.6);
    margin: 0.25rem 0;
    padding: 0.25rem .5rem;
    border: 1px solid #ccc;
  }
  /deep/.van-grid-item__content {
    padding: 0;
    background: none;
    .van-grid-item__text {
      color: #fff;
    }
  }
  .topicon {
    font-size: 28px;
    color: #ccc;
  }
}

.activeshow {
  z-index: 9;
  position: absolute;
}
.big {
  background-color: #22364a !important;
  font-weight: bold;
  color: rgb(245, 228, 202) !important;
  /deep/.van-grid-item__text {
    color: rgb(245, 228, 202) !important;
  }
}
.showimg {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 25rem /* 400/16 */;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>