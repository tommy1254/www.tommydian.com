/*
 * @Description: 路由安装器
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 09:45:22
 * @LastEditors: 源
 * @LastEditTime: 2022-12-22 10:00:01
 * @FilePath: \www.tommydian.com\src\router\index.ts
 */
import { createRouter, createWebHistory,RouteRecordRaw  } from 'vue-router';
//在使用vite 时，发现不能使用require.context 自动导入modules,可以使用import.meta.globEager替换
//引入目录文件
const files: any = import.meta.globEager("./*.ts")
const routes:Array<RouteRecordRaw>=[];
Object.keys(files).forEach(key => {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    var arr=files[key].default;
    arr.forEach((item: any) => {
      routes.push(item)
    })
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes
})
export default router;