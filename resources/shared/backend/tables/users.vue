<template>
  <ElTable :data="users">
    <ElTableColumn>
      <template #header>
        <div class="">
          <ElIcon class="mt-1"><Management /></ElIcon> General Information
        </div>
      </template>
      <ElTableColumn width="60">
        <template #header>
          <div class="text-center">
            <strong class="text-pomegranate"> ID </strong>
          </div>
        </template>
        <template #default="scope">
          <div class="text-pomegranate opacity-80 w-100 h-100">
            {{ scope.row.id }}
          </div>
        </template>
      </ElTableColumn>
      <ElTableColumn label="Name">
        <template #default="scope">
          {{ scope.row.name }}
        </template>
      </ElTableColumn>
      <ElTableColumn label="Email">
        <template #default="scope">
          <code class="w-100">{{ scope.row.email }}</code>
        </template>
      </ElTableColumn>
    </ElTableColumn>
    <ElTableColumn>
      <template #header>
        <div class="text-center">
          <ElIcon class="mt-1"><Calendar /></ElIcon> Chronology
        </div>
      </template>
      <ElTableColumn width="160">
        <template #header>
          <div class="text-center">Created</div>
        </template>
        <template #default="scope">
          <Tooltip :content="formatDate(scope.row.created_at)" placement="left">
            <span class="btn text-gray-200 w-100 cursor-default">
              {{ daysAgo(scope.row.created_at) }}
            </span>
          </Tooltip>
        </template>
      </ElTableColumn>
      <ElTableColumn width="160 ">
        <template #header>
          <div class="text-center">Updated</div>
        </template>
        <template #default="scope">
          <Tooltip :content="formatDate(scope.row.updated_at)" placement="left">
            <span class="btn text-gray-200 w-100 cursor-default">
              {{ daysAgo(scope.row.updated_at) }}
            </span>
          </Tooltip>
        </template>
      </ElTableColumn>
    </ElTableColumn>
  </ElTable>
</template>

<script setup lang="ts">
/* ---------------------------------------------
 * Style imports
 * -------------------------------------------- */
import 'element-plus/es/components/button-group/style/css'
import 'element-plus/es/components/table/style/css'

/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import { Management, Calendar } from '@element-plus/icons-vue'
import { ElTable, ElTableColumn } from 'element-plus'
import { formatDate, daysAgo } from '@/utils'
import { UserInterface } from '@/types/User'

/** --------------------------------------------
 * Component props
 * ----------------------------------------- */
defineProps<{
  users: UserInterface[]
}>()
</script>

<style scoped lang="scss">
// ...
</style>
