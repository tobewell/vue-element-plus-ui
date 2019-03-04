<template>
    <div class="p16">
        <div class="">使用plupload重新封装vue element-ui upload组件，使它支持IE9</div>
        <div>
            <div style="width: 400px;">
            <h3  class="p10 c-blue">oss文件上传demo文本列表模式---listType:text</h3>
            <upload  ref="uploadEl" 
                    :file-list="fileList"
                    :on-success="onSuccess"
                    list-type="text"
                    :multiple="multiple"
                    :before-upload="beforeUpload"
                    :finish-upload="finishUpload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                />
            </div>

            <h3  class="p10 c-blue">oss文件上传demo 图片模式---listType:picture</h3>
            <upload  ref="uploadEl2" 
                :file-list="fileList2"
                :on-success="onSuccess"
                list-type="picture"
                :multiple="multiple"
                :before-upload="beforeUpload"
                :finish-upload="finishUpload"
                action="https://jsonplaceholder.typicode.com/posts/"
                />


            <h3 class="p10 c-blue">oss文件上传demo图片卡片模式---listType:picture-card</h3>
            <upload  ref="uploadEl3" 
                :file-list="fileList3"
                :on-success="onSuccess"
                list-type="picture-card"
                :multiple="multiple"
                :before-upload="beforeUpload"
                :finish-upload="finishUpload"
               action="https://jsonplaceholder.typicode.com/posts/"
                />
        </div>
    </div>
</template>
<script>
import upload from '@/components/base/uploadPlus'
export default {
     components: {
            upload,
        },
        data() {
            return { 
                autoUpload: false,
                listType: 'text',
                multiple: true,
                fileList: [
                   {name: 'food.jpeg',
                       url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                   {name: 'food2',
                       suffix: 'png',
                       url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                   }
                        ],
                fileList2:[
                    {name: 'food.jpeg',
                       url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                ],
                fileList3:[
                    {name: 'food.jpeg',
                       url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                   {name: 'food2.png',
                       url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                   }
                ],
                
            };
        },
        methods:{
            submitUpload(){

            },
            onSuccess(vo, file){
                console.log(vo,file);
            },
            beforeUpload(){
                console.log("before", new Date());
            },
            finishUpload(){
                console.log("finish", new Date());
            }
        }
}
</script>

