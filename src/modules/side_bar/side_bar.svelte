<script>
  import '../../../semantic/dist/components/sidebar'
  import '../../../semantic/dist/components/sidebar.css'
  import { css, register, classNames } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export { _class as class }
  export let type = ''
  export let wide = ''
  export let state = ''
  export let direction = ''
  export let inverted = false
  export let vertical = false
  export let style = {}
  export let settings = {}
  export let on = {}

  export let onMount
  function init(node, settings) {
    // the node has been mounted in the DOM
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node, settings)
    onMount?.(controller)
    return {
      // the node has been removed from the DOM
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div
  use:init={settings}
  class:inverted
  class:vertical
  class="{classNames(state, type, direction, [wide, 'wide'], 'ui sidebar', _class)}"
>
  <slot/>
</div>
