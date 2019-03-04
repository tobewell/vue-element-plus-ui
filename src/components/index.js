//approve
import aeApproveDialog from '@/components/approve/aeApproveDialog';
import aeCard from '@/components/approve/aeCard';
import aeContractSelect from '@/components/approve/aeContractSelect';
import aeCustomerSelect from '@/components/approve/aeCustomerSelect';
import aeDepartmentSelect from '@/components/approve/aeDepartmentSelect';
import aeDetailDialog from '@/components/approve/aeDetailDialog';
import aeFile from '@/components/approve/aeFile';
import aeFlowNode from '@/components/approve/aeFlowNode';
import aeFlowNodeSelect from '@/components/approve/aeFlowNodeSelect';
import aeFlowNotice from '@/components/approve/aeFlowNotice';
import aeImage from '@/components/approve/aeImage';
import aeMoney from '@/components/approve/aeMoney';
import aeMulText from '@/components/approve/aeMulText';
import aeOrderSelect from '@/components/approve/aeOrderSelect';
import aeSchemeSelect from '@/components/approve/aeSchemeSelect';
import aeSideDialog from '@/components/approve/aeSideDialog';
import aeSideDialogInitiate from '@/components/approve/aeSideDialogInitiate';
//base
// import imageRead from '@/components/base/imageRead';
// // import ossUpload from '@/components/base/ossUpload';
// import popoverDelete from '@/components/base/popoverDelete';
// import SelectCity from '@/components/base/SelectCity';
// import toTop from '@/components/base/toTop';
// import transitionSlideDownUp from '@/components/base/transitionSlideDownUp';
// import treeRender from '@/components/base/tree_render';
// // import ueditor from '@/components/base/ueditor';
// //check
// import skuAttrCheck from '@/components/check/skuAttrCheck';
// //other
// import funcLeft from '@/components/other/funcLeft';
// import headTop from '@/components/other/headTop';
// import siderMenu from '@/components/other/siderMenu';
// import treeTable from '@/components/TreeTable';
// import BMapComponent from '@/components/BMapComponent';
// import breadcrumb from '@/components/breadcrumb';
// import excelImport from '@/components/excelImport';
// import mediaTypeCascader from '@/components/mediaTypeCascader';
// import schedule from '@/components/schedule';
// //select
// import busLineSelect from '@/components/select/busLineSelect';
// import customerSelect from '@/components/select/customerSelect';
// import dataCheckBox from '@/components/select/dataCheckBox';
// import dataSelect from '@/components/select/dataSelect';
// import linkmanSelect from '@/components/select/linkmanSelect';
// import orgMulSelect from '@/components/select/orgMulSelect';
// import orgSelect from '@/components/select/orgSelect';
// import orgUserSelect from '@/components/select/orgUserSelect';
// import picenseSelect from '@/components/select/picenseSelect';
// import popoverSelect from '@/components/select/popoverSelect';
// import roleSelect from '@/components/select/roleSelect';
// import specificDefSelect from '@/components/select/specificDefSelect';

const components = [
    //approve
    aeApproveDialog,aeCard,aeContractSelect,aeCustomerSelect,
    aeDepartmentSelect,aeDetailDialog,aeFile,aeFlowNode,aeFlowNodeSelect,
    aeFlowNotice,aeImage,aeMoney,aeMulText,aeOrderSelect,aeSchemeSelect,
    aeSideDialog,aeSideDialogInitiate,
    //base
    // imageRead,ossUpload,popoverDelete,SelectCity,toTop,transitionSlideDownUp,
    // treeRender,ueditor,
    // //check
    // skuAttrCheck,
    // //other
    // funcLeft,headTop,siderMenu,treeTable,BMapComponent,breadcrumb,excelImport,
    // mediaTypeCascader,schedule,
    // //select
    // busLineSelect,customerSelect,dataCheckBox,dataSelect,linkmanSelect,orgMulSelect,
    // orgSelect,orgUserSelect,picenseSelect,popoverSelect,roleSelect,specificDefSelect,
];

const install=(Vue, opts = {})=>{
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

export default { 
    name:'custom-component',
    install
}