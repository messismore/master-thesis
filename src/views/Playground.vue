<script lang="ts">
import { defineComponent } from 'vue'
import SpeckleNetwork from '@/components/figures/SpeckleNetwork.vue'

export default defineComponent({
  name: 'Playground',
  components: { SpeckleNetwork },
  props: {},
  inject: ['theme'],
})
</script>
<style scoped lang="css"></style>

<template>
  <SpeckleNetwork />
</template>
