<template>
  <SlideContainer title="Outline" class="slide-outline">
    <ol>
      <li>The Problem</li>
      <li>My Contribution</li>
      <li>The Bigger Picture</li>
    </ol>
  </SlideContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '/src/components/SlideContainer.vue'

export default defineComponent({
  name: 'SlideCover',
  components: { SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
.slide-outline {
  font-size: v-bind('theme.fontSizes(3)');
  font-family: v-bind('theme.fonts.heading');
  font-weight: v-bind('theme.fontWeights.heading');
}
.slide-outline li {
  margin-block-end: v-bind('theme.space(5)');
}
</style>
