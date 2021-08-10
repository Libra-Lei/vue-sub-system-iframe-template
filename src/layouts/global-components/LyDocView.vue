<!--
 * @Description: 
 * @Author: 幺五六
 * @Date: 2020-11-10 14:01:05
 * @LastEditors: 幺五六
 * @LastEditTime: 2021-03-26 15:10:43
-->
<template>
  <div>
    <vs-popup fullscreen title="预览" :active.sync="active" @close="popupCloseCallback">
      <div style="height:100%;" id="docContainer"></div>
    </vs-popup>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import { CLOSE_ALL_DIALOG, OPEN_DOC_VIEW, DOC_VIEW_CLOSED } from '@/utils/pubsub'

import { v4 as uuidv4 } from 'uuid'
import { loadJs } from '@/utils/view'
import { convertFileAddress } from '@/utils/requestHelper'
import { officeTypes } from '@/utils/constants/office'

export default {
  data() {
    return {
      active: false,
      docEditor: null, // 文档编辑器实例
      subToken: [],
      
      onlyView: true // 仅预览
    }
  },
  watch: {
    active(nv) {
      if (!nv && this.docEditor) {
        this.docEditor.destroyEditor();
      }
    }
  },
  mounted() {
    const token = PubSub.subscribe(CLOSE_ALL_DIALOG, this.close);
    const token1 = PubSub.subscribe(OPEN_DOC_VIEW, this.openDoc);
    this.subToken.push(token);
    this.subToken.push(token1);
  },
  beforeDestroy() {
    this.subToken.forEach(token => {
      PubSub.unsubscribe(token);
    })
    this.subToken = [];
  },
  methods: {
    popupCloseCallback() {
      if (!this.onlyView) {
        PubSub.publish(DOC_VIEW_CLOSED);
      }
    },
    close(msg, data) {
      if (!this.active) {
        data.next && data.next();
        return;
      }
      this.active = false;
      this.popupCloseCallback();
    },
    async openDoc(msg, data) {
      const { docName, docPath, docType, user, callbackParameter, onlyView } = data;
      this.onlyView = onlyView || false;
      this.active = true;
      if (this.docEditor) {
        this.docEditor.destroyEditor();
      }
      if (!window.DocsAPI) {
        await loadJs(`${process.env.VUE_APP_ONLYOFFICE}/web-apps/apps/api/documents/api.js`);
      }

      const documentType = officeTypes.find(x => 
        x.suffix.findIndex(y => y === docType) > -1
      ).type;

      const config = {
        document: {
          fileType: docType.substr(1),
          key: uuidv4(),
          title: docName || '',
          url: convertFileAddress(docPath),
          permissions: {
            comment: false,
            copy: true,
            download: true,
            edit: true,
            fillForms: true,
            modifyContentControl: true,
            modifyFilter: true,
            print: true,
            review: true
          }
        },
        documentType: documentType,
        editorConfig: {
          callbackUrl: onlyView? null : `${process.env.VUE_APP_ONLYOFFICE_CALLBACK}/pms/onlyoffice/orderTicketCallback?${callbackParameter}`,
          user: user,
          lang: 'zh',
          mode: onlyView? 'view' : 'edit',
          customization: {
            autosave: true,
            chat: false,
            comments: false,
            help: false
          }
        }
      };
      this.docEditor = new window.DocsAPI.DocEditor('docContainer', config);
    }
  }
}
</script>

<style lang="scss">
.vs-popup--content {
  height: 100%;
}
</style>