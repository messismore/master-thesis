<script lang="ts">
import { defineComponent } from 'vue'
import FigurePartialArrowhead from '@/components/figures/partials/Arrowhead.vue'
import SetbackChecker from '@/components/figures/partials/SetbackChecker.vue'
import SlideContainer from '@/components/SlideContainer.vue'

export default defineComponent({
  name: 'ActionsAndWorkflows',
  components: {
    FigurePartialArrowhead,
    SetbackChecker,
    SlideContainer,
  },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped>
div {
  display: flex;
  font-size: v-bind('theme.fontSizes(1)');
  place-items: center;
}

h2 {
  font-size: v-bind('theme.fontSizes(2)');
}

li + li {
  margin-top: v-bind('theme.space(-4)');
}

.column {
  flex-direction: column;
}

#arrow {
  stroke: v-bind('theme.colours.primary');
  stroke-width: 0.5px;
}

#cross {
  stroke: v-bind('theme.colours.primary');
  fill: none;
}
</style>

<template>
  <SlideContainer
    title="Example of a Focused, Networked Tool: Setback + Massing Checker"
  >
    <div>
      <div class="column">
        <SetbackChecker />
        <h2>Input</h2>
        <ul>
          <li>Plot Perimeter</li>
          <li>Building Volume</li>
          <li>Streets</li>
          <li>Boundary developments</li>
        </ul>
      </div>
      <svg
        id="arrow"
        width="40%"
        height="40%"
        viewBox="0 0 10 10"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <FigurePartialArrowhead />
        </defs>
        <line x1="0" x2="9" y1="5" y2="5" marker-end="url(#arrowhead)" />
        <line x1="0.25" x2="0.25" y1="3.5" y2="6.5" />
      </svg>
      <div class="column">
        <svg
          id="cross"
          width="40%"
          height="25%"
          viewBox="0 0 30 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="1" x2="9" y1="1" y2="9" />
          <line x1="1" x2="9" y1="9" y2="1" />
          <path
            d="M 17,5
               L 21,9
               L 29,1"
          ></path>
        </svg>
        <SetbackChecker showOver />
        <h2>Output</h2>
        <ul>
          <li>To Code</li>
          <li>Excess Volume</li>
        </ul>
      </div>
    </div>
  </SlideContainer>
</template>
