<script>
  import '../../../semantic/dist/components/rating'
  import '../../../semantic/dist/components/rating.css'
  import { css } from '../../utils'
  import Controller from './controller'

  let _class = ''
  export let style = {}
  export { _class as class }
  export let disabled = false
  export let color = ''
  export let size = ''
  export let icon
  export let rating = '0'
  export let maxRating = '5'
  export let settings = {}
  export let onMount

  function init(node, settings) {
    // the node has been mounted in the DOM
    css(style)
    let controller = new Controller(node, settings)
    onMount?.(controller)
    return {
      destroy() {
        // the node has been removed from the DOM
        controller = null
      }
    }
  }
</script>

<div
  use:init={settings}
  class:disabled
  class="{color} {size} ui rating {_class}"
  data-rating="{rating}"
  data-max-rating="{maxRating}"
></div>
