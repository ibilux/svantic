<script>
  import '../../../semantic/dist/components/transition'
  import '../../../semantic/dist/components/popup'
  import '../../../semantic/dist/components/calendar'
  import '../../../semantic/dist/components/grid.css'
  import '../../../semantic/dist/components/icon.css'
  import '../../../semantic/dist/components/input.css'
  import '../../../semantic/dist/components/transition.css'
  import '../../../semantic/dist/components/table.css'
  import '../../../semantic/dist/components/popup.css'
  import '../../../semantic/dist/components/calendar.css'
  import { css, register } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export let icon = 'left'
  export let disabled = false
  export let settings = {}

  export let style = {}
  export let on = {}

  export let onMount
  export { _class as class }

  function init(node, settings) {
    css(node, style)
    const unregister = register(node, on)
    let controller = new Controller(node, settings)
    onMount?.(controller)
    return {
      destroy() {
        unregister()
        controller = null
      }
    }
  }
</script>

<div use:init="{settings}" class="{_class} ui calendar" class:disabled>
  <div class="ui input {icon + ' icon'}">
    <slot>
      <i class="calendar icon"></i>
    </slot>
    <input type="text" placeholder="Date/Time" />
  </div>
</div>
