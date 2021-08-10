/*
 * @Description: 
 * @Author: 幺五六
 * @Date: 2021-01-12 14:50:27
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-08-02 11:27:35
 */
import * as dayjs from 'dayjs'
// const utc = require('dayjs/plugin/utc')
// dayjs.extend(utc)

export function date2Day(date) {
  if (!date || !dayjs(date).isValid()) return '--';
  // return dayjs.utc(date).format('YYYY-MM-DD');
  return dayjs(date).format('YYYY-MM-DD');
}

export function date2Month(date) {
  if (!date || !dayjs(date).isValid()) return '--';
  // return dayjs.utc(date).format('YYYY-MM');
  return dayjs(date).format('YYYY-MM');
}

export function date2Minute(date) {
  if (!date || !dayjs(date).isValid()) return '--';
  // return dayjs.utc(date).format('YYYY-MM-DD HH:mm');
  return dayjs(date).format('YYYY-MM-DD HH:mm');
}

export function date2HourMinute(date) {
  if (!date || !dayjs(date).isValid()) return '--';
  // return dayjs.utc(date).format('HH:mm');
  return dayjs(date).format('HH:mm');
}