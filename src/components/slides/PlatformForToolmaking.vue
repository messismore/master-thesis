<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '@/components/SlideContainer.vue'

export default defineComponent({
  name: 'PlatformForToolmaking',
  components: { SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped>
li {
  font-size: v-bind('theme.fontSizes(5)');
  list-style-type: none;
}
li + li {
  margin-top: v-bind('theme.space(3)');
}
</style>

<template>
  <SlideContainer title="A Platform for Toolmaking">
    <ul>
      <li>Build Tools</li>
      <li>Share them</li>
      <li>Hack them</li>
    </ul>
  </SlideContainer>
</template>
