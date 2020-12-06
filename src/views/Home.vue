<template>
  <div class="home">
    <iframe
      src="https://720yun.com/t/a3vkOe8bgfm"
      frameborder="no"
      class="ifr"
    ></iframe>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
<style lang="scss" scoped>
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-image: url("https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/west.jpg");
  background-size: cover;
  background-position: center;
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
