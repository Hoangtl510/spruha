<template>
  <div class="header">
    <div class="header__content container_center">
      <div class="header__content-left">
        <div class="content__left-icon">
          <i class="fa-solid fa-bars" />
        </div>
      </div>
      <div class="header__content-center">
        <div class="responsive__logo">
          <a href="#">
            <img src="assest/img/logo.png" alt="img_logo">
          </a>
        </div>
        <div class="content__center-input">
          <div class="input__select">
            <select name="Choose one">
              <option value="Choose one" selected="" class="select__first">
                Choose one
              </option>
              <option v-for="(itemSelect, indexSelect) in Select" :key="indexSelect" :value="itemSelect.text">
                {{ itemSelect.text }}
              </option>
            </select>
          </div>
          <input type="search" class="input__search" placeholder="Search for anything...">
          <button class="input__btn-search">
            <i class="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
      <div class="header__content-right">
        <div class="content__right-navbar">
          <div class="navbar__collapse" :class="{'show__menu-nav': isShowNav}">
            <a href="#" class="collapse__layout">
              <span class="layout__light">
                <i class="fa-regular fa-moon" />
              </span>
            </a>
            <a href="#" class="collapse__layout">
              <span class="layout__light">
                <img src="assest/img/English-icon.png" alt="img">
              </span>
            </a>
            <a href="#" class="collapse__layout">
              <span class="layout__light">
                <i class="fa-solid fa-expand" />
              </span>
            </a>
            <a href="#" class="collapse__layout">
              <span class="layout__light">
                <i class="fa-regular fa-bell" />
              </span>
            </a>
            <a href="#" class="collapse__layout">
              <span class="layout__light">
                <i class="fa-regular fa-message" />
              </span>
            </a>
            <a href="#" class="collapse__layout-user">
              <span class="layout__light img__user">
                <img src="assest/img/1.jpg" alt="img">
              </span>
            </a>
            <a href="#" class="collapse__layout">
              <span class="layout__light">
                <i class="fa-solid fa-bars" />
              </span>
            </a>
          </div>
          <div class="nav__collapse-setting">
            <button class="collapse__layout navbar__toggeler" @click="showHeaderNavbar">
              <i class="fa-solid fa-ellipsis-vertical" />
            </button>
            <a href="#" class="collapse__layout setting">
              <span class="layout__light">
                <i class="fa-solid fa-gear" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	data (){
		return {
      isShowNav: false,
			Select: [
				{
					text: 'IT Project'
				},
				{
					text: 'Business Case'
				},
				{
					text: 'Microsoft Project'
				},
				{
					text: 'Risk Management'
				},
				{
					text: 'Team Building '
				},
			]
		}
	},
  methods: {
    showHeaderNavbar () {
			this.isShowNav = !this.isShowNav
		}
  }

}
</script>