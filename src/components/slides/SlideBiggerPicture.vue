<template>
  <SlideContainer> <h2>The Bigger Picture</h2> </SlideContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '/src/components/SlideContainer.vue'

export default defineComponent({
  name: 'SlideBiggerPicture',
  components: { SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
h2 {
  font-size: v-bind('theme.fontSizes(4)');
}
</style>
