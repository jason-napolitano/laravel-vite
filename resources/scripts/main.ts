/* -----------------------------------------------------------------------------
 * Application essentials
 * -------------------------------------------------------------------------- */
import { resolvePageComponent } from 'vite-plugin-laravel/inertia'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'
import { createApp, h } from 'vue'

/* -----------------------------------------------------------------------------
 * Home grown components
 * -------------------------------------------------------------------------- */
import Tooltip from '@/shared/common/tooltip.vue'

/* -----------------------------------------------------------------------------
 * Third-party components
 * -------------------------------------------------------------------------- */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { InertiaProgress } from '@inertiajs/progress'
import { ElIcon } from 'element-plus'

/* -----------------------------------------------------------------------------
 * Style configuration
 * -------------------------------------------------------------------------- */
import '@/styles/app.scss'

/* -----------------------------------------------------------------------------
 * Application configuration
 * -------------------------------------------------------------------------- */
const app = createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(name, import.meta.glob('../pages/**/*.vue')),
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      // components
      .component('FaIcon', FontAwesomeIcon)
      .component('Tooltip', Tooltip)
      .component('ElIcon', ElIcon)
      .component('Link', Link)
      // Routing ------------------------------------
      .mixin({
        // @ts-ignore
        methods: { route },
      })
      // mount
      .mount(el)
  },
})

/* -----------------------------------------------------------------------------
 * Progress Bar
 * NOTE: For Progress bar styling, go to resources/sass/_progress.scss
 * -------------------------------------------------------------------------- */
InertiaProgress.init({
  showSpinner: false,
  includeCSS: false,
  delay: 50, // In milliseconds
})

/* -----------------------------------------------------------------------------
 * Instantiation message
 * -------------------------------------------------------------------------- */
app.then(() => console.info('Application instantiated', '...'))
