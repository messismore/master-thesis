<script lang="ts">
import { defineComponent } from 'vue'
import FigurePartialApp from '@/components/figures/partials/App.vue'

export default defineComponent({
  name: 'ActionsAndWorkflows',
  components: { FigurePartialApp },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
text {
  font-size: v-bind('theme.fontSizes(3)');
  font-family: v-bind('theme.fonts.heading');
  fill: v-bind('theme.colours.text');
}
line {
  stroke: v-bind('theme.colours.primary');
  stroke-width: 7.5;
  stroke-dasharray: 1 1;
  z-index: -1;
  animation: flow 1s linear infinite;
}

@keyframes flow {
  from {
    stroke-dashoffset: 2;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>

<template>
  <figure>
    <svg
      id="Actions"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 100"
      transform=" skewX(-15) "
    >
      <line x1="40" y1="50" x2="150" y2="18" />
      <line x1="40" y1="50" x2="150" y2="82" />
      <line x1="150" y1="18" x2="260" y2="50" />
      <line x1="150" y1="82" x2="260" y2="50" />
      <FigurePartialApp x="40" y="50" />
      <FigurePartialApp x="150" y="20" />
      <FigurePartialApp x="150" y="80" />
      <FigurePartialApp x="260" y="50" />
    </svg>
  </figure>
</template>
