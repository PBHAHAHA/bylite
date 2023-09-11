import { smoothDnD } from 'smooth-dnd'
import type { SmoothDnD } from 'smooth-dnd'
import { defineComponent } from 'vue'

export const SmoothDndContainer = defineComponent({
  name: 'SmoothDndContainer',
  setup() {
    return {
      container: null as SmoothDnD | null
    }
  },
  mounted() {
    const options: any = Object.assign({}, this.$props)
  }
})
