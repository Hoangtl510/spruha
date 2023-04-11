<template>
  <div class="side__menu">
    <div class="side__menu-header">
      <div class="menu__header">
        <img class="menu__header-logo" src="@/assets/logo-light.png" alt="logo_menu">
        <img class="menu__header-icon" src="@/assets/icon-light.png" alt="icon">
      </div>
    </div>
    <div class="side__menu-main">
      <div class="menu__main-nav">
        <div v-for="(itemMenu, indexMenu) in Menu" :key="indexMenu" class="main__nav">
          <div class="nav__header dashboard">
            <span class="nav__header-label">{{ itemMenu.title }}</span>
          </div>
          <div
            v-for="(itemNav, indexNav) in itemMenu.menuNav"
            :key="indexNav"
            class="nav__item"
            @click="myClick(itemNav)"
          >
            <a href="#" class="nav__item-link">
              <i :class="['first__icon','fas', 'far', itemNav.icon]" />
              <span class="nav__header-label">{{ itemNav.label }}</span>
              <i :class="['down__menu','fas', itemNav.icon_down]" />
              <ul class="nav__list-drop" :class="{show: currentMenu === itemNav.key}">
                <li
                  v-for="(itemDrop, indexDrop) in itemNav.drop_dashboard"
                  :key="indexDrop"
                  class="nav__item-drop"
                >
                  <a href="#" class="item__drop-link">
                    <i :class="['item__drop-icon', 'fas', itemDrop.icon]" />
                    <span class="item__drop-label">{{ itemDrop.label }}</span>
                  </a>
                </li>
              </ul>
            </a>
          </div>
        </div>
        <li class="nav__header forms_charts">
          <span class="nav__header-label">Forms & Charts</span>
        </li>
        <li v-for="(item, index) in menu_forms_charts" :key="index" class="nav__item">
          <a href="#" class="nav__item-link">
            <i :class="['first__icon','fas', item.icon]" />
            <span class="nav__header-label">{{ item.label }}</span>
            <span :class="['nav__header-badge', item.badge]">{{ item.number }}</span>
          </a>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      responsiveSM: false,
      currentMenu: '',
      Menu: [
        {
          title: 'DASHBOARD',
          menuNav: [
            {
              label: 'Dashboard',
              icon: 'fa-house'
            },
            {
              label: 'Crypto Currency',
              icon: 'fa-wallet',
              icon_down: 'fa-angle-down',
              key: 'Crypto',
              drop_dashboard: [
                {
                  icon: 'fa-angle-right',
                  label: 'Dashboard'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Marketcap'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Currency exchange'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Buy & Sell'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Wallet'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Transcations'
                },
              ]
            },
            {
              label: 'ECommerce',
              icon: 'fa-cart-shopping',
              icon_down: 'fa-angle-down',
              key: 'ECommerce',
              drop_dashboard: [
                {
                  icon: 'fa-angle-right',
                  label: 'Dashboard'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Products'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Products Details'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Cart'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Wishlist'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Checkout'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Orders'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Add Product'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Account'
                },
              ]
            },
          ]
        },
        {
          title: 'LANGDING',
          menuNav: [
            {
              label: 'LandingPage',
              icon: 'fa-book',
              key: 'LandingPage',
            }
          ]
        },
        {
          title: 'APPLICATIONS',
          menuNav: [
            {
              label: 'Apps',
              icon: 'fa-file',
              icon_down: 'fa-angle-down',
              key: 'Apps',
              drop_dashboard: [
                {
                  icon: 'fa-angle-right',
                  label: 'Widgets'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Mail'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Maps'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Tables'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Blog'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'File Manager'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Icons'
                }
              ]
            }
          ]
        },
        {
          title: 'COMPONENTS',
          menuNav: [
            {
              label: 'Elements',
              icon: 'fa-box',
              icon_down: 'fa-angle-down',
              key: 'Elements',
              drop_dashboard: [
                {
                  icon: 'fa-angle-right',
                  label: 'Accordion'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Alerts'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Avatar'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Breadcrumbs'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Buttons'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Badge'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Dropdown'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Thumbnails'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'List Group'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Navigation'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Pagination'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Popover'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Progress'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Media Object'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Typography'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Tooltip'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Toast'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Tags'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Tabs'
                },
              ]
            },
            {
              label: 'Advance',
              icon: 'fa-briefcase',
              icon_down: 'fa-angle-down',
              key: 'AdvancedUI',
              drop_dashboard: [
                {
                  icon: 'fa-angle-right',
                  label: 'Carousel'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Collapse'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Chat'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Cards'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Calendar'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Contacts'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Modals'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Timeline'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Darggable-Cards'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Sweet Alert'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Ratings'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Search'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Userlist'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Notification'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Tree-view'
                }
              ]
            },
          ]
        },
        {
          title: 'OTHER PAGES',
          menuNav: [
            {
            label: 'Pages',
            icon: 'fa-palette',
            icon_down: 'fa-angle-down',
            key: 'Pages',
            drop_dashboard: [
                {
                  icon: 'fa-angle-right',
                  label: 'Profile'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'About Us'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Settings'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Invoice'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Pricing'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Gallery'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Notifications List'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Faqs'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Success Message'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Danger Message'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Warning Message'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Empty Page'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Switcher Page'
                }
              ]
            },
            {
              label: 'Utilities',
              icon: 'fa-shield',
              icon_down: 'fa-angle-down',
              key: 'Utilities',
              drop_dashboard: [
                {
                  icon: 'fa-angle-right',
                  label: 'Background'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Border'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Display'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Flex'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Height'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Margin'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Padding'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Position'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Width'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Extras'
                }
              ]
            },
            {
              label: 'Submenu',
              icon: 'fa-bars',
              icon_down: 'fa-angle-down',
              key: 'Submenu',
              drop_dashboard: [
                {
                  icon: 'fa-angle-right',
                  label: 'Submenu-01'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Submenu-02'
                }
              ]
            },
            {
              label: 'Authentication',
              icon: 'fa-lock',
              icon_down: 'fa-angle-down',
              key: 'Authentication',
              drop_dashboard: [
                {
                  icon: 'fa-angle-right',
                  label: 'Sign In'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Sign Up'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Forgot Password'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Reset Password'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'Lockscreen'
                },
                {
                  icon: 'fa-angle-right',
                  label: 'UnderConstruction'
                },
                {
                  icon: 'fa-angle-right',
                  label: '404 Error'
                },
                {
                  icon: 'fa-angle-right',
                  label: '500 Error'
                }
              ]
            },
          ]
        },
      ],
      menu_forms_charts: [
        {
          label: 'Pages',
          icon: 'fa-receipt',
          icon_down: 'fa-angle-down',
          badge: 'blue',
          number: 7
        },
        {
          label: 'Charts',
          icon: 'fa-chart-simple',
          icon_down: 'fa-angle-down',
          badge: 'red',
          number: 5
        },
      ],
    }
  },
  methods: {
    myClick (itemNav) {
      this.currentMenu = itemNav.key
    }
  }
}
</script>
