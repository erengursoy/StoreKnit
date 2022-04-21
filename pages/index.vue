<template>
  <div>
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
    <div class="home-page">
      <img
        src="~assets/image/11062b_0446c8c911d8433cb2c8550ccc97e582_mv2_d_4368_2912_s_4_2.webp"
        alt=""
      />
    </div>
    <div class="most-loved">
      <div class="title text-center mt-14 ml-4 text-2xl font-bold">
        <h1 class="tracking-widest">EN SEVİLENLER</h1>
        <div class="w-5 h-3px bg-black inline-flex"></div>
      </div>

      <div class="button flex justify-center pb-40 pt-12">
        <a
          class="
            inline-block
            py-5
            px-16
            text-sm
            border border-red-600
            text-red-600
            hover:bg-red-600 hover:text-white
            duration-300
          "
          href=""
          >TÜM ÇANTALAR</a
        >
      </div>
    </div>
    <div class="our-models">
      <div class="container max-w-full">
        <div class="grid grid-row-2">
          <div class="grid grid-cols-2">
            <div class="left">
              <div class="card bg-our-models-card py-8.9">
                <div class="img flex justify-center">
                  <img
                    src="~/assets/image/0edf2e_3016e31db9294e4e9512afd243fd9184_mv2 (2).webp"
                    alt=""
                  />
                </div>
                <div class="title text-center">
                  <h1 class="pt-5">AHŞAP SAPLI KOL ÇANTASI</h1>
                </div>
                <div class="text text-center">
                  <h1 class="pt-4 mr-2 text-red-700">
                    <span class="line-through mr-2">645,00₺</span>350,00₺
                  </h1>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="img absolute">
                <img
                  class="h-full"
                  src="~/assets/image/0edf2e_cced6289a595410f8f61307b9d2377bb_mv2.webp"
                  alt=""
                />
              </div>
              <div
                class="
                  title
                  relative
                  top-300px
                  flex
                  justify-center
                  text-white
                  underline
                  font-bold
                  text-2xl
                "
              >
                <a href="">ÇANTA MODELLERİMİZ</a>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="left">
              <div class="card">
                <div class="img flex justify-center absolute">
                  <img
                    src="~/assets/image/c9043cd18a0744928ce22b6745b60a2e.webp"
                    alt=""
                  />
                </div>

                <div
                  class="
                    title
                    relative
                    top-300px
                    flex
                    justify-center
                    text-white
                    underline
                    font-bold
                    text-2xl
                  "
                >
                  <a class="bg-our-pet-products" href="">PET ÜRÜNLERİMİZ</a>
                </div>
              </div>
            </div>
            <div class="right bg-our-models-card pb-15.7">
              <div class="img">
                <img
                  class="h-full"
                  src="~/assets/image/0edf2e_8b439b9a666f46ada77455df9c5fa623_mv2.webp"
                  alt=""
                />
              </div>
              <div class="title text-center">
                <h1 class="pt-5">AHŞAP SAPLI KOL ÇANTASI</h1>
              </div>
              <div class="text text-center">
                <h1 class="pt-4 mr-2 text-red-700">
                  <span class="line-through mr-2">645,00₺</span>350,00₺
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about">
      <about-second></about-second>
      <!--
      <div class="container mx-auto">
        <div class="grid grid-rows-1">
          <div class="grid grid-cols-3">
            <div class="card-first flex justify-center">
              <div class="img absolute">
                <img
                  src="~/assets/image/ea71bb_a098804073f8481dab7214af6904a585_mv2_d_4601_3315_s_4_2.webp"
                  alt=""
                />
              </div>
              <div class="description text-center relative top-32">
                <div class="title pb-3">
                  <h1>Family Owned</h1>
                </div>
                <div class="text">
                  <h1>BRAND</h1>
                </div>
                <div class="horizontal">
                  <div class="w-5 h-3px bg-black inline-flex"></div>
                </div>
                <div class="link pt-7 underline">
                  <a href="">Read our story</a>
                </div>
              </div>
            </div>
            <div class="card-second flex justify-center">
              <div class="img absolute">
                <img
                  src="~/assets/image/ea71bb_049132934a484c96b5c05403933e4539_mv2_d_6720_4480_s_4_2.webp"
                  alt=""
                />
              </div>
              <div class="description text-center relative top-32">
                <div class="title pb-3">
                  <h1>Hand Crafted</h1>
                </div>
                <div class="text">
                  <h1>PRODUCTS</h1>
                </div>
                <div class="horizontal">
                  <div class="w-5 h-3px bg-black inline-flex"></div>
                </div>
                <div class="link pt-7 underline">
                  <a href="">About our leather</a>
                </div>
              </div>
            </div>
            <div class="card-third flex justify-center">
              <div class="img absolute">
                <img
                  src="~/assets/image/ea71bb_54a6c9dcf04b481fa3d41833ea7a29f6_mv2_d_1984_1441_s_2.webp"
                  alt=""
                />
              </div>
              <div class="description text-center relative top-32">
                <div class="title pb-3">
                  <h1>Created in the</h1>
                </div>
                <div class="text">
                  <h1>USA</h1>
                </div>
                <div class="horizontal">
                  <div class="w-5 h-3px bg-black inline-flex"></div>
                </div>
                <div class="link pt-7">
                  <a href="">Learn our process</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      -->
    </div>
    <div class="follow-us bg-our-models-card">
      <div class="title text-center text-2xl font-bold">
        <h1 class="tracking-widest pt-28">BİZİ TAKİP EDİN</h1>
      </div>
      <div class="link text-center text-xl mt-5 pb-12 text-red-700 italic">
        <a href="">@knitpett</a>
      </div>
      <div class="container mx-0">
        <div class="flex flex-wrap justify-center mt-20">
          <div class="team-item flex flex-col lg:w-1/5 sm:w-1/2">
            <div class="img self-center">
              <img
                class=""
                src="~/assets/image/ea71bb_54a6c9dcf04b481fa3d41833ea7a29f6_mv2_d_1984_1441_s_2.webp"
                alt=""
              />
            </div>
          </div>
          <div class="team-item flex flex-col lg:w-1/5 sm:w-1/2">
            <div class="img self-center">
              <img
                class=""
                src="~/assets/image/ea71bb_54a6c9dcf04b481fa3d41833ea7a29f6_mv2_d_1984_1441_s_2.webp"
                alt=""
              />
            </div>
          </div>
          <div class="team-item flex flex-col lg:w-1/5 sm:w-1/2">
            <div class="img self-center">
              <img
                class=""
                src="~/assets/image/ea71bb_54a6c9dcf04b481fa3d41833ea7a29f6_mv2_d_1984_1441_s_2.webp"
                alt=""
              />
            </div>
          </div>
          <div class="team-item flex flex-col lg:w-1/5 sm:w-1/2">
            <div class="img self-center">
              <img
                class=""
                src="~/assets/image/ea71bb_54a6c9dcf04b481fa3d41833ea7a29f6_mv2_d_1984_1441_s_2.webp"
                alt=""
              />
            </div>
          </div>
          <div class="team-item flex flex-col lg:w-1/5 sm:w-1/2">
            <div class="img self-center">
              <img
                class=""
                src="~/assets/image/ea71bb_54a6c9dcf04b481fa3d41833ea7a29f6_mv2_d_1984_1441_s_2.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="grid grid-cols-3 py-12">
          <div class="title text-center">
            <div class="horizontal pb-3 ">
              <div class="w-5 h-3px bg-red-700 inline-flex"></div>
            </div>
            <h1 class="text-2xl text-red-700 italic">Worldwide shipping</h1>
          </div>
          <div class="title text-center">
            <div class="horizontal pb-3">
              <div class="w-5 h-3px bg-red-700 inline-flex"></div>
            </div>
            <h1 class="text-2xl text-red-700 italic">Easy 30 day returns</h1>
          </div>
          <div class="title text-center">
            <div class="horizontal pb-3">
              <div class="w-5 h-3px bg-red-700 inline-flex"></div>
            </div>
            <h1 class="text-2xl text-red-700 italic">12 month warranty</h1>
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
      menuOpen: false,

      charSlide: [
        require("~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp"),
        require("~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp"),
        require("~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp"),
        require("~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp"),
        require("~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp"),
        require("~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp"),
        require("~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp"),
      ],
    };
  },
};
</script>
