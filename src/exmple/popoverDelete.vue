<template>
    <div class="p16">
        <div class="">轻量级删除confirm组件</div>
        <div class="">平时我们习惯使用模态框提示用户是否确认进行删除操作，其实这个模态框对用户体验不是很友好，会造成交互断层</div>
        <div>
            <div style="width: 400px;">
            <h3  class="p10 c-blue">简单例子</h3>
                <popover-delete @cancel="handlerCancel"
                    @confirm="handerConfirm"></popover-delete>
            </div>
            <h3  class="p10 c-blue">删除按钮样式大小</h3>
                <popover-delete @cancel="handlerCancel"
                    @confirm="handerConfirm"
                    size="mini"
                    type="primary"></popover-delete>
                <popover-delete @cancel="handlerCancel"
                    @confirm="handerConfirm"
                    size="small"
                    type="danger"></popover-delete>
                <popover-delete @cancel="handlerCancel"
                    @confirm="handerConfirm"
                    size="medium"
                    type="warning"></popover-delete>
             <h3  class="p10 c-blue">利用slot自定义删除按钮</h3>
                <popover-delete @cancel="handlerCancel"
                    @confirm="handerConfirm">
                     <a>删除</a>
                </popover-delete> 
             
        </div>
    </div>
</template>
<script>
import popoverDelete from '@/components/base/popoverDelete'
export default {
     components: {
            popoverDelete,
        },
        data() {
            return { 
                
                
            };
        },
        methods:{
            handlerCancel(){
                this.$message.info('取消删除')
            },
            handerConfirm(){
                this.$message.success('确认删除')
            }, 
        }
}
</script>

