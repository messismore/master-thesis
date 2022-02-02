<script lang="ts">
import { defineComponent } from 'vue'

import SlideSpeckleCiConcepts from '@/components/slides/SlideSpeckleCiConcepts.vue'
import CaseStudies from '@/components/slides/CaseStudies.vue'
import Ellipsographs from '@/components/figures/Ellipsographs.vue'
import RhinoEllipse from '@/components/figures/RhinoEllipse.vue'
import SlideFocusOnProcess from '@/components/slides/SlideFocusOnProcess.vue'
import SlideShow from '../components/SlideShow.vue'
import SlideContainer from '../components/SlideContainer.vue'
import SlideCover from '../components/slides/SlideCover.vue'
import SlideSetbackChecker from '@/components/slides/SlideSetbackChecker.vue'
import SlideSpeckle from '@/components/slides/SlideSpeckle.vue'
import SpeckleCiWireframe from '@/components/figures/Wireframe.vue'

export default defineComponent({
  name: 'Prezo',
  components: {
    CaseStudies,
    Ellipsographs,
    SlideFocusOnProcess,
    RhinoEllipse,
    SlideShow,
    SlideCover,
    SlideContainer,
    SpeckleCiWireframe,
    SlideSetbackChecker,
    SlideSpeckle,
    SlideSpeckleCiConcepts,
  },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped>
li {
  margin-top: v-bind('theme.space(0)');
}
</style>

<template>
  <SlideShow>
    <SlideCover />
    <SlideContainer
      title="Architects as toolmakers, tools as encapsulated knowledge"
    >
      <Ellipsographs style="width: 80vw" />
    </SlideContainer>

    <SlideContainer title="Design Knowledge and Instrumental Knowledge">
      <RhinoEllipse style="width: 60vw" />
    </SlideContainer>

    <SlideSetbackChecker />

    <!--     <PlatformForToolmaking /> -->

    <SlideSpeckleCiConcepts />

    <SlideContainer title="User Interface">
      <SpeckleCiWireframe />
    </SlideContainer>

    <SlideSpeckle />

    <CaseStudies />

    <SlideFocusOnProcess />

    <SlideContainer title="Thank you">
      <Ellipsographs style="width: 80vw" />
    </SlideContainer>

    <SlideContainer title="More Context">
      <ul>
        <li>
          Trends Specific to Discipline
          <ul>
            <li>Performance Based Design</li>
            <li>Complexity</li>
            <li>Precision</li>
          </ul>
        </li>
        <li>
          Broader Trends: Reorganisation of Knowledge Work
          <ol>
            <li>Deliver more for less</li>
            <li>Move away from bespoke services</li>
            <li>Decomposition of professional work</li>
            <li>Routinisation of professional work</li>
          </ol>
        </li>
      </ul>
    </SlideContainer>

    <SlideContainer title="Done and To do"
      ><ul>
        <li>✅ Subscribe to Stream Updates, specify a trigger event</li>
        <li>✅ Listen for trigger events</li>
        <li>
          ➡️ develop Actions:
          <ul>
            <li>Checkout</li>
            <li>Calculate Carbon Report</li>
            <li>Check Massing & Setback</li>
            <li>Generate Layout</li>
            <li>Commit Data</li>
          </ul>
        </li>
        <li>➡️ UI to display, compose, update, delete workflows</li>
      </ul>
    </SlideContainer>
  </SlideShow>
</template>
