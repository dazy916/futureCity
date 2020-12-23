<template>
  <div id="app">
    <router-view :key="$route.path" class="mainbox" />
    <!-- 
    <van-image
      width="3.2rem"
      src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/icon-bar.png"
    /> -->
    <van-tabbar v-model="active" @change="onChange" route="true">
      <van-tabbar-item replace to="/" icon="photo-o">
        全景鸟瞰
      </van-tabbar-item>
      <!-- <van-tabbar-item replace to="/location" icon="location-o">
        区位交通
      </van-tabbar-item> -->
      <van-tabbar-item replace to="/door" icon="wap-home-o">
        户型鉴赏
      </van-tabbar-item>
      <van-tabbar-item replace to="/gardens" icon="flower-o">
        园林漫游
      </van-tabbar-item>
      <van-tabbar-item replace to="/copyright" icon="comment-circle-o">
        免责条款
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onChange(index) {
      this.active = index;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.mainbox {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  // background: #fffcf1;
}
.bg-black {
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  right: 0.5rem;
  z-index: 30;
  padding: 0.3rem 0.8rem;
  // background: rgba($color: #000000, $alpha: 0.3);

  .logo {
    display: inline-block;
    width: 8rem /* 500/16 */;
    height: 6.26rem /* 313/16 */;
    background-image: url("https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/logo-white.png");
    background-size: contain;
    background-repeat: no-repeat;
    // box-shadow: 0px 0px 0.5rem #22364a;
  }
}
.top {
  position: absolute;
  bottom: 5rem;
  right: 1rem;
  width: 2rem;
  z-index: 13;
  color: #ffffff;
  font-size: 2rem;
  i {
    display: inline-block;
    margin-top: 2rem;
    color: #ffffff;
  }
}
.van-tabbar {
  z-index: 10 !important;
  left: 1rem !important;
  right: 1rem !important;
  bottom: 1rem !important;
  width: auto !important;
  border-radius: 1.5rem;
  background-color: rgba($color: #22364a, $alpha: 0.4) !important;
  color: #fff !important;
  box-shadow: 0px 0px 0.5rem #22364a;
  a {
    color: #fff;
  }
  .van-tabbar-item {
    color: #fff;
  }
}
.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: 0 !important;
}
.van-tabbar-item--active {
  border-radius: 1.5rem;
  .van-tabbar-item {
    color: rgb(245, 228, 202) !important;
  }
  background-color: #22364a !important;
  color: rgb(245, 228, 202) !important;
  a {
    color: rgb(245, 228, 202);
  }
}
</style>
