<!--Excel文件批量导入规范通用组件-->
<template> 
	<el-form class="" v-loading="importLoading" element-loading-text="正在校验Excel文件">
		<el-form-item  :label="'批量导入' + targetName + 'Excel模板：'">
				<!-- <el-button icon="el-icon-down"
				size="small" @click.native="toDownLoad">点击下载</el-button> -->
					<a target="_self" class="c-blue" 
					:href="templateHref"  >点击下载模板</a>
		</el-form-item>

		<el-form-item  :label="'批量导入'+ targetName +'数据：'">
			<upload ref="upload_Customer" style="max-width: 500px;"
						:auto-upload="false"
						:on-success="handleUploadSuccess"
						:multiple="false"
						:limit="1"
						:file-list="improtFileList"
						use-type="临时导入文件"
						oss-acl="read_private"
						:filters="filters">
					<div slot="tip" class="el-upload__tip"> 
						<slot>
							<div><i class="el-icon-info mr8"></i>只能上传xlsx文件，且不超过3m</div>
						</slot>
						<slot name="otherInfo">
						</slot>
					</div>
			</upload>
		</el-form-item> 
	</el-form> 
</template>
<script>
import {cloneDeep} from 'lodash'
import upload from '@/components/base/ossUpload'; 
export default {
	components: {
		upload,
	},
	name: 'excelImport',
	props: {
		 targetName: String,//目标名称 比如：排期
		 templateHref: String,//Excel模板路径 如：static/uploadTemplate/schedulImport_v20180302.xlsx
		 apiPath: String,//导入接口路径路径 如：/api/v1/busSchedule/importSchedule.do'
		 params:{
			 type: Object,
			 default: function (){ return{}},
		 },
		 onSuccess: {
			type: Function,
			default: function () {
			}
		 },
		 filters:{
			type: Object,
			 default:function (){
				return 	 {ext: 'xls,xlsx',max_file_size: '3mb'};
			 }
		},
	},
	data() {
		return {
			importLoading: false,
			improtFileList: [],
		}
	},
	methods: {
		handleUploadSuccess(file){
			this.importLoading = true;
			let params = cloneDeep(this.params);
			params.fileId =  file.id;
			this.$http.post(this.apiPath, params)
			.then(response => {
				this.importLoading = false;
				if (response.data.success) { 
					this.$notify({
						title: '导入提示',
						message: response.data.msg, 
						type:'success',
						duration: 0,
						position: 'bottom-right',
						});
					//  this.$message.success(response.data.msg);
					this.onSuccess();
				}
				else {
					this.$notify({
						title: '导入错误',
						message: response.data.msg, 
						type:'error',
						duration: 0,
						position: 'bottom-right',
						});
				}
				this.improtFileList.splice(0, this.improtFileList.length);
			})
			.catch(response => {
				this.importLoading = false;
			});
		},
	}
}
</script>

<style lang="less">
 
</style>
