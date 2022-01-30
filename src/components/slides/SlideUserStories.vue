<template>
  <SlideContainer title="Let computers do what computers are good at!">
    <div class="story">
      <div class="head">👨🏾‍🦱</div>
      <div>
        As an energy consultant, I want my simulation to run whenever the
        architects send a new model!
      </div>
    </div>
    <div class="story">
      <div>
        I want to check our work against a set of integration tests, so that we
        can keep track of issues and fix them!
      </div>
      <div class="head">🧑🏼‍🦳</div>
    </div>
    <div class="story">
      <div class="head">👱🏻‍♀️</div>
      <div>
        I built this script, and I want to make it available to others as a
        service, so that they can use it without installing anything!
      </div>
    </div>
  </SlideContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '/src/components/SlideContainer.vue'

export default defineComponent({
  name: 'SlideUserStories',
  components: { SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
:deep(main) {
  display: flex;
  flex-direction: column;
}
li {
  list-style-type: none;
}
.head {
  font-size: v-bind('theme.fontSizes(5)');
  margin: 0 v-bind('theme.space(4)');
}
.story {
  display: flex;
  max-width: 70%;
  margin-block: 1em;
}
.story:nth-child(even) {
  align-self: end;
}
</style>
