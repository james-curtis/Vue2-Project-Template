<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/style/variables.scss";
@import "@/style/global.scss";
@import "@/style/scrollbar.scss";
@import "@/style/element-ui-reset.scss"; // 重设element ui的样式都写于这个scss

body {
  min-width: $body-min-width;
  min-height: $body-min-height;
}

#app {
  height: 100%;
  font-size: 14px;
  font-family: "Microsoft Yahei", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
