<template>
<div> <div class="header bg-white">
    <div class="mobil-menu block lg:hidden py-6">
      <div class="container">
        <div class="grid grid-cols-2">
          <div class="social-media flex mt-2 ml-4">
            <div class="facebook mr-2">
              <a href="">
                <img src="~assets/image/icons8-facebook-f-24.png" alt="" />
              </a>
            </div>
            <div class="instagram">
              <a href="">
                <img src="~assets/image/icons8-instagram-24.png" alt="" />
              </a>
            </div>
          </div>
          <button @click="toggle" class="text-black px-4 py-2 flex justify-end">
            <!-- 		Button icon gamburger		 -->
            <svg
              :class="[isOpenMenu ? 'hidden' : 'block', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <!-- 		Button icon cross		 -->
            <svg
              :class="[isOpenMenu ? 'block' : 'hidden', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        :class="[isOpenMenu ? 'show-mobile-menu' : '']"
        class="offcanvas-mobile-menu"
      >
        <div @click="toggle" class="mobile-menu-overlay"></div>
        <div class="inner">
          <div class="mobile-header">
            <button
              @click="toggle"
              class="mobile-close-btn text-black"
            ></button>
          </div>
          <div class="menu-content">
            <div class="mobile-navigation">
              <nav class="offcanvas-navigation">
                <ul>
                  <li class="text-center"><a href="/index">Anasayfa</a></li>
                  <li class="text-center">
                    <a href="/all-products">Tüm Ürünler</a>
                  </li>
                  <li class="text-center"><a href="/about">Hakkımızda</a></li>
                  <li class="text-center"><a href="/contact">İletişim</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="logo mt-5">
        <h1 class="text-center italic text-4xl text-red-700">StoreKnit</h1>
      </div>
    </div>
    <div class="menu hidden lg:block">
      <div class="container mx-auto">
        <div class="grid grid-cols-3">
          <div class="logo mt-5 col-start-2 float-right">
            <h1 class="text-center italic text-5xl text-red-700">StoreKnit</h1>
          </div>
          <div class="social-media flex justify-end mt-8">
            <div class="facebook mr-2">
              <a href="">
                <img src="~assets/image/icons8-facebook-f-24.png" alt="" />
              </a>
            </div>
            <div class="instagram">
              <a href="">
                <img src="~assets/image/icons8-instagram-24.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="menu-item">
        <ul class="flex justify-center mt-12 mb-8">
          <li class="mr-24"><a href="/index">Anasayfa</a></li>
          <li class="mr-24"><a href="/all-products">Tüm Ürünler</a></li>
          <li class="mr-24"><a href="/about">Hakkımızda</a></li>
          <li><a href="/contact">İletişim</a></li>
        </ul>
      </div>
    </div>
  </div></div>
 
</template>
<script>
export default {
  data() {
    return {
      isOpenMenu: false,
    };
  },
  methods: {
    toggle() {
      this.isOpenMenu = !this.isOpenMenu;
    },
  },
};
</script>
<style lang="scss">
.top-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 85px;
  background-color: #00225a;
  padding: 0 15px 0 30px;
}

.show-mobile-menu.offcanvas-mobile-menu {
  opacity: 1;
  visibility: visible;
}
.offcanvas-mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  z-index: 99999;
}
.offcanvas-mobile-menu .inner .mobile-header {
  align-items: center;
  display: flex;
  justify-content: end;
  height: 85px;

  padding: 0 15px 0 30px;
}
.offcanvas-mobile-menu .inner .mobile-header .logo {
  width: 155px;
}
.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn:after,
.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn:before {
  position: absolute;
  top: 19px;
  left: 8px;
  content: "";
  width: 24px;
  height: 3px;
  background: #fff;
  transform-origin: 50% 50%;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.offcanvas-mobile-menu .mobile-menu-overlay {
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
}
.show-mobile-menu.offcanvas-mobile-menu .inner {
  transform: none;
}

.offcanvas-mobile-menu .inner {
  position: absolute;
  width: 100%;

  height: 100%;
  right: 0;
  top: 0;
  text-align: left;
  transition: all 0.3s;
  transform: translateX(100%);
  cursor: default;
  background-color: #fff;
  z-index: 1;
}
.menu-content {
  min-height: 360px;
  margin: 30px;
  max-height: 400px;
  overflow-y: auto;
}
.offcanvas-navigation ul li a {
  color: #212529;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 0;
  display: block;
}

.offcanvas-mobile-menu .mobile-menu-overlay {
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
}
.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn {
  cursor: pointer;
  border: none;

  width: 40px;
  flex-shrink: 0;
  position: relative;
  background-color: transparent;
}

.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn:after,
.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn:before {
  position: absolute;
  top: 8px;
  left: 8px;
  content: "";
  width: 24px;
  height: 3px;
  background: rgb(0, 0, 0);
  transform-origin: 50% 50%;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn:before {
  transform: rotate(-45deg);
}

.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn:after {
  transform: rotate(45deg);
}
</style>