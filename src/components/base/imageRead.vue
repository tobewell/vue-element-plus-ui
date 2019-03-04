<template>
		<div class="imageReadList" style="margin-bottom:-10px">
			<ul class="el-upload-list el-upload-list--picture-card">
				<li v-for="item in images" :key="item.id"  class="el-upload-list__item ">
					<img v-if="item.authPath" :src="item.authPath" class="el-upload-list__item-thumbnail" />
					<a class="el-upload-list__item-name"><i class="el-icon-document"></i>{{item.name + '.' + item.suffix}}</a>
					<label class="el-upload-list__item-status-label"><i class="el-icon-upload-success el-icon-check"></i></label>
					<span class="el-upload-list__item-actions">
					<el-tooltip content="点击查看图片">
						<span class="el-upload-list__item-preview">
							<i class="el-icon-zoom-in" @click="checkImage(item)"></i>
						</span>
					</el-tooltip>
				</span>
				</li>
			</ul>
		<el-dialog top="7vh" :visible.sync="dialogVisible" :modal-append-to-body="true"  custom-class="upload-image-dialog" size="tiny" style="z-index: 100000" :append-to-body="true">
			<img width="100%" :src="dialogImagePath" alt="">
		</el-dialog>
    	</div>
</template>

<script>
export default {
  name: 'imageRead',
  props: {
    value: {
      type: [String, Number]
    },
    images: {
      type: Array,
      default: []
    }
  },
  computed: {
    
  },
  watch: {},
  data() {
    return {
	  val: this.value,
	  dialogVisible:false,
	  dialogImagePath:'',
    };
  },
  methods: {
    checkImage(item) {
			this.dialogImagePath = item.authPath
			this.dialogVisible = true
		},
  }
};
</script>
