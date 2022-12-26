import { createApp } from 'vue'
import App from './App.vue'
//重置&定义样式
import '@style/index.scss';
//ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//路由
import router from '@/router';
//全局组件
import globalComp from '@components/global';
//引入 svg 注册脚本
import "virtual:svg-icons-register";
//pinia
import pinia from '@/store';
var app = createApp(App);
app.use(router)
app.use(ElementPlus)
app.use(globalComp)
app.use(pinia)
app.mount('#app');
