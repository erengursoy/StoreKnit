<template>
  <div id="all-products">
       <div class="header bg-white">
      <div class="logo mt-5">
        <h1 class="text-center italic text-5xl text-red-700">StoreKnit</h1>
      </div>

  <div class="menu">
        <ul class="flex justify-center mt-12 mb-8">
          <li class="mr-24"><a href="/index">Anasayfa</a> </li>
          <li class="mr-24"><a href="/all-products">Tüm Ürünler</a> </li>
          <li class="mr-24"><a href="/about">Hakkımızda</a> </li>
          <li><a href="/contact">İletişim</a> </li>
        </ul>
      </div>
    </div>
    <div class="title text-center pt-20 pb-10 text-4xl font-bold">
      <h1>TÜM ÜRÜNLER</h1>
    </div>
    <div class="container mx-auto">
      <div class="grid grid-rows-1">
        <div class="grid grid-cols-5">
          <div class="left col-span-1 pt-5 pl-16">
            
            <div class="filter">
                <div class="title text-2xl  block pb-4">
              <h1>Filtreleme Kriteri:</h1>
              
            </div>
            <hr class="w-44">
              <a
                class="cursor-pointer block py-4"
                
                v-on:click="
                  showCollection = !showCollection
                "
                >Koleksiyon <span class="float-right text-xl font-bold mr-3 pb-1" v-if="!showCollection " >+</span > <span class="float-right text-xl font-bold mr-3" v-if="showCollection">-</span></a
              >
              
              <hr class="w-44">
              <div v-show="showCollection">
                <div class="">
                  <h1>eren</h1>
                </div>
              </div>
              <a
                class=" cursor-pointer block py-4"
                v-on:click="
                  showPrice =
                    !showPrice
                "
                >Fiyat <span class="float-right text-xl font-bold mr-3 pb-1" v-if="!showPrice" >+</span > <span class="float-right text-xl font-bold mr-3" v-if="showPrice">-</span></a
              >
              <hr class="w-44">
              <div v-show="showPrice">
                <div class="">
                  <h1>eren</h1>
                </div>
              </div>
              <a
                class=" cursor-pointer block py-4"
                v-on:click="
                  showModel = !showModel
                "
                >Model  <span class="float-right text-xl font-bold mr-3 pb-1" v-if="!showModel" >+</span > <span class="float-right text-xl font-bold mr-3" v-if="showModel">-</span></a
              >
              <hr class="w-44">
              <div v-show="showModel">
                <div class="">
                  <h1>eren</h1>
                </div>
              </div>
              <a
                class=" cursor-pointer block py-4"
                v-on:click="
                  showSize = !showSize
                "
                >Size   <span class="float-right text-xl font-bold mr-3 pb-1" v-if="!showSize" >+</span > <span class="float-right text-xl font-bold mr-3" v-if="showSize">-</span></a
                
              >
              <hr class="w-44">
              <div v-show="showSize">
                <div class="">
                  <h1>eren</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="right col-span-4">
            <div class="grid grid-cols-4">
              <div
                v-for="(item, index) in products"
                class="card p-7 text-center"
              >
                <div class="img">
                  <img :src="item.img" alt="" />
                </div>
                <div v-if="item.bestSell" class="best-sell text-white inline-block absolute bottom-241px translate-x-99px bg-best-sell px-4 py-1 text-xs">
                    <h1>Best seller</h1>
                </div>
                <div
                  class="
                    hover
                    bg-white
                    p-3
                    absolute
                    duration-500
                    transform
                    translate-y-0
                    opacity-0
                    w-2/12
                  "
                >
                  <h1>hızlı görünüm</h1>
                </div>
                <div class="title pt-3">
                  <h1>{{ item.productName }}</h1>
                </div>
                <div class="text pt-1 text-red-700 italic">
                  <h1>{{ item.productPrice }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container mx-auto  pt-28 pb-40">
        <div class="grid grid-cols-5">
        <div class="logo">
<h1 class="text-center italic text-5xl text-red-700">StoreKnit</h1>
        </div>
        <div class="footer-menu col-span-2 pl-24 pt-5">
       <ul>
         <li class="pt-4">
           <a href="">Anasayfa</a>
          
         </li>
         <li class="pt-4">
           <a href="">Tüm Ürünler</a>
           
         </li>
         <li class="pt-4">
           <a href="">Hakkımızda</a>
           
         </li>
         <li class="pt-4">
           <a href=""> İletişim</a>
          
         </li>
       </ul>
        </div>
        <div class="social-media col-span-2 pl-16 pt-5">
         <ul>
           <li class="pt-4"><a href="">Facebook</a></li>
           <li class="pt-4"><a href="">İnstagram</a></li>
           
         </ul>
        </div>
        </div>
      </div>
      <div class="bg-our-models-card text-center p-4">
        <h1>©2022 storeknit</h1>
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
      showSize:false,
      
      products: [
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell:true,
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell:false,
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell:false,
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell:true,
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell:false,
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell:true,
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell:false,
        },
        {
          img: require("~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2 (2).webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell:false,
        },
        {
          img: require("~/assets/image/ea71bb_a098804073f8481dab7214af6904a585_mv2_d_4601_3315_s_4_2.webp"),
          productName: "Evcil Hayvan Yatağı",
          productPrice: "395,00₺",
          bestSell:false,
        },
      ],
    };
  },
};
</script>
<style>
.card:hover .hover {
  opacity: 1;
  transform: translateY(-47px);
}
</style>