/*
 * @Description: 全局配置
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-24 09:15:03
 * @LastEditors: 源
 * @LastEditTime: 2022-12-26 08:59:32
 */
import { defineStore } from 'pinia';
/**
 * 简写语法： defineStore(仓库id,( )=>{
 *          const x = 1
 *        }) 
 */
export const useConfigStore = defineStore({
  id: 'configStore', // 必须指明唯一的pinia仓库的id
  state: () => ({
    menu: true,//侧边
  }),
  actions: {
    // actions 中可通过 this 来获取state中的数据
    // val 调用时时传过来的数据
    // 方法 可以是异步 async addCounter(){}
    // 在这里也可以访问其他的store
    updateMenu() {
      this.menu = !this.menu;
    },
  },
  getters: {
    // 可以使用this
    // return this.counter * 2
    // 在这里也可以访问其他的store
    getMenu(state) {
      return this.menu
    }

  }
});
