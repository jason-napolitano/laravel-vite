<template layout="auth">
  <LoginForm :errors="errors" />
</template>

<script setup lang="ts">
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import LoginForm from '@/shared/common/auth/forms/login.vue'

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
defineProps<{
  errors: object
}>()
</script>
