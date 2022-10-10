import inertia from './resources/scripts/vite/inertia-layout'
import laravel from 'vite-plugin-laravel'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		inertia(),
		vue(),
		laravel(),
	],
})
