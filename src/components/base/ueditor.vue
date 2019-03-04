<template>
    <div :id="editorId" class="vue-ueditor" :class="{fullscreen: isFullScreen}"></div>
</template>

<script>
    import '../../../static/UEditor/ueditor.config.js'
    import '../../../static/UEditor/ueditor.all.js'
    import '../../../static/UEditor/lang/zh-cn/zh-cn.js'
    export default {
        name: "ueditor",
        props: {
            editorId: {
                type: String
            },
            config: {
                type: Object,
                default: function () {
                    return {
                        //可以在此处定义工具栏的内容
                        toolbars: [['fullscreen', 'preview', 'source', '|', 'undo', 'redo', '|',
                        'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
                        'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
                        'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                        'directionalityltr', 'directionalityrtl', 'indent', '|',
                        'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
                        'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
                        'simpleupload', /*'insertimage',*/ 'emotion', /*'scrawl', 'insertvideo', 'music'*/, 'attachment', /*'map', 'gmap', 'insertframe',*/ 'insertcode', /*'webapp', */'pagebreak', 'template', 'background', '|',
                        'horizontal', 'date', 'time', 'spechars', /*'snapscreen', 'wordimage',*/ '|',
                        'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
                        'print', 'searchreplace', /*'drafts',*/ 'help']],
                        autoHeightEnabled: false,
                        autoFloatEnabled: true,
//                        initialContent:'请输入内容',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
                        autoClearinitialContent:true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
                        initialFrameWidth: null,
                        initialFrameHeight: 400,
                        BaseUrl: '',
                        UEDITOR_HOME_URL: '/static/UEditor/'
                    }
                }
            },
        },
        data() {
            return {
                editor: null,
                ready: false,
                content: '',
                isFullScreen: false,
            }
        },
        mounted() {
            //初始化UE
            UE.Editor.prototype._bkGetActionUrl =  UE.Editor.prototype._bkGetActionUrl  || UE.Editor.prototype.getActionUrl;
            UE.Editor.prototype.getActionUrl = function(action) {
                if (action == 'uploadimage' || action == 'imageActionName' || action == 'uploadfile' ) {
                    return  '/api/v1/attachmentFile/upload.do?upload=read_public&returnType=' + action;
                }   else {
                    return this._bkGetActionUrl.call(this, action);
                }
            };
            this.editor = UE.delEditor(this.editorId);
            this.editor = UE.getEditor(this.editorId, this.config);
            this.editor.addListener("ready", ()=>{
                this.editor.setContent(this.content); // 确保UE加载完成后，放入内容。
                this.ready = true;
            });
            this.editor.addListener('beforefullscreenchange',(event,isFullScreen)=>{
                this.isFullScreen = isFullScreen;
            })
        },
        destoryed() {
            this.editor.destory();
        },
        methods:{
            getContent: function(){
                return this.editor.getContent();
            },
            getContentTxt: function(){
                return this.editor.getContentTxt();
            },
            setContent: function (s) {
                if(this.ready){
                    this.editor.setContent(s);
                }
                else{
                    this.content = s;
                }
            },
            getEditor(){
                return this.editor;
            }
        }
    }
</script>

<style lang="less"  >
    .vue-ueditor {
        background-color: #fff;
        border: 1px solid #d4d4d4;
        .edui-editor.edui-default{
            border: none;
        }
        .edui-editor, .edui-editor-toolbarbox, .edui-editor-iframeholder {
            z-index: 100 !important;
        }
    }
    
    .vue-ueditor.fullscreen{
        .edui-editor {
            background-color: #fff;
            z-index: 10099 !important;
        }
    }
</style>