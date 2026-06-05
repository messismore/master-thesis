<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FigurePartialApp',
  props: { x: Number, y: Number },
  inject: ['theme'],
})
</script>

<style scoped>
rect {
  fill: white;
  stroke: v-bind('theme.colours.primary');
  stroke-width: 0.75;
}

text {
  font-size: v-bind('theme.fontSizes(-4)');
  font-family: v-bind('theme.fonts.heading');
  fill: v-bind('theme.colours.primary');
}
</style>

<template>
  <g>
    <rect
      width="20"
      height="20"
      rx="2.5"
      :x="Number(x) - 10"
      :y="Number(y) - 10"
    />
    <text :x="Number(x) - 6" :y="Number(y) + 1">App</text>
  </g>
</template>
