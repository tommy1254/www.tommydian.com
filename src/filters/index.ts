/*
 * @Description: 过滤器
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-12-22 14:20:16
 * @LastEditors: 源
 * @LastEditTime: 2022-12-22 14:50:44
 */
/**
 * 格式化日期
 * @param date 日期
 * @param type 格式
 * @returns 
 */
export const DateFormat = (date: Date, type: String) => {
  if (date) {
    let year, month, day, HH, mm, ss;
    let time = new Date(date);
    let timeDate;
    year = time.getFullYear(); // 年
    month = time.getMonth() + 1; // 月
    day = time.getDate(); // 日
    HH = time.getHours(); // 时
    mm = time.getMinutes(); // 分
    ss = time.getSeconds(); // 秒

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    HH = HH < 10 ? '0' + HH : HH; // 时
    mm = mm < 10 ? '0' + mm : mm; // 分
    ss = ss < 10 ? '0' + ss : ss; // 秒

    switch (type) {
      case 'yyyy':
        timeDate = String(year);
        break;
      case 'yyyy-MM':
        timeDate = year + '-' + month;
        break;
      case 'yyyy-MM-dd':
        timeDate = year + '-' + month + '-' + day;
        break;
      case 'yyyy/MM/dd':
        timeDate = year + '/' + month + '/' + day;
        break;
      case 'yyyy-MM-dd HH:mm:ss':
        timeDate = year + '-' + month + '-' + day + '' + HH + ':' + mm + ':' + ss;
        break;
      case 'HH:mm:ss':
        timeDate = HH + ':' + mm + ':' + ss;
        break;
      case 'MM':
        timeDate = String(month);
        break;
      default:
        timeDate = year + '-' + month + '-' + day;
        break;
    }
    return timeDate;
  } else {
    return '';
  }
};