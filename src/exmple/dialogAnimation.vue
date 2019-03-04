<template>
    <div class="p16">
        <div class="">覆盖el-dialog 的显示隐藏动画</div>
        <div class="">动画效果为缩放</div>
        <div>
            <div style="width: 400px;">
                <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
                <el-dialog title="这是一个窗口" 
                :visible.sync="dialogVisible"
                    width="30%">
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
     components: {
        },
        data() {
            return { 
                dialogVisible: false,
                
            };
        },
        methods:{
            
        }
}
</script>

