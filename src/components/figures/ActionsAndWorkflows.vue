<script lang="ts">
import { defineComponent } from 'vue'
import FigurePartialAction from '@/components/figures/partials/Action.vue'

export default defineComponent({
  name: 'ActionsAndWorkflows',
  components: { FigurePartialAction },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped>
svg {
  aspect-ratio: 3/2;
  width: 100%;
  height: 100%;
}
text {
  font-size: v-bind('theme.fontSizes(2)');
  font-family: v-bind('theme.fonts.heading');
  fill: v-bind('theme.colours.text');
}
line {
  stroke: v-bind('theme.colours.primary');
  stroke-width: 3;
  z-index: -1;
}
.labels text {
  font-size: v-bind('theme.fontSizes(3)');
}
</style>

<template>
  <figure>
    <svg id="Actions" xmlns="http://www.w3.org/2000/svg">
      <FigurePartialAction name="Calculate Carbon" x="30%" y="10%" />
      <FigurePartialAction name="Create Report" x="10%" y="25%" />
      <FigurePartialAction name="Filter Elements" x="35%" y="30%" />
      <FigurePartialAction name="Check Condition" x="12%" y="42.5%" />
      <FigurePartialAction name="Call Web Api" x="32%" y="52%" />
      <FigurePartialAction name="Upload Result" x="5%" y="60%" />

      <text id="trigger" x="73%" y="3%">Trigger</text>
      <line x1="77%" x2="77%" y1="6%" y2="70%" />
      <FigurePartialAction name="Fetch Data" x="70%" y="10%" />
      <FigurePartialAction name="Filter Elements" x="70%" y="25%" />
      <FigurePartialAction name="Calculate Carbon" x="70%" y="40%" />
      <FigurePartialAction name="Create Report" x="70%" y="55%" />
      <FigurePartialAction name="Upload Result" x="70%" y="70%" />
      <g class="labels">
        <text x="20%" y="95%">Actions</text>
        <text x="70%" y="95%">Workflows</text>
      </g>
    </svg>
  </figure>
</template>
