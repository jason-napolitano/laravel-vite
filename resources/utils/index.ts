// @ts-nocheck
/* -----------------------------------------------------------------------------
 * Essential imports
 * -------------------------------------------------------------------------- */
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { ElMessageBox, ElMessage } from 'element-plus'
import relativeTime from 'dayjs/plugin/relativeTime'
import { usePage } from '@inertiajs/inertia-vue3'
import { Inertia } from '@inertiajs/inertia'
import { computed } from 'vue'
import dayjs from 'dayjs'

/* -----------------------------------------------------------------------------
 * Component styling
 * -------------------------------------------------------------------------- */
import 'element-plus/es/components/message-box/style/css'
import 'element-plus/es/components/message/style/css'
import { UserInterface } from '@/types/User'

// scoped constants -------------------------------------
// Inertia page instance
const page = usePage()

/** --------------------------------------------
 * Check if flash data exists, if so, send a
 * notification to the UI
 *
 * @returns {void}
 */
export const flashNotification = () => {
  if (page.props.value.flash.message) {
    ElMessage({
      customClass: 'w-100 rounded-0 top-0',
      message: page.props.value.flash.message ?? 'Action Completed',
      showClose: page.props.value.flash.showClose ?? false,
      duration: page.props.value.flash.duration ?? 1500,
      type: page.props.value.flash.context ?? 'info',
    })
  }
}

/** --------------------------------------------
 * Truncate a string and add an ellipsis to the
 * end of it
 *
 * @param input
 * @param n
 * @returns {string|*}
 */
export const truncate = (input: string, n = 55) =>
  input.length > 5 ? input.substring(0, n) + '...' : input

/** --------------------------------------------
 * Formats a laravel date and returns it in the
 * `days ago` format
 *  - EG: (Posted: 12 minutes ago)
 *
 * @param value
 *
 * @returns {string}
 */
export const daysAgo = (value: string) => {
  dayjs.extend(relativeTime)
  return dayjs(value).fromNow()
}

/** --------------------------------------------
 * Return a formatted date
 *
 * @param value
 * @param format
 * @returns {string}
 */
export const formatDate = (value: string, format = null) =>
  dayjs(value).format(format ?? 'dddd MMM DD, YYYY hh:mm A')

/** --------------------------------------------
 * Ensures the viewport is that of a 'small'
 * device (based on Tailwind breakpoints)
 *
 * @returns {ref|boolean}
 */
export const isSmallScreen = () => {
  let breakpoints = useBreakpoints(breakpointsTailwind)
  return computed(() => breakpoints.smaller('md'))
}

/** --------------------------------------------
 * Ensures the viewport is not that of a 'large'
 * device (based on Tailwind breakpoints)
 *
 * @returns {ref|boolean}
 */
export const notSmallScreen = () => {
  let breakpoints = useBreakpoints(breakpointsTailwind)
  return computed(() => breakpoints.greater('md'))
}

/** --------------------------------------------
 * Message indicating a record cannot be deleted
 *
 * @returns {void}
 */
export const showCannotPerform = () => {
  ElMessage({
    customClass: 'w-100 rounded-0 top-0',
    message: 'You cannot perform this action',
    showClose: false,
    type: 'error',
  })
}

/** --------------------------------------------
 * Soft-delete a record
 *
 * @param {string} to
 * @param {any}    record
 * @returns {void}
 */
export const softDeleteRecord = (to: string, record: object) => {
  Inertia.delete(window.route(`${to}.destroy`, record))
  ElMessage({
    customClass: 'w-100 rounded-0 top-0',
    message: 'Record successfully deleted',
    showClose: false,
    type: 'success',
  })
}

/** --------------------------------------------
 * Delete a record
 *
 * @param {string} to
 * @param {any}    record
 * @returns {void}
 */
export const deleteRecord = (to: string, record: object) => {
  ElMessageBox({
    center: true,
    message: `
      <span class="text-lg">This will <strong class="text-pomegranate">permanently</strong> delete the record</span>
    `,
    dangerouslyUseHTMLString: true,
    cancelButtonText: 'Cancel',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: 'Continue',
    confirmButtonClass: 'el-button--danger',
    showClose: false,
    closeOnPressEscape: false,
    closeOnClickModal: false,
    type: 'error',
  })
    .then(() => {
      Inertia.delete(window.route(`${to}.delete`, record))
      ElMessage({
        customClass: 'w-100 rounded-0 top-0',
        message: 'Record successfully deleted',
        showClose: false,
        type: 'success',
      })
    })
    .catch((error) => {
      console.error('Action cancelled - Reason:', error)
    })
}

/** --------------------------------------------
 * Restore a record
 *
 * @param {string} to
 * @param {any}    record
 * @returns {void}
 */
export const restoreRecord = (to: string, record: object) => {
  Inertia.post(window.route(`${to}.restore`, record))
  ElMessage({
    customClass: 'w-100 rounded-0 top-0',
    message: 'Record successfully restored',
    showClose: false,
    type: 'success',
  })
}

/** --------------------------------------------
 * Trigger the logout confirmation box
 *
 * @returns {void}
 */
export const logoutAction = () => {
  ElMessageBox({
    center: true,
    message: `
      <span class="text-lg">Are you sure you want to logout?</span>
    `,
    dangerouslyUseHTMLString: true,
    cancelButtonText: 'Cancel',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: 'Continue',
    confirmButtonClass: 'el-button--success',
    showClose: false,
    closeOnPressEscape: false,
    closeOnClickModal: false,
    type: 'info',
  })
    .then(() => {
      window.scroll(0, 0)
      return Inertia.post(route('logout'))
    })
    .catch((error) => {
      console.error('Action cancelled - Reason:', error)
    })
}

/** --------------------------------------------
 * Returns metadata for the application
 *
 * @returns {string}
 */
export const app = computed(() => page.props.value.app)

/** --------------------------------------------
 * Submits an InertiaJS form and scrolls to the
 * top of the window
 *
 * @returns {void}
 */
export const submitForm = (formData: object, to: string, obj: object = {}) => {
  formData.post(route(to, obj))
  window.scroll(0, 0)
}

/** --------------------------------------------
 * Currently logged-in user
 *
 * @returns {object}
 */
export const user = computed((): UserInterface => page.props.value.user.data)

/** --------------------------------------------
 * Does a user have permission to perform
 * a specific action?
 *
 * @param name {string} Name of the role or permission
 *
 * @returns {boolean}
 */
export const can = (name: string) => {
  // roles and permissions
  const permissions = page.props.value.user.permissions
  const roles = page.props.value.user.roles

  // empty collection for roles and permissions
  let collection: object[] = []

  // build the collection
  permissions.forEach((permission: object) => {
    collection.push(permission.name)
  })
  roles.forEach((role: object) => {
    collection.push(role.name)
  })

  // check if the value exists in the collection or check the
  // collection the wildcard value (*)
  return collection.includes(name) || collection.includes('*')
}

/** --------------------------------------------
 * Returns the storage path for laravel's
 * file storage system
 *
 * @param value
 * @return {"/storage/"}
 */
export const storagePath = (value: string = '') => `/storage/${value}`

/** --------------------------------------------
 * Removes hyphens (EG: '-' )  from a string
 *
 * @param phrase {string}
 * @returns {string}
 */
export const removeHyphens = (phrase: string) => phrase.replace(/-/g, ' ')

/** --------------------------------------------
 * Converts the first letter of each word in
 * a multi-word string to uppercase
 *
 * @param phrase {string}
 * @returns {string}
 */
export const toTitleCase = (phrase: string) =>
  phrase
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')

/**
 /** --------------------------------------------
 * Parses a number value and returns the
 * corresponding comma-delineated string value
 *
 * @param number {number} The value to parse
 *
 * @returns {string}
 */
export const thousandsSeparator = (number: number) => {
  const num_parts = number.toString().split('.')
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return num_parts.join('.')
}

/**
 /** --------------------------------------------
 * Capitalize the first letter in a string
 *
 * @link https://www.php.net/manual/en/function.ucfirst.php
 *
 * @param string {string}
 * @returns {string}
 */
export const ucFirst = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)
