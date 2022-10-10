<template>
  <button
    :class="`${classes} ${formData.processing ? 'disabled' : ''}`"
    :disabled="formData.processing"
    type="submit"
  >
    <span v-if="formData.processing">
      <icon spin :icon="icon" size="sm" />
      <span class="ml-1">
        <slot name="processing"> Processing </slot>
      </span>
    </span>
    <span v-else>
      <slot>Submit</slot>
    </span>
  </button>
</template>

<script setup>
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import { faRotateRight as buttonIcon } from '@fortawesome/free-solid-svg-icons'

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
defineProps({
  formData: {
    type: Object,
    required: true,
  },
  classes: {
    type: String,
    required: false,
    default: 'w-100 btn btn-primary bg-gradient',
  },
  icon: {
    type: String,
    required: false,
    default: buttonIcon,
  },
})
</script>
