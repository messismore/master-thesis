<template>
  <SlideContainer class="slide-cover">
    <h1>Speckle CI</h1>
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
.slide-cover {
  color: v-bind('theme.colours.primary');
  font-size: v-bind('theme.fontSizes(5)');
  font-family: v-bind('theme.fonts.heading');
  font-weight: v-bind('theme.fontWeights.heading');
}
</style>
