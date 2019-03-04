<!--媒体分类级联选择组件-->
<template>
	<div class="ad-breadcrumb">
		<div class="bakc-breadcrumb " v-bind:class="{'container': isContainer}">
			<el-breadcrumb class="inline">
				<el-breadcrumb-item 
				v-for="(item,index) in list" 
				:key="index"
				:to="item.to" 
				>
				{{item.label}}
				</el-breadcrumb-item>
			</el-breadcrumb>
			<el-button 
				v-if="list.length > 1" 
				class="inline back-btn" 
				size="mini" 
				plain 
				@click="$router.back()"
			 	>
				<i class="el-icon-arrow-left"></i>
				后退
			</el-button> 
		</div>
	</div>
</template>
<script>
export default {
	name: 'breadcrumb',
	props: {
		list: {
			type: Array,
			default: function(){return  []}
		},
		isContainer: {
			default: false
		},
		showBack: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {}
	},
	methods: {}
}
</script>

<style lang="less">
@import "../style/variable";
.ad-breadcrumb{
	background-color: @bg-gray;
	.bakc-breadcrumb {
		height: 18px;
		.inline {
			display: inline-block !important;
		}

		.back-btn {
			position: relative;
			top: -3px;
			padding: 5px 8px;
			margin-left: 16px;
		}
	}
}

</style>
