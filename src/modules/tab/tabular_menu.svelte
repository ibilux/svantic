<script>
  import '../../../semantic/dist/components/tab'
  import '../../../semantic/dist/components/tab.css'
  import { classNames, css } from '../../utils'
  import Controller from './controller'
  
  export let _class = ''
  export { _class as class }
  export let attached = ''
  export let loading = false
  export let segment = false
  export let active = false
  export let style = {}
  export let settings = {}
  export let onMount

  function init(node, settings){
    css(node, style)
    let controller = new Controller(node, settings)
    onMount?.(controller)
  }
</script>

<div
  use:init={settings}
  class:loading
  class:segment
  class:active
  class="{classNames([attached, 'attached'], 'ui tabular menu', _class)}"
>
  <slot name="item"/>
</div>
<slot />
 

