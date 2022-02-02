<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FigurePartialArrowhead',
  components: {},
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
polyline {
  fill: none;
  stroke: v-bind('theme.colours.primary');
}
</style>

<template>
  <marker
    viewBox="-10 0 10 10"
    markerHeight="10"
    markerWidth="10"
    id="arrowhead"
    refX="0"
    refY="0"
    orient="auto"
    overflow="visible"
  >
    <polyline
      points="-5,0 0,0 0,5"
      transform="rotate(45)"
      style="stroke-width: 1"
    />
    <!-- stroke-width: 1 sets marker stroke width equal to decorated path -->
  </marker>
</template>
