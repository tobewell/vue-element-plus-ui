/**
 *  对应的公共校验文件，每一个entity对应一个校验
 */
export const objectValidate =  function(msg){
    return function(rule, value, callback){
        if (!value || value.id === undefined || value.id === '' || value.id === null) {
            callback(new Error(msg));
        }
        else {
            callback();
        }
    };
}
export const arrayValidate =  function(msg){
    return function(rule, value, callback){
        if (!value || value.length === 0) {
            callback(new Error(msg));
        }
        else {
            callback();
        }
    };
}

/**
 *  金额校验
 */
export const moneyValidate =  function(msg){
    return function(rule, value, callback){
        if (!(/^(([1-9]\d*)|\d)(\.\d{1,2})?$/).test(value)) {
            callback(new Error(msg ? msg : '请输入正确金额'));
        }
        else {
            callback();
        }
    };
}

export const discountValidate = [
    {required: true, trigger: 'blur',validator: function(rule, value, callback){
        if (value === null || value === '') {
            callback(new Error('请输入折扣率'));
        }if(value <0 || value > 100){
            callback(new Error('请输入0-100的整数'));
        } else {
            callback();
        }}
    },
    { pattern: /^\d{1,3}$/, message: '请输入0-100的整数'}
];
 

/*  账号类型 */
export const accountTypeRulers = {
    id: [
        {required: true, message: '请输入编号', trigger: 'blur'},
        {min: 2, max: 20, message: '长度在 2 到 20 个字符'}
    ],
    name: [
        {required: true, message: '请输入名称', trigger: 'blur'},
        {min: 2, max: 20, message: '长度在 2 到 20 个字符'}
    ]
    //          account: [
//            { required: true, message: '请输入登录账号', trigger: 'blur' },
//            { min: 4, max: 20, message: '长度在 4 到 20 个字符'},
//            { pattern: /(?!^\d+$)^[a-zA-Z0-9_]{4,20}$/, message: '登录账号只允许英文字母、数字及下划线且不能为纯数字,长度4-20个字符。'}
//          ]
};

/* 用户 */
export const userRulers = {
    id: [
        {required: true, message: '请输入用户id', trigger: 'blur'},
        {max: 20, message: '【用户id】长度不能超过32个字符'},
    ],
    organization: [
        {max: 20, message: '【组织机构】长度不能超过32个字符'},
    ],
    loginId: [
        {required: true, message: '请输入登录帐号', trigger: 'blur'},
        {max: 20, message: '【登录帐号】长度不能超过40个字符'},
        { pattern: /(?!^\d+$)^[a-zA-Z0-9_]{4,20}$/, message: '登录账号只允许英文字母、数字及下划线且不能为纯数字,长度4-20个字符。'}
    ],
    name: [
        {max: 20, message: '【用户姓名】长度不能超过50个字符'},
    ],
    password: [
        {max: 20, message: '【登录密码】长度不能超过180个字符'},
    ],
    mobile: [
        {max: 20, message: '【手机号码】长度不能超过20个字符'},
    ],
    email: [
        {max: 20, message: '【电子邮箱】长度不能超过40个字符'},
    ],
    memo: [
        {max: 20, message: '【用户信息备注】长度不能超过2,000个字符'},
    ],
    userKey: [
        {max: 20, message: '【用户关键字】长度不能超过20个字符'},
    ],
    exInfo1: [
        {max: 20, message: '【扩展字段1】长度不能超过32个字符'},
    ],
    exInfo2: [
        {max: 20, message: '【用户重置密码信息，格式：验证码(6位)#重置日期(8位)#重置次数(1位)，如（625123#20111128#2）】长度不能超过32个字符'},
    ],
    smsApplynum: [
        {max: 20, message: '【短信密码登录当日申请数】长度不能超过10个字符'},
    ],
    smsApplyTime: [
        {max: 20, message: '【短信密码登录发关时间】长度不能超过32个字符'},
    ],
    smsPassword: [
        {max: 20, message: '【短信密码】长度不能超过32个字符'},
    ],
    deleteFlag: [
        {required: true, message: '请输入逻辑删除标志(0未删除，1已删除)', trigger: 'blur'},
        {max: 20, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
    ],
    orderNo: [
        {max: 20, message: '【排序号】长度不能超过10个字符'},
    ],
    accountType: [
        {max: 20, message: '【账户类型ID】长度不能超过20个字符'},
    ],
    fixPhone: [
        {max: 20, message: '【固话】长度不能超过20个字符'},
    ],
   /*  birthday: [
        {max: 20, message: '【出生日期】长度不能超过13个字符'},
    ], */
    sex: [
        {max: 20, message: '【性别】长度不能超过1个字符'},
    ],
    authState: [
        {required: true, message: '请输入认证状态', trigger: 'blur'},
        {max: 20, message: '【认证状态】长度不能超过20个字符'},
    ],
    enabled: [
        {required: true, message: '请输入是否启用', trigger: 'blur'},
        {max: 20, message: '【是否启用】长度不能超过1个字符'},
    ],
    address: [
        {max: 20, message: '【现居地址】长度不能超过50个字符'},
    ],
    mobileBindState: [
        {required: true, message: '请输入手机号绑定状态', trigger: 'blur'},
        {max: 20, message: '【手机号绑定状态】长度不能超过20个字符'},
    ],
    emailBindState: [
        {required: true, message: '请输入邮箱绑定状态', trigger: 'blur'},
        {max: 20, message: '【邮箱绑定状态】长度不能超过20个字符'},
    ],
    signature: [
        {max: 20, message: '【个性签名】长度不能超过200个字符'},
    ],
    updateTime: [
        {max: 20, message: '【创建时间】长度不能超过29个字符'},
    ],
    createTime: [
        {max: 20, message: '【创建时间】长度不能超过29个字符'},
    ],
    createYear: [
        {max: 20, message: '【创建年份】长度不能超过4个字符'},
    ],
};

/* 缩略图 */
export const thumImgRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    createTime: [
        {required: true, message: '请输入创建时间', trigger: 'blur'},
        {max: 20, message: '【创建时间】长度不能超过29个字符'},
    ],
    size: [
        {required: true, message: '请输入大小（字节）', trigger: 'blur'},
        {max: 20, message: '【大小（字节）】长度不能超过19个字符'},
    ],
    deleteFlag: [
        {required: true, message: '请输入逻辑删除标志', trigger: 'blur'},
        {max: 20, message: '【逻辑删除标志】长度不能超过2个字符'},
    ],
    path: [
        {required: true, message: '请输入路径', trigger: 'blur'},
        {max: 20, message: '【路径】长度不能超过200个字符'},
    ],
    fullPath: [
        {max: 20, message: '【OSS访问全路径】长度不能超过1,000个字符'},
    ],
};

/* 组织机构 */
export const organizationRulers = {
    id: [
        {required: true, message: '请输入组织机构ID', trigger: 'blur'},
        {max: 32, message: '【组织机构ID】长度不能超过32个字符'},
    ],
    name: [
        {required: true, message: '请输入部门名称', trigger: 'blur'},
        {max: 80, message: '【部门名称】长度不能超过80个字符'},
    ],
    subName: [ 
        {max: 80, message: '【部门简称】长度不能超过80个字符'},
    ],
    parent:[
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('【上级部门名称】不能为空'));
            } else {
                callback();
            }}, trigger: 'blur'
        },
    ],
    description: [
        {max: 20, message: '【描述】长度不能超过100个字符'},
    ],
    orderNo: [
        {max: 20, message: '【排序】长度不能超过10个字符'},
    ],
    address: [
        {max: 20, message: '【地址】长度不能超过255个字符'},
    ],
    parentId: [
        {max: 20, message: '【父组织机构ID】长度不能超过32个字符'},
    ],
    deleteFlag: [
        {required: true, message: '请输入逻辑删除标志', trigger: 'blur'},
        {max: 20, message: '【逻辑删除标志】长度不能超过2个字符'},
    ],
    logoFile: [
        {max: 20, message: '【logo文件】长度不能超过32个字符'},
    ],
    orgType: [
        {required: true, message: '请输入机构类型', trigger: 'blur'},
        {max: 20, message: '【机构类型】长度不能超过20个字符'},
    ],
};

/* 机构用户*/
export const tdsOrgUserRulers = {
    id: [
        {required: true, message: '请输入组织机构用户ID', trigger: 'blur'},
        {max: 32, message: '【组织机构ID】长度不能超过32个字符'},
    ],
    employeeName: [
        {required: true, message: '请输入员工姓名', trigger: 'blur'},
        {max: 50, message: '【员工姓名】长度不能超过50个字符'},
    ],
    email:[
        {max: 50, message: '【内部邮箱】长度不能超过50个字符'},
        {validator: function(rule, value, callback){
            if(value !== undefined && !value.match(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/)){
                callback(new Error('邮箱格式不正确'))
            }else{
                callback();
            }}, trigger: 'blur'
        }
    ],
    orgs:[
        { required: true,  validator: arrayValidate("【部门名称】不能为空") , trigger: 'blur'
        },
    ],
    roleIds:[
        { required: true,  validator: arrayValidate("【岗位】不能为空") , trigger: 'blur'
        },
    ],
    user:[
        { required: true,  validator: function(rule, value, callback){
            if (value.mobile === '' || value.mobile === undefined) {
                callback(new Error('【手机号码】不能为空'));
            }else if(!value.mobile.match(/^[1][3,4,5,7,8][0-9]{9}$/)){
                callback(new Error('请输入11位有效的手机号码'));
            }else {
                callback();
            }}, trigger: 'blur'
        },
    ],
    mobile2:[
        { required: false, validator: function(rule, value, callback) {
            if (value != undefined &&  value != '' && !(value.match(/^[1][3,4,5,7,8][0-9]{9}$/))) {
                callback(new Error('请输入11位有效的手机号码'));
            } else {
                callback();
            }}, trigger: 'blur'
        },
    ],
    fixPhone: [
        {max: 20, message: '【座机号码】长度不能超过20个字符'},
    ],
    emergencyContact: [
        /* {required: true, message: '请输入紧急联系人姓名', trigger: 'blur'}, */
        {max: 50, message: '【紧急联系人】长度不能超过50个字符'},
    ],
    emegrgencyMobile:[
        /* {required: true, message: '请输入紧急联系电话', trigger: 'blur'}, */
        {max: 20, message: '【紧急联电话】长度不能超过20个字符'},
    ],
}

/*  附件 */
export const attachmentFileRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    name: [
        {required: true, message: '请输入附件名称', trigger: 'blur'},
        {max: 20, message: '【附件名称】长度不能超过50个字符'},
    ],
    fileType: [
        {required: true, message: '请输入附件类型', trigger: 'blur'},
        {max: 20, message: '【附件类型】长度不能超过20个字符'},
    ],
    suffix: [
        {required: true, message: '请输入附件后缀', trigger: 'blur'},
        {max: 20, message: '【附件后缀】长度不能超过20个字符'},
    ],
    path: [
        {required: true, message: '请输入附件路径', trigger: 'blur'},
        {max: 20, message: '【附件路径】长度不能超过200个字符'},
    ],
    createTime: [
        {required: true, message: '请输入创建时间', trigger: 'blur'},
        {max: 20, message: '【创建时间】长度不能超过29个字符'},
    ],
    updateTime: [
        {max: 20, message: '【修改时间】长度不能超过29个字符'},
    ],
    size: [
        {required: true, message: '请输入附件大小（字节）', trigger: 'blur'},
        {max: 20, message: '【附件大小（字节）】长度不能超过19个字符'},
    ],
    deleteFlag: [
        {required: true, message: '请输入逻辑删除', trigger: 'blur'},
        {max: 20, message: '【逻辑删除】长度不能超过2个字符'},
    ],
    authPath: [
        {max: 20, message: '【临时授权路径】长度不能超过1,000个字符'},
    ],
    authTime: [
        {max: 20, message: '【授权时间】长度不能超过29个字符'},
    ],
    authEndTime: [
        {max: 20, message: '【授权过期时间】长度不能超过29个字符'},
    ],
    useType: [
        {required: true, message: '请输入附件用途', trigger: 'blur'},
        {max: 20, message: '【附件用途】长度不能超过20个字符'},
    ],
    ossAcl: [
        {max: 20, message: '【OSS读权限】长度不能超过20个字符'},
    ],
    overdue: [
        {max: 20, message: '【是否会过期失效】长度不能超过20个字符'},
    ],
    overdueTime: [
        {max: 20, message: '【过期时间】长度不能超过29个字符'},
    ],
    md5Code: [
        {max: 20, message: '【MD5码】长度不能超过125个字符'},
    ],
};

/* 角色 */
export const roleRulers = {
    id: [
        {required: true, message: '请输入角色ID', trigger: 'blur'},
        {max: 32, message: '【角色ID】长度不能超过32个字符'},
    ],
    name: [
        {required: true, message: '请输入角色名称', trigger: 'blur'},
        {max: 60, message: '【角色名称】长度不能超过60个字符'},
    ],
    deleteFlag: [
        {max: 2, message: '【逻辑删除标志】长度不能超过2个字符'},
    ],
    code: [
        {max: 32, message: '【角色编号】长度不能超过32个字符', trigger:'blur'},
        {pattern: /^$|^[a-zA-Z_]{2,32}$/, message: '角色编号只能是英文字母、下横线组成，长度2至32个字符', trigger:'blur'},
    ],
    roleGroup:[ 
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('【角色分组】不能为空'));
            }else {
                callback();
            }}, trigger: 'blur'
        },
    ],
};

/* 角色类型 */
export const roleTypeRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    name: [
        {max: 20, message: '【类型名称】长度不能超过60个字符'},
    ],
};

/* 角色分组 */
export const roleGroupRules = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    name: [
        {required: true, message: '请输入角色组名称', trigger: 'blur'},
        {max: 20, message: '【角色组名称】长度不能超过60个字符'},
    ], 
    deleteFlag: [
        {required: true, message: '请输入逻辑删除', trigger: 'blur'},
        {max: 20, message: '【逻辑删除】长度不能超过2个字符'},
    ],
}

/* 公交车站点 */
export const meStationInfoRulers = {
    stationName: [
        {required: true, message: '【站点名称】不能为空', trigger: 'blur'},
        {max: 500, message: '【站点名称】长度不能超过500个字符'},
    ],
    state: [
        {required: true, message: '【站点状态】不能为空'},
        {pattern: /^[0-2]$/, message: '【站点状态】字段数据出错'},
    ],
    stationSuperiority: [
        {max: 1000, message: '【站点优势描述】长度不能超过1,000个字符'},
    ],
    address: [
        {max: 1000, message: '【详细地址】长度不能超过1,000个字符'},
    ],
    longitude: [
        {max: 64, message: '【经度】长度不能超过64个字符'},
        {pattern: /^(\-|\+)?\d+(\.\d+)?$/, message: '【经度】字段只能填写数字'},
    ],
    latitude: [
        {max: 64, message: '【纬度】长度不能超过64个字符'},
        {pattern: /^(\-|\+)?\d+(\.\d+)?$/, message: '【纬度】字段只能填写数字'},
    ],
    peopleFlow: [
        {pattern: /^[0-9]{0,19}$/, message: '【日人流量】字段只能填写整数'}
    ],
    carFlow: [
        {pattern: /^[0-9]{0,19}$/, message: '【日车流量】字段只能填写整数'}
    ],
    peopleFlow2: [
        {pattern: /^[0-9]{0,19}$/, message: '【节假日人流量】字段只能填写整数'}
    ],
    rank: [
        { required: true,  validator: objectValidate("请选择车站等级"), trigger: 'blur'
        },
    ],
};

/* 客户信息 */
export const customerRulers = {
	id: [
		{required: true, message: '请输入客户信息主键', trigger: 'blur'},
        {max: 32, message: '【客户信息主键】长度不能超过32个字符'},
	],
	customerName: [
        {required: true, message: '【客户名称】不能为空', trigger: 'blur'},
        {max: 500, message: '【客户名称】长度不能超过500个字符'},
	],
	unoName: [
        {max: 100, message: '【客户简称】长度不能超过100个字符'},
	],
	customerPhone: [
        {required: true, message: '【客户电话】不能为空', trigger: 'blur'},
        {max: 50, message: '【客户电话】长度不能超过50个字符'},
	],
	customerType: [
        {max: 64, message: '【客户类型:潜在客户、洽淡客户、最终客户】长度不能超过64个字符'},
	],
	customerState: [
        {max: 64, message: '【客户状态：未成交客户、成交客户】长度不能超过64个字符'},
	],
	customerNature: [
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('【客户性质】不能为空'));
            } else {
                callback();
            }}, trigger: 'blur'
        },
	],
	customerLevel: [
        {max: 64, message: '【客户分级：小型、中型、大型】长度不能超过64个字符'},
	],
	customerIndustry: [
        {max: 64, message: '【客户行业：科学、文化、教育、卫生、金融、保险、咨询】长度不能超过64个字符'},
	],
	importance: [
        {max: 64, message: '【重要程度：1星、2星、3星、4星、5星  数值越大越重要 】长度不能超过64个字符'},
	],
	isLunarCalendar: [
        {max: 2, message: '【客户生日公历或农历】长度不能超过2个字符'},
	],
	birthday: [
	],
	country: [
        {max: 64, message: '【国家】长度不能超过64个字符'},
	],
	customerAddress: [
        {max: 500, message: '【客户地址】长度不能超过500个字符'},
	],
	orderNumber: [
	],
	createTime: [
	],
	deleteFlag: [
        {max: 2, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
	],
};

/* 访客计划 */
export const crmVisitorPlanRulers = {
	id: [
		{required: true, message: '请输入访客计划主键', trigger: 'blur'},
        {max: 32, message: '【访客计划主键】长度不能超过32个字符'},
	],
	vistorPlanName: [
		{required: true, message: '【访客计划名称】不能为空', trigger: 'blur'},
        {max: 200, message: '【访客计划名称】长度不能超过200个字符'},
	],
    customerInfo:[
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('【客户名称】不能为空'));
            } else {
                callback();
            }}, trigger: 'blur'
        },
    ],
	executor:[
        { required: true,  validator: objectValidate("【执行人】不能为空"), trigger:'change'},
    ],
	// vistorName: [
	// 	{required: true, message: '【执行人】不能为空', trigger: 'blur'},
    //     {max: 200, message: '【执行人】长度不能超过200个字符'},
	// ],
	destination: [
        {max: 200, message: '【拜访目的地】长度不能超过200个字符'},
	],
	executeTime: [
		{required: true, message: '【执行时间】不能为空', trigger: 'blur'},
	],
	remindingTime: [
		{required: true, message: '【提醒时间】不能为空', trigger: 'blur'},
	],
	remark: [
        {max: 1000, message: '【备注】长度不能超过1,000个字符'},
	],
	orderNumber: [
	],
	createTime: [
	],
	deleteFlag: [
        {max: 2, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
	],
};

/* 跟进记录 */
export const crmFollowUpInfoRulers = {
    linkerName: [
        {required: true, message: '【联系人】不能为空', trigger: 'blur'},
        {max: 200, message: '【联系人】长度不能超过200个字符'},
    ],
    followUpType: [
        {required: true, message: '【跟进方式】不能为空', trigger: 'blur'},
        {max: 200, message: '【跟进方式】长度不能超过200个字符'},
    ],
    crmVisitorPlanInfo:[
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('【访客计划名称】不能为空'));
            } else {
                callback();
            }}, trigger: 'blur'
        },
    ],
    visitorTime: [
        {required: true, message: '【拜访时间】不能为空', trigger: 'blur'},
    ],
    saleChance: [
        {required: true, message: '【销售机会】不能为空', trigger: 'blur'},
        {max: 1000, message: '【销售机会】长度不能超过1,000个字符'},
    ],
    remark: [
        {max: 1000, message: '【备注】长度不能超过1,000个字符'},
    ],
    linkman:[
        {required:true, validator:objectValidate('请选择联系人'), trigger:'blur',},
    ],
    orderNumber: [
    ],
    createTime: [
    ],
    deleteFlag: [
        {max: 2, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
    ],
};

export const crmLinkmanRulers = {
    customer:[
        { required: true,  validator: objectValidate("请输入客户名称"), trigger: 'blur'
        },
    ],
    name: [
        {required: true, message: '请输入联系人姓名', trigger: 'blur' },
        {max: 50, message: '【联系人姓名】长度不能超过50个字符'},
    ],
    nickName: [
        {max: 50, message: '【昵称】长度不能超过50个字符'},
    ],
    mobile: [
        { required: true,  validator: function(rule, value, callback){
            if (value === '' || value === undefined) {
                callback(new Error('【手机号码】不能为空'));
            }else if(!value.match(/^[1][3,4,5,7,8][0-9]{9}$/)){
                callback(new Error('请输入11位有效的手机号码'));
            }else {
                callback();
            }}, trigger: 'blur'
        },
    ],
    weixin: [
        {max: 50, message: '【微信号】长度不能超过50个字符'},
    ],
    qq: [
        {max: 20, message: '【QQ号】长度不能超过20个字符'},
    ],
    email: [
        {max: 40, message: '【电子邮箱】长度不能超过40个字符'},
    ],
    legalPerson: [
        {max: 2, message: '【是否企业法人(0不是，1是)】长度不能超过2个字符'},
    ],
    position:[
        {max: 50, message: '【职位】长度不能超过50个字符'},
    ],
    remark: [
        {max: 2000, message: '【备注】长度不能超过2,000个字符'},
    ],
    fixPhone:[
        {max:20, message: '【固话】长度不能超过20个字符'},
    ],
   /*  birthday: [
        {max: 13, message: '【出生日期】长度不能超过13个字符'},
    ], */
    sex: [
        {max: 1, message: '【性别】长度不能超过1个字符'},
    ],
    address: [
        {max: 50, message:'【现居地址】长度不能超过50个字符'},
    ],
    updateTime: [
        {max: 29, message: '【修改时间】长度不能超过29个字符'},
    ],
    createTime: [
        {max: 29, message: '【创建时间】长度不能超过29个字符'},
    ],
    deleteFlag: [
        {required: true, message: '请输入逻辑删除标志(0未删除，1已删除)', trigger: 'blur'},
        {max: 2, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
    ],
};

/* 镇维表 */
export const townRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    name: [
        {max: 20, message: '【镇名】长度不能超过50个字符'},
    ],
    code: [
        {max: 20, message: '【编号】长度不能超过20个字符'},
    ],
    orderNo: [
        {max: 20, message: '【排序号】长度不能超过10个字符'},
    ],
    provinceName: [
        {max: 20, message: '【省份名称】长度不能超过20个字符'},
    ],
    cityName: [
        {max: 20, message: '【城市名称】长度不能超过255个字符'},
    ],
    districtName: [
        {max: 20, message: '【区名称】长度不能超过255个字符'},
    ],
};


/* 地区维表 */
export const regionRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    name: [
        {max: 20, message: '【区域名】长度不能超过20个字符'},
    ],
    orderNo: [
        {max: 20, message: '【排序号】长度不能超过10个字符'},
    ],
};


/* 省份维表 */
export const provinceRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    name: [
        {max: 20, message: '【省份名】长度不能超过20个字符'},
    ],
    code: [
        {max: 20, message: '【编号】长度不能超过20个字符'},
    ],
    orderNo: [
        {max: 20, message: '【排序号】长度不能超过10个字符'},
    ],
    regionId: [
        {max: 20, message: '【区域ID】长度不能超过32个字符'},
    ],
};

/* 区（县）维表 */
export const districtRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    name: [
        {max: 20, message: '【行政区名】长度不能超过50个字符'},
    ],
    code: [
        {max: 20, message: '【编号】长度不能超过20个字符'},
    ],
    orderNo: [
        {max: 20, message: '【排序号】长度不能超过10个字符'},
    ],
    provinceName: [
        {max: 20, message: '【省份名称】长度不能超过20个字符'},
    ],
    cityName: [
        {max: 20, message: '【城市名称】长度不能超过255个字符'},
    ],
};

/* 市维表 */
export const cityRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    name: [
        {max: 20, message: '【城市名】长度不能超过255个字符'},
    ],
    code: [
        {max: 20, message: '【编号】长度不能超过20个字符'},
    ],
    orderNo: [
        {max: 20, message: '【排序号】长度不能超过19个字符'},
    ],
    provinceName: [
        {max: 20, message: '【省份名称】长度不能超过20个字符'},
    ],
};


/* 公司信息表（媒体商、广告主、代理商） */
export const bsMediaCompanyRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    companyName: [
        {max: 20, message: '【公司名称】长度不能超过500个字符'},
    ],
    creditCode: [
        {max: 20, message: '【统一社会信用代码】长度不能超过128个字符'},
    ],
    linkAddress: [
        {max: 20, message: '【通讯地址】长度不能超过500个字符'},
    ],
    linkTel: [
        {max: 20, message: '【电话号码】长度不能超过32个字符'},
    ],
    linkName: [
        {max: 20, message: '【联系人姓名】长度不能超过32个字符'},
    ],
    linkPhone: [
        {max: 20, message: '【联系人电话号码】长度不能超过32个字符'},
    ],
    linkEmail: [
        {max: 20, message: '【联系人电子邮箱】长度不能超过128个字符'},
    ],
    createTime: [
        {max: 20, message: '【创建时间】长度不能超过29个字符'},
    ],
    deleteFlag: [
        {max: 20, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
    ],
    orderNumber: [
        {max: 20, message: '【排序】长度不能超过19个字符'},
    ],
    licenceUrl: [
        {max: 20, message: '【营业执照】长度不能超过200个字符'},
    ],
    logoUrl: [
        {max: 20, message: '【企业logo】长度不能超过200个字符'},
    ],
    inviteCode: [
        {max: 20, message: '【邀请码】长度不能超过24个字符'},
    ],
};


/* 公交车生产厂家表 */
export const meBusFactoryRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    busFactoryName: [
        {max: 20, message: '【公交车厂家名称】长度不能超过100个字符'},
    ],
    busFactoryCode: [
        {max: 20, message: '【公交车厂家代码】长度不能超过100个字符'},
    ],
    orderNumber: [
        {max: 20, message: '【排序】长度不能超过19个字符'},
    ],
    createTime: [
        {max: 20, message: '【创建时间】长度不能超过29个字符'},
    ],
    deleteFlag: [
        {max: 20, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
    ],
};


/* 公交车线路库 */
export const meBuslineInfoRulers = {
    buslineName: [
        {required: true, message: '【线路名称】不能为空', trigger: 'blur'},
        {max: 256, message: '【线路名称】长度不能超过256个字符'},
    ],
    firstTime: [
    ],
    lastTime: [
    ],
    intervalMinute: [
        {pattern: /^[0-9]{0,19}$/, message: '【班次间隔】字段只能填写整数'}
    ],
    onewayMinute: [
        {pattern: /^[0-9]{0,16}$/, message: '【单程时间】字段只能填写整数'}
    ],
    valueGrade: [
        {required: true, message: '【线路等级】不能为空', trigger: 'blur'},
    ],
    buslineSuperiority: [
        {max: 1000, message: '【线路优势描述】长度不能超过1,000个字符'},
    ],
    orderNumber: [
    ],
    createTime: [
    ],
    buslineNo: [
    ],
    passengerFlow: [
        {pattern: /^[0-9]{0,16}$/, message: '【月客流量】字段只能填写整数'}
    ],
    businessZone: [
        {max: 500, message: '【途经商业区】长度不能超过500个字符'},
    ],
    oneWayKilometre: [
        {pattern: /^[0-9]{0,16}$/, message: '【单程线路公里数】字段只能填写整数'}
    ],
    startstationEndstation: [
    ],
    route: [
    ],
};

/* 公交车线路坐标库 */
export const meBuslineLongLatRulers = {
    startLongitude: [
        {max: 64, message: '【出发站经度】长度不能超过64个字符'},
        {pattern: /^(\-|\+)?\d+(\.\d+)?$/, message: '【出发站经度】字段只能填写数字'},
    ],
    startLatitude: [
        {max: 64, message: '【出发站纬度】长度不能超过64个字符'},
        {pattern: /^(\-|\+)?\d+(\.\d+)?$/, message: '【出发站纬度】字段只能填写数字'},
    ],
    endLongitude: [
        {max: 64, message: '【终点站经度】长度不能超过64个字符'},
        {pattern: /^(\-|\+)?\d+(\.\d+)?$/, message: '【终点站经度】字段只能填写数字'},
    ],
    endLatitude: [
        {max: 64, message: '【终点站纬度】长度不能超过64个字符'},
        {pattern: /^(\-|\+)?\d+(\.\d+)?$/, message: '【终点站纬度】字段只能填写数字'},
    ],
};


/* 公交车车牌区域段表 */
export const mePicensePlateRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    picensePlateName: [
        {max: 20, message: '【省会简称】长度不能超过20个字符'},
    ],
    picensePlateLetter: [
        {max: 20, message: '【二级字母编码】长度不能超过20个字符'},
    ],
    orderNumber: [
        {max: 20, message: '【排序】长度不能超过19个字符'},
    ],
    createTime: [
        {max: 20, message: '【创建时间】长度不能超过29个字符'},
    ],
    deleteFlag: [
        {max: 20, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
    ],
};


/* 媒体品牌 */
export const bsMediaBrandRulers = {
    mediaName: [
        {required: true, message: '请输入中文名称', trigger: 'blur'},
        {max: 500, message: '【中文名称】长度不能超过500个字符'},
    ],
    mediaPinyin: [
        {max: 500, message: '【拼音】长度不能超过500个字符'},
    ],
    mediaEnName: [
        {max: 500, message: '【英文名称】长度不能超过500个字符'},
    ],
    remark: [
        {max: 500, message: '【描述】长度不能超过500个字符'},
    ],
    state: [
        {max: 2, message: '【状态】长度不能超过2个字符'},
    ],
    // mediaType:[
    //     { required: true,  validator: function(rule, value, callback){
    //         if (!value || value.id === '' || value.id === null) {
    //             callback(new Error('【资源分类】不能为空'));
    //         } else {
    //             callback();
    //         }}, trigger: 'blur'
    //     },
    // ],
    mediaUrl: [
        {max: 500, message: '【官方网址】长度不能超过500个字符'},
        { pattern: /^$|^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, message: '请输入正确的网站地址'}
    ]
};


/* 媒体资源分类 */
export const bsMediaTypeRulers = {
    name: [
        {required: true, message: '请输入分类名称', trigger: 'blur'},
        {max: 128, message: '【分类名称】长度不能超过128个字符'},
    ],
    parentId: [
        {max: 32, message: '【分类父ID】长度不能超过32个字符'},
    ],
    isParent: [
        {max: 2, message: '【是否父级】长度不能超过2个字符'},
    ],
    orderNo: [
        {required: true, message: '请输入排序', trigger: 'blur'},
        {max: 20, message: '【排序】长度不能超过19个字符'},
    ],
    stockType: [
        {required: true, message: '请输入库存类型', trigger: 'blur'},
        {max: 20, message: '【库存类型】长度不能超过20个字符'},
    ],
    scheduleCode: [
        {max: 20, message: '【排期计算编码】长度不能超过20个字符'},
    ],
};

/* 媒体资源 */
export const bsProductRulers = {
    name: [
        {required: true, message: '请输入资源名称', trigger: 'blur'},
        {max: 500, message: '【资源名称】长度不能超过500个字符'},
    ],
    extendName: [
        {max: 500, message: '【资源扩充名称】长度不能超过500个字符'},
    ],
    productTitle: [
        {max: 500, message: '【资源标语】长度不能超过500个字符'},
    ],
    /* productCode: [
        {max: 256, message: '【资源代码】长度不能超过256个字符'},
    ], */
    productTotal: [
    ],
    content: [
        {required: true, message: '请输入图文信息', trigger: 'blur'},
    ],
    orderNumber: [
    ],
    state: [
        {required: true, message: '请输入状态', trigger: 'blur'},
        {max: 20, message: '【状态】长度不能超过20个字符'},
    ],
    mediaTypeIdLink: [
        {required: true, trigger: 'blur',validator: function(rule, value, callback){
            if (!value || value.length == 0 ) {
                callback(new Error('请选择资源分类'));
            } else {
                callback();
            }
        }},

    ],
    unit: [
        {required: true, trigger: 'blur',validator: function(rule, value, callback){
            if (value === null || value.id === '' || value.id === null) {
                callback(new Error('请选择单位'));
            } else {
                callback();
            }
        }},

    ],
    specificDef: [
        { required: true,  validator: objectValidate("资源形式"), trigger: 'blur'
        },
    ],
};

/* 公交车辆信息库 */
export const meCarInfoRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
    ],
    licensePlate: [
        {required: true, message: '请设置车牌号码', trigger: 'blur'},
    ],
    degree: [
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择车辆新旧程度'));
            } else {
                callback();
            }}, trigger: 'blur'
        }
    ],
    // meBuslineInfo:[
    //     { required: true,  validator: function(rule, value, callback){
    //         if (!value || value.id === '' || value.id === null) {
    //             callback(new Error('请设置车辆线路'));
    //         } else {
    //             callback();
    //         }}, trigger: 'blur'
    //     },
    // ],
    mePicensePlate:[
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请设置车牌区域'));
            } else {
                callback();
            }}, trigger: 'blur'
        },
    ],
    meCarType:[
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请设置车辆车型'));
            } else {
                callback();
            }}, trigger: 'blur'
        },
    ],
    pictureLevel:[
        {required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择广告上画优先度'));
            } else {
                callback();
            }}, trigger: 'blur'
        }
    ],
    regDate: [
        {required: true, message: '请设置登记日期', trigger: 'blur'},
    ],
    useAgelimit: [
        {required: true, message: '请设置使用期限', trigger: 'blur'},
    ],
    isAirconditioner: [
        {required: true, message: '请选择是否空调车', trigger: 'blur'},
    ],
    remark: [
        {max: 500, message: '【备注】长度不能超过1,000个字符'},
    ],
    tips: [
        {max: 20, message: '【提示信息】长度不能超过500个字符'},
    ],
    orderNumber: [
        {max: 20, message: '【排序】长度不能超过19个字符'},
    ],
    createTime: [
        {max: 20, message: '【创建时间】长度不能超过29个字符'},
    ],
    deleteFlag: [
        {max: 20, message: '【数据逻辑删除标志】长度不能超过2个字符'},
    ],
};


/* 属性选项 */
export const bsAttributeItemRulers = {
    label: [
        {required: true, message: '请输入属性选项Label', trigger: 'blur'},
        {max: 50, message: '【属性选项Label】长度不能超过50个字符'},
    ],
    value: [
        {required: true, message: '请输入属性选项值', trigger: 'blur'},
        {max: 500, message: '【属性选项值】长度不能超过500个字符'},
    ],
    orderNo: [
        {required: true, message: '请输入排序', trigger: 'blur'},
    ],
    createTime: [
        {required: true, message: '请输入创建时间', trigger: 'blur'},
    ],
    deleteFlag: [
        {required: true, message: '请输入逻辑删除标志', trigger: 'blur'},
        {max: 2, message: '【逻辑删除标志】长度不能超过2个字符'},
    ],
    isDefault: [
        {required: true, message: '请输入是否默认选项', trigger: 'blur'},
        {max: 2, message: '【是否默认选项】长度不能超过2个字符'},
    ],
};

/* 属性项 */
export const bsAttributeNameRulers = {
    name: [
        {max: 500, message: '【属性名】长度不能超过500个字符'},
    ],
    inputType: [
        {required: true, message: '请输入属性类型', trigger: 'blur'},
        {max: 32, message: '【属性类型】长度不能超过32个字符'},
    ],
    valueType: [
        {required: true, message: '请输入属性值存储类型', trigger: 'blur'},
        {max: 30, message: '【属性值存储类型】长度不能超过30个字符'},
    ],
    isNotNull: [
        {required: true, message: '请输入是否必填属性', trigger: 'blur'},
        {max: 2, message: '【是否必填属性】长度不能超过2个字符'},
    ],
    isAliasName: [
        {required: true, message: '请输入是否允许别名', trigger: 'blur'},
        {max: 2, message: '【是否允许别名】长度不能超过2个字符'},
    ],
    isSku: [
        {required: true, message: '请输入是否SKU属性', trigger: 'blur'},
        {max: 2, message: '【是否SKU属性】长度不能超过2个字符'},
    ],
    isPrice: [
        {required: true, message: '请输入是否额外价格属性', trigger: 'blur'},
        {max: 10, message: '【是否额外价格属性】长度不能超过10个字符'},
    ],
    isSearchAtt: [
        {required: true, message: '请输入是否搜索属性', trigger: 'blur'},
        {max: 2, message: '【是否搜索属性】长度不能超过2个字符'},
    ],
    orderNo: [
        {required: true, message: '请输入排序', trigger: 'blur'},
    ],
    createTime: [
        {required: true, message: '请输入创建时间', trigger: 'blur'},
    ],
    deleteFlag: [
        {required: true, message: '请输入逻辑删除标志(0未删除，1已删除)', trigger: 'blur'},
        {max: 2, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
    ],
    bsMediaCompanyId: [
        {required: true, message: '请输入公司信息表ID', trigger: 'blur'},
        {max: 32, message: '【公司信息表ID】长度不能超过32个字符'},
    ],
};



/* 媒体资源属性 */
export const bsProductAttributeRulers = {
    name: [
        {required: true, message: '请输入属性名', trigger: 'blur'},
    ],
    inputType: [
        {required: true, message: '请选择属性类型', trigger: 'blur'},
    ],
    valueType: [
        {required: true, message: '请选择存储类型', trigger: 'blur'},
    ],
    isNotNull: [
        {required: true, message: '请选择是否必填属性', trigger: 'blur'},
    ],
    isAliasName: [
        {required: true, message: '请选择是否允许别名', trigger: 'blur'},
    ],
    isSku: [
        {required: true, message: '请选择是否SKU属性', trigger: 'blur'},
    ],
    isPrice: [
        {required: true, message: '请选择是否额外价格属性', trigger: 'blur'},
    ],
    isSearchAtt: [
        {required: true, message: '请选择是否搜索属性', trigger: 'blur'},
    ],
    orderNo: [
        {required: true, message: '请输入排序', trigger: 'blur'},
    ],
};


/* 媒体资源sku */
export const bsSkuRulers = {
    productCode: [
        {max: 500, message: '【产品代码】长度不能超过500个字符'},
    ],
    skuName: [
        {required: true, message: '请输入SKU名称', trigger: 'blur'},
        {max: 500, message: '【SKU名称】长度不能超过500个字符'},
    ],
    allAttributeValue: [
        {max: 1000, message: '【属性字符串（分号分隔）】长度不能超过1,000个字符'},
    ],
    total: [
    ],
    price: [
        {required: true, message: '请输入折扣价', trigger: 'blur'},
    ],
    state: [
        {required: true, message: '请输入状态', trigger: 'blur'},
        {max: 2, message: '【状态】长度不能超过2个字符'},
    ],
    createTime: [
        {required: true, message: '请输入创建时间', trigger: 'blur'},
    ],
    deleteFlag: [
        {required: true, message: '请输入逻辑删除标志(0未删除，1已删除)', trigger: 'blur'},
        {max: 2, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
    ],
    orderNo: [
    ],
    originPrice: [
        {required: true, message: '请输入原价', trigger: 'blur'},
    ],
};

/* 公交车车型表 */
export const meCarTypeRulers = {
    id: [
        {required: true, message: '请输入主键', trigger: 'blur'},
        {max: 32, message: '【主键】长度不能超过32个字符'},
    ],
    meBusFactory: [
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择生产厂家'));
            } else {
                callback();
            }}, trigger: 'blur'
        }
    ],
    powerType: [
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择动力配置'));
            } else {
                callback();
            }}, trigger: 'blur'
        }
    ],
    gearboxType: [
        /* { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择变速箱类型'));
            } else {
                callback();
            }}, trigger: 'blur'
        } */
    ],
    airconditionerType: [
       /*  { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择空调类型'));
            } else {
                callback();
            }}, trigger: 'blur'
        } */
    ],
    carCode: [
        {required: true, message: '（厂家车型+发动机+变速箱类型+空调类型）', trigger: 'blur'},
        {max: 32, message: '【车型代码】长度不能超过32个字符'},
    ],
    carLength: [
        {required: true, message: '请输入车长度', trigger: 'blur'},
    ],
    carHeight: [
        {required: true, message: '请输入车高度', trigger: 'blur'},
    ],
    carWidth: [
        {required: true, message: '请输入车宽度', trigger: 'blur'},
    ],
    carSeat: [
        {required: true, message: '请输入座位数', trigger: 'blur'},
    ],
    orderNumber: [
        {required: true, message: '请输入排序号', trigger: 'blur'},
    ],
    createTime: [

    ],
    deleteFlag: [
    ],
    mediaTypeBus: [
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择单双层'));
            } else {
                callback();
            }}, trigger: 'blur'
        }
    ],
    mediaTypeAir: [
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择是否有空调'));
            } else {
                callback();
            }}, trigger: 'blur'
        }
    ],
    mediaTypeLen: [
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择巴士类型'));
            } else {
                callback();
            }}, trigger: 'blur'
        }
    ],
    carBrand: [
        /*
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择车辆品牌'));
            } else {
                callback();
            }}, trigger: 'blur'
        }
        */
    ],
    engineType: [
        /*
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择发动机类型'));
            } else {
                callback();
            }}, trigger: 'blur'
        }
        */
    ],
    tailgasType: [
        /*
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择尾气排放类型'));
            } else {
                callback();
            }}, trigger: 'blur'
        }
        */
    ]
};


/* 公交线路站点关联 */
export const buslineStationRelaRulers = {
    meStationInfo: [
        { required: true,  validator: function(rule, value, callback){
            if (!value || value.id === '' || value.id === null) {
                callback(new Error('请选择站点'));
            } else {
                callback();
            }}, trigger: 'blur'
        },
    ],
};

/*数据字典选项表*/
export const dataDefinitionOptionRulers = {
    value: [
        {required: true, message: '【数据值】不能为空', trigger: 'blur'},
        {max: 30, message: '【数据值】长度不能超过30个字符'},
    ],
    label: [
        {required: true, message: '【数据值显示名】不能为空', trigger: 'blur'},
        {max: 30, message: '【数据值显示名】长度不能超过30个字符'},
    ],
    isDefault: [
        {required : true, message: '【是否默认值】不能为空', trigger: 'blur'},
        {max:2, message: '【是否默认值】长度不能超过30个字符'},
    ],
};

/* 购物车表 */
export const odShoppingcartRulers = {
	id: [
		{required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
	],
	bsProductPackageId: [
        {max: 20, message: '【产品包定义表ID】长度不能超过32个字符'},
	],
	buyerId: [
		{required: true, message: '请输入买家ID', trigger: 'blur'},
        {max: 20, message: '【买家ID】长度不能超过32个字符'},
	],
	bsSkuId: [
        {max: 20, message: '【产品SKU_ID】长度不能超过32个字符'},
	],
	unitPrice: [
		{required: true, message: '请输入产品单价', trigger: 'blur'},
        {max: 20, message: '【产品单价】长度不能超过16个字符'},
	],
	productNumber: [
		{required: true, message: '请输入产品数量', trigger: 'blur'},
        {max: 20, message: '【产品数量】长度不能超过19个字符'},
	],
	createTime: [
        {max: 20, message: '【创建时间】长度不能超过29个字符'},
	],
	deleteFlag: [
        {max: 20, message: '【数据逻辑删除标志】长度不能超过2个字符'},
	],
	orderNumber: [
        {max: 20, message: '【排序】长度不能超过19个字符'},
	],
	issueTime: [
        {max: 20, message: '【发布日期】长度不能超过29个字符'},
	],
};

/* 公交车站牌登记表 */
export const meStationBillboardRulers = {
	code: [
		{required: true, message: '请输入点位编号', trigger: 'blur'},
        {max: 30, message: '【点位编号】长度不能超过30个字符'},
	],
	deleteFlag: [
		{required: true, message: '请输入逻辑删除标志(0未删除，1已删除)', trigger: 'blur'},
        {max: 2, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
    ],
    station: [
        { required: true,  validator: objectValidate("请输入公交车站"), trigger: 'blur'
        },
    ],
    size: [
        { required: true,  validator: objectValidate("请选择站牌尺寸"), trigger: 'blur'
        },
    ],
};

/* 合同信息表 */
export const odContractInfoRulers = {
	id: [
		{required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
	],
	contractName: [
        {required: true, message: '【合同名称】不能为空', trigger: 'blur'},
        {max: 50, message: '【合同名称】长度不能超过50个字符'},
	],
	contractNo: [
        {max: 20, message: '【合同编号】长度不能超过100个字符'},
    ],
    signedAddressDetail:[
        {required: true, message: '【合同签订详细地址】不能为空', trigger: 'blur'},
    ],
    signedLocation:[
        {required: true, trigger: 'change',validator:function(rule, value, callback){
            if(_.isEmpty(value)||_.isEmpty(value.province))callback(new Error('【合同签订所在地】不能为空'))
            else callback()
        }},
    ],
	supplyOrgName: [
        {required: true, message: '【乙方公司名称】不能为空', trigger: 'blur'},
        {max: 50, message: '【乙方公司名称】长度不能超过50个字符'},
	],
	supplyLegalName: [
        {required: true, message: '【乙方法人名称】不能为空', trigger: 'blur'},
        {max: 50, message: '【乙方法人名称】长度不能超过50个字符'},
	],
	supplyOperatorName: [
        {required: true, message: '【乙方经办人名称】不能为空', trigger: 'blur'},
        {max: 50, message: '【乙方经办人名称】长度不能超过50个字符'},
	],
	supplyPhone: [
        {required: true, message: '【乙方联系电话】不能为空', trigger: 'blur'},
        {max: 20, message: '【乙方联系电话】长度不能超过20个字符'},
	],
	supplyAddress: [
        {max: 100, message: '【乙方联系地址】长度不能超过100个字符'},
	],
	supplyBankName: [
        {max: 20, message: '【乙方开户银行名称】长度不能超过100个字符'},
	],
	supplyBankAccount: [
        {max: 20, message: '【乙方开户银行账户】长度不能超过50个字符'},
	],
	demandCompanyName: [
        {required: true, message: '【甲方公司名称】不能为空', trigger: 'blur'},
        {max: 50, message: '【甲方公司名称】长度不能超过50个字符'},
	],
	demandLegalName: [
        {required: true, message: '【甲方法人名称】不能为空', trigger: 'blur'},
        {max: 50, message: '【甲方法人名称】长度不能超过50个字符'},
	],
	demandOperatorName: [
        {required: true, message: '【甲方经办人名称】不能为空', trigger: 'blur'},
        {max: 50, message: '【甲方经办人名称】长度不能超过50个字符'},
	],
	demandPhone: [
        {required: true, message: '【甲方联系电话】不能为空', trigger: 'blur'},
        {max: 20, message: '【甲方联系电话】长度不能超过20个字符'},
	],
	demandAddress: [
        {max: 100, message: '【甲方联系地址】长度不能超过100个字符'},
	],
	demandBankName: [
        {max: 20, message: '【甲方开户银行名称】长度不能超过100个字符'},
	],
	demandBankAccount: [
        {max: 20, message: '【甲方开户银行账户】长度不能超过50个字符'},
	],
	contractAmount: [
        {required: true, message: '【合同金额】不能为空', trigger: 'blur'},
	],
	createTime: [
	],
	updateTime: [
	],
	signedTime: [
        {required: true, message: '【合同生成日期】不能为空', trigger: 'blur'},
	],
	startTime: [
        {required: true, message: '【生效日期】不能为空', trigger: 'blur'},
	],
	endTime: [
        {required: true, message: '【失效日期】不能为空', trigger: 'blur'},
	],
	orderState: [
        {max: 20, message: '【draft：草稿   approval：待审批  pass：审批通过  abandon：废弃   cancel：取消 finish: 完成】长度不能超过20个字符'},
	],
	deleteFlag: [
        {max: 20, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
	],
	advert: [
        {required: true, message: '【广告内容】不能为空', trigger: 'blur'},
        {max: 500, message: '【广告内容】长度不能超过500个字符'},
	],
	origin: [
        {max: 20, message: '【数据来源（normal 正常流程添加，offline 线下数据手工添加）】长度不能超过20个字符'},
	],
	contractMakeType: [
        {max: 20, message: '【合同生成类型1 表示由订单生成(默认)2 表示由合同管理人员手工录入3 表示上传已有合同，可理解为补录】长度不能超过2个字符'},
	],
	content: [
        {max: 20, message: '【富文本内容】长度不能超过2,147,483,647个字符'},
	],
};

/* 合同明细信息表 */
export const odContractInfoDetailRulers = {
	id: [
		{required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
	],
	payType: [
        {max: 20, message: '【支付方式:（1）支票；（2）现金；（3）转账】长度不能超过2个字符'},
	],
	firstPayScale: [
        {max: 20, message: '【首付比例(%)】长度不能超过16个字符'},
	],
	firstPay: [
        {max: 20, message: '【首付款】长度不能超过16个字符'},
	],
	endPayScale: [
        {max: 20, message: '【尾付比例(%)】长度不能超过16个字符'},
	],
	endPay: [
        {max: 20, message: '【尾付款】长度不能超过16个字符'},
	],
	acceptPayScale: [
        {max: 20, message: '【验收款比例(%)】长度不能超过16个字符'},
	],
	acceptPay: [
        {max: 20, message: '【验收款】长度不能超过16个字符'},
	],
	penalyScale: [
        {max: 20, message: '【违约金比例(%)】长度不能超过16个字符'},
	],
	penaly: [
        {max: 20, message: '【违约金】长度不能超过16个字符'},
	],
	renewLimit: [
        {max: 20, message: '【期满续约期限:如（广告发布期满后，甲方如欲继续发布广告，应在合同期满前【1】个月书面通知乙方）】长度不能超过5个字符'},
	],
	reviseLimit: [
        {max: 20, message: '【合同修改通知期限，如（甲方有权对所发布广告内容进行修改，但需提前十（10）天通知乙方）】长度不能超过5个字符'},
	],
	reportLimit: [
        {max: 20, message: '【报告提交期限，如（广告发布后五（5）天内提交完成报告）】长度不能超过5个字符'},
	],
	reportCycle: [
        {max: 20, message: '【报告提交周期，如（每三个月提交监察报告一次）】长度不能超过5个字符'},
	],
	updateTime: [
        {max: 20, message: '【更新时间】长度不能超过29个字符'},
	],
	createTime: [
        {max: 20, message: '【创建时间】长度不能超过29个字符'},
	],
};

/* 合同订单关联表 */
export const odContractOrderRelaRulers = {
	id: [
		{required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
	],
	orderNumber: [
        {max: 20, message: '【排序】长度不能超过19个字符'},
	],
	createTime: [
        {max: 20, message: '【创建时间】长度不能超过29个字符'},
	],
	deleteFlag: [
        {max: 20, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
	],
};

/* 合同置状态历史记录表 */
export const odContractHisRecordRulers = {
	id: [
		{required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
	],
	state: [
        {max: 20, message: '【合同状态】长度不能超过32个字符'},
	],
	content: [
        {max: 20, message: '【描述】长度不能超过200个字符'},
	],
	deleteFlag: [
        {max: 20, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
	],
	createTime: [
        {max: 20, message: '【创建时间】长度不能超过29个字符'},
	],
};

/* 合同置换信息表 */
export const odContractDisplaceInfoRulers = {
	id: [
		{required: true, message: '请输入主键', trigger: 'blur'},
	],
	displaceContent: [
        {max: 20, message: '【置换内容描述】长度不能超过2,147,483,647个字符'},
	],
	displaceMenoy: [
        {max: 20, message: '【置换金额】长度不能超过16个字符'},
	],
	deleteFlag: [
	],
	createTime: [
	],
};

/* 合同附件信息关联表 */
export const odContractFileRulers = {
	id: [
		{required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
	],
	deleteFlag: [
	],
	createTime: [
	],
};

/* 优惠定义 */
export const bsDiscountDefinedRulers = {
    type: [
        { required: true,  validator: objectValidate("请选择优惠类型"), trigger: 'blur'
        },
    ],
	mediaType: [
		{required: true, message: '请输入资源类型', trigger: 'blur'},
        {max: 20, message: '【资源类型】长度不能超过20个字符'},
	],
	param: [
		{required: true, message: '请输入参数（根据不同优惠类型有不同数据）', trigger: 'blur'},
        {max: 50, message: '【参数（根据不同优惠类型有不同数据）】长度不能超过50个字符'},
	],
	discount: discountValidate,
	startTime: [
		{required: true, message: '请输入生效时间', trigger: 'blur'},
	],
	endTime: [
		{required: true, message: '请输入结束时间', trigger: 'blur'},
    ],
    money:[
        { required: true,  validator: moneyValidate(), trigger: 'blur'},
    ],
    rank:[
        { required: true,  validator: objectValidate('请选择等级'), trigger: 'blur'},
    ],
    customerNature:[
        { required: true,  validator: objectValidate('请选择客户性质'), trigger: 'blur'},
    ],
};

/* 提案 */
export const schemeRulers = {
	name: [
		{required: true, message: '请输入提案名称', trigger: 'blur'},
        {max: 100, message: '【提案名称】长度不能超过100个字符'},
	],
	publishPrice: [
		{required: true, message: '请输入发布费', trigger: 'blur'},
	],
	makePrice: [
		{required: true, message: '请输入制作费', trigger: 'blur'},
	],
	schemePositionNum: [
		{required: true, message: '请输入匹配点位数', trigger: 'blur'},
    ],
    generateConfig:{
        beginDate: [
            {required: true, message: '请选择发布起始日期', trigger: 'blur'},
        ],
        times: [
            {required: true, message: '请输入发布时长', trigger: 'blur'},
        ],
    },
    mediaType: [
		{required: true, message: '请输入媒体类型', trigger: 'blur'},
        {max: 32, message: '【媒体类型ID】长度不能超过32个字符'},
	],
	state: [
		{required: true, message: '请输入状态', trigger: 'blur'},
        {max: 20, message: '【状态】长度不能超过20个字符'},
    ],
    customer:[
        { required: true,  validator: objectValidate('请选择客户'), trigger: 'blur'},
    ],
    linkman:[
        { required: true,  validator: objectValidate('请选择客户联系人'), trigger: 'blur'},
    ],
    info: [
        {max: 4000, message: '【广告需求描述】长度不能超过4,000个字符'},
	],
	beginDate: [
		{required: true, message: '请输入发布起始日期', trigger: 'blur'},
    ],
    endDate: [
		{required: true, message: '请输入发布结束日期', trigger: 'blur'},
	],
	planPrice: [
		{required: true, validator: moneyValidate(), trigger: 'blur'},
    ],
    city:[
        { required: true,  validator: objectValidate('请选择城市'), trigger: 'blur'},
    ],
};


/* 提案明细 */
export const schemeDetailRulers = {
	repeatNumber: [
		{required: true, message: '请输入发布周期数量', trigger: 'blur'},
	],
	resourceNumber: [
		{required: true, message: '请输入媒体资源数量', trigger: 'blur'},
	],
	bsMediaTypeId: [
		{required: true, message: '请输入媒体资源分类 ', trigger: 'blur'},
        {max: 32, message: '【媒体资源分类 】长度不能超过32个字符'},
	],
};

/* 业务意向 */
export const schemePurposeRulers = {
	name: [
		{required: true, message: '请输入广告名称', trigger: 'blur'},
        {max: 100, message: '【广告名称】长度不能超过100个字符'},
	],
	
	times: [
		{required: true, message: '请输入发布时长', trigger: 'blur'},
	],
	units: [
		{required: true, message: '请输入时长单位', trigger: 'blur'},
        {max: 32, message: '【时长单位】长度不能超过32个字符'},
	],
	
};

//纳税人信息
export const finPaytaxesInfoRulers = {
        customer:[
            {required:true, validator: objectValidate('请输入所属客户'), trigger: 'blur',},
        ],
		companyName: [
            {required: true, message: '请输入公司名称', trigger: 'blur'},
	        {max: 500, message: '【公司名称长度不能超过500个字符'},
		],
		creditCode: [
            {required: true, message: '请输入统一社会信用代码', trigger: 'blur'},
	        {min:18,  max: 18, message: '请输入长度为18个字符的【统一社会信用代码】', trigger: 'blur'},
		],
		linkAddress: [
	        {max: 500, message: '【公司地址】长度不能超过500个字符'},
		],
		linkTel: [
	        {max: 32, message: '【公司电话】长度不能超过32个字符'},
		],
		paytaxesNo: [
            {required: true, message: '请输入纳税人识别号', trigger: 'blur'},
	        {max: 500, message: '【纳税人识别号】长度不能超过500个字符'},
		],
		bankName: [
            {required: true, message: '请输入开户银行', trigger: 'blur'},
	        {max: 500, message: '【开户银行】长度不能超过500个字符'},
		],
		bankAccount: [
            {required: true, message: '请输入银行账号', trigger: 'blur'},
	        {max: 64, message: '【银行帐号】长度不能超过64个字符'},
		],
		paytaxesType: [
            {required:true, validator: objectValidate('请选择纳税人类别'), trigger: 'blur',},
		],
		paytaxesRate: [
            {required:true, message:'请输入纳税税率', trigger:'blur',},
		],
		linkName: [
	        {max: 32, message: '【联系人姓名】长度不能超过32个字符'},
		],
		linkPhone: [
	        {max: 32, message: '【联系人手机】长度不能超过32个字符'},
		],
		linkEmail: [
	        {max: 500, message: '【联系人邮箱】长度不能超过500个字符'},
		],
		createTime: [
		],
		deleteFlag: [
	        {max: 2, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
		],
	};

/* 业务合同收款的银行账户信息表 */
export const finBussinessBankAccountRulers = {
	relateId: [
        {max: 32, message: '【关联ID】长度不能超过32个字符'},
    ],
    customer:[
        {required: true, validator:objectValidate('请选择客户'), trigger:'blur',},
    ],
    company:[
        {required: true, validator:objectValidate('请选择公司'), trigger:'blur', },
    ],
	type: [
        {required: true, message:'请选择账户类型', trigger:'blur', },
        {max: 50, message: '【客户（甲方）customer;企业（乙方）company;】长度不能超过50个字符'},
	],
	bankName: [
        {required: true, message:'请输入开户银行', trigger:'blur', },
        {max: 500, message: '【开户银行】长度不能超过500个字符'},
	],
	bankAccount: [
        {required: true, message:'请输入银行账号', trigger:'blur', },
        {max: 64, message: '【银行帐号】长度不能超过64个字符'},
    ],
    bankAccountName: [
        {required: true, message:'请输入银行账户名称', trigger:'blur', },
        {max: 64, message: '【银行账户名称】长度不能超过500个字符'},
	],
	bankAddress: [
        {max: 500, message: '【开户银行地址】长度不能超过500个字符'},
	],
	bankPhone: [
        {max: 64, message: '【开户银行联系电话】长度不能超过64个字符'},
	],
	isDefaultSet: [
        {max: 32, message: '【是否默认选项:  1为是,0为否】长度不能超过32个字符'},
	],
	createTime: [
	],
	deleteFlag: [
        {max: 2, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
	],
};

/* 开票登录信息表 */
export const finInvoiceInfoRulers = {
	invoiceProject: [
        {max: 500, message: '【项目】长度不能超过500个字符'},
	],
	receiveDate: [
        {required: true, message:'请选择日期', trigger:'blur',},
	],
	receiveAmount: [
        {required:true, message:'请输入应收金额', trigger:'blur',},
        {validator: moneyValidate(), trigger: 'blur'},
	],
	issueInvoiceDate: [
        {required: true, message:'请选择日期', trigger:'blur',},
	],
	issueInvoiceAmount: [
        {required: true, message:'请输入开票金额', trigger:'blur', },
        {validator: moneyValidate(), trigger: 'blur'},
	],
	paytaxesRate: [
        {required: true, message:'请输入税率', trigger:'blur', },
	],
	paytaxesAmount: [
        {required: true, message:'请输入税额', trigger:'blur',},
        {validator: moneyValidate(), trigger: 'blur'},
    ],
    invoiceNum: [
        {required: true, message:'请输入发票号码', trigger:'blur', },
        {max: 8, message: '【发票号码】长度不能超过8个字符'},
    ],
    issueInvoicePersion:[
        {required: true, validator:objectValidate('请选择开票人'), trigger:'blur', },
    ],
    receivePersion:[
        {required: true, validator:objectValidate('请选择收款人'), trigger:'blur', },
    ],
    checkPersion:[
        {required:true, validator:objectValidate('请选择复核人'), trigger:'blur', },
    ],
	createTime: [
	],
	deleteFlag: [
        {max: 2, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
	],
};

/* 合同应收款信息表 */
export const contractReceivableInfoRulers = {
	receivableName: [
        {max: 50, message: '【收款项名称】长度不能超过50个字符'},
	],
	receivableMoney: [
	],
	receivableProportion: [
	],
	receivableStartDate: [
	],
	receivableEndDate: [
	],
	createUserId: [
        {max: 32, message: '【创建人】长度不能超过32个字符'},
	],
	createTime: [
	],
	deleteFlag: [
        {max: 2, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
	],
};

/* 到账录入信息表 */
export const finBillRecordRulers = {
	paymentAmount: [
        // {required:true, message:'请输入应收金额', trigger:'blur',},
        // {validator: moneyValidate(), trigger: 'blur'},
        { required: true,  validator: moneyValidate(), trigger: 'blur'},
    ],
    finInvoiceInfo:[
        {required: true, validator:objectValidate('请选择发票号码'), trigger:'blur', },
    ],
    paymentType:[
        {required: true, validator: objectValidate('请选择结算方式'), trigger:'blur', },
    ],
    receiveAmount:[
        { required: true,  validator: moneyValidate(), trigger: 'blur'},
    ],
    receiveDate: [
        { required: true,  message:'请选择到账日期', trigger: 'blur'},
    ],
    serialNumber: [
        // {required: true, message:'请输入来款流水号', trigger: 'blur'}
        {max: 64, message:'【来款流水号】长度不饿能超过64个字符'}
    ],
    bankName: [
        //当使用现金结算时，不用输入来款银行信息
        // {required: true, message:'请输入来款银行', trigger: 'blur'},
        {max: 255, message: '【来款银行】长度不能超过255个字符'},
    ],
	deleteFlag: [
        {max: 2, message: '【逻辑删除标志(0未删除，1已删除)】长度不能超过2个字符'},
	],
};


/* 车辆线路变更申请表 */
export const meBuslineChangeRulers = {
	id: [
		{required: true, message: '请输入主键', trigger: 'blur'},
        {max: 20, message: '【主键】长度不能超过32个字符'},
	],
	approveNo: [
		{required: true, message: '请输入审批号码', trigger: 'blur'},
        {max: 20, message: '【审批号码】长度不能超过32个字符'},
	],
	approveTime: [
        {max: 20, message: '【审批时间】长度不能超过29个字符'},
	],
	state: [
        {max: 20, message: '【审批状态】长度不能超过2个字符'},
	],
	createTime: [
        {max: 20, message: '【申请时间】长度不能超过29个字符'},
	],
	remake: [
        {max: 20, message: '【申请备注】长度不能超过300个字符'},
	],
	deleteFlag: [
        {max: 20, message: '【是否删除标识】长度不能超过2个字符'},
	],
};

export const moduleRulers = {
    pid: [
        {max: 20, message: '【父模块】长度不能超过32个字符'},
    ],
    // parentIdLink: [
    //     {max: 500, message: '【父模块ID链JSON】长度不能超过500个字符'},
    // ],
    name: [
		{required: true, message: '请输入模块名称', trigger: 'blur'},
        {max: 50, message: '【模块名称】长度不能超过50个字符'},
	],
    code: [
		{required: true, message: '请输入权限代码', trigger: 'blur'},
        {max: 30, message: '【权限代码】长度不能超过30个字符'},
    ],
    imgSrc: [
        {max: 60, message: '【模块图标】长度不能超过60个字符'},
    ],
    funcUrl: [
        {max: 255, message: '【模块URL】长度不能超过255个字符'},
    ],
    description: [
        {max: 100, message: '【模块描述】长度不能超过100个字符'},
    ]
};

export const operatorRulers = {
    module:[
        {required:true, validator: objectValidate('请选择操作模块'), trigger: 'blur',},
    ],
    name: [
		{required: true, message: '请输入操作名称', trigger: 'blur'},
        {max: 50, message: '【操作名称】长度不能超过50个字符'},
	],
    code: [
		{required: true, message: '请输入权限代码', trigger: 'blur'},
        {max: 30, message: '【权限代码】长度不能超过30个字符'},
    ],
    funcUrl: [
        {max: 255, message: '【操作URL】长度不能超过255个字符'},
    ],
    description: [
        {max: 100, message: '【操作描述】长度不能超过100个字符'},
    ]
};

export const monitorRulers = {
    projectName: [
        {required: true, message: '请输入监测名称', trigger: 'blur'},
        {max: 100, message: '【监测名称】长度不能超过100个字符'},
    ],
    monitorUser: [
        {required: true, message: '请选择监测人', trigger: 'blur'},
    ],
    startDate: [
        {required: true, message: '请选择预计开始时间', trigger: 'change'},
    ],
    endDate: [
        {required: true, message: '请选择预计结束时间', trigger: 'change'},
    ],
    executeDetailIds: [
        {required: true, validator: arrayValidate("请选择车站等级"), trigger: 'change'},
    ],
}