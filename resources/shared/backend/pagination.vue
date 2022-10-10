<template>
  <div v-if="links.length > 3 && can('view_dashboard')">
    <div class="flex flex-wrap -mb-1">
      <template v-for="(link, k) in links" :key="k">
        <div
          v-if="link.url === null"
          class="no-underline mr-1 mb-1 px-2 py-1 text-sm text-charcoal border rounded"
          v-html="link.label"
        />
        <Link
          v-else
          class="no-underline mr-1 mb-1 px-2 py-1 text-sm text-charcoal border rounded"
          :class="{ 'bg-marina text-white': link.active }"
          :href="link.url"
          v-html="link.label"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import { can } from '@/utils'

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
defineProps({
  links: Array,
})
</script>

<style scoped lang="scss">
.pagination {
  font-family: 'Ubuntu', sans-serif;
  display: inline-flex;
  position: relative;
}
.pagination li a.page-link {
  color: #000;
  background: #ccc;
  font-size: 20px;
  font-weight: 600;
  line-height: 39px;
  height: 40px;
  width: 40px;
  padding: 0;
  margin: 0 6px;
  border: none;
  border-radius: 0;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease 0s;
}
.pagination li a.page-link:hover,
.pagination li a.page-link:focus,
.pagination li.active a.page-link:hover,
.pagination li.active a.page-link {
  color: #fff;
  background: #08b8e0;
}
.pagination li a.page-link:before {
  content: '';
  background: linear-gradient(#029fbc, #08b8e0);
  height: 100%;
  width: 100%;
  border-radius: 50%;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  transition: all 0.3s ease 0s;
}
.pagination li:first-child a.page-link:before {
  background: linear-gradient(to right, #029fbc, #08b8e0);
}
.pagination li:last-child a.page-link:before {
  background: linear-gradient(to left, #029fbc, #08b8e0);
}
.pagination li a.page-link:hover:before,
.pagination li a.page-link:focus:before,
.pagination li.active a.page-link:hover:before,
.pagination li.active a.page-link:before {
  opacity: 1;
  top: -50%;
}
.pagination li:first-child a.page-link:hover:before,
.pagination li:first-child a.page-link:focus:before,
.pagination li.active:first-child a.page-link:hover:before,
.pagination li.active:first-child a.page-link:before {
  top: 0;
  left: -50%;
}
.pagination li:last-child a.page-link:hover:before,
.pagination li:last-child a.page-link:focus:before,
.pagination li.active:last-child a.page-link:hover:before,
.pagination li.active:last-child a.page-link:before {
  top: 0;
  left: 50%;
}
@media only screen and (max-width: 480px) {
  .pagination {
    font-size: 0;
    display: inline-block;
  }
  .pagination li {
    display: inline-block;
    vertical-align: top;
    margin: 0 0 22px;
  }
}

</style>
