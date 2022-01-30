<template>
  <SlideContainer title="The Backdrop" class="slide-crises"
    ><span> We need to change [ how | what | whether ] we build, fast. </span>

    <ul>
      <li><span>Climate Crisis</span></li>
      <li><span>Resource Consumption</span></li>
      <li><span>Urbanisation</span></li>
      <li><span>Equity</span></li>
      <li><span>Inclusivity</span></li>
      <li><span>Demographics</span></li>
      <li><span>etc</span></li>
    </ul>
  </SlideContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '/src/components/SlideContainer.vue'

export default defineComponent({
  name: 'SlideCrises',
  components: { SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
.slide-crises {
  background: center / cover url(../../assets/warming-stripes.png);
  color: white;
  font-size: v-bind('theme.fontSizes(2)');
  font-family: v-bind('theme.fonts.heading');
  font-weight: v-bind('theme.fontWeights.heading');
}
span {
  background: aliceblue;
  color: black;
}
</style>
