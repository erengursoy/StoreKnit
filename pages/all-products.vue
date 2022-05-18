<template>
  <div>
    <div id="all-products">
      <div class="header">
        <header-template></header-template>
      </div>

      <div :class="[isOpenPage ? 'hidden' : '']" class="container mx-auto">
        <div class="grid grid-rows-1">
          <div
            class="
              title
              text-center
              pt-20
              pb-10
              text-4xl
              font-bold
              tracking-normal
              lg:tracking-wider
            "
          >
            <h1>TÜM ÜRÜNLER</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            <div
              class="left col-span-1 pt-5 flex justify-center md:justify-end"
            >
              <div class="filter text-page-black font-light">
                <div class="title text-3xl block pb-4">
                  <h1>Filtreleme Kriteri:</h1>
                </div>
                <hr class="" />
                <a
                  class="cursor-pointer py-4 flex justify-between"
                  v-on:click="showCollection = !showCollection"
                  >Koleksiyon
                  <span class="text-xl font-bold pb-1" v-if="!showCollection"
                    >+</span
                  >
                  <span class="text-xl font-bold" v-if="showCollection"
                    >-</span
                  ></a
                >

                <hr class="" />
                <div v-show="showCollection">
                  <div class="">
                    <ul class="text-sm">
                      <li
                        value="Phone Caseees"
                        :class="collection.length == 0 ? 'font-bold' : ''"
                        @click="collection = []"
                        class="cursor-pointer"
                      >
                        Hepsi
                      </li>
                      <li
                        value="Phone Cases"
                        :class="
                          collection == ['Phone Cases'] ? 'font-bold' : ''
                        "
                        @click="collection = 'Phone Cases'"
                        class="text-gray-600 hover:text-gray-400 cursor-pointer"
                      >
                        Phone Cases
                      </li>

                      <li
                        value="Phone Cases"
                        :class="
                          collection == ['Mini leather goods']
                            ? 'font-bold'
                            : ''
                        "
                        @click="collection = 'Mini leather goods'"
                        class="text-gray-600 hover:text-gray-400 cursor-pointer"
                      >
                        Mini leather goods
                      </li>
                      <li
                        value="Hepfdsi"
                        :class="
                          collection == ['Leather Belts'] ? 'font-bold' : ''
                        "
                        @click="collection = 'Leather Belts'"
                        class="text-gray-600 hover:text-gray-400 cursor-pointer"
                      >
                        Leather Belts
                      </li>
                      <li
                        value="Hepssssi"
                        :class="
                          collection == ['Best Sellers'] ? 'font-bold' : ''
                        "
                        @click="collection = 'Best Sellers'"
                        class="text-gray-600 hover:text-gray-400 cursor-pointer"
                      >
                        Best Sellers
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  class="cursor-pointer flex justify-between py-4"
                  v-on:click="showPrice = !showPrice"
                  >Fiyat
                  <span class="text-xl font-bold pb-1" v-if="!showPrice"
                    >+</span
                  >
                  <span class="text-xl font-bold" v-if="showPrice">-</span></a
                >
                <hr class="" />
                <div v-show="showPrice">
                  <div class="pt-12 pb-6">
                    <div class="track-container track-container-width">
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
                  class="cursor-pointer flex justify-between py-4"
                  v-on:click="showModel = !showModel"
                  >Model
                  <span class="text-xl font-bold pb-1" v-if="!showModel"
                    >+</span
                  >
                  <span class="text-xl font-bold" v-if="showModel">-</span></a
                >
                <hr class="" />
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
                  class="cursor-pointer flex justify-between py-4"
                  v-on:click="showSize = !showSize"
                  >Size
                  <span class="text-xl font-bold pb-1" v-if="!showSize">+</span>
                  <span class="float-right text-xl font-bold" v-if="showSize"
                    >-</span
                  ></a
                >
                <hr class="" />
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
                      <label id="medium" class="inline-flex items-center mt-3">
                        <input
                          type="checkbox"
                          v-model="sizeFilter"
                          value="medium"
                          for="medium"
                          class="form-checkbox h-5 w-5 text-gray-600"
                        /><span class="ml-2 text-gray-700">medium</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="right col-span-1 md:col-span-2 lg:col-span-4">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div
                  :class="[
                    product.productPrice <= maxValue &&
                    product.productPrice >= minValue
                      ? 'p-7'
                      : 'h-0 overflow-hidden p-0 duration-700',
                  ]"
                  v-bind:id="product.id"
                  :key="index"
                  v-for="(product, index) in filteredproducts"
                  class="card text-center relative"
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
                    @click="quickViewToggle(index)"
                    v-bind:id="product.id"
                    class="
                      hover
                      bg-white
                      py-3
                      quick-view-width
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
                    <h1 class="font-light">hızlı görünüm</h1>
                  </div>

                  <div class="title pt-3 text-page-black font-light">
                    <h1>
                      {{ product.productName }}
                    </h1>
                  </div>
                  <div
                    class="
                      text
                      pt-1
                      text-page-red
                      Poppins-SemiBold
                      italic
                      text-xl
                    "
                  >
                    <h1>
                      <span class="line-through decoration-1">{{
                        product.previousPrice
                      }}</span>
                      {{ product.productPrice }},00₺
                    </h1>
                  </div>
                </div>
              </div>

              <div
                v-for="(product, index) in filteredproducts"
                :key="index"
                v-show="index === productActive"
                :class="[isOpenCard ? 'show-mobile-card' : '']"
                :id="index"
                class="offcanvas-mobile-card"
              >
                <div
                  @click="quickViewToggle(index)"
                  class="mobile-card-overlay"
                ></div>
                <div class="inner card-inner-right">
                  <div class="mobile-header">
                    <button
                      @click="quickViewToggle(index)"
                      class="mobile-close-btn text-black"
                    ></button>
                  </div>
                  <div class="card-content flex text-center md:text-left">
                    <div class="container">
                      <div class="grid grid-cols-1 md:grid-cols-2">
                        <div class="left pb-5">
                          <div class="flex justify-center">
                            <div
                              id="app"
                              class="
                                slideshow-container
                                flex flex-col
                                items-center
                              "
                              v-show="index === productActive"
                            >
                              <div class="mySlide w-8/12">
                                <div class="numbertext"></div>
                                <img
                                  v-for="(src, index) in product.slideImgList"
                                  :key="index"
                                  :src="src"
                                  v-show="index === slideActive"
                                />
                              </div>

                              <ul class="slider_dots" v-show="product.slider">
                                <li
                                  v-for="(src, index) in product.slideImgList"
                                  :key="index"
                                  :class="{
                                    productActive: index === slideActive,
                                  }"
                                  @click="
                                    cardPageSlideChange(
                                      index,
                                      product.slideImgList.length
                                    )
                                  "
                                >
                                  {{ index }}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="right">
                          <div
                            class="
                              title
                              pt-3
                              text-2xl text-page-black
                              font-normal
                            "
                          >
                            {{ product.productName }}
                          </div>
                          <div
                            class="
                              price
                              pt-4
                              pb-10
                              text-page-red
                              Poppins-SemiBold
                              italic
                              text-xl
                            "
                          >
                            <h1>
                              <span class="line-through decoration-1">{{
                                product.previousPrice
                              }}</span>
                              {{ product.productPrice }},00₺
                            </h1>
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
                          <div class="card-btn">
                            <a
                              class="
                                inline-block
                                text-center
                                py-3
                                card-btn-width
                                text-base
                                hover:opacity-70
                                bg-page-red
                                text-all-products-card-page-btn-text
                                font-light
                              "
                              href=""
                              >Add to Cart</a
                            >
                          </div>
                          <div
                            @click="detailViewToggle(index)"
                            class="detail underline pt-4 font-light text-sm"
                          >
                            <h1><a href="#">Detayları görüntüle</a></h1>
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
      <div
        v-for="(product, index) in filteredproducts"
        :key="index"
        v-show="index === productActive"
        :class="[isOpenPage ? 'block' : 'hidden']"
        :id="index"
        class="inner"
      >
        <div class="">
          <div
            class="
              flex
              justify-around
              py-14
              text-page-black
              font-light
              text-9px
              lg:text-base
            "
          >
            <div class="left pb-12">
              <ul class="flex">
                <li><a class="px-1" href="/#home">Ana Sayfa</a>/</li>
                <li><a class="px-1" href="/all-products">Tüm Ürünler</a>/</li>
                <li class="opacity-50 pl-1">{{ product.productName }}</li>
              </ul>
            </div>
            <div class="right">
              <ul class="flex items-center">
                <li
                  :class="{ 'opacity-50': productActive === 0 }"
                  class="cursor-pointer"
                >
                  <img
                    class="w-4 lg:w-5"
                    src="~/assets/image/icons8-less-than-50.png"
                    alt=""
                  />
                </li>
                <li
                  :class="{ 'opacity-50': productActive === 0 }"
                  @click="cardPageChange(productActive--)"
                  class="cursor-pointer"
                >
                  Önceki
                </li>
                <li class="px-3 cursor-pointer">
                  <div class="h-3 lg:h-5 border-l border-black"></div>
                </li>
                <li
                  :class="{
                    'opacity-50': productActive === products.length - 1,
                  }"
                  @click="cardPageChange(productActive++)"
                  class="cursor-pointer"
                >
                  Devamı
                </li>
                <li
                  :class="{
                    'opacity-50': productActive === products.length - 1,
                  }"
                  class="cursor-pointer"
                >
                  <img
                    class="w-4 lg:w-5"
                    src="~/assets/image/icons8-more-than-50.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-content flex justify-center">
          <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="left pb-5">
                <div class="flex justify-center">
                  <div
                    id="app"
                    class="slideshow-container flex flex-col items-center"
                    v-show="index === productActive"
                  >
                    <div class="mySlide w-3/4">
                      <div class="numbertext"></div>
                      <img
                        v-for="(src, index) in product.slideImgList"
                        :key="index"
                        :src="src"
                        v-show="index === slideActive"
                      />
                    </div>

                    <ul v-show="product.slider" class="page-slider_dots">
                      <li
                        v-for="(src, index) in product.slideImgList"
                        :key="index"
                        :class="{ productActive: index === slideActive }"
                        @click="
                          cardPageSlideChange(
                            index,
                            product.slideImgList.length
                          )
                        "
                      >
                        <img
                          class="w-full h-full"
                          :class="{ productActive: index === slideActive }"
                          :src="src"
                          alt=""
                        />
                      </li>
                    </ul>
                    <div class="description w-11/12 md:w-8/12 pt-12">
                      <p>
                        {{ product.productDescription }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right justify-self-center lg:justify-self-auto">
                <div
                  class="
                    title
                    pt-3
                    text-3xl
                   
                    text-page-black
                    font-light
                  "
                >
                  {{ product.productName }}
                </div>
                <div
                  class="
                    price
                    pt-4
                    pb-10
                    text-2xl text-page-red
                    Poppins-SemiBold
                    italic
                  "
                >
                  <h1>
                    <span class="line-through decoration-1">{{
                      product.previousPrice
                    }}</span>
                    {{ product.productPrice }},00₺
                  </h1>
                </div>

                <div class="btn">
                  <a
                    class="
                      inline-block
                      py-3
                      px-32
                      text-sm
                      hover:bg-all-products-card-page-btn-hover
                      hover:text-all-products-card-page-btn-text-hover
                      duration-300
                      bg-black
                      text-white
                    "
                    href=""
                    >Şimdi Satın Alın</a
                  >
                </div>

                <div
                  v-for="(product, index) in filteredproducts"
                  :key="index"
                  v-show="index === productActive"
                >
                  <div class="pt-6" v-if="product.cardPageAccordionShow">
                    <div
                      v-for="(item, index) in product.cardPageAccordion"
                      :key="index"
                      class="w-11/12 lg:w-1/2"
                      :class="item.centerClass"
                    >
                      <a
                        class="
                          cursor-pointer
                          py-4
                          flex
                          justify-between
                          text-page-red
                          items-center
                        "
                        v-on:click="
                          item.cardPageAccordionActive =
                            !item.cardPageAccordionActive
                        "
                      >
                        {{ item.cardPageAccordionTitle }}
                        <span
                          class="text-2xl font-light pb-1"
                          v-if="!item.cardPageAccordionActive"
                          >+</span
                        >
                        <span
                          class="text-3xl font-light"
                          v-if="item.cardPageAccordionActive"
                          >-</span
                        ></a
                      >

                      <div v-show="item.cardPageAccordionActive">
                        <div class="pb-4 text-page-black font-light">
                          {{ item.cardPageAccordionText }}
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
      firstProductCardPageAccordion: true,
      secondProductCardPageAccordion: false,
      thirdProductCardPageAccordion: false,

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
      cardPageAccordionIndex: 0,
      productActive: 0,
      slideActive: 0,
      index: 0,
      collectionTextActive: false,
      collection: [],
      products: [
        {
          productCode: 1,
          img: require("~/assets/image/product/1.webp"),
          productName: "Evcil Hayvan Yatağı",
          previousPrice: "",
          productPrice: "395",
          bestSell: false,
          model: "",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription: "Evcil Hayvan Yatağı",
          collection: "Leather Belts",
          slider: true,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [
            require("~/assets/image/slide/1.1.webp"),
            require("~/assets/image/slide/1.2.webp"),
            require("~/assets/image/slide/1.3.webp"),
            require("~/assets/image/slide/1.4.webp"),
          ],
        },
        {
          productCode: 2,
          img: require("~/assets/image/product/2.webp"),
          productName: "Evcil Hayvan Yatağı",
          previousPrice: "659,00₺",
          productPrice: "445",
          bestSell: false,
          model: "",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Ürün,evcil hayvanlarınız için özel olarak tasarlanmış bir yataktır. Tüm kedi cinsleri ve küçük ırk köpekler için ultra konforlu olarak tasarlanmıştır. Ahşap taban üzerine tamamen el örgüsü ile örülmüştür. Ölçüsü 45*45 cm İç minderi düşük ısıda yıkanabilir. Örgü kısmı ise nemli ve sabunlu bez ile silinebilir.",

          collection: "Leather Belts",
          slider: true,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [
            require("~/assets/image/slide/2.1.webp"),
            require("~/assets/image/slide/2.2.webp"),
            require("~/assets/image/slide/2.3.webp"),
            require("~/assets/image/slide/2.4.webp"),
          ],
        },
        {
          productCode: 3,
          img: require("~/assets/image/product/3.webp"),
          productName: "Ahşap Saplı Kol Çantası",
          previousPrice: "645,00₺",
          productPrice: "350",
          bestSell: false,
          model: "",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "YUVARLAK AHSAP SAPLI TAMAMEN EL ÖRGÜSÜ GÜNDÜZ VE GECE ŞIKLIĞI İÇİN UYGUN İÇİ ASTARLI BİR AÇIK BİR FERMUARLI CEP ÇITÇIT KAPAMALI ÖLÇÜSÜ 35*21 CM",
          collection: "Leather Belts",
          slider: true,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [
            require("~/assets/image/slide/3.1.webp"),
            require("~/assets/image/slide/3.2.webp"),
            require("~/assets/image/slide/3.3.webp"),
            require("~/assets/image/slide/3.4.webp"),
          ],
        },
        {
          productCode: 4,
          img: require("~/assets/image/product/4.webp"),
          productName: "Penye Omuz Çantası",
          previousPrice: "295,00₺",
          productPrice: "125",
          bestSell: false,
          model: "",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Penye ip ile tamamen el örgüsü Renkli omuz askılı İçi astarlı ve cepli 26*20 cm",
          collection: "Leather Belts",
          slider: true,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [
            require("~/assets/image/slide/4.1.webp"),
            require("~/assets/image/slide/4.2.webp"),
            require("~/assets/image/slide/4.3.webp"),
            require("~/assets/image/slide/4.4.webp"),
            require("~/assets/image/slide/4.5.webp"),
          ],
        },
        {
          productCode: 5,
          img: require("~/assets/image/product/5.webp"),
          productName: "Kedi Yatağı",
          previousPrice: "",
          productPrice: "395",
          bestSell: false,
          model: "",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Safe sleep serisi Tüm kedi cinsleri ve küçük ırk köpekler için uygundur. Ürün tamamen el örgüsüdür İç minderi çamaşır makinesinde yıkanabilir Örgü kısmı sabunlu,nemli bez ile silinebilir. Hazırlanma süresi Max 15 gün sürmektedir.",
          collection: "Leather Belts",
          slider: true,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [
            require("~/assets/image/slide/5.1.webp"),
            require("~/assets/image/slide/5.2.webp"),
            require("~/assets/image/slide/5.3.webp"),
            require("~/assets/image/slide/5.4.webp"),
          ],
        },
        {
          productCode: 6,
          img: require("~/assets/image/product/6.webp"),
          productName: "Sırt Çantası",
          previousPrice: "",
          productPrice: "245",
          bestSell: false,
          model: "",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription: "El örgüsü, suni deri aksesuarlı sırt çantası",
          collection: "Leather Belts",
          slider: true,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [
            require("~/assets/image/slide/6.1.webp"),
            require("~/assets/image/slide/6.2.webp"),
          ],
        },
        {
          productCode: 7,
          img: require("~/assets/image/product/7.webp"),
          productName: "Evcil Hayvan Yatağı BJK1",
          previousPrice: "630,00₺",
          productPrice: "525",
          bestSell: false,
          model: "iphone x",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "ÜRÜN TAMAMEN ÖZEL ÜRETİM OLUP, PİYASADAKİ BİR ÇOK PET ÜRÜNÜNDEN FARKLILIK GÖSTERMEKTEDİR. TÜM KEDİ CİNSLERİ VE KÜÇÜK IRK KÖPEKLER İÇİN SAHİP OLACAĞINIZ BU PREMİUM ÜRÜN, GEREK GÖRSEL GEREKSE KONFOR AÇISINDAN SİZİ VE EVCİL DOSTUNUZU TATMİN EDECEK ÖLÇİLERDE ÜRETİLMİŞTİR. ÜRÜN YATAK VE MİNDER OLMAK ÜZERE 2 PARÇADAN OLUŞMAKTADIR.",
          collection: "Leather Belts",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/7.1.webp")],
        },
        {
          productCode: 8,
          img: require("~/assets/image/product/8.webp"),
          productName: "Ahşap Burslu Çanta",
          previousPrice: "230,00₺",
          productPrice: "184",
          bestSell: false,
          model: "iphone x",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/8.1.webp")],
        },
        {
          productCode: 9,
          img: require("~/assets/image/product/9.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "400",
          bestSell: false,
          model: "iphone xs",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/9.1.webp")],
        },
        {
          productCode: 10,
          img: require("~/assets/image/product/10.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "400",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/10.1.webp")],
        },
        {
          productCode: 11,
          img: require("~/assets/image/product/11.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "400",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/11.1.webp")],
        },
        {
          productCode: 12,
          img: require("~/assets/image/product/12.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "400",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/12.1.webp")],
        },
        {
          productCode: 13,
          img: require("~/assets/image/product/13.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "300",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/13.1.webp")],
        },
        {
          productCode: 14,
          img: require("~/assets/image/product/14.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "300",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/14.1.webp")],
        },
        {
          productCode: 15,
          img: require("~/assets/image/product/15.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "300",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/15.1.webp")],
        },
        {
          productCode: 16,
          img: require("~/assets/image/product/16.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "300",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/16.1.webp")],
        },
        {
          productCode: 17,
          img: require("~/assets/image/product/17.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "250",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/17.1.webp")],
        },
        {
          productCode: 18,
          img: require("~/assets/image/product/18.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "250",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/18.1.webp")],
        },
        {
          productCode: 19,
          img: require("~/assets/image/product/19.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "250",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/19.1.webp")],
        },
        {
          productCode: 20,
          img: require("~/assets/image/product/20.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "250",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/20.1.webp")],
        },
        {
          productCode: 21,
          img: require("~/assets/image/product/21.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "150",
          bestSell: false,
          model: "iphone x",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/21.1.webp")],
        },
        {
          productCode: 22,
          img: require("~/assets/image/product/22.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "150",
          bestSell: false,
          model: "",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/22.1.webp")],
        },
        {
          productCode: 23,
          img: require("~/assets/image/product/23.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "150",
          bestSell: false,
          model: "iphone x",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/23.1.webp")],
        },
        {
          productCode: 24,
          img: require("~/assets/image/product/24.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "150",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Best Sellers",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/24.1.webp")],
        },
        {
          productCode: 25,
          img: require("~/assets/image/product/25.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "100",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Leather Belts",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/25.1.webp")],
        },
        {
          productCode: 26,
          img: require("~/assets/image/product/26.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "100",
          bestSell: false,
          model: "",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Leather Belts",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/26.1.webp")],
        },
        {
          productCode: 27,
          img: require("~/assets/image/product/27.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "100",
          bestSell: false,
          model: "",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Leather Belts",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/27.1.webp")],
        },
        {
          productCode: 28,
          img: require("~/assets/image/product/28.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "100",
          bestSell: false,
          model: "iphone x",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Leather Belts",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/28.1.webp")],
        },
        {
          productCode: 29,
          img: require("~/assets/image/product/29.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "100",
          bestSell: false,
          model: "iphone xs",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Leather Belts",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/29.1.webp")],
        },
        {
          productCode: 30,
          img: require("~/assets/image/product/30.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "100",
          bestSell: false,
          model: "",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Leather Belts",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/30.1.webp")],
        },
        {
          productCode: 31,
          img: require("~/assets/image/product/31.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "100",
          bestSell: false,
          model: "",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Leather Belts",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/31.1.webp")],
        },
        {
          productCode: 32,
          img: require("~/assets/image/product/32.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "100",
          bestSell: false,
          model: "iphone x",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Leather Belts",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/32.1.webp")],
        },
        {
          productCode: 33,
          img: require("~/assets/image/product/33.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "50",
          bestSell: false,
          model: "iphone xs",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Mini leather goods",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/33.1.webp")],
        },
        {
          productCode: 34,
          img: require("~/assets/image/product/34.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "50",
          bestSell: false,
          model: "medium",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Mini leather goods",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/34.1.webp")],
        },
        {
          productCode: 35,
          img: require("~/assets/image/product/35.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "50",
          bestSell: false,
          model: "iphone x",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Mini leather goods",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/35.1.webp")],
        },
        {
          productCode: 36,
          img: require("~/assets/image/product/36.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "50",
          bestSell: false,
          model: "iphone xs",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Mini leather goods",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/36.1.webp")],
        },
        {
          productCode: 37,
          img: require("~/assets/image/product/37.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "25",
          bestSell: false,
          model: "iphone x",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Mini leather goods",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/37.1.webp")],
        },
        {
          productCode: 38,
          img: require("~/assets/image/product/38.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "25",
          bestSell: false,
          model: "iphone xs",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Mini leather goods",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/38.1.webp")],
        },
        {
          productCode: 39,
          img: require("~/assets/image/product/39.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "25",
          bestSell: false,
          model: "iphone xs",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Mini leather goods",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/39.1.webp")],
        },
        {
          productCode: 40,
          img: require("~/assets/image/product/40.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "25",
          bestSell: false,
          model: "iphone x",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Mini leather goods",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/40.1.webp")],
        },
        {
          productCode: 41,
          img: require("~/assets/image/product/41.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "25",
          bestSell: false,
          model: "iphone xs",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Phone Cases",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/41.1.webp")],
        },
        {
          productCode: 42,
          img: require("~/assets/image/product/42.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "25",
          bestSell: false,
          model: "iphone xs",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Phone Cases",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/42.1.webp")],
        },
        {
          productCode: 43,
          img: require("~/assets/image/product/43.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "25",
          bestSell: false,
          model: "",
          size: "",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Phone Cases",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/43.1.webp")],
        },
        {
          productCode: 44,
          img: require("~/assets/image/product/44.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "25",
          bestSell: false,
          model: "iphone x",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Phone Cases",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/44.1.webp")],
        },
        {
          productCode: 45,
          img: require("~/assets/image/product/45.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "25",
          bestSell: false,
          model: "iphone xs",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Phone Cases",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/45.1.webp")],
        },
        {
          productCode: 46,
          img: require("~/assets/image/product/46.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "25",
          bestSell: false,
          model: "iphone x",
          size: "medium",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Phone Cases",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/46.1.webp")],
        },
        {
          productCode: 47,
          img: require("~/assets/image/product/47.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "25",
          bestSell: false,
          model: "iphone xs",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Phone Cases",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/47.1.webp")],
        },
        {
          productCode: 48,
          img: require("~/assets/image/product/48.webp"),
          productName: "I am a product",
          previousPrice: "",
          productPrice: "25",
          bestSell: false,
          model: "iphone x",
          size: "large",
          card: false,
          cardPageAccordionShow: true,
          productDescription:
            "Im a product description. Im a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
          collection: "Phone Cases",
          slider: false,

          cardPageAccordion: [
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "PRODUCT INFO",
              cardPageAccordionText:
                "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
            },
            {
              centerClass: "border-t border-b",
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "RETURN & REFUND POLICY",
              cardPageAccordionText:
                "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.",
            },
            {
              cardPageAccordionActive: false,
              cardPageAccordionTitle: "SHIPPING INFO",
              cardPageAccordionText:
                "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.",
            },
          ],

          slideImgList: [require("~/assets/image/slide/48.1.webp")],
        },
      ],

      filter: [],
      isOpenCard: false,
      isOpenPage: false,
    };
  },

  methods: {
    cardPageSlideChange(index, length) {
      this.slideActive = (index + length) % length;
    },
    cardPageChange(index, length) {
      this.slideActive = 0;
      this.cardPageAccordionIndex = (index + this.total) % this.total;
      if (this.productActive > this.total - 1) {
        this.productActive = index;
      } else if (this.productActive < 0) {
        this.productActive = index;
      }
    },
    quickViewToggle(index) {
      this.isOpenCard = !this.isOpenCard;
      this.productActive = (index + this.total) % this.total;
      this.cardPageAccordionIndex = (index + this.total) % this.total;
      this.slideActive = 0;
    },
    detailViewToggle(index) {
      this.isOpenPage = !this.isOpenPage;
      this.productActive = (index + this.total) % this.total;
      this.cardPageAccordionIndex = (index + this.total) % this.total;
      this.slideActive = 0;
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
      const collection = this.collection;
      const modelFilter = this.modelFilter;
      const sizeFilter = this.sizeFilter;

      if (
        (modelFilter.length && sizeFilter.length) ||
        (sizeFilter.length &&
          collection.length &&
          modelFilter.length &&
          collection.length &&
          modelFilter.length &&
          sizeFilter.length)
      ) {
        return this.products.filter(function (product) {
          
          return (
            (modelFilter.includes(product.model) &&
              sizeFilter.includes(product.size)) ||
            (modelFilter.includes(product.model) &&
              collection.includes(product.collection) &&
              sizeFilter.includes(product.size) &&
              collection.includes(product.collection) &&
              modelFilter.includes(product.model) &&
              sizeFilter.includes(product.size))
          );
        });
      } else if (collection.length) {
        
        return this.products.filter(function (product) {
          return collection.includes(product.collection);
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
.inner .mobile-header {
  align-items: center;
  display: flex;
  justify-content: end;

  padding: 20px 15px 20px 30px;
}
.inner .mobile-header .logo {
  width: 155px;
}
.inner .mobile-header .mobile-close-btn:after,
.inner .mobile-header .mobile-close-btn:before {
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
}

.offcanvas-mobile-card .inner {
  position: absolute;
  width: 65%;

  height: 100%;

  top: 0;
  text-align: left;
  transition: all 0.3s;
  transform: translateX(100%);
  cursor: default;
  background-color: #fff;
  z-index: 1;
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
.inner .mobile-header .mobile-close-btn {
  cursor: pointer;
  border: none;

  width: 40px;
  flex-shrink: 0;
  position: relative;
  background-color: transparent;
}

.inner .mobile-header .mobile-close-btn:after,
.inner .mobile-header .mobile-close-btn:before {
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

.inner .mobile-header .mobile-close-btn:before {
  transform: rotate(-45deg);
}

.inner .mobile-header .mobile-close-btn:after {
  transform: rotate(45deg);
}

.offcanvas-navigation ul li a {
  color: #212529;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 0;
  display: block;
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

.slider_dots,
.page-slider_dots {
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
.page-slider_dots > li {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 45px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}
.slider_dots > li:hover {
  background-color: #717171;
}
.slider_dots > .productActive {
  background-color: #717171;
}
.page-slider_dots > li > .productActive {
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 90%), 0 0 1px 2px #3899ec;
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
.slider_dots > li.productActive > button:before {
  opacity: 1;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade {
  margin-right: 10px;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px);

  opacity: 0;
}
</style>