<template>
  <SlideContainer title="Speckle">
    <SpeckleNetwork />
    <div>
      Speckle is the data transport layer
      <ul>
        <li>Translate data from authoring applications</li>
        <li>Organised in Streams</li>
        <li>We can use it to put automations on top!</li>
      </ul>
    </div>
  </SlideContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '/src/components/SlideContainer.vue'
import SpeckleNetwork from '@/components/figures/SpeckleNetwork.vue'

export default defineComponent({
  name: 'SlideSpeckle',
  components: {
    SlideContainer,
    SpeckleNetwork,
  },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
div {
  margin-top: v-bind('theme.space(6)');
  font-size: v-bind('theme.fontSizes(1)');
  padding: v-bind('theme.space(2)');
}

h2 {
  font-size: v-bind('theme.fontSizes(2)');
}

li + li {
  margin-top: v-bind('theme.space(-4)');
}
</style>
