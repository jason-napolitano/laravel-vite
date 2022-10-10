<template layout="common">
  <section class="row">
    <div class="col-12">
      <div class="text-center">
        <h1>
          Built using Laravel {{ versions.laravel }} &amp; PHP
          {{ versions.php }} on the backend ...
        </h1>
      </div>
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      <div class="text-center">
        <h2 class="lead">
          ... plus Vue 3, Typescript and Vite on the frontend
        </h2>
      </div>
    </div>
  </section>

  <section class="row">
    <div class="col-3"></div>
    <div :class="`col-3 ${user ? 'text-right' : 'text-center'}`">
      <div class="text-center">
        Authentication
      </div>
      <div
        :class="`px-2 pb-2 pt-1 bg-${
          user ? 'grass' : 'pomegranate'
        } text-offwhite text-center`"
      >
        - you have {{ !user ? 'not' : '' }} been authenticated -
      </div>
    </div>
    <div class="col-3">
      <div class="text-center">
        Authorization
      </div>
      <div class="pb-2 p-1 bg-secondary text-offwhite text-center">
        <!-- authorization examples using can() and role() -->
        <div v-if="can('*')">- only administrators can see this -</div>
        <div v-if="can('member')">- all members can see this - </div>
        <div v-if="user == null">- only guests can see this - </div>
      </div>
    </div>
    <div class="col-3"></div>
  </section>

  <section class="row">
    <div class="col-12">
      <hr />
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      <div class="text-center">
        <div class="links">
          <a target="_blank" href="https://fontawesome.com/">Font Awesome</a>
          <a target="_blank" href="https://element-plus.org/">ElementUI</a>
          <a target="_blank" href="https://getbootstrap.com">Bootstrap</a>
          <a target="_blank" href="https://laravel.com">Laravel</a>
        </div>
      </div>
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      <div class="text-center">
        <div class="links text-xs">
          <a target="_blank" href="https://vitejs.dev/">
            Vite</a>
          <a target="_blank" href="https://vuejs.org">
            VueJS
          </a>
          <a target="_blank" href="https://www.typescriptlang.org/">
            Typescript
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      <div class="text-center">
        <div class="links text-xs">
          <Tooltip content="Github Repository" position="top" context="light  ">
            <a target="_blank" href="https://github.com/jason-napolitano">
              <FaIcon :icon="faGithub" size="sm" /> GitHub
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* ---------------------------------------------
 * Dependency imports
 * -------------------------------------------- */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { user, can } from '@/utils'

/* ---------------------------------------------
 * Component props
 * -------------------------------------------- */
const props = defineProps<{
  versions: object
}>()
</script>

<style scoped lang="scss">
.links > a {
  color: #636b6f;
  padding: 0 25px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}
</style>