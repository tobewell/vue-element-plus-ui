<template>
	<div class="upload-plus" :class="uploadClass" :id="containerId">

		<ul v-if="listType === 'picture-card' || listType === 'picture'" class="el-upload-list el-upload-list--picture-card">
			<li v-for="(item, i) in fileList" :key="item.id" :tabindex="i" class="el-upload-list__item " :class="item.waitUpload ? 'is-ready' : 'is-success'" :data-id="item.id">
				<div class="picture-show-contatiner el-upload-list__item-thumbnail" 
					:style="{'background-image': 'url(' + item.url + ')'}"></div>
				<a class="el-upload-list__item-name">
					<i class="el-icon-document"></i>{{item.name }}</a>
				<label class="el-upload-list__item-status-label">
					<i class="el-icon-upload-success el-icon-check"></i>
				</label>
				<span class="el-upload-list__item-actions">
					<el-tooltip content="点击查看图片">	
						<span class="el-upload-list__item-preview">
							<i class="el-icon-zoom-in" @click="handlePictureCardPreview(item)"></i>
						</span>
					</el-tooltip>
					<el-tooltip v-if="!readonly" content="点击删除图片">
						<span class="el-upload-list__item-delete">
							<popover-delete @confirm="removeFile(item)">
								<i class="el-icon-delete"></i>
							</popover-delete>
						</span>
					</el-tooltip>
					<el-tooltip v-if="showExtBtn && !readonly" :content="extBtnTip">
						<span class="el-upload-list__item-preview">
							<i class="el-icon-setting" @click="onExtBtn(item)"></i>
						</span>
					</el-tooltip>
				</span>
				<el-progress v-if="item.waitUpload" type="circle" :stroke-width="strokeWidth" :percentage="item.percent" :status="item.percent === 100 ? 'success' : 'text'"></el-progress>
				<slot name="otherSlot" :data="{item,index:i}"></slot>
				<!-- <slot :item="item"></slot> -->
			</li>

		</ul>

		<div style="display:inline;" v-show="!readonly">
			
			<!-- text 样式 自动上传-->
			<el-button v-if="listType == 'text' && autoUpload" :id="selectFileId" :size="btnSize" icon="el-icon-upload" type="primary" >点击上传
			</el-button>
			<!-- text 样式 且 不自动上传 -->
			<div v-else-if="listType == 'text' && !autoUpload">
				<el-button :id="selectFileId" :size="btnSize" type="primary" icon="el-icon-document">选取文件</el-button>
				<el-button v-show="fileList.length > 0" :size="btnSize" type="success" class="ml8" @click="startUpload" icon="el-icon-upload">上传到服务器</el-button>
			</div>
			<!-- picture 'picture-card' 样式 自动上传-->
			<!-- 原来逻辑 v-show="showPictureSelectBtn" v-if="listType === 'picture-card' || listType === 'picture'"  -->
			<div 
				v-show="showPictureSelectBtn"
				:id="selectFileId" class="el-upload el-upload--picture-card mb8">
				<slot name="picture-wrap">
					<i class="el-icon-plus"></i>
				</slot>
			</div>
		</div>
		<slot name="tip"></slot>

		<!--如果显示文件列表 且 是 text 方式显示-->
		<ul v-if="showFileList && listType === 'text'" class="el-upload-list el-upload-list--text">
			<li v-for="(item, i) in fileList" tabindex="0" :key="item.id ? item.id : item.localId" class="el-upload-list__item " :class="item.waitUpload ? 'is-ready' : 'is-success'"
				:style="readonly&&i===0?'margin-top:0px':''">
				<slot name="textLabelSlot" :data="{item,index:i}"></slot>
				<a class="el-upload-list__item-name" @click="clickFileHandler(item)">
					<i class="el-icon-document"></i>{{item.name }}</a>
				<label class="el-upload-list__item-status-label" :class="{'block-im': readonly}">
					<i class="el-icon-upload-success el-icon-circle-check"></i>
				</label>
				<el-tooltip v-if="!readonly"  content="点击删除文件">
					<popover-delete class="fr mr24" @confirm="removeFile(item)">
						<i class="el-icon-close"></i>
					</popover-delete>
				</el-tooltip>
				<el-progress v-if="item.waitUpload" :stroke-width="strokeWidth" :percentage="item.percent" :status="item.percent === 100 ? 'success' : 'text'"></el-progress>
			</li>
		</ul>

		<el-dialog top="7vh" :visible.sync="dialogVisible"   custom-class="upload-image-dialog" size="tiny" style="z-index: 100000" :append-to-body="true">
			<img width="100%" :src="dialogImagePath" alt="">
		</el-dialog>

	</div>
</template>
<script>
import plupload from '../../../static/pupload/plupload-2.3.6/plupload.full.min'
import popoverDelete from '@/components/base/popoverDelete'

function noop() {}

export default {
	components: {
		popoverDelete
	},
	name: 'ploadPlus',
	props: {
		uploadClass: String,
		name: {
			type: String,
			default: 'file'
		},
		action:{

		},
		drag: Boolean,
		showFileList: {
			type: Boolean,
			default: true
		},
		accept: String,
		type: {
			type: String,
			default: 'select'
		},
		onSuccess: {
			type: Function,
			default: noop
		},
		beforeRemove: {
			type: Function,
			default: noop
		},
		afterRemove: {
			type: Function,
			default: noop
		},
		onError: {
			type: Function,
			default: noop
		},
		beforeUpload:{
			type: Function,
			default: noop
		},
		finishUpload:{
			type: Function,
			default: noop
		},
		fileList: {
			type: Array,
			default() {
				return []
			}
		},
		autoUpload: {
			type: Boolean,
			default: true
		},
		listType: {
			type: String,
			default: 'text' // text,picture,picture-card
		},
		readonly:{//只读模式
			type: Boolean,
			default: false
		},
		btnSize: {
			type: String,
			default: 'small' // medium, small, mini
		},
		disabled: Boolean,
		limit: {//限制上传个数，-1为不限制
			type: Number,
			default: -1
		},
		filters: {
			type: Object,
			default() {
				return {
					ext:
						'swf,txt,doc,docx,ppt,pptx,xls,xlsx,pdf,flv,mp4,wmv,mpeg,jpg,jpeg,png,mp3,zip,rar,cdr',
					max_file_size: '50mb' //最大只能上传50mb的文件
				}
			}
		}, 
		removeType: {
			type: String,
			default: 'server' //删除模式（服务器删除：server , 仅客户端页面移除 client）
		},
		multiple: {//打开window文件选择时窗口时是否可以多选文件
			type: Boolean,
			default: true
		},
		showExtBtn: {
			type: Boolean,
			default: false
		},
		extBtnTip: String,
		onExtBtn: {
			type: Function,
			default: noop
		},
		onClickFile:{//当模式为 “text”时，点击文件列表回调事件
			type: Function,
			default: noop
		},
	},

	data() {
		return {
			strokeWidth: 4,
			dialogVisible: false,
			dialogImagePath: '',
			fileMap: {},
			containerId: 'plupload_container_' + this.guid(), //上传容器id
			selectFileId: 'plupload_selectFile_' + this.guid(), //选择文件按钮id
			postFileSelector: 'plupload_postFile_' + this.guid(), //开始上传按钮id
			uploading: false, //上传状态：是否上传中
		}
	},
	computed: {
		showPictureSelectBtn: function() {
			// 原来逻辑
			// if (this.fileList.length > 0 && this.listType === 'picture') {
			// 	return false
			// }
			// return true
			if(this.listType === 'picture-card'){
				return true
			}else if(this.listType === 'picture'){
				if (this.fileList.length > 0)return false
				else return true
			}else {//text类型不显示
				return false
			}
		}
	},
	watch:{
		fileList(){
			this.refresh();
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.pluploadInit()
		})
	},
	methods: {
		s4() {
			return ((1 + Math.random()) * 0x10000 || 0)
				.toString(16)
				.substring(1)
		},
		guid() {
			return (
				this.s4() +
				Date.now() +
				Math.floor(Math.random() * 999999)
			).replace(new RegExp('\\.', 'gm'), '')
		} /* 获取文件的后缀*/,
		getSuffix(fileName) {
			var pos = fileName.lastIndexOf('.')
			var su = ''
			if (pos != -1) {
				su = fileName.substring(pos + 1)
				su = su.toLowerCase()
			}
			return su
		},
		/* 获取文件的名称部分（不包含后缀）*/
		getName(fileName) {
			var pos = fileName.lastIndexOf('.')
			var name = fileName
			if (pos != -1) {
				name = fileName.substr(0, pos)
			}
			return name
		},
		removeFile(item) {
			if (!item || this.beforeRemove(item) === false) {
				return
			}
			//未上传的文件
			this.fileList.splice(this.fileList.indexOf(item), 1)
			if (item.waitUpload === true || this.removeType === 'client') {
				var file = this.uploader.getFile(item.localId)
				this.uploader.removeFile(file)
				this.afterRemove(item, file)
			} else {
				this.$http
					.post('/api/v1/attachmentFile/deletes.do', [item.id])
					.then(res => {
						//删除成功
						this.afterRemove(item)
					})
			}
		},
		pluploadInit(arg) {
			var that = this
			that.uploader = new plupload.Uploader({
				runtimes: 'html5,flash,silverlight,html4',
				browse_button: that.selectFileId,
				multi_selection: that.multiple,
				dragdrop: true,
				container: document.getElementById(that.containerId),
				flash_swf_url: '/static/pupload/plupload-2.3.6/Moxie.swf',
				silverlight_xap_url: '/static/pupload/plupload-2.3.6/Moxie.xap',
				url: that.action,
				//required_features: 'send_binary_string',
				//	    filters :  [
				//               { title : "Flash", extensions : "swf", mimeTypes :'application/*'},
				//	           { title : "文档", extensions : "txt,doc,docx,ppt,pptx,xls,xlsx,pdf"
				//	        	   	, mimeTypes :'text/plain,application/msword,application/powerpoint,application/excel,application/pdf' },
				//               { title : "视频", extensions : "flv,FLV,mp4,wmv,mpeg", mimeTypes :'video/mp4,video/wmv,video/mpeg,video/x-flv' },
				//	           { title : "图片", extensions : "jpg,jpeg,gif,png", mimeTypes: 'image/jpg,image/jpeg,image/png,image/gif'   },
				////	           { title : "压缩文件", extensions : "zip,ZIP", mimeTypes :'multipart/x-zip' },
				//	           { title : "音频", extensions : "mp3", mimeTypes :'audio/mpeg' }
				//	        ],//最大只能上传500mb的文件//最大只能上传500mb的文件//最大只能上传500mb的文件
				max_file_size: that.filters.max_file_size,
				init: {
					PostInit: function() {
						if(that.listType === 'picture' || that.listType === "picture-card"){
							that.filters.ext = "png,jpg,jpeg";
							that.autoUpload = true;
						}
					},
					FilesAdded: function(up, files) {
						var failFileType = {}
						plupload.each(files, function(file) {
							var name = that.getName(file.name)
							name = name.length > 50 ? name.substr(0, 50) : name
							var suffix = that.getSuffix(file.name)
							if (
								suffix === '' ||
								that.filters.ext.indexOf(suffix) < 0
							) {
								up.removeFile(file)
								failFileType[suffix] = true
								return
							}
							var newFile = {
								name: name,
								suffix: suffix,
								id: null,
								localId: file.id,//本地文件ID
								waitUpload: true,
								size: file.size,
								percent: 0
							}
							//处理图片前端显示
							that.showImg(file, newFile)
							that.fileMap[file.id] = newFile
							if (that.limit === 1) {
								that.removeFile(that.fileList.shift())
							}
							that.fileList.push(newFile)
						})
						var msglist = ''
						for (var key in failFileType) {
							msglist += key + '、'
						}
						if (msglist != '') {
							msglist = msglist.slice(0, msglist.length - 1)
							that.$message.error(
								'不可上传 ' + msglist + ' 类型的文件'
							)
							return
						}
						if (that.autoUpload) {
							that.startUpload()
						}
						that.refresh()
					},
					BeforeUpload: function(up, file) {
						// var f = that.fileMap[file.id]
						// that.getUploadAuth(file, function(data) {
						// 	f.path = data.key
						// 	f.callback = data.callback
						// that.uploader.setOption({
						// 	url: that.action
						// })
						// 	that.uploader.start()
						// })
						that.uploader.start()
					},

					UploadProgress: function(up, file) {
						var f = that.fileMap[file.id]
						f.percent = file.percent
						// console.log(f)
					},

					FileUploaded: function(up, file, info) {
						that.uploader.removeFile(file)
						if (info.status == 200) {
							var tf = that.fileMap[file.id]
							tf.waitUpload = false
							var result = JSON.parse(info.response)
							if (result.success) {
								var ff = JSON.parse(result.msg)
								that.fileList.push(ff)
								that.onSuccess(ff, file)
								if(that.uploader.total.queued === 0){
									that.finishUpload();
								}
							} else {
								that.$message.error(result.msg)
								that.onError(file)
							}
						} else {
							//上传失败处理
							that.onError(file)
						}
					},
					Error: function(up, err) {
						var msg = err.message
						if (err.code == -600) {
							msg = '文件大小超过上传限制'
						}
						that.$message.error(msg)
						that.onError(err)
					},
					UploadComplete: function(uploader,files){

					}
				}
			})
			that.uploader.init()
		},
		startUpload() {
			//开始上传
			if(this.uploader.total.queued > 0){
				this.beforeUpload();
			}
			this.uploader.start()
		},
		showImg(file, obj) {
			if (
				this.listType !== 'picture' &&
				this.listType !== 'picture-card'
			) {
				return
			}

			var imageType = /image.*/
			if (!imageType.test(file.type)) {
				return
			}
			//读取File对象的数据
			try {
				//IE9 不兼容FileReader
				var reader = new FileReader()
				reader.onload = function(evt) {
					obj.url = evt.target.result
				}
				reader.readAsDataURL(file.getNative())
			} catch (error) {
				;
			}
		},
		handlePictureCardPreview(item) {
			this.dialogImagePath = item.url
			this.dialogVisible = true
		},
		refresh() {
			//上传按钮位置有改变时需要刷新上传组件
			this.$nextTick(() => {
				this.uploader.refresh()
			})
		},
		clickFileHandler(item){
			this.onClickFile(item);
		}
	}
}
</script>

<style lang="less">
.upload-plus {
	.block-im{
		display: block !important;
	}
	.picture-show-contatiner{
		background-size: cover;
		background-position: center;
	}
	.avatar-uploader {
		.el-upload {
			border: 1px dashed #d9d9d9;
			border-radius: 6px;
			cursor: pointer;
			position: relative;
			overflow: hidden;
		}
		.el-upload:hover {
			border-color: #409eff;
		}
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	.el-upload-list__item-actions .el-popover__reference {
		margin-left: 0 !important;
	}
}
.upload-image-dialog {
	z-index: 100001;
	.el-dialog__header {
		padding: 0px;
	}
	.el-dialog__body {
		padding: 5px 5px 0px 5px;
	}
}
</style>
