<template>
  <div v-if="props.data.nodeState === '0' ? false : true">
    <div :class="createNodeState().className" :style="createNodeState().color">
      <span>{{ createNodeState().text }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
console.log(props.data)
const createNodeState = () => {
  if (props.data.nodeType === 'mainTask') {
    const obj = {
      className: 'square'
    }
    if (props.data.nodeState === '1') {
      return { ...obj, color: 'background-color:lightblue', text: '~' }
    } else if (props.data.nodeState === '2') {
      return { ...obj, color: 'background-color:green', text: '!' }
    } else if (props.data.nodeState === '3') {
      return { ...obj, color: 'background-color:lightblue', text: '√' }
    }
  } else if (props.data.nodeType === 'childTask') {
    if (props.data.nodeState === '1') {
      return {
        className: 'square',
        color: 'background-color:lightblue',
        text: '~'
      }
    } else if (props.data.nodeState === '2') {
      return { className: 'square', color: 'background-color:green', text: '!' }
    } else if (props.data.nodeState === '3') {
      return { className: 'line', color: 'background-color:lightblue' }
    } else if (props.data.nodeState === '4') {
      return { className: 'line', color: 'background-color:green' }
    } else if (props.data.nodeState === '5') {
      return { className: 'line', color: 'background-color:red' }
    }
  } else if (props.data.nodeType === 'source') {
    if (props.data.nodeState === '1') {
      return {
        className: 'square',
        color: 'background-color:lightblue',
        text: '~'
      }
    } else if (props.data.nodeState === '2') {
      return { className: 'square', color: 'background-color:green', text: '!' }
    } else if (props.data.nodeState === '3') {
      return { className: 'line', color: 'background-color:lightblue' }
    } else if (props.data.nodeState === '4') {
      return { className: 'line', color: 'background-color:green' }
    } else if (props.data.nodeState === '5') {
      return { className: 'line', color: 'background-color:red' }
    }
  }
}
</script>

<style>
.square {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
  border-radius: 5px;
}
.line {
  width: 17px;
  height: 3px;
}
</style>
