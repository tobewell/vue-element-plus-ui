//定义公共常量

import {cloneDeep} from 'lodash'

//主管数据
export const derectorNumDatas = (function(){
    let list = [];
    for(let i = 1; i <= 20 ; i++){
        let o = {
            id : i,
            key: 'director#' + i,
            label: "第"+ i +"级主管"
        };
        list.push(o);
    }
    return list;
})();

//主管数据 第一个为 直接主管
export const derectorDatas = (function(){
    let list = cloneDeep(derectorNumDatas);
    list[0].label = "直接主管"
    return list;
})();




//审批人类型
export const approveManTypes = [ 
    {value: 'appoint_manager', label: '主管（指定一级）',},
    {value: 'series_manager', label: '主管-连续多级',},
    {value: 'specify_org_user', label: '指定成员',},
    {value: 'specify_org_role', label: '指定角色',},
    {value: 'self', label: '发起人自己',},
];

//审批方式
export const approvePatternsDf = [
    {value: 'successively', label: '依次审批',},
    {value: 'jointly_sign', label: '会签 ',},
    {value: 'or_sign', label: '或签',},
    {value: 'self_select_in_role', label: '发起人从中角色中自选',},
]

//抄送类型
export const approveCpNoticeTypes = [
    {value: 'after_adopt', label: '仅全部同意后通知',},
    {value: 'apply_start', label: '仅发起时通知 ',},
    {value: 'start_and_adopt', label: '发起时和全部审批通过后通知',},
]


export const mediaTypeMap = {
    bus : '公交车媒体',
    billboard : '候车亭媒体',
};

export const mediaTypes = [
    {label: mediaTypeMap['bus'], value:'bus'},
    {label: mediaTypeMap['billboard'], value:'billboard'},
];

export const sellableTypes = {
    release:{value:'release', label:'上架', ansLabel:'下架'},
    offline:{value:'offline', label:'下架', ansLabel:'上架'},
    pending:{value:'pending', label:'未上架'},
    pending:{value:'pending', label:'不支持'}
};

export const schemeStateMap = {
    //   wait: '未提案',
      scheming: '提案中',
      approved:'审批完成',
      approving:'审批中',
      ordering: '订单处理中',
      contract: '签订合同',
      deal: '成交',
};

export const schemeStates = [
    //   { text: '未提案', value: 'wait' }, 
      { text: '提案中', value: 'scheming' },
      { text: '订单处理中', value: 'ordering' },
      { text: '签订合同', value: 'contract' },
      { text: '成交', value: 'deal' }
];

//审批常量
export const APPROVE={
    STATE:{
        APPROVING:'approving',//审批中
        TRANSFER:'transfer',//转交
        ADOPT:'adopt',//同意
        REFUSE:'refuse',//不同意
        CANCEL:'cancel',//已撤销
        WAIT:'wait'//待审批
    },
    PATTERN: {
        SUCCESSIVELY:'successively',//依次审批
        JOINTLY_SIGN:'jointly_sign',//多人会签
        OR_SIGN:'or_sign',//多人或签
        SELF_SELECT_IN_ROLE:'self_select_in_role'//角色自选
    },
    SPECAIL:{
        SCHEME:'scheme_suite',//提案流程
        ORDER:'order_suite',//订单流程
        CONTRACT:'contract_suite'//合同流程
    },
    OPER:{
        REFUSE:'refuse',//不同意
        CANCEL:'cancel',//撤回
        ADOPT:'adopt',//同意
        TRANSFER:'transfer',//转交
        COMMENT:'comment'//评论
    }
}


export const monitorStatus = {
    monitoring: '监测中',
    finish: '已完成',
    cancel: '已取消'
};

export const monitorStatusValue = {
    monitoring: 'monitoring',
    finish: 'finish',
    cancel: 'cancel'
};

export const monitorStatusMap = [
    {id:'monitoring',label:monitorStatus['monitoring']},
    {id:'finish',label:monitorStatus['finish']},
    {id:'cancel',label:monitorStatus['cancel']},
];