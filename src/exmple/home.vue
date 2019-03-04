<template>
    <div class="main-container">
        <div class="head-wrap f20 tc c-primary">
            <div class="pt8">
                基于vue element-ui扩展组件库
            </div>    
        </div>
        
            <div class="left-sider">
                <el-scrollbar>
                    <ul>
                        <li v-for="(item, index) in menus" :key="index"
                            @click="clickMenu(item)"> {{item.name}} </li> 

                    </ul> 
                </el-scrollbar>
            </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            menus:[
                {name: '重新封装支持IE9的upload', path: '/'},
                {name: '轻便删除提示popoverDeletet', path: '/popoverDelete'},
                {name: '覆盖el-dialog 的显示隐藏动画', path: '/dialogAnimation'},
                {name: '可下拉搜索的select', path: '/popoverSelect'},
            ]
        }
    },
    methods:{
        clickMenu(item){
            this.$router.push(item.path)
        },
    }
}
</script>

<style lang="less"> 
@import "~@/style/variable";
    @head-wrap-height: 45px;
    @leftSideWidth: 200px;
    .main-container{
        .head-wrap{
            color:  #FFF;
            height: @head-wrap-height;
            background: @c-blue;
        }
        .left-sider{
            position: absolute;
            left: 0;
            width: @leftSideWidth;
            height: calc(~"100vh" - @head-wrap-height );
            border-right: 1px solid #ccc; 
            ul{
                 height: calc(~"100vh" - @head-wrap-height );
                li{
                    padding: 5px 8px;
                    border-bottom: 1px solid #efefef;
                    cursor: pointer;
                }
                li:hover{
                    background-color: #efefef;
                }
            }
        }
        .main-content{
            margin-left: @leftSideWidth;
        }
    }

</style>