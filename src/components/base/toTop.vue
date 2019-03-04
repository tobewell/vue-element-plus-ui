<template lang="html">
  <transition name="fade">
    <div id="back-to-top" v-show="show" class="trans" title="返回顶部" @click="backToTop">
      <i class="icon-totop"></i>
    </div>
  </transition>
</template>

<script type="es6">
export default {
  name: "to-top",
  data() {
    return {
      show: false
    };
  },
  created() {
    const self = this;
    if (window.addEventListener) {
      window.addEventListener("scroll", self.handleScroll, false);
    } else if (window.attachEvent) {
      window.attachEvent("onscroll", self.handleScroll);
    } else {
      window["onscroll"] = self.handleScroll;
    }
  },
  beforeDestory() {
    const self = this;
    if (window.removeEventListener) {
      window.removeEventListener("scroll", self.handleScroll, false);
    } else if (window.detachEvent) {
      window.detachEvent("onscroll", self.handleScroll);
    } else {
      window["onscroll"] = null;
    }
  },
  methods: {
    backToTop() {
      clearInterval(this.scrollToptimer);
      this.scrollToptimer = setInterval(() => {
        // console.log("定时循环回到顶部")
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        var speed = top / 8;
        if (document.body.scrollTop != 0) {
          document.body.scrollTop -= speed;
        } else {
          document.documentElement.scrollTop -= speed;
        }
        if (top <= 0) {
          clearInterval(this.scrollToptimer);
        }
      }, 10);
      // window.scrollTo(0, 0);
    },
    handleScroll() {
      this.show = (window.scrollY > 400 && true) || false;
    }
  }
};
</script>

<style lang="less" scoped>
#back-to-top {
  position: fixed;
  height: 35px;
  width: 35px;
  right: 20px;
  bottom: 50px;
  font-size: 0;
  overflow: hidden;
  cursor: pointer;
  z-index: 998;
  background-color: #b2c2dd;
}
#back-to-top:hover {
  background-color: #3f67ab;
  box-shadow: 0 0 3px #3f67ab;
  opacity: 0.8;
}

.icon-totop {
  height: 35px;
  width: 35px;
  display: inline-block;
  background-image: url("../../assets/img/totop.svg");
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  text-indent: -999em;
}

.fade-enter-active,
.fade-leave-active {
  -webkit-transition: all 0.25s linear;
  -ms-transition: all 0.25s linear;
  -o-transition: all 0.25s linear;
  -moz-transition: all 0.25s linear;
  transition: all 0.25s linear;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  filter: Alpha(opacity=0);
}
</style>
