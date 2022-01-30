<template>
  <SlideContainer>
    <humans-vs-computers />
  </SlideContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '/src/components/SlideContainer.vue'
import HumansVsComputers from '../figures/HumansVsComputers.vue'

export default defineComponent({
  name: 'SlideVenn',
  components: { HumansVsComputers, SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
:deep(main) {
  width: 100%;
  margin-block: 0;
}
</style>
