<template>
  <SlideContainer title="App Specificity">
    <div><img src="../../assets/davis-horizontal.png" /></div>
    <div><img src="../../assets/davis-vertical.png" /></div>
    <img src="../../assets/vertical-ioc.png" />
    <div>Horizontal</div>
    <div>Vertical</div>
    <div>"Pluggable"</div>
    <a href="https://www.danieldavis.com/cads-boring-future/"
      >Daniel Davis: CAD's Boring Future and Why it's Exciting</a
    >
  </SlideContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '/src/components/SlideContainer.vue'

export default defineComponent({
  name: 'SlideAppSpecificity',
  components: { SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
:deep(main) {
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  grid-template-rows: auto;
  grid-gap: 4em;
  padding: 0 2em;
}
img {
  width: 100%;
  align-self: flex-end;
}
div {
  text-align: center;
}
a {
  grid-column: span 3;
}
</style>
