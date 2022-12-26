/*
 * @Description: 状态管理安装
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-24 09:13:43
 * @LastEditors: 源
 * @LastEditTime: 2022-12-24 09:23:38
 */
import { createPinia } from 'pinia';
// import persist from 'pinia-plugin-persistedstate' //导入持久化插件
// 创建pinia实例
const pinia = createPinia();
// 使用pinia插件
// pinia.use(persist) //持久化
export default pinia;


export * from './modules/config'; //多个模块同理导出
