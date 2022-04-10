<template>
  <header class="header-nav">
    <div class="topbar">
      <div class="left-nav">
        <span><a href="">小米商城</a></span>
        <span class="split-line">|</span>
        <span><a href="">MIUI</a></span>
        <span class="split-line">|</span>
        <span><a href="">IoT</a></span>
        <span class="split-line">|</span>
        <span><a href="">云服务</a></span>
        <span class="split-line">|</span>
        <span><a href="">天星数科</a></span>
        <span class="split-line">|</span>
        <span><a href="">有品</a></span>
        <span class="split-line">|</span>
        <span><a href="">小爱开放平台</a></span>
        <span class="split-line">|</span>
        <span><a href="">企业团购</a></span>
        <span class="split-line">|</span>
        <span><a href="">资质证照</a></span>
        <span class="split-line">|</span>
        <span><a href="">协议规则</a></span>
        <span class="split-line">|</span>
        <span><a href="">下载app</a></span>
        <span class="split-line">|</span>
        <span><a href="">Select Location</a></span>
      </div>
      <div class="right-nav">
        <span><a href="">登录</a></span>
        <span><a href="">注册</a></span>
        <span><a href="">消息通知</a></span>
        <a class="cart">
          <i class="iconfont-cart" />
          <span>购物车（0）</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderTopbarComponentLayout',
};
</script>

<style lang="scss" scoped>
.header-nav {
  background: #333333;
}
.topbar {
  height: 40px;
  line-height: 40px;
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  color: #b0b0b0;
  font-size: 0.7rem;
}
.split-line {
  margin: 0 0.3rem;
  color: #424242;
}
.left-nav {
  a {
    color: #b0b0b0;
  }
  float: left;
}
.right-nav {
  float: right;
  & > span {
    display: inline-block;
    margin: 0 0.5rem;
  }
  a {
    color: #b0b0b0;
    &:hover {
      color: white;
    }
  }
}
.cart {
  text-align: center;
  padding: 0 1rem;
  display: inline-block;
  background: #424242;
  margin-left: 1rem;
  .iconfont-cart {
    vertical-align: -3px;
    font-size: 1.3rem;
    margin-right: .5rem;
  }
  &:hover {
    color: #ff6700!important;
    background: #fff;
  }
}
</style>
