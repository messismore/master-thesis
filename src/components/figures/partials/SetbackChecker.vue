<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SetbackChecker',
  components: {},
  props: { showOver: Boolean },
  inject: ['theme'],
})
</script>

<style scoped lang="css">
g path {
  stroke: v-bind('theme.colours.primary');
  fill: none;
  fill-rule: nonzero;
}

.thin {
  stroke-width: 2.29px;
}

.thick {
  stroke-width: 4.17px;
}

.dashed {
  stroke-dasharray: 15 10;
}

.fill {
  fill: v-bind('theme.colours.primary');
  animation: pulse 3s ease-in-out infinite alternate;
}

@keyframes pulse {
  from {
    opacity: 100%;
  }
  to {
    opacity: 75%;
  }
}
</style>

<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 635 501"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
    style="fill-rule: evenodd; clip-rule: evenodd"
  >
    <g class="lines">
      <path
        class="thick"
        d="M457.51,189.616l-185.023,-106.823l-72.401,41.8l0,139.334l185.023,106.823l72.401,-41.8l-0,-139.858l-0,0.524Z"
      />
      <path class="thin" d="M385.109,370.75l0,-139.334" />
      <path class="thin" d="M457.51,189.616l-72.401,41.8" />
      <path
        class="thin dashed"
        d="M457.51,254.638l80.444,46.445l-160.889,92.89l-80.445,-46.445l-72.4,41.8l-152.845,-88.245l128.715,-74.314"
      />
      <path class="thin" d="M200.086,124.593l185.023,106.823" />
    </g>
    <path
      v-if="showOver"
      class="fill"
      d="M443.433,181.489l14.077,8.127l-0,65.022l-71.468,41.262l-0.933,0.539l-8.044,-41.801l-16.089,-9.289l-25.568,-14.761l-24.406,-14.091l-14.382,-8.303l-6.033,-31.351l6.033,-3.483l20.416,11.787l24.406,14.091l25.567,14.761l10.056,5.805l21.945,-12.669l28.332,-16.359l16.09,-9.288l0.001,0.001Z"
    />
  </svg>
</template>
