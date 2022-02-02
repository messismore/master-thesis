<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '@/components/SlideContainer.vue'
import OrganisationalKnowledge from '@/components/figures/OrganisationalKnowledge.vue'

export default defineComponent({
  name: 'SlideFocusOnProcess',
  components: {
    OrganisationalKnowledge,
    SlideContainer,
  },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped>
:deep(main) {
  display: flex;
  place-items: center;
}

div {
  width: 50%;
}

li {
  font-size: v-bind('theme.fontSizes(1)');
}

li + li {
  margin-top: v-bind('theme.space(0)');
}
</style>

<template>
  <SlideContainer title="Focus on Process">
    <div>
      <OrganisationalKnowledge />
    </div>
    <ul>
      <li>Draw from software engineering practices</li>
      <li><s>linear</s> -> iterative</li>
      <li>Systematise capture of new knowledge!</li>
    </ul>
  </SlideContainer>
</template>
