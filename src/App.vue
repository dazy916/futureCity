<template>
  <div id="app">
    <router-view :key="$route.path" class="mainbox" />
    <!-- 
    <van-image
      width="3.2rem"
      src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/icon-bar.png"
    /> -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="photo-o">
        <router-link to="/">全景鸟瞰</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="location-o">
        <router-link to="/location">区位交通</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="wap-home-o">
        <router-link to="/door">户型鉴赏</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="flower-o">
        <router-link to="/gardens">园林漫游</router-link>
      </van-tabbar-item>
      <!-- <van-tabbar-item icon="comment-circle-o">
        <router-link to="/copyright">版权声明</router-link>
      </van-tabbar-item> -->
    </van-tabbar>

    <!-- <div id="nav">
     
      
      
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
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
  left: 0.5rem;
  right: 0.5rem;
  z-index: 30;
  padding: 0.3rem 0.8rem;
  // background: rgba($color: #000000, $alpha: 0.3);

  .logo {
    display: inline-block;
    width: 10rem /* 500/16 */;
    height: 6.26rem /* 313/16 */;
    background-image: url("https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/futureCity/logo-white.png");
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
.van-tabbar {
  z-index: 10 !important;
  left: 1.25rem !important;
  right: 1.25rem !important;
  bottom: 1.25rem !important;
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
/deep/.van-hairline--top-bottom::after,
/deep/.van-hairline-unset--top-bottom::after {
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
