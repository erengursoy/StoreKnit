<template>
  <div class="OuterContainer" id="app">
  <div class="CollectionsSlider">
    <button class="CollectionsSlider-button  CollectionsSlider-button--right" @click="next">Next</button>
    <button class="CollectionsSlider-button" @click="prev">Prev</button> 
    <div class="CollectionsSlider-innerContainer">
      <div class="CollectionsSlider-collectionContainer" v-bind:class="{'CollectionsSlider-collectionContainer--noAnim': !isAnimated}" v-bind:style="{left:calcLeft(), width: calcWidth()}">
        <img :src="items[items.length - 2]" class="CollectionsSlider-collection CollectionsSlider-collection--last">
        <img :src="items[items.length - 1]" class="CollectionsSlider-collection CollectionsSlider-collection--last">
        <img v-for="item in items" :src="item" class="CollectionsSlider-collection">
        <img :src="items[0]" class="CollectionsSlider-collection CollectionsSlider-collection--first">
        <img :src="items[1]" class="CollectionsSlider-collection CollectionsSlider-collection--first">
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  
   el: '#app',
  data() {
    return {
      position: -2,
    isAnimated: true,
    items: ['~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp', '~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp', '~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp' ,'~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp', '~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp', '~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp', '~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp', '~/assets/image/0edf2e_1f4134f138754940bee2fecc5dd1f6aa_mv2.webp'],
    collectionWidth: 370
    }
    
  },
  methods: {
    calcLeft() {
       return this.position * this.collectionWidth + this.collectionWidth / 2 + 'px'
    },
    calcWidth() {
      return this.collectionWidth * (this.items.length + 5) + 'px'
    },
    next() {
      if (this.position === (- this.items.length - 2)) {
        this.isAnimated = false
        this.position = -2
      }
      setTimeout(() => {
        this.isAnimated = true 
        this.position --
      }, 500)
    },
    prev() {
      if (this.position === -2) {
        this.isAnimated = false
        this.position = -this.items.length - 2
      }
      setTimeout(() => {
        this.isAnimated = true
        this.position ++
      }, 500)
    }
  }

}
</script>

<style lang="scss">>
.OuterContainer {
  width: 800px;
  margin: 0 auto;
}

.CollectionsSlider {
  position: relative;
  
  &-button {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  &-button--right {
    left: auto; 
    right: 0;
  }
  
  &-innerContainer {
    width: 740px;
    height: 170px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
  }
  
  &-collectionContainer {
    height: 170px;
    position: absolute;
    transition: left 1s ease-in-out;
  }
  
  &-collectionContainer--noAnim {
    transition: none;
  }
  
  &-collection {
    margin: 10px;
  }
  
  &-collection--first {
    border: 1px solid green;
  }
  
  
  &-collection--last {
    border: 1px solid blue;
  }
}
</style>
