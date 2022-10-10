<template>
  <Image
    :src="src"
    :alt="alt"
    :lazy="lazy"
    :classes="`img-fluid img-thumbnail w-100 ${classes}`"
  >
    <template #placeholder>
      <slot name="placeholder"></slot>
    </template>
    <template #error>
      <slot name="error"></slot>
    </template>
  </Image>
</template>

<script setup>
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import Image from './Image'

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
defineProps({
  classes: String,
  alt: String,
  src: String,
  lazy: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped lang="scss"></style>
