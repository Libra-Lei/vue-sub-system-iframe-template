/*
 * @Description: 
 * @Author: 幺五六
 * @Date: 2020-11-25 15:42:25
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-07-21 15:51:11
 */

/**
 * 本地资源key --> 授权资源 映射
 */
export const aclKeyMap = {
  'asset': '/app_pro/asset/ledger',
  'assetModel': '/app_pro/asset/model',
  'kksDic': '/app_pro/asset/dictionary',
  'workOrderList': '/app_pro/work-order/list',
  'workOrderNote': '/app_pro/work-order/note',
  'workOrderModel': '/app_pro/work-order/model',
  'maintain': '/app_pro/maintain/index',
  'maintainReport': '/app_pro/maintain/fault-report',
  'duty': '/app_pro/on-duty/duty/index',
  'dutyUser': '/app_pro/on-duty/user/index',
  'dutyGroup': '/app_pro/on-duty/group/index',
  'dutySchedule': '/app_pro/on-duty/schedule/index',

  'oneElectric': '/app_pro/bill/one-electric',
  'twoElectric': '/app_pro/bill/two-electric',
  'turbineRepair': '/app_pro/bill/turbine-repair',
  'powerSwitch': '/app_pro/bill/power-switch',
  'secondFire': '/app_pro/bill/second-fire',
  'billModel': '/app_pro/bill/bill-model'
}

/**
 * 访问控制 资源表
 */
export const permit = {
  '/app_pro/asset/ledger': {
    'view': false,
    'ledger-add': false,
    'ledger-delete': false,
    'ledger-modify': false,
    'ledger-export': false
  },
  '/app_pro/asset/model': {
    'view': false,
    'model-add': false,
    'model-delete': false,
    'model-modify': false,
    'model-copy': false,
    'model-add-assets': false
  },
  '/app_pro/asset/dictionary': {
    'view': false,
    'dictionary-add': false,
    'dictionary-delete': false,
    'dictionary-modify': false
  },
  '/app_pro/work-order/list': {
    'view': false,
    'list-new': false, // 新建工单
    'list-mode-new': false, // 从模板新建工单
    'list-audit': false, // 工单审核
    'list-change-audit': false, // 工单变更审核
    'list-upload': false // 附件备注
  },
  '/app_pro/work-order/note': {
    'view': false,
    'note-upload': false,
    'note-download': false,
    'note-delete': false,
    'note-preview': false
  },
  '/app_pro/work-order/model': {
    'view': false,
    'model-new': false,
    'model-edit': false,
    'model-delete': false
  },
  '/app_pro/maintain/index': {
    'view': false,
    'plan-add': false,
    'plan-submit': false, // 提交编辑的计划
    'plan-withdraw': false, // 撤回计划

    'audit-submit': false, // 计划审核提交

    'period-stop': false // 停止周期计划
  },
  '/app_pro/maintain/fault-report': {
    'view': false,
    'fault-report': false
  },
  '/app_pro/on-duty/duty/index': {
    'view': false,
    'duty-fill': false,
    'duty-log': false
  },
  '/app_pro/on-duty/user/index': {
    'view': false
  },
  '/app_pro/on-duty/group/index': {
    'view': false,
    'group-add': false,
    'group-delete': false,
    'group-modify': false
  },
  '/app_pro/on-duty/schedule/index': {
    'view': false,
    'schedule-add': false,
    'schedule-modify': false,
    'schedule-delete': false
  },
  '/app_pro/bill/one-electric': {
    'view': false,
    'create': false, // 新建
    'create-from-model': false, // 从模板新建
    'save-as-model': false, // 存为模板
    'print': false, // 打印
    'process-remark': false // 附件
  },
  '/app_pro/bill/two-electric': {
    'view': false,
    'create': false, // 新建
    'create-from-model': false, // 从模板新建
    'save-as-model': false, // 存为模板
    'print': false, // 打印
    'process-remark': false // 附件
  },
  '/app_pro/bill/turbine-repair': {
    'view': false,
    'create': false, // 新建
    'create-from-model': false, // 从模板新建
    'save-as-model': false, // 存为模板
    'print': false, // 打印
    'process-remark': false // 附件
  },
  '/app_pro/bill/power-switch': {
    'view': false,
    'create': false, // 新建
    'create-from-model': false, // 从模板新建
    'save-as-model': false, // 存为模板
    'print': false, // 打印
    'process-remark': false // 附件
  },
  '/app_pro/bill/second-fire': {
    'view': false,
    'create': false, // 新建
    'create-from-model': false, // 从模板新建
    'save-as-model': false, // 存为模板
    'print': false, // 打印
    'process-remark': false // 附件
  },
  '/app_pro/bill/bill-model': {
    'view': false,
    'create': false,
    'delete': false,
    'edit': false
  }
}