<template>
  <div>
    <HeaderTopbarComponentLayout />
    <HeaderNavComponentLayout />
    <router-view />
  </div>
</template>

<script>
import HeaderTopbarComponentLayout from '@/layout/components/header-topbar-component-layout';
import HeaderNavComponentLayout from '@/layout/components/header-nav-component-layout';
export default {
  name: 'PortalLayout',
  components: {
    HeaderTopbarComponentLayout,
    HeaderNavComponentLayout,
  },
};
</script>

<style lang="scss" scoped>
</style>
