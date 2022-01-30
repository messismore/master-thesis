<template>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import theme from './theme'
import RouterView from 'vue-router'

import literature from './literature.json'

export default defineComponent({
  name: 'App',
  components: {},
  provide: { theme: theme, literature: literature },
})
</script>

<style lang="scss">
:root,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
