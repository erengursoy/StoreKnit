
<template>
  <div id="app" class="slideshow-container flex flex-col items-center ">
    <div class="mySlide w-1/2">
       <div class="numbertext">{{direction}}</div>
       <div class="numbertext">{{eren}}</div>
      <img
        v-for="(src, index) in data"
        :key="src"
        :src="src"
        v-show="index === active"
      />
    </div>
    <a class="prev" v-if="prev" @click="change(active - 1)">&#10094;</a>
    <a class="next" v-if="next" @click="change(active + 1)">&#10095;</a>
    <ul  class="slider_dots">
      <li  v-for="(src,index) in data" :key="index" :class="{active:index === active}" @click="change(index)">
        {{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  el: "#app",
  props:{
    data:{default: () => []},
    eren:{default: {}},
    prev:{
      default:false,
    },
    next:{
      default:false,
    }
    
  },
  data: function () {
    return {
      active: 0,
     direction: 1,
     

      
    };
  },
  computed: {
    total() {
      return this.data.length;
    },
  },
  methods: {
    change(index) {
      
      this.direction = (index + this.total) %this.total +1;
      this.active = (index + this.total) % this.total;
     
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
.slider_dots > li:hover{
   background-color: #717171;
}
.slider_dots > .active{
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
  content: '•';
  text-align: center;
  opacity: 0.25;
  color: black;
}

.slider_dots > li > button:hover:before,
.slider_dots > li.active > button:before {
  opacity: 1;
}
</style>