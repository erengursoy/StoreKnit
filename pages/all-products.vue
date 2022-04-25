<template>
  <div id="all-products">
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
            <div class="filter">
              <div class="title text-2xl block pb-4">
                <h1>Filtreleme Kriteri:</h1>
              </div>
              <hr class="w-44" />
              <a
                class="cursor-pointer block py-4"
                v-on:click="showCollection = !showCollection"
                >Koleksiyon
                <span
                  class="float-right text-xl font-bold mr-3 pb-1"
                  v-if="!showCollection"
                  >+</span
                >
                <span
                  class="float-right text-xl font-bold mr-3"
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
                  class="float-right text-xl font-bold mr-3 pb-1"
                  v-if="!showPrice"
                  >+</span
                >
                <span
                  class="float-right text-xl font-bold mr-3"
                  v-if="showPrice"
                  >-</span
                ></a
              >
              <hr class="w-44" />
              <div v-show="showPrice">
                <div class="pt-12 pb-6">
                  <div  class="track-container" >
                    <span  class="range-value min -ml-4"
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
                  class="float-right text-xl font-bold mr-3 pb-1"
                  v-if="!showModel"
                  >+</span
                >
                <span
                  class="float-right text-xl font-bold mr-3"
                  v-if="showModel"
                  >-</span
                ></a
              >
              <hr class="w-44" />
              <div v-show="showModel">
                <div class="">
                  <div class="flex flex-col">
                    <label id="iphone-x" class="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        v-model="modelFilter"
                        value="iphone x"
                        for="iphone-x"
                        class="form-checkbox h-5 w-5 text-gray-600"
                      /><span class="ml-2 text-gray-700">iphone x</span>
                    </label>
                    <label id="iphone-xs" class="inline-flex items-center mt-3">
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
                  class="float-right text-xl font-bold mr-3 pb-1"
                  v-if="!showSize"
                  >+</span
                >
                <span class="float-right text-xl font-bold mr-3" v-if="showSize"
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
                    <label id="iphone-xs" class="inline-flex items-center mt-3">
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
              <div
                v-for="product in filteredproducts"
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
                  "
                >
                  <h1>hızlı görünüm</h1>
                </div>
                <div class="title pt-3">
                  <h1>{{ product.productName }}</h1>
                </div>
                <div class="text pt-1 text-red-700 italic">
                  <h1>{{ product.productPrice }}</h1>
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
      priceFilter: [],
      modelFilter: [],
      sizeFilter: [],

      products: [
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı iphone xs large",
          productPrice: 395,
          bestSell: true,
          model: "iphone xs",
          size: "large",
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı iphone x medium",
          productPrice: "395,00₺",
          bestSell: false,
          model: "iphone x",
          size: "medium",
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı iphone xs large",
          productPrice: "395,00₺",
          bestSell: false,
           model: "iphone xs",
          size: "large",
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı iphone xs medium",
          productPrice: "395,00₺",
          bestSell: true,
           model: "iphone xs",
          size: "medium",
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell: false,
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell: true,
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell: false,
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell: false,
        },
        {
          img: require("~/assets/image/ea71bb_a098804073f8481dab7214af6904a585_mv2_d_4601_3315_s_4_2.webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell: false,
        },
      ],
      filter: [],
    };
  },
  methods: {
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
      } else if (priceFilter.length) {
        return this.products.filter(function (product) {
          return priceFilter.includes(product.productPrice);
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
<style lang="scss">
.card:hover .hover {
  opacity: 1;
  transform: translateY(-47px);
}
.range-value.max {
  right: 0;
}
.track-container {
  width: 85%;
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
</style>