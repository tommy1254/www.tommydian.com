/*
 * @Description: 首页路由
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 09:47:24
 * @LastEditors: 源
 * @LastEditTime: 2022-12-22 13:57:05
 */
import Layout from '@blog/layout/index.vue';
const blogs = [
  {
    path: "/",
    component: Layout,
    redirect: "/",
    children: [
      {
        path: "/",
        component: () => import("@blog/index.vue"),
      },
    ],
  },
];
export default blogs;
