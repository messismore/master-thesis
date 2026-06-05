<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OrganisationalKnowledge',
  props: {},
  inject: ['theme'],
})
</script>

<style scoped>
path,
line,
polyline {
  fill: none;
  stroke-width: 3px;
  stroke: v-bind('theme.colours.primary');
  vector-effect: non-scaling-stroke;
}

svg {
  aspect-ratio: 3/2;
}

text {
  font-size: v-bind('theme.fontSizes(1)');
  font-family: v-bind('theme.fonts.heading');
  fill: v-bind('theme.colours.primary');
}
</style>

<template>
  <figure>
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
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
      </defs>

      <foreignObject x="-10%" y="0%" width="100%" height="100%">
        <svg viewBox="0 0 100 100">
          <line x1="50" y1="10" x2="95" y2="10" marker-end="url(#arrowhead)" />

          <path
            d="
      M 16.5,85
      A 45,45 0,1,1 83.5,85"
            marker-end="url(#arrowhead)"
          />
        </svg>
      </foreignObject>

      <text text-anchor="middle" x="40%" y="97%">Organisational Knowledge</text>
      <text dominant-baseline="middle" x="73%" y="10%">Artefact</text>
    </svg>
  </figure>
</template>
