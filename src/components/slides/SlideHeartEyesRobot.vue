<template>
  <SlideContainer title="My Contribution" class="slide-heart-eyes-robot">
    <h2>
      <br />
      <br />
      <br />Speckle CI*
    </h2>
    <div>
      [ <span>C</span>ontinuous <span>I</span>ntegration: The practice of
      automating the integration of code changes from multiple contributors into
      a single software project. ]
    </div>
  </SlideContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '/src/components/SlideContainer.vue'

export default defineComponent({
  name: 'SlideHeartEyesRobot',
  components: { SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
.slide-heart-eyes-robot {
  color: white;
}
:deep(main) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  margin-top: auto;
}
section {
  background: center / cover url(../../assets/heart-eyes-robot.png);
}
section main h2 {
  font-size: v-bind('theme.fontSizes(4)');
}

span {
  text-decoration: underline;
}
</style>
