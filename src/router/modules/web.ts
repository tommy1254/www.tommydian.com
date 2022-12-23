/*
 * @Description: 首页路由
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 09:47:24
 * @LastEditors: 源
 * @LastEditTime: 2022-12-22 13:57:05
 */
import Layout from '@web/layout/index.vue';
const webs = [
  {
    path: "/",
    component: Layout,
    redirect: "/",
    children: [
      {
        path: "/",
        component: () => import("@web/index.vue"),
      },
    ],
  },
];
export default webs;
