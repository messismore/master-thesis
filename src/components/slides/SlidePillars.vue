<template>
  <SlideContainer title="Methodology">
    <div>
      <ol>
        <h3>Theoretical Framework: Why?</h3>
        <li>
          Research question: How does an automation tool for AEC need to work
          like? What are the appropriate levels of (technical) abstraction?
        </li>
        <li>Literature review</li>
        <li>Show intuitive use cases</li>
        <li>As concise as possible, as thorough as necessary</li>
      </ol>
    </div>
    <div>
      <ol>
        <h3>User + Product needs: What?</h3>
        <li>Market Research</li>
        <li>Prior Art</li>
        <li>
          Distill
          <ul>
            <li>Product needs / "Vision"</li>
            <li>Scope: What's a / the MVP? What are stretch goals?</li>
          </ul>
        </li>
      </ol>
    </div>
    <div>
      <ol>
        <h3>Implementation: How?</h3>
        <li>(Get a grip on stack + architecture)</li>
        <li>Assess Technical Feasability</li>
        <li>Design Software Architecture</li>
        <li>Build it!</li>
      </ol>
    </div>
  </SlideContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '/src/components/SlideContainer.vue'

export default defineComponent({
  name: 'SlidePillars',
  components: { SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
:deep main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row: auto;
  grid-gap: 2em;
}

li {
  margin-bottom: v-bind('theme.space(2)');
  padding-left: v-bind('theme.space(2)');
}
</style>
