import {  isString,isNumber} from '@utils/validate';
/**
 * 添加css单位
 * @param val 值
 * @param defaultUnit 单位
 * @returns {String}
 */
export const cssUnitConvertPx = (val?: string | number, defaultUnit = 'px') => {
  if (!val) return ''
  if (isString(val)) {
    return val
  } else if (isNumber(val)) {
    return `${val}${defaultUnit}`
  }
  console.error('cssUnitConvertPx,参数无效')
  return ''
}