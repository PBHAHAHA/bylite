import { defineComponent, h } from 'vue'
import { smoothDnD, dropHandlers } from 'smooth-dnd'
import type { SmoothDnD } from 'smooth-dnd'
import { getTagProps, validateTagProp } from './utils'

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler
smoothDnD.wrapChild = false

// smooth dnd 提供的毁掉函数
type EventKey = 'drag-start' | 'drag-end' | 'drop' | 'drag-enter' | 'drag-leave' | 'drop-ready'

const eventEmitterMap: Record<EventKey, string> = {
  'drag-start': 'onDragStart',
  'drag-end': 'onDragEnd',
  drop: 'onDrop',
  'drag-enter': 'onDragEnter',
  'drag-leave': 'onDragLeave',
  'drop-ready': 'onDropReady'
}

export const SmoothDndContainer = defineComponent({
  name: 'SmoothDndContainer',
  setup() {
    console.log('setup')
    return {
      container: null as SmoothDnD | null //定义变量
    }
  },
  props: {
    //定义props 组件要接受的值，这也是smooth dnd 提供的options参数
    orientation: { type: String, default: 'vertical' },
    removeOnDropOut: { type: Boolean, default: false },
    autoScrollEnabled: { type: Boolean, default: true },
    animationDuration: { type: Number, default: 250 },
    behaviour: String,
    groupName: String,
    dragHandleSelector: String,
    nonDragAreaSelector: String,
    lockAxis: String,
    dragClass: String,
    dropClass: String,
    dragBeginDelay: Number,
    getChildPayload: Function,
    shouldAnimateDrop: Function,
    shouldAcceptDrop: Function,
    getGhostParent: Function,
    dropPlaceholder: [Object, Boolean],
    tag: {
      validator: validateTagProp,
      default: 'div'
    }
  },
  mounted() {
    console.log('mounted', this.$el)
    // emit events
    const options: any = Object.assign({}, this.$props)
    console.log(this.$props, '===')
    for (const key in eventEmitterMap) {
      const eventKey = key as EventKey
      options[eventEmitterMap[eventKey]] = (props: any) => {
        this.$emit(eventKey, props)
      }
    }
    // 因为 render 是先执行的，所以这里能够获取到 container 的实例, this.$el 是当前组件(this)的dom根结点
    const containerElement = this.$refs.container || this.$el
    this.container = smoothDnD(containerElement, options)
  },
  unmounted() {
    if (this.container) {
      try {
        this.container.dispose()
      } catch {
        // ignore
      }
    }
  },
  emits: ['drop', 'drag-start', 'drag-end', 'drag-enter', 'drag-leave', 'drop-ready'],
  render() {
    console.log('render')
    const tagProps = getTagProps(this)
    return h(
      tagProps.value,
      Object.assign({}, { ref: 'container' }, tagProps.props),
      this.$slots.default?.()
    )
  }
})
