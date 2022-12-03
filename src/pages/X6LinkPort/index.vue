<template>
  <div id="container"></div>

  <button @click="showPorts(1)">点击显示链接桩</button>
  <button @click="showPorts(0)">点击隐藏链接桩</button>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Graph, Shape } from '@antv/x6'

const graphIns = ref()
const graphInstance = ref([])
const NodeData = ref()

// -------
//   总高度
const maxHeight = 400
//   每类节点起始位置
const catagroup = {
  1: {
    x: 20,
    y: 20,
    counts: 0,
    curr: 1
  },
  2: {
    x: 220,
    y: 20,
    counts: 0,
    curr: 1
  },
  3: {
    x: 420,
    y: 20,
    counts: 0,
    curr: 1
  },
  4: {
    x: 620,
    y: 20,
    counts: 0,
    curr: 1
  }
}

//   新增节点
const createNode = ({ x, y }) => {
  const node = graphIns.value.addNode({
    x,
    y,
    width: 80,
    height: 80,
    //   定制html节点结构
    shape: 'html',
    html() {
      const wrap = document.createElement('div')
      wrap.style.width = '80px'
      wrap.style.height = '80px'
      wrap.style.background = "url('src/assets/vue.svg') no-repeat "
      wrap.style.display = 'flex'
      wrap.style.position = 'relative'
      wrap.style.justifyContent = 'center'
      wrap.style.alignItems = 'center'
      // 创建一个子元素，append到父元素当中
      const sonDom = document.createElement('span')
      sonDom.style.position = 'absolute'
      sonDom.style.bottom = '20px'
      sonDom.style.left = '10px'
      sonDom.innerText = '+'
      sonDom.style.fontSize = '23px'
      wrap.appendChild(sonDom)
      return wrap
    },
    //   定义这个节点的连接装 并对他进行分类
    ports: {
      groups: {
        group1: {
          position: 'absolute',
          attrs: {
            circle: {
              r: 6,
              magnet: true,
              stroke: '#31d0c6',
              strokeWidth: 2,
              fill: '#fff'
            }
          }
        }
      },
      items: []
    }
  })
  graphInstance.value.push(node)
}

// 新增带链接桩的节点
const createNodePorts = ({ x, y }) => {
  const node = graphIns.value.addNode({
    x,
    y,
    width: 80,
    height: 80,
    //   定制html节点结构
    shape: 'html',
    html() {
      const wrap = document.createElement('div')
      wrap.style.width = '80px'
      wrap.style.height = '80px'
      wrap.style.background = "url('src/assets/vue.svg') no-repeat "
      wrap.style.display = 'flex'
      wrap.style.position = 'relative'
      wrap.style.justifyContent = 'center'
      wrap.style.alignItems = 'center'
      // 创建一个子元素，append到父元素当中
      const sonDom = document.createElement('span')
      sonDom.style.position = 'absolute'
      sonDom.style.bottom = '20px'
      sonDom.style.left = '10px'
      sonDom.innerText = '+'
      sonDom.style.fontSize = '23px'
      wrap.appendChild(sonDom)
      return wrap
    },
    //   定义这个节点的连接装 并对他进行分类
    ports: {
      groups: {
        group1: {
          position: 'absolute',
          attrs: {
            circle: {
              r: 6,
              magnet: true,
              stroke: '#31d0c6',
              strokeWidth: 2,
              fill: '#fff'
            }
          }
        }
      },
      items: [
        {
          id: '01',
          group: 'group1',
          args: {
            x: '50%',
            y: 0
          }
        },
        {
          id: '02',
          group: 'group1',
          args: {
            x: 0,
            y: '50%'
          }
        },
        {
          id: '03',
          group: 'group1',
          args: {
            x: '100%',
            y: '50%'
          }
        },
        {
          id: '04',
          group: 'group1',
          args: {
            x: '33%',
            y: '100%'
          }
        },
        {
          id: '05',
          group: 'group1',
          args: {
            x: '66%',
            y: '100%'
          }
        }
      ]
    }
  })
}

const createGraph = () => {
  // 画布
  graphIns.value = new Graph({
    container: document.getElementById('container'),
    width: 1500,
    height: 500,
    background: {
      color: '#fffbe6'
    }
  })
  graphIns.value.on('edge:connected', ({ isNew, edge }) => {
    if (isNew) {
      const source = edge.getSourceCell()
      console.log('source', source)
      const target = edge.getTargetCell()
      console.log('target', target)
    }
  })
  //   节点详细信息
  NodeData.value = [
    {
      type: '1'
    },
    {
      type: '2'
    },
    {
      type: '3'
    },
    {
      type: '4'
    },
    {
      type: '1'
    },
    {
      type: '2'
    },
    {
      type: '3'
    },
    {
      type: '4'
    }
  ]

  NodeData.value.forEach((item) => {
    catagroup[item.type].counts++
  })

  NodeData.value.forEach((NodeItem) => {
    let x = catagroup[NodeItem.type].x
    let y =
      catagroup[NodeItem.type].y +
      (maxHeight / (catagroup[NodeItem.type].counts + 1)) *
        catagroup[NodeItem.type].curr
    // 创建节点
    createNode({ x, y })
    catagroup[NodeItem.type].curr++
  })
}

// 链接桩配置
const Items = [
  {
    id: '01',
    group: 'group1',
    args: {
      x: '50%',
      y: 0
    }
  },
  {
    id: '02',
    group: 'group1',
    args: {
      x: 0,
      y: '50%'
    }
  },
  {
    id: '03',
    group: 'group1',
    args: {
      x: '100%',
      y: '50%'
    }
  },
  {
    id: '04',
    group: 'group1',
    args: {
      x: '33%',
      y: '100%'
    }
  },
  {
    id: '05',
    group: 'group1',
    args: {
      x: '66%',
      y: '100%'
    }
  }
]

// 显示/隐藏链接桩
const showPorts = (isNeedShow) => {
  if (isNeedShow === 1) {
    // 显示
    NodeData.value.forEach((item) => {})
  } else {
    // 隐藏
  }
}

onMounted(() => {
  createGraph()
})
</script>

<style lang="less" scoped></style>

<!-- 如何实现一个自定义的连接装？
    方案1 
    addNode ({
        ports:{
            groups:{
                // 分组信息  用于将一个节点上的各个连接装进行分类
            },
            items:{
                // {id:链接桩的id ， group: 所属分组}
            }
        }
    })
    方案2 
    先定义一个节点的公共样式
    Shaph.Rect.define({
        width:xxx,
        height:xxx,
        ports:{ 
            groups:{ 
                in:{ 
                    position:'top',
                    attrs:{ 
                        // 自定义样式
                    }
                }
            }
            items :[
            {
                id:'xx',
                group:'in'
            },
            {
                id:'xx',
                group:'in',
            },
            {
                id:'xx',
                group:'in'
            },
            ]
        }
    })
-->
