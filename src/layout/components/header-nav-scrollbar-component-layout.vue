<template>
  <div class="menu-nav">
    <div class="contain">
      <div class="product-item">
        <a href="#">
          <div>
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/02ac31f8d3848f71617e074e8e50879e.png?thumb=1&w=160&h=110&f=webp&q=90"
              alt=""
            />
          </div>
          <div class="title">Xiaomi 12 Pro</div>
          <div class="fee">4699元起</div>
        </a>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="product-item">
        <a href="#">
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/02ac31f8d3848f71617e074e8e50879e.png?thumb=1&w=160&h=110&f=webp&q=90"
            alt=""
          />
          <div class="title">Xiaomi 12 Pro</div>
          <div class="fee">4699元起</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNavScrollbarComponentLayout',
};
</script>

<style lang="scss" scoped>
.contain {
  width: 1226px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-nav {
  display: none;
  z-index: 99;
  position: absolute;
  height: 230px;
  top: 100px;
  border-top: 1px solid #e0e0e0;
  width: 100%;
  box-shadow: 0 3px 4px rgb(0 0 0 / 18%);
  .contain {
    justify-content: flex-start;
  }
  .el-divider {
    height: 7rem;
  }
}
.product-item {
  text-align: center;
  line-height: normal;
  font-size: 0.75rem;
  padding: 2.5rem 1.5rem 0 1.5rem;
  img {
    width: 160px;
    height: 110px;
    margin-bottom: 1rem;
  }
  .title {
    color: #333;
  }
  .fee {
    color: #ff6700;
  }
}
</style>
