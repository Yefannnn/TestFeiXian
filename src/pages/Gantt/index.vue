<template>
  <div id="gantt_here" style="width: 1000px; height: 400px"></div>
</template>

<script setup>
import { gantt } from 'dhtmlx-gantt'
import { onMounted, ref } from 'vue'

const gantttt = {
  data: [
    {
      id: 3,
      text: 'SU-27',
      //   type: 'milestone',
      start_date: new Date('2022-11-10 12:00'),
      end_date: new Date('2022-11-10 14:00')
    },
    {
      id: 1,
      text: 'SU-30',
      start_date: new Date('2022-11-10 12:00'),
      end_date: new Date('2022-11-10 14:00')
      //   open: true
    },
    {
      id: 12323544,
      text: '海情中心',
      start_date: new Date('2022-11-10 12:00'),
      end_date: new Date('2022-11-10 14:00'),
      duration: 2,
      progress: 0,
      person: 'Julia Garner',

      open: true
    },
    {
      id: 1232354422,
      text: '海清中心',
      start_date: new Date('2022-11-10 12:00'),
      end_date: new Date('2022-11-10 14:00'),
      duration: 2,
      progress: 0,
      color: '#2F80ED',
      person: 'Julia Garner'
      //   parent: 12323544
    },
    {
      id: 1232354421,
      text: '海清中心',
      start_date: new Date('2022-11-10 12:00'),
      end_date: new Date('2022-11-10 14:00'),
      duration: 2,
      progress: 0,
      color: '#2F80ED'
      //   parent: 12323544
    },
    {
      id: 12323545,
      text: 'SU-30',
      start_date: new Date('2022-11-10 12:00'),
      end_date: new Date('2022-11-10 14:00'),
      time: '02/01-02/20',
      duration: 2,
      progress: 0
      //   parent: 1,
      //   open: true
    },
    {
      id: 12345453,
      text: 'SU-27',
      start_date: new Date('2022-11-10 12:00'),
      end_date: new Date('2022-11-10 20:00'),
      time: '02/01-02/20',
      duration: 3,
      progress: 0,
      color: '#ED263D'
      //   parent: 12323545
    }
  ],
  links: [
    { id: 1, source: 1, target: 3, type: '0' },
    { id: 2, source: 12323545, target: 12345453, type: '1' },
    { id: 3, source: 12345453, target: 12345437, type: '0' }
  ]
}

const ganttColumns = ref([
  //   {
  //     align: 'right',
  //     name: 'color',
  //     label: '',
  //     width: '15',
  //     template: function (task) {
  //       if (task.color) {
  //         return (
  //           "<div class='tttttt' style='background:" +
  //           task.color +
  //           "'>" +
  //           '</div>'
  //         )
  //       }
  //     }
  //   },
  {
    align: 'left',
    name: 'text',
    label: '节点名称',
    tree: true,
    width: 120,
    min_width: 20
  }
  //   { align: 'center', name: 'person', label: '负责人', width: '100' },
  //   { align: 'right', name: 'time', label: '时间节点', width: '80' }
])

gantt.config.columns = ganttColumns.value
var weekScaleTemplate = function (date) {
  var dateToStr = gantt.date.date_to_str('%d')
  var endDate = gantt.date.add(gantt.date.add(date, 1, 'week'), -1, 'day')
  const weekNum = gantt.date.date_to_str('W%W  ')
  return weekNum(date) + dateToStr(date) + ' - ' + dateToStr(endDate)
}
// gantt.config.scales = [
//   { unit: 'minute', step: 1, format: '%m ' },
//   { unit: 'hour', step: 1, format: '%h' }
//   //   { unit: 'month', step: 1, format: '%F %Y' }
//   //   { unit: 'week', step: 1, format: '%j,%D' }
// ]

onMounted(() => {
  // 清空之前的配置
  gantt.clearAll()
  // 默认配置
  gantt.plugins({
    marker: true
  })
  const markerId = gantt.addMarker({
    start_date: new Date('2022-11-10 13:00'),
    css: 'marker',
    text: ''
  })
  //任务的点击方法
  gantt.attachEvent('onTaskClick', function (id, e) {
    console.log(id)
    return true
  })
  gantt.config.work_time = true
  gantt.i18n.setLocale('cn') // 设置中文
  gantt.config.readonly = true // 设置为只读
  gantt.config.bar_height = 20 //task高度
  //自适应甘特图的尺寸大小, 使得在不出现滚动条的情况下, 显示全部任务
  gantt.config.autosize = true
  gantt.config.open_split_tasks = true
  // 显示列配置，限制最大最小时间
  //   gantt.config.start_date = new Date(2022, 11, 9)
  //   gantt.config.end_date = new Date(2022, 11, 11)
  gantt.config.columns = ganttColumns.value
  gantt.config.scales = [
    {
      unit: 'day',
      step: 1,
      format(a) {
        return new Date(a).getMonth() + 1 + '/' + new Date(a).getDate()
      }
    },
    {
      unit: 'hour',
      step: 1,
      format(a) {
        console.log('@@@@', new Date(a).getHours(), new Date(a).getMinutes())
        return new Date(a).getHours() + ':00'
      }
    }
  ]
  gantt.getMarker(markerId)
  // 初始化甘特图
  gantt.init('gantt_here')
  gantt.parse(gantttt)
})
</script>

<style>
@import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
</style>
