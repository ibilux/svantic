<script>
  import { css, register, classNames } from '../../utils'

  export let name = ''
  export let size = ''
  export let state = ''
  export let color = ''
  export let rotated = ''
  export let flipped = ''
  export let link = false
  export let corner = false
  export let fitted = false
  export let divider = false
  export let inverted = false
  export let bordered = false
  export let circular = false
  export let on = {}
  export let style = {}
  let _class = ''
  export { _class as class }

  function init(node) {
    css(node, style)
    const unregister = register(node, on)
    return {
      destroy() {
        unregister()
      }
    }
  }
</script>

<i
  use:init
  class:link
  class:fitted
  class:corner
  class:divider
  class:inverted
  class:bordered
  class:circular
  class="{classNames(
    size,
    color,
    state,
    [rotated, 'rotated'],
    [flipped, 'flipped'],
    name,
    'icon',
    _class
  )}"
></i>
