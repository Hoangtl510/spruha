<template>
  <div class="main">
    <Dashboard />
    <Sidebar />
    <router-view />
  </div>
</template>
<script>
	import Sidebar from '../components/side_menu';
import Dashboard from '../dashboard.vue';
export default {
	components:
  {
    Sidebar,
    Dashboard
  },
  mounted () {
    const btn = document.querySelector('.content__left-icon')
    const side_menu = document.querySelector('.side__menu')
    const dashboard_big = document.querySelector('.dashboard')
    btn.addEventListener('click', () => {
      side_menu.classList.toggle('side__small')
      dashboard_big.classList.toggle('dashboard_big')
    })
  }
}
</script>