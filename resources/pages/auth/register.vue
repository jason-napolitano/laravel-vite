<template layout="auth">
  <RegisterForm :errors="errors" />
</template>

<script setup lang="ts">
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import RegisterForm from '@/shared/common/auth/forms/register.vue'

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
defineProps<{
  errors: object
}>()
</script>
