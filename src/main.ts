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

var app = createApp(App);
app.use(router)
app.use(ElementPlus)
app.use(globalComp)
app.mount('#app');
