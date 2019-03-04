<!--自定义下拉筛选选择组件-->
<template>
    <div class="el-select-popper"> 
        <el-input :placeholder="placeholder"
            ref="input" 
            :clearable="clearable && !disabled"
            @click.native="$refs.searchInput ? $refs.searchInput.focus() : null"
            v-model="labelStr" 
            :disabled="disabled"
            v-popover:popover
            @clear="handleInputClear"
            @blur="handleBlur"
        >
        <template slot="suffix">
            <i class="el-select__caret el-input__icon el-icon-arrow-up"
                :class="{'is-reverse' : popoverVisible }"></i>
        </template>
        </el-input>

        <el-popover
            ref="popover"
            :popper-class="'el-select-popper-wrap ' + popoverClass"
            placement="bottom" 
            v-model="popoverVisible"
            trigger="click"
            @show="beforeShow"
            :width="inputWidth"
            :disabled="disabled" 
            @after-enter="afterEnter"
            @after-leave="afterLeave"
        >
            <el-input :placeholder="searchPlaceholder"
                 suffix-icon="el-icon-search"
                 ref="searchInput"
                 v-model.trim="searchKey"
                 clearable>
            </el-input>
             <el-scrollbar 
                wrap-class="el-select-dropdown__wrap"
                view-class="el-select-dropdown__list"
                ref="scrollbar" >
                <ul class="name-list" v-loading="loading">
                    <li v-for="item in options"
                        :key="item.id"
                        class="el-select-dropdown__item"
                        @click="selectItem(item)"
                        > 
                        <slot :item="item" ><span>{{item[labelProperty]}}</span></slot>
                    </li> 
                    <p  v-if="options.length === 0" class="el-select-dropdown__empty">
                        无数据
                    </p>
                </ul>
             </el-scrollbar>
        </el-popover>
    </div>
</template>
<script>
    import {debounce, cloneDeep, forEach} from 'lodash'
    export default {
        name: 'popperSelect',
        props:{
            apiPath: String,// 接口路径路径 如：/api/v1/****/****.do'
            params:{
                type: Object,
                default: function (){ return{}},
            },
            size:{
                type: String,
                default: 'medium',
            },
            placeholder:{
                type: String,
                default: '请选择',
            }, 
            searchPlaceholder:{
                type: String,
                default: '输入关键词搜索',
            },
             clearable:{
                type: Boolean,
                default: true,
             }, 
             valueProperty:{
                type: String,
             },
            labelProperty:{
                type: String,
                default: 'label',
            },
            value:{
                type: [String, Object],
                default: function(){
                    return null;
                }
            },
            disabled: {
                type: Boolean,  
                default: false,
            },
            change:{
                type: Function,
                default: function () {

                }
            },
            popoverWidth:{
                type: String,
            },
            popoverClass:{
                type: String, 
            },
        },
       computed:{
            
        },
        data(){
            return {
                val: this.value,//因为pros参数是不能修改的，所以赋值给data.val
                labelStr: '',
                oldLableStr: '',
                options: [],
                loading: false, 
                isInitData: false,
                popoverVisible: false,
                inputWidth: '100%',
                searchKey: '', 
            }
        },
        watch:{
            val: {
                handler: function(val, oldVal){
                    this.$emit('input', this.val);//v-model指令必须触发一个input事件
                    this.change();
                    this.labelStr = this.getLabelStr();
                    this.oldLableStr = this.labelStr;
                },
                immediate: true,
            },
            value: function(){
                this.val = this.value;
                //  this.$emit('input', this.val);//v-model指令必须触发一个input事件
            },
            searchKey: function(){
                this.debounceGetList();
            },
        },
        methods:{
            getList: function() {
                let params = cloneDeep(this.params);
			    params.searchKey =  this.searchKey; 
                this.loading = true;
                this.$http.post( this.apiPath, params)
                .then( response =>{
                    this.loading = false;
                    this.options = response.body.data;
                })
                .catch( response => {
                    this.options = [];
                    this.loading = false;
                });
            }, 
            debounceGetList(){
                if(!this.queryDebounce){
                    this.queryDebounce = debounce(()=>{
                        this.getList()
                    }, 300); 
                }
                this.queryDebounce()
            }, 
            getLabelStr(){
                if(typeof this.val === 'string'){
                    let str = null;
                    forEach(this.options, o=>{
                        if(o[this.valueProperty] === this.val){
                            str = o[this.labelProperty];
                            return false;
                        }   
                    });
                    return str ? str : this.val
                }
                return this.val[this.labelProperty] ;
            },
            beforeShow(){
                if(this.disabled){
                    return false;
                }
                if(!this.isInitData){
                    this.getList(); 
                    this.isInitData = true;
                }
               this.inputWidth = this.popoverWidth ? this.popoverWidth : 
                    ( this.$refs && this.$refs.input 
                        && this.$refs.input.$el  ? this.$refs.input.$el.clientWidth  : '100%');
            },
            afterEnter(){
                this.$refs.searchInput.focus();
            },
            afterLeave(){
                this.labelStr = this.oldLableStr;
                this.$refs.input.focus();//触发校验
                this.$refs.input.blur();
            },

            selectItem(item){
                this.val = this.valueProperty ? item[this.valueProperty] : item;
                this.popoverVisible = false;
            },
            handleInputClear(){
                this.val = this.valueProperty ? '' : {};
            },
            reloadData(){
                if(_.isEmpty(this.params)){ 
                    this.getList();
                } else {
                    this.$nextTick(()=>{
                        this.getList();
                    })
                }
            },
            clean(){
                this.options = [];
                this.isInitData = false;
                this.searchKey = '';
            },
            handleBlur(event){ 
                // console.log(event );
                // this.$emit('blur',event);
            }
        },
        mounted: function () {//初始组件后执行方法
             this.labelStr = this.getLabelStr();
            // this.getList();
            // console.log(this.val);
        },
        activated : function () {//初始组件后执行方法
            // this.getList();
        },
    }
</script>

<style lang="less" > 
        .el-select-popper {
            .el-input{
                input{
                    cursor: pointer;
                }
            }
            .el-input .el-select__caret{
                color: #c0c4cc;
                font-size: 14px;
                transition: transform .3s;
                transform: rotateZ(180deg);
                cursor: pointer;
            }
            
            .el-input .el-select__caret.is-reverse {
                transform: rotateZ(0);

            }
        }
        .el-select-popper-wrap{
            padding: 0px;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,0.3);
            >.el-input{
                padding: 6px 6px 0 6px;
            }
            .name-list{
                min-height: 250px;
                max-height: 350px;
                padding: 0px 6px 6px 6px;
            } 
        }
</style>
