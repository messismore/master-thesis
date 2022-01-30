<template>
  <SlideContainer
    title="Performance-Based Design"
    class="slide-performance-based-design"
  >
    <span>🏠</span>
    <ul>
      <li>Life Cycle Assessment</li>
      <li>Energy</li>
      <li>Circularity</li>
      <li>Daylight</li>
      <li>Code Compliance</li>
      <li>Cost</li>
      <li>Structural Performance</li>
      <li>Water Management</li>
      <li>Adaptivity</li>
    </ul>
  </SlideContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '/src/components/SlideContainer.vue'

export default defineComponent({
  name: 'SlidePerformanceDesign',
  components: { SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
:deep main {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
ul {
  mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
}
span {
  font-size: v-bind('theme.fontSizes(9)');
}

li {
  list-style-type: '📊';
  padding-left: v-bind('theme.space(2)');
  margin-bottom: v-bind('theme.space(2)');
}
</style>
