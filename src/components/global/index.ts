/*
 * @Description: 全局组件安装器
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-23 08:59:23
 * @LastEditors: 源
 * @LastEditTime: 2022-12-23 10:45:42
 */
import type { Component, App } from "vue";
import Icon from './icon/index.vue';//svg

//组件
const components: {
  [propName: string]: Component;
} = {
  Icon,
};

//安装
export default {
  install: function (app: App<Element>) {
    Object.keys(components).forEach((item) => {
      var comp:any = components[item]
      app.component(comp.name, comp);
    })
  }
};

//代码提示
declare module 'vue' {
  export interface GlobalComponents {
    LmIcon: typeof Icon
  }
}