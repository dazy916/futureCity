<template>
  <div id="app">
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
    <router-view :key="$route.path" class="mainbox" />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="photo-o">
        <router-link to="/">全景鸟瞰</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="flower-o">
        <router-link to="/gardens">园林漫游</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="location-o">
        <router-link to="/location">区位交通</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="wap-home-o">
        <router-link to="/door">户型鉴赏</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="comment-circle-o">
        <router-link to="/copyright">版权声明</router-link>
      </van-tabbar-item>
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
  background: #fffcf1;
}
.bg-black {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  right: 1.25rem;
  z-index: 30;
  padding: 0.3rem 0.8rem;
  background: rgba($color: #000000, $alpha: 0.3);

  .logo {
    display: inline-block;
    width: 10rem;
    height: 1.8rem;
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
.van-tabbar {
  z-index: 10 !important;
  left: 1.25rem!important;
  right: 1.25rem!important;
  bottom: 1.25rem !important;
  width: auto!important;
  background-color:rgba($color: #333333, $alpha: 0.3)!important;
  color: #ccc !important;
  a {
    color: #ccc;
  }
  .van-tabbar-item {
    color: #ccc;
  }
}
.van-tabbar-item--active {
  .van-tabbar-item {
    color: rgb(245, 228, 202) !important;
  }
  color: rgb(245, 228, 202) !important;
  a {
    color: rgb(245, 228, 202);
  }
}
</style>
