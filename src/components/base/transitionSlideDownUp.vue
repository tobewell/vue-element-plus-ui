<template>
    <transition 
        @enter="enter"
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave" 
        :css="false"
        >
        <slot></slot>
    </transition>
</template>

<script> 
import Volecity from 'velocity-animate'
export default {
    name: 'transitionSlideDownUp',
    data(){
        return { 
        }
    },
    methods: {
        beforeEnter: function (el) {
        },
        enter: function(el, done){
            Velocity(el, 'slideDown', { duration: 200 , complete: done})
            // done();
        },
        afterEnter: function (el) {
        },
        beforeLeave: function(el){

        },
        leave: function (el, done) {
            Velocity(el, 'slideUp', { duration: 200, complete: done})
            // done();
        }

    },
}
</script>

