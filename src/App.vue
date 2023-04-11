<template>
  <div id="app">
    <MainLayoutVue />
    <router-view />
  </div>
</template>
<script>
import MainLayoutVue from './views/layout/MainLayout.vue';
export default {
  components: {
    MainLayoutVue
  }
}
</script>
