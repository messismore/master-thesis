<script lang="ts">
import { defineComponent } from 'vue'
import SlideShow from '../components/SlideShow.vue'
import SlideCover from '../components/slides/SlideCover.vue'
import SlideOutline from '../components/slides/SlideOutline.vue'
import SlideCrises from '../components/slides/SlideCrises.vue'
import SlideVenn from '../components/slides/SlideVenn.vue'
import SlideHeartEyesRobot from '../components/slides/SlideHeartEyesRobot.vue'
import SlideUserStories from '../components/slides/SlideUserStories.vue'
import SlidePerformanceBasedDesign from '../components/slides/SlidePerformanceBasedDesign.vue'
import SlideSpeckle from '../components/slides/SlideSpeckle.vue'
import SlidePillars from '../components/slides/SlidePillars.vue'
import SlideBiggerPicture from '../components/slides/SlideBiggerPicture.vue'
import SlideAppSpecificity from '../components/slides/SlideAppSpecificity.vue'
import SlideInternetOfConstruction from '../components/slides/SlideInternetOfConstruction.vue'

export default defineComponent({
  name: 'Prezo',
  components: {
    SlideShow,
    SlideCover,
    SlideOutline,
    SlideCrises,
    SlideVenn,
    SlideHeartEyesRobot,
    SlideUserStories,
    SlidePerformanceBasedDesign,
    SlideSpeckle,
    SlidePillars,
    SlideBiggerPicture,
    SlideAppSpecificity,
    SlideInternetOfConstruction,
  },
  props: {},
  inject: ['theme'],
})
</script>

<template>
  <SlideShow>
    <SlideCover />
    <SlideOutline />
    <SlideCrises />
    <SlidePerformanceBasedDesign />
    <SlideVenn />
    <SlideHeartEyesRobot />
    <SlideUserStories />
    <SlideSpeckle />
    <SlidePillars />
    <SlideBiggerPicture />
    <SlideAppSpecificity />
    <SlideInternetOfConstruction />
  </SlideShow>
</template>
