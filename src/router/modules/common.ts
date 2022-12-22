/*
 * @Description: 公共路由
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 09:47:24
 * @LastEditors: 源
 * @LastEditTime: 2022-12-22 09:52:59
 * @FilePath: \www.tommydian.com\src\router\modules\common.ts
 */
const common = [
  { path: "/:pathMatch(.*)", redirect: "/404"},
  {
    path: "/404",
    component:() => import("@components/404.vue"),
  },
];
export default common;