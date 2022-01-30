<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HumansVsComputers',
  props: {},
  inject: ['theme'],
})
</script>

<style scoped>
circle {
  stroke-width: 3px;
}

.computers:is(circle) {
  stroke: v-bind('theme.colours.primary');
}

.computers:is(div, ul) {
  color: v-bind('theme.colours.primary');
}

.humans:is(circle) {
  stroke: v-bind('theme.colours.secondary');
}

.humans:is(div, ul) {
  color: v-bind('theme.colours.secondary');
}

.venn-grid {
  display: grid;
  font-size: v-bind('theme.fontSizes(0)');
  font-family: v-bind('theme.fonts.heading');
  gap: 1em;
  grid-template:
    '.    top' minmax(6em, 25%)
    'left circles' 1fr / minmax(min-content, 25%) 1fr;
  margin: 0;
  hyphens: manual;
}

.venn-top {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-area: top;
}

.venn-left div {
  width: 15ch;
}

.venn-top div {
  text-align: center;
  width: 12ch;
}

.venn-left {
  display: grid;
  place-content: center;
  grid-area: left;
  gap: 10%;
}

.venn-circles,
.venn-text {
  display: grid;
  grid-area: circles;
  gap: 1em;
}

.venn-circles {
  place-content: center;
}

.venn-text {
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  text-align: center;
  margin-inline: 7.5%;
}

.venn-text ul {
  padding: unset;
  max-width: 13ch;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-block: 20%;
}

.venn-text ul li {
  list-style-type: none;
}

.venn-circles svg {
  object-fit: contain;
  aspect-ratio: 3/2;
}
</style>

<template>
  <figure class="venn-grid">
    <div class="venn-top">
      <div class="humans">what we're trained to do</div>
      <div class="computers">what we actually do</div>
    </div>

    <div class="venn-left">
      <div class="computers">what computers are good at</div>
      <div class="humans">what humans are good at</div>
    </div>

    <div class="venn-circles">
      <svg xmlns="http://www.w3.org/2000/svg">
        <circle
          class="humans"
          cx="33.3%"
          cy="50%"
          r="38%"
          stroke="red"
          fill="none"
        />
        <circle
          class="computers"
          cx="66.6%"
          cy="50%"
          r="38%"
          stroke="red"
          fill="none"
        />
      </svg>
    </div>

    <div class="venn-text">
      <ul class="humans">
        <li>high level concep&shy;tu&shy;alising</li>
        <li>creative synthesis</li>
        <li>orches&shy;tration</li>
      </ul>
      <ul class="humans">
        <li>craft misleading diagrams</li>
      </ul>
      <ul class="computers">
        <li>mail files</li>
        <li>Excel</li>
        <li>recreate models in different applications</li>
        <li>Excel</li>
      </ul>
    </div>
  </figure>
</template>
