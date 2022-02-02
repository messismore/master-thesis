<template>
  <SlideContainer class="slide-cover">
    <div>
      <h1>A Platform for <br />Connected Toolmaking</h1>
      <h2>Speckle CI</h2>
    </div>
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
  font-family: v-bind('theme.fonts.heading');
  font-weight: v-bind('theme.fontWeights.heading');
  text-align: center;
}
h1 {
  font-size: v-bind('theme.fontSizes(6)');
}

h2 {
  font-size: v-bind('theme.fontSizes(3)');
}
</style>
