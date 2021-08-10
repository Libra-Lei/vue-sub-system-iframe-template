/*
 * @Description: pubsub （发布订阅）
 * @Author: 幺五六
 * @Date: 2020-10-27 14:08:39
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-01-05 14:40:28
 */

/**
 * 关闭弹窗显示 （全局）
 * 解决 弹窗在 路由变化时不关闭的问题
 */
export const CLOSE_ALL_DIALOG = Symbol('close_all_dialog');

/**
 * 打开 故障、预警、缺陷 详情展示（sidebar）
 */
export const OPEN_SIDEBAR_VIEW_FAULT = Symbol('open_sidebar_view_fault');

/**
 * 打开 资产展示（sidebar）
 */
export const OPEN_SIDEBAR_VIEW_ASSET = Symbol('open_sidebar_view_asset');

/**
 * 打开 计划展示（sidebar）
 */
export const OPEN_SIDEBAR_VIEW_PLAN = Symbol('open_sidebar_view_plan');

// ============ 文档预览/编辑 start ============================================

/**
 * 打开 文档预览/编辑弹窗
 */
export const OPEN_DOC_VIEW = Symbol('open_doc_view');
/**
 * 文档预览/编辑弹窗 关闭
 */
export const DOC_VIEW_CLOSED = Symbol('doc_view_closed');

// ============ 文档预览/编辑 end ============================================

// ============ 加载进度条 start ============================================

/**
 * 打开进度条提示 notify
 */
export const OPEN_PROGRESS_NOTIFY = Symbol('open_progress_notify');
/**
 * 关闭进度条提示 notify
 */
export const CLOSE_PROGRESS_NOTIFY = Symbol('close_progress_notify');

// ============ 加载进度条 end ============================================