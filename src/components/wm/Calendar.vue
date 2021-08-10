<template>
  <div class="border border-solid d-theme-border-grey-light">
    <div class="w-full flex items-center justify-between">
      <!-- col1eft -->
      <div class="w-auto">
        <div
          class="flex justify-start items-center border border-solid d-theme-border-grey-light border-b-0 border-l-0 text-base font-normal whitespace-no-wrap p-3"
          v-for="(item, index) in titles"
          :key="`title-${item}${index}`"
          :class="{'h-14 border-t-0 font-bold': index === 0}"
          :style="{'height': rowHeight}"
          >{{ item }}</div>
      </div>
      <!-- colright -->
      <VuePerfectScrollbar class="xl:w-full w-480">
        <div class="flex flex-no-wrap items-center">
          <div
            class="xl:w-1/12 xl:min-w-0 w-40 min-w-40 h-14 flex justify-center items-center border-b-0 border border-solid d-theme-border-grey-light border-r-0 border-t-0 text-base font-normal whitespace-no-wrap p-3"
            v-for="(item, index) in headers"
            :key="`title-${item}${index}`"
            :class="{'border-l-0': index === 0}"
            >{{ item }}</div>
        </div>
        <div v-if="contents.length === 0">
          <div
            class="flex flex-no-wrap items-center"
            v-for="row in titles.length - 1"
            :key="`no-contents-row-${row}`">
            <div
              class="xl:w-1/12 xl:min-w-0 w-40 min-w-40 flex justify-center items-center border border-solid d-theme-border-grey-light border-r-0 border-b-0 text-base font-normal whitespace-no-wrap p-3"
              v-for="column in headers.length"
              :key="`no-contents-column-${row},${column}`"
              :class="{'border-l-0': column === 1}"
              :style="{'height': rowHeight}"
              ></div>
          </div>
        </div>
        <div v-else>
          <div
            class="flex flex-no-wrap items-center"
            v-for="(row, index) in contents"
            :key="`contents-row-${index}`">
            <div
              class="xl:w-1/12 xl:min-w-0 w-40 min-w-40 flex justify-center items-center border border-solid d-theme-border-grey-light border-r-0 border-b-0 text-base font-normal whitespace-no-wrap p-3"
              v-for="(column, index1) in row"
              :key="`contents-column-${index1}`"
              :class="{'border-l-0': index1 === 0}"
              :style="{'height': rowHeight}"
              >
              <CircleStatus :color="Number(column.status) === 0? 'danger' : 'success'" :size="contentsCircleHeight"/>
              </div>
          </div>
        </div>
      </VuePerfectScrollbar>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import CircleStatus from '@/components/wm/CircleStatus'

export default {
  components: { VuePerfectScrollbar, CircleStatus },
  data() {
    return {
      headers: [],
      contents: [],
      titles: ['工作内容', '机组类工作', '机组巡检', '半年检', '全年检', '叶片排查', '油品检测', '震动检测', '绝缘检测', '基础沉降观测', '设备定级']
    }
  },
  computed: {
    rowHeight() {
      return `calc((100vh - 145px - 2.95rem - 3.5rem) / ${this.titles.length - 1})`
    },
    contentsCircleHeight() {
      return `calc((100vh - 145px - 2.95rem - 3.5rem - 290px) / ${this.titles.length - 1})`
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.days();
      this.mock()
    })
  },
  methods: {
    days() {
      const nums = [];
      for ( let i = 1; i<=31; i++ ) {
        nums.push(i)
      }
      this.headers = nums
    },
    mock() {
      const mockData = []
      for (let x = 0; x < 10; x++) {
        const row = []
        for (let y = 0; y < 31; y++) {
          row.push({ id: `${x},${y}`, status: (x + y) % 2 > 0? 1 : 0 }) 
        }
        mockData.push(row)
      }

      setTimeout(() => {
        this.contents = mockData
      }, 1000)
    }
  }
}
</script>