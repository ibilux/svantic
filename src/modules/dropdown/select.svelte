<script>
  import { classNames } from '../../utils'

  let _class = ''
  export let style = {}
  export let size = ''
  export let wide = ''
  export let type = ''
  export let state = ''
  export let speed = ''
  export let height = ''
  export let column = ''
  export let loaderStyle = ''
  export let menuDirection = ''
  export let top = false
  export let link = false
  export let item = false
  export let left = false
  export let long = false
  export let fluid = false
  export let right = false
  export let label = false
  export let bottom = false
  export let compact = false
  export let inverted = false
  export let scrolling = false
  export { _class as class }
  export let settings = {}
  export let onMount

  $: _type = type?.join?.(' ') ?? type

  function init(node, settings) {
    css(node, style)
    let controller = new Controller(node, settings)
    onMount?.(controller)
  }
</script>

<select
  use:init="{settings}"
  multiple="{type.includes('multiple')}"
  class:top
  class:link
  class:item
  class:left
  class:long
  class:right
  class:fluid
  class:label
  class:bottom
  class:compact
  class:inverted
  class:scrolling
  class="{classNames(
    height,
    column,
    speed,
    loaderStyle,
    wide,
    _type,
    state,
    size,
    menuDirection,
    'ui dropdown',
    _class
  )}"
>
  <slot/>
</select>
