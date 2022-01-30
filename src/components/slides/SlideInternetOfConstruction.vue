<template>
  <SlideContainer title="Towards an Internet of Construction">
    <img src="../../assets/internet-of-construction.png" />
    <div>
      <p>
        Status quo: Network of federated digital models, synced up by hand. BIM
        fails to be the One True Model.
      </p>
      <ul>
        <li>"The Future of Revit is an API"</li>
        <li>Services not Products</li>
        <li>
          Unbundling means we can swap out parts we don't like and use something
          else
        </li>
      </ul>
    </div>
    <a
      href="https://tom-bartley.medium.com/towards-an-internet-of-construction-6ab9e211c241"
    >
      Tom Bartley: Towards and Internet of Construction
    </a>
  </SlideContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlideContainer from '/src/components/SlideContainer.vue'

export default defineComponent({
  name: 'SlideInternetOfConstruction',
  components: { SlideContainer },
  props: {},
  inject: ['theme'],
})
</script>

<style scoped lang="css">
:deep(main) {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 4em;
  padding: 0 2em;
}
img {
  width: 100%;
}
li {
  margin-bottom: v-bind('theme.space(2)');
}
</style>
