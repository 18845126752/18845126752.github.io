import Vue from 'vue';
import Router from 'vue-router';
import VueRouter from 'vue-router';

Vue.use(Router);
Vue.use(VueRouter);

//解决vue-router在3.0版本以上重复点击菜单报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
    routes: [
        // {
            // path: '/index',
            // name: 'index',
            // component: () => import(/* webpackChunkName: "order" */'../view/index.vue'),
            
            // children: [
                // 账号及安全
                {
                    path: '/accountSecurity',
                    name: 'accountSecurity',
                    component: () => import(/* webpackChunkName: "order" */'../view/accountSecurity.vue'),

                },
                //实名认证
                {
                    path: '/realName',
                    name: 'realName',
                    component: () => import(/* webpackChunkName: "order" */'../view/realName.vue'),

                },
                //消息接收管理
                {
                    path: '/messagesReceiving',
                    name: 'messagesReceiving',
                    component: () => import(/* webpackChunkName: "order" */'../view/messagesReceiving.vue'),
                },
            // ]
        // },
        // 重定向
        { path: '/', redirect: '/result' }
    ]
});

export default router

