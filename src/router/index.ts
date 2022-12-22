/*
 * @Description: 路由安装器
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 09:45:22
 * @LastEditors: 源
 * @LastEditTime: 2022-12-22 10:00:01
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routes from './modules';
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes,
});
export default router;
