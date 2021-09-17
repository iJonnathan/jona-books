<template>
  <div class="book-component" style="width:80px;padding-left:4%">
    <div class="book-container " :style="cssVars">
      <div class="book">
        <img :src="coverpath">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    coverpath: String,
    widthBook: String,
    heightBook: String
  },
  computed: {
    cssVars() {
      return {

        '--width': this.widthBook + 'px',
        '--height': this.heightBook + 'px'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  vars="{ ancho }">
.book-container {
  --rotate: -25deg;
  --perspective: 600px;
  --transitionDelay: 0.5s;
  --radius: 2px;
  --thickness: 8px;
  --bgColor: #01060f;
  transition: transform .1s;
}

.book-container:hover {
  --rotate: 0deg;
  transform: scale(1.03);
  
  
  
}

.book {
  margin-left: calc(-12px - var(--thickness));
  width: var(--width);
  height: var(--height);
  transform: perspective(var(--perspective)) rotateY(var(--rotate));
  transition: transform ease var(--transitionDelay);
  position: relative;
}

.book img {
  margin: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
}

.book:before,
.book:after {
  position: absolute;
  top: calc(1.5% + var(--thickness)/7.5);
  height: calc(97.5% - var(--thickness)/2.5);
  content: ' ';
  z-index: -1;
}

.book:before {
  width: 100%;
  top: calc(0% + var(--thickness)/7.5);
  height: calc(100.5% - var(--thickness)/1.75);
  left: calc(var(--thickness) + 1px);
  background-color: var(--bgColor);
  box-shadow: 5px 5px 20px #333;
  border-radius: var(--radius);
}

.book:after {
  width: var(--thickness);
  left: 100%;
  background-color: #e3e9fa;
  box-shadow: inset 0px 0px 5px #aaa;
  transform: perspective(100px) rotateY(25deg);
}

</style>
