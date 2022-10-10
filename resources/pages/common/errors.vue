<template layout="frontend">
  <section class="row">
    <div class="col-12">
      <h1 class="lead text-center">{{ title }} - {{ description }}</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import { computed } from 'vue'

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
const props = defineProps<{
  permissions: object,
  status: number
}>()

/* ---------------------------------------------
 * Computed properties
 * -------------------------------------------- */
const title = computed(() => {
  return {
    503: '503: Service Unavailable',
    500: '500: Server Error',
    404: '404: Page Not Found',
    403: '403: Forbidden',
  }[props.status]
})

const description = computed(() => {
  return {
    503: 'Sorry, we are doing some maintenance. Please check back soon.',
    500: 'Whoops, something went wrong on our servers.',
    404: 'Sorry, the page you are looking for could not be found.',
    403: 'Sorry, you are forbidden from accessing this page.',
  }[props.status]
})
</script>

<style scoped lang="scss">
// ...
</style>
