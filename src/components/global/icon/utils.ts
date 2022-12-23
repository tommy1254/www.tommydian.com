/*
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-23 14:59:21
 * @LastEditors: 源
 * @LastEditTime: 2022-12-23 14:59:21
 */
/**
 * 图标class命名
 * @param name 
 * @param be 
 * @param svg 
 * @returns 
 */
export const iconClass = (name: string, be: string, svg: boolean) => {

  if (!be) return svg ? `#${name}` : `${name}`;
  return svg ? `#${be}-${name}` : `${be} ${be}-icon-${name}`;
}
