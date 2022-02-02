<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '@/components/SlideContainer.vue'

export default defineComponent({
  name: 'CaseStudies',
  components: { SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped>
li {
  font-size: v-bind('theme.fontSizes(4)');
}
li + li {
  margin-top: v-bind('theme.space(2)');
}
</style>

<template>
  <SlideContainer title="Case Studies">
    <ol>
      <li>Setback + Massing Checker</li>
      <li>Carbon Calculator</li>
      <li>Bin Layout Tool</li>
    </ol>
  </SlideContainer>
</template>
