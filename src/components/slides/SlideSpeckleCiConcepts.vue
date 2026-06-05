<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '@/components/SlideContainer.vue'
import ActionsAndWorkflows from '@/components/figures/ActionsAndWorkflows.vue'

export default defineComponent({
  name: 'SlideSpeckleCiConcepts',
  components: {
    ActionsAndWorkflows,
    SlideContainer,
  },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped>
:deep(svg) {
  max-height: 80vh;
}
</style>

<template>
  <SlideContainer title="Concepts">
    <ActionsAndWorkflows />
  </SlideContainer>
</template>
