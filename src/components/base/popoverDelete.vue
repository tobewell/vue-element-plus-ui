<template>
    <div style="display: inline-block;">
        <el-popover
                ref="popover"
                :placement="placement"
                :width="width"
                v-model="visible">
            <p style="padding: 8px 8px 16px 8px"><slot name="message">确定要删除吗？</slot></p>
            <div style="text-align: center; margin: 0">
                <el-button size="mini" plain    @click="handlerCancel">取消</el-button>
                <el-button size="mini" type="primary"  @click="handlerOk">确定</el-button>
            </div>
        </el-popover>
        <span  v-popover:popover>
        <slot>
            <el-button :size="size" :type="type"><slot name="text">删除</slot></el-button>
        </slot>
        </span>
    </div>
</template>
    
<script>
    export default {
        props:{
            size: {
                type: String,
            },
            type:{
                type: String,
            },
            placement:{
                type: String,
                default: 'top'
            },
            width:{
                type: String,
                default: '160'
            }
        },
        data() {
            return {
                visible: false,
            };
        },
        methods:{
            handlerCancel(){
                this.visible = false;
                this.$emit('cancel');
            },
            handlerOk(){
                this.visible = false;

                this.$emit('confirm');
            },
        },
    }
</script>