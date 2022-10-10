<template layout="backend">
  <section class="row">
    <div class="col-12">
      <UserTable :users="users.data"></UserTable>
    </div>
  </section>
  <section class="row">
    <div class="col">
      <Pagination :links="users.links" />
    </div>
  </section>
</template>

<script setup lang="ts">
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import UserTable from '@/shared/backend/tables/users.vue'
import Pagination from '@/shared/backend/pagination.vue'
import { UserInterface } from '@/types/User'

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
defineProps<{
  users: UserInterface[]
}>()
</script>
