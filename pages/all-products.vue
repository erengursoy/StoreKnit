<template>
  <div>
    <div :class="[isOpenPage ? 'hidden' : '']" id="all-products">
      <div class="header">
        <header-template></header-template>
      </div>

      <div class="title text-center pt-20 pb-10 text-4xl font-bold">
        <h1>TÜM ÜRÜNLER</h1>
      </div>

      <div class="container mx-auto">
        <div class="grid grid-rows-1">
          <div class="grid grid-cols-1 lg:grid-cols-5">
            <div class="left col-span-1 pt-5 pl-16">
              <div class="filter pl-14 md:pl-0">
                <div class="title text-2xl block pb-4">
                  <h1>Filtreleme Kriteri:</h1>
                </div>
                <hr class="w-44" />
                <a
                  class="cursor-pointer block py-4"
                  v-on:click="showCollection = !showCollection"
                  >Koleksiyon
                  <span
                    class="float-right text-xl font-bold mr-28 lg:mr-3 pb-1"
                    v-if="!showCollection"
                    >+</span
                  >
                  <span
                    class="float-right text-xl font-bold mr-28 lg:mr-3"
                    v-if="showCollection"
                    >-</span
                  ></a
                >

                <hr class="w-44" />
                <div v-show="showCollection">
                  <div class="">
                    <ul class="text-sm">
                      <li class="font-bold"><a href="">lorem ipsum</a></li>
                      <li class="text-gray-600 hover:text-gray-400">
                        <a href="">lorem ipsum</a>
                      </li>
                      <li class="text-gray-600 hover:text-gray-400">
                        <a href="">lorem ipsum</a>
                      </li>
                      <li class="text-gray-600 hover:text-gray-400">
                        <a href="">lorem ipsum</a>
                      </li>
                      <li class="text-gray-600 hover:text-gray-400">
                        <a href="">lorem ipsum</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  class="cursor-pointer block py-4"
                  v-on:click="showPrice = !showPrice"
                  >Fiyat
                  <span
                    class="float-right text-xl font-bold mr-28 lg:mr-3 pb-1"
                    v-if="!showPrice"
                    >+</span
                  >
                  <span
                    class="float-right text-xl font-bold mr-28 lg:mr-3"
                    v-if="showPrice"
                    >-</span
                  ></a
                >
                <hr class="w-44" />
                <div v-show="showPrice">
                  <div class="pt-12 pb-6">
                    <div  class="track-container w-7/12 lg:w-4/5">
                      <span class="range-value min -ml-4"
                        >{{ minValue + ",00₺" }}
                      </span>
                      <span class="range-value max float-right">{{
                        maxValue + ",00₺"
                      }}</span>
                      <div class="track" ref="_vpcTrack"></div>
                      <div class="track-highlight" ref="trackHighlight"></div>
                      <button class="track-btn track1" ref="track1"></button>
                      <button class="track-btn track2" ref="track2"></button>
                    </div>
                  </div>
                </div>
                <a
                  class="cursor-pointer block py-4"
                  v-on:click="showModel = !showModel"
                  >Model
                  <span
                    class="float-right text-xl font-bold mr-28 lg:mr-3 pb-1"
                    v-if="!showModel"
                    >+</span
                  >
                  <span
                    class="float-right text-xl font-bold mr-28 lg:mr-3"
                    v-if="showModel"
                    >-</span
                  ></a
                >
                <hr class="w-44" />
                <div v-show="showModel">
                  <div class="">
                    <div class="flex flex-col">
                      <label
                        id="iphone-x"
                        class="inline-flex items-center mt-3"
                      >
                        <input
                          type="checkbox"
                          v-model="modelFilter"
                          value="iphone x"
                          for="iphone-x"
                          class="form-checkbox h-5 w-5 text-gray-600"
                        /><span class="ml-2 text-gray-700">iphone x</span>
                      </label>
                      <label
                        id="iphone-xs"
                        class="inline-flex items-center mt-3"
                      >
                        <input
                          type="checkbox"
                          v-model="modelFilter"
                          value="iphone xs"
                          for="iphone-xs"
                          class="form-checkbox h-5 w-5 text-gray-600"
                        /><span class="ml-2 text-gray-700">iphone xs</span>
                      </label>
                    </div>
                  </div>
                </div>
                <a
                  class="cursor-pointer block py-4"
                  v-on:click="showSize = !showSize"
                  >Size
                  <span
                    class="float-right text-xl font-bold mr-28 lg:mr-3 pb-1"
                    v-if="!showSize"
                    >+</span
                  >
                  <span
                    class="float-right text-xl font-bold mr-28 lg:mr-3"
                    v-if="showSize"
                    >-</span
                  ></a
                >
                <hr class="w-44" />
                <div v-show="showSize">
                  <div class="">
                    <div class="flex flex-col">
                      <label id="large" class="inline-flex items-center mt-3">
                        <input
                          type="checkbox"
                          v-model="sizeFilter"
                          value="large"
                          for="large"
                          class="form-checkbox h-5 w-5 text-gray-600"
                        /><span class="ml-2 text-gray-700">large</span>
                      </label>
                      <label
                        id="iphone-xs"
                        class="inline-flex items-center mt-3"
                      >
                        <input
                          type="checkbox"
                          v-model="sizeFilter"
                          value="medium"
                          for="iphone-xs"
                          class="form-checkbox h-5 w-5 text-gray-600"
                        /><span class="ml-2 text-gray-700">medium</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right col-span-1 lg:col-span-4">
              <div class="grid grid-cols-1 lg:grid-cols-4">
                <div v-show="product.productPrice <= maxValue && product.productPrice >= minValue "
                  v-bind:id="product.id"
                  :key="product"
                  v-for="(product, index) in filteredproducts"
                  class="card p-7 text-center relative"
                >
                  <div class="img relative">
                    <img class="w-full" :src="product.img" alt="" />
                    <div
                      v-if="product.bestSell"
                      class="
                        best-sell
                        text-white
                        inline-block
                        absolute
                        top-0
                        left-0
                        bg-best-sell
                        px-4
                        py-1
                        text-lg
                        lg:text-xs
                      "
                    >
                      <h1>Best seller</h1>
                    </div>
                  </div>

                  <div
                    @click="toggle(index)"
                    v-bind:id="product.id"
                    class="
                      hover
                      bg-white
                      p-3
                      px-28
                      lg:px-14
                      absolute
                      duration-500
                      transform
                      translate-y-0
                      opacity-0
                      text-lg
                      lg:text-base
                      cursor-pointer
                    "
                  >
                    <h1>hızlı görünüm</h1>
                  </div>

                  <div class="title pt-3">
                    <h1>
                      {{ product.productName }} active: {{ active }} index:{{
                        index
                      }}
                    </h1>
                  </div>
                  <div class="text pt-1 text-red-700 italic">
                    <h1>{{ product.productPrice }}</h1>
                  </div>
                </div>
              </div>
              <div
                v-for="(product, index) in filteredproducts"
                :key="index"
                v-show="index === active"
                :class="[isOpenCard ? 'show-mobile-card' : '']"
                :id="index"
                class="offcanvas-mobile-card"
              >
                <div @click="toggle(index)" class="mobile-card-overlay"></div>
                <div class="inner">
                  <div class="mobile-header">
                    <button
                      @click="toggle(index)"
                      class="mobile-close-btn text-black"
                    ></button>
                  </div>
                  <div class="card-content flex">
                    
                    
                    <div class="container">
                      <div class="grid grid-cols-2">
                        <div class="left pb-5">
                          <div class="flex justify-center">
                            <div
                              id="app"
                              class="
                                slideshow-container
                                flex flex-col
                                items-center
                              "
                              v-show="index === active"
                            >
                              <div class="mySlide w-1/2">
                                <div class="numbertext">{{ direction }}</div>
                                <div class="numbertext">{{ eren }}</div>
                                <img
                                  v-for="(src, index) in product.imgList"
                                  :key="src"
                                  :src="src"
                                  v-show="index === activee"
                                />
                              </div>
                              <a
                                class="prev"
                                v-if="prev"
                                @click="change(activee - 1)"
                                >&#10094;</a
                              >
                              <a
                                class="next"
                                v-if="next"
                                @click="change(activee + 1)"
                                >&#10095;</a
                              >
                              <ul class="slider_dots">
                                <li
                                  v-for="(src, index) in product.imgList"
                                  :key="src"
                                  :class="{ active: index === activee }"
                                  @click="change(index, product.imgList.length)"
                                >
                                  {{ index }}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <div class="title pt-3 text-xl">
                            {{ product.productName }} active:
                            {{ active }} index:{{ index }}
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
                          <div
                            @click="toggllee(index)"
                            class="detail underline pt-4"
                          >
                            <h1>Detay görüntüle</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <footer-template></footer-template>
      </div>
    </div>
    <div
      v-for="(product, index) in filteredproducts"
      :key="index"
      v-show="index === active"
      :class="[isOpenPage ? 'show-mobile-page' : '']"
      :id="index"
      class="offcanvas-mobile-page"
    >
      <div @click="toggllee(index)" class="mobile-card-overlay"></div>
      <div class="inner">
        <div class="mobile-header">
          <button
            @click="toggllee(index)"
            class="mobile-close-btn text-black"
          ></button>
        </div>
        <div class="card-content flex">
          <div class="container">
            <div class="grid grid-cols-2">
              <div class="left pb-5">
                <div class="flex justify-center">
                  <div
                    id="app"
                    class="slideshow-container flex flex-col items-center"
                    v-show="index === active"
                  >
                    <div class="mySlide w-1/2">
                      <div class="numbertext">{{ direction }}</div>
                      <div class="numbertext">{{ eren }}</div>
                      <img
                        v-for="(src, index) in product.imgList"
                        :key="src"
                        :src="src"
                        v-show="index === activee"
                      />
                    </div>
                    <a class="prev" v-if="prev" @click="change(activee - 1)"
                      >&#10094;</a
                    >
                    <a class="next" v-if="next" @click="change(activee + 1)"
                      >&#10095;</a
                    >
                    <ul class="slider_dots">
                      <li
                        v-for="(src, index) in product.imgList"
                        :key="src"
                        :class="{ active: index === activee }"
                        @click="change(index, product.imgList.length)"
                      >
                        {{ index }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="title pt-3 text-xl">
                 {{ product.productName }} active: {{ active }} index:{{
                    index
                  }}
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
                <div @click="toggllee(index)" class="detail underline pt-4">
                  <h1>Detay görüntüle</h1>
                </div>
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
  data() {
    return {
      showCollection: false,
      showPrice: false,
      showModel: false,
      showSize: false,
      min: 25,
      max: 550,
      minValue: 25,
      
      maxValue: 550,
      step: 25,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null,
      },
      
      modelFilter: [],
      sizeFilter: [],
      active: 0,
      activee: 0,
      index: 0,
      products: [
        {
          id: 1,
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı iphone x medium",
          productPrice: 100,
          bestSell: false,
          model: "iphone x",
          size: "medium",
          card: false,
          imgList: [
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
          ],
        },
        {
          id: 2,
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı iphone x medium",
          productPrice: 200,
          bestSell: false,
          model: "iphone x",
          size: "medium",
          card: false,
          imgList: [
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
          ],
        },
        {
          id: 3,
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı iphone xs large",
          productPrice: 250,
          bestSell: false,
          model: "iphone xs",
          size: "large",
          imgList: [
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
          ],
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı iphone xs medium",
          productPrice: 300,
          bestSell: true,
          model: "iphone xs",
          size: "medium",
          imgList: [
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
          ],
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: 350,
          bestSell: false,
          imgList: [
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
          ],
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: 400,
          bestSell: true,
          imgList: [
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
          ],
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: 450,
          bestSell: false,
          imgList: [
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
          ],
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: 500,
          bestSell: false,
          imgList: [
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
          ],
        },
        {
          img: require("~/assets/image/ea71bb_a098804073f8481dab7214af6904a585_mv2_d_4601_3315_s_4_2.webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: 550,
          bestSell: false,
          imgList: [
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
            require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (3).webp"),
          ],
        },
      ],

      filter: [],
      isOpenCard: false,
      isOpenPage: false,
    };
  },
  methods: {
    

    change(index, length) {
      this.activee = (index + length) % length;
    },
    toggle(index) {
      this.isOpenCard = !this.isOpenCard;
      this.active = (index + this.total) % this.total;
      this.activee = 0;
    },
    toggllee(index) {
      this.isOpenPage = !this.isOpenPage;
      this.active = (index + this.total) % this.total;
    },

    moveTrack(track, ev) {
      let percentInPx = this.getPercentInPx();

      let trackX = Math.round(
        this.$refs._vpcTrack.getBoundingClientRect().left
      );
      let clientX = ev.clientX;
      let moveDiff = clientX - trackX;

      let moveInPct = moveDiff / percentInPx;
      // console.log(moveInPct)

      if (moveInPct < 1 || moveInPct > 100) return;
      let value =
        Math.round(moveInPct / this.percentPerStep) * this.step + this.min;
      if (track === "track1") {
        if (value >= this.maxValue - this.step) return;
        this.minValue = value;
      }

      if (track === "track2") {
        if (value <= this.minValue + this.step) return;
        this.maxValue = value;
      }

      this.$refs[track].style.left = moveInPct + "%";
      this.setTrackHightlight();
    },
    mousedown(ev, track) {
      if (this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
    },

    touchstart(ev, track) {
      this.mousedown(ev, track);
    },

    mouseup(ev, track) {
      if (!this.isDragging) return;
      this.isDragging = false;
    },

    touchend(ev, track) {
      this.mouseup(ev, track);
    },

    mousemove(ev, track) {
      if (!this.isDragging) return;
      this.moveTrack(track, ev);
    },

    touchmove(ev, track) {
      this.mousemove(ev.changedTouches[0], track);
    },

    valueToPercent(value) {
      return ((value - this.min) / this.step) * this.percentPerStep;
    },

    setTrackHightlight() {
      this.$refs.trackHighlight.style.left =
        this.valueToPercent(this.minValue) + "%";
      this.$refs.trackHighlight.style.width =
        this.valueToPercent(this.maxValue) -
        this.valueToPercent(this.minValue) +
        "%";
    },

    getPercentInPx() {
      let trackWidth = this.$refs._vpcTrack.offsetWidth;
      let oneStepInPx = trackWidth / this.totalSteps;
      // 1 percent in px
      let percentInPx = oneStepInPx / this.percentPerStep;

      return percentInPx;
    },

    setClickMove(ev) {
      let track1Left = this.$refs.track1.getBoundingClientRect().left;
      let track2Left = this.$refs.track2.getBoundingClientRect().left;
      // console.log('track1Left', track1Left)
      if (ev.clientX < track1Left) {
        this.moveTrack("track1", ev);
      } else if (ev.clientX - track1Left < track2Left - ev.clientX) {
        this.moveTrack("track1", ev);
      } else {
        this.moveTrack("track2", ev);
      }
    },
  },
  computed: {
    filteredproducts: function () {
      const priceFilter = this.priceFilter;
      const modelFilter = this.modelFilter;
      const sizeFilter = this.sizeFilter;
     
      
     
       
      
      
     
     

      if (modelFilter.length && sizeFilter.length) {
        return this.products.filter(function (product) {
          return (
            modelFilter.includes(product.model) &&
            sizeFilter.includes(product.size) 
            
          );
        });
      } else if (modelFilter.length) {
        return this.products.filter(function (product) {
          return modelFilter.includes(product.model);
        });
      } else if (sizeFilter.length) {
        return this.products.filter(function (product) {
          return sizeFilter.includes(product.size);
        });
      } else {
        return this.products;
      }
    },
    total() {
      return this.filteredproducts.length;
    },
  },

  mounted() {
     
      
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step;

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps;
    // console.log('percentPerStep', this.percentPerStep)

    // set track1 initilal
    document.querySelector(".track1").style.left =
      this.valueToPercent(this.minValue) + "%";
    // track2 initial position
    document.querySelector(".track2").style.left =
      this.valueToPercent(this.maxValue) + "%";
    // set initila track highlight
    this.setTrackHightlight();

    var self = this;

    ["mouseup", "mousemove"].forEach((type) => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack);
        }
      });
    });

    [
      "mousedown",
      "mouseup",
      "mousemove",
      "touchstart",
      "touchmove",
      "touchend",
    ].forEach((type) => {
      document.querySelector(".track1").addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, "track1");
      });

      document.querySelector(".track2").addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, "track2");
      });
    });

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector(".track").addEventListener("click", function (ev) {
      ev.stopPropagation();
      self.setClickMove(ev);
    });

    document
      .querySelector(".track-highlight")
      .addEventListener("click", function (ev) {
        ev.stopPropagation();
        self.setClickMove(ev);
      });
  },
};
</script>
<style scoped lang="scss">
.card:hover .hover {
  opacity: 1;
  transform: translateY(-47px);
}
.range-value.max {
  right: 0;
}
.track-container {
  position: relative;
  cursor: pointer;
  height: 0.5rem;
  margin-left: 20px;
}

.track,
.track-highlight {
  display: block;
  position: absolute;
  width: 100%;
  height: 0.2rem;
  bottom: 20px;
}

.track {
  background-color: #ddd;
  margin-left: -7px;
}

.track-highlight {
  background-color: #504949;
  z-index: 2;
  margin-left: -7px;
}

.track-btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  display: block;
  position: absolute;
  z-index: 2;
  width: 1rem;
  height: 1rem;
  bottom: 14px;
  margin-left: -1rem;
  border: none;
  border-radius: 10px;
  background-color: #504949;
  -ms-touch-action: pan-x;
  touch-action: pan-x;
  transition: box-shadow 0.3s ease-out, background-color 0.3s ease,
    -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease, -webkit-transform 0.3s ease-out;
}
.top-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 85px;
  background-color: #00225a;
  padding: 0 15px 0 30px;
}

.show-mobile-card.offcanvas-mobile-card {
  visibility: visible;
  background-color: rgb(0 0 0 / 64%);
}
.offcanvas-mobile-card {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  z-index: 99999;
}
.offcanvas-mobile-card .inner .mobile-header {
  align-items: center;
  display: flex;
  justify-content: end;

  padding: 20px 15px 20px 30px;
}
.offcanvas-mobile-card .inner .mobile-header .logo {
  width: 155px;
}
.offcanvas-mobile-card .inner .mobile-header .mobile-close-btn:after,
.offcanvas-mobile-card .inner .mobile-header .mobile-close-btn:before {
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
.offcanvas-mobile-card .mobile-card-overlay {
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
}
.show-mobile-card.offcanvas-mobile-card .inner {
  transform: none;
  right: 225px;
}

.offcanvas-mobile-card .inner {
  position: absolute;
  width: 65%;

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
.card-content {
  margin: 30px;
}
.offcanvas-navigation ul li a {
  color: #212529;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 0;
  display: block;
}

.offcanvas-mobile-card .mobile-card-overlay {
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
}
.offcanvas-mobile-card .inner .mobile-header .mobile-close-btn {
  cursor: pointer;
  border: none;

  width: 40px;
  flex-shrink: 0;
  position: relative;
  background-color: transparent;
}

.offcanvas-mobile-card .inner .mobile-header .mobile-close-btn:after,
.offcanvas-mobile-card .inner .mobile-header .mobile-close-btn:before {
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

.offcanvas-mobile-card .inner .mobile-header .mobile-close-btn:before {
  transform: rotate(-45deg);
}

.offcanvas-mobile-card .inner .mobile-header .mobile-close-btn:after {
  transform: rotate(45deg);
}
.show-mobile-page.offcanvas-mobile-page {
  visibility: visible;
  background-color: rgb(0 0 0 / 64%);
}
.offcanvas-mobile-page {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  z-index: 99999;
}
.offcanvas-mobile-page .inner .mobile-header {
  align-items: center;
  display: flex;
  justify-content: end;

  padding: 20px 15px 20px 30px;
}
.offcanvas-mobile-page .inner .mobile-header .logo {
  width: 155px;
}
.offcanvas-mobile-page .inner .mobile-header .mobile-close-btn:after,
.offcanvas-mobile-page .inner .mobile-header .mobile-close-btn:before {
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
.offcanvas-mobile-page .mobile-page-overlay {
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
}
.show-mobile-page.offcanvas-mobile-page .inner {
  transform: none;
  right: 225px;
}
.show-mobile-page.offcanvas-mobile-page .inner {
  transform: none;
  right: 0;
}

.offcanvas-mobile-page .inner {
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
.page-content {
  margin: 30px;
}
.offcanvas-navigation ul li a {
  color: #212529;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 0;
  display: block;
}

.offcanvas-mobile-page .mobile-page-overlay {
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
}
.offcanvas-mobile-page .inner .mobile-header .mobile-close-btn {
  cursor: pointer;
  border: none;

  width: 40px;
  flex-shrink: 0;
  position: relative;
  background-color: transparent;
}

.offcanvas-mobile-page .inner .mobile-header .mobile-close-btn:after,
.offcanvas-mobile-page .inner .mobile-header .mobile-close-btn:before {
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

.offcanvas-mobile-page .inner .mobile-header .mobile-close-btn:before {
  transform: rotate(-45deg);
}

.offcanvas-mobile-page .inner .mobile-header .mobile-close-btn:after {
  transform: rotate(45deg);
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
</style>