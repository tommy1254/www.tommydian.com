/*
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-27 15:25:34
 * @LastEditors: 源
 * @LastEditTime: 2022-12-27 15:27:38
 */
import {get} from '../axios';
export function getArticleCategory() {
  return get("/")
}