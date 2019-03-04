import Vue from 'vue'
import VueResource from 'vue-resource'
import { Message } from 'element-ui';
// Vue.use(VueResource);
import router from '@/router'
//拦截器
Vue.http.interceptors.push((request, next) => {
    next((response) => {
        if(response.body.code === 5 || response.body.code === 6 ){ //与后台约定登录失效的返回码
            console.log( router);
            router.push({
                path: '/login',
                query: {redirect: encodeURIComponent( router.currentRoute.fullPath)}
            });
            // parent.location.href = '/#/login';
        }else if(response.data.success !== undefined && !response.data.success){
            Message.error(response.data.msg);
        }
        return response;
    });
});

export default VueResource;