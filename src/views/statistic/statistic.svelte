<script>
  import { css, classNames } from '../../utils'

  let _class = ''
  export let style = {}
  export let color = ''
  export let size = ''
  export let floated
  export let stackable
  export let inverted
  export let horizontal

  export { _class as class }
</script>

<div
  use:css="{style}"
  class:inverted
  class:horizontal
  class="{classNames(color, size, [floated, 'floated'], [stackable, 'stackable'], 'ui statistic', _class)}"
>
  <slot />
</div>
