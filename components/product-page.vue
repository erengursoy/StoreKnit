
<template>
  <div id="app" class="slideshow-container">
    <div
      :class="[isOpenMenu ? 'show-mobile-menu' : '']"
      class="offcanvas-mobile-menu"
      
    >
      <div class="menu-content flex">
        <div class="container">
          <div class="grid grid-cols-2">
            <div v-for="(product, index) in products" class="right">
              <div class="title pt-3 text-xl">
                {{ product.productName }} {{ active }}
              </div>
              <div class="price pt-4 pb-10 text-red-700 italic">
                <h1>{{ product.productPrice }}</h1>
              </div>
              <div class="piece pb-10">
                <h1 class="text-sm pb-4">Adet</h1>
                <input
                  type="number"
                  value="1"
                  class="
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    border border-solid border-gray-300
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none
                    w-1/5
                  "
                />
              </div>
              <div class="btn">
                <a
                  class="
                    inline-block
                    py-3
                    px-32
                    text-sm
                    hover:bg-red-300 hover:text-red-100
                    bg-red-600
                    text-white
                  "
                  href=""
                  >Add to Cart</a
                >
              </div>
              <div class="detail underline pt-4">
                <a href="product-page">Detay görüntüle</a>
              </div>
            </div>
            <div v-for="(product, index) in products" class="right">
              <div class="title pt-3 text-xl">
                {{ product.productName }} {{ active }}
              </div>
              <div class="price pt-4 pb-10 text-red-700 italic">
                <h1>{{ product.productPrice }}</h1>
              </div>
              <div class="piece pb-10">
                <h1 class="text-sm pb-4">Adet</h1>
                <input
                  type="number"
                  value="1"
                  class="
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    border border-solid border-gray-300
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-blue-600
                    focus:outline-none
                    w-1/5
                  "
                />
              </div>
              <div class="btn">
                <a
                  class="
                    inline-block
                    py-3
                    px-32
                    text-sm
                    hover:bg-red-300 hover:text-red-100
                    bg-red-600
                    text-white
                  "
                  href=""
                  >Add to Cart</a
                >
              </div>
              <div class="detail underline pt-4">
                <a href="product-page">Detay görüntüle</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "#app",
  props: {
    data: { default: () => [] },
    prev: {
      default: true,
    },
    next: {
      default: true,
    },
    isOpenMenu: {
      default: true,
    },
  },
  data: function () {
    return {
      active: 0,
      direction: 1,
      isOpenMenu: true,
    };
  },
  computed: {
    total() {
      return this.data.length;
    },
  },
  methods: {
    change(index) {
      this.direction = ((index + this.total) % this.total) + 1;
      this.active = (index + this.total) % this.total;
    },
    toggle() {
      this.isOpenMenu = !this.isOpenMenu;
    },
  },
};
</script>
<style lang='scss'>
body {
  font-family: Verdana, sans-serif;
  margin: 0;
}

img {
  vertical-align: middle;
  width: 100%;
}

.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.prev,
.next a {
  text-decoration: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  color: white;
}

.slider_dots {
  display: block;
  width: 100%;
  padding: 0;
  margin-top: 10px;
  list-style: none;
  font-size: 0;
  text-align: center;
}

.slider_dots > li {
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  background-color: #bbb;
}
.slider_dots > li:hover {
  background-color: #717171;
}
.slider_dots > .active {
  background-color: #717171;
}

.slider_dots > li > button:before {
  font-size: 20px;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  content: "•";
  text-align: center;
  opacity: 0.25;
  color: black;
}

.slider_dots > li > button:hover:before,
.slider_dots > li.active > button:before {
  opacity: 1;
}
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
  background-color: white;
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