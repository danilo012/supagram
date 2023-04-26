import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/composition-api/module',
		'nuxt-windicss',
		'@nuxtclub/supabase',
		'unplugin-icons/nuxt',
		'@nuxtjs/pwa',
		'@nuxtjs/google-fonts',
	],
	components: true,
	css: ['~/assets/css/global.css'],
	googleFonts: {
		families: {
			'Encode+Sans': [400, 600, 700],
		},
	},
	plugins: ['~/plugins/supabase-auth'],
	pwa: {
		manifest: {
			name: 'TIMECLACK',
			short_name: 'Timeclack',
			lang: 'en',
		},
	},
	router: {
		middleware: 'supabase-auth',
	},
	srcDir: 'src',
	ssr: false,
	supabase: {
		key: process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5reHN6c3BkemVpY2FwcHd2ZHZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0NzIxNjEsImV4cCI6MTk5ODA0ODE2MX0.c212codusfkY9vk4j_V_n0-g4HEbl0_lVuXbkiGum3I',
		url: process.env.SUPABASE_URL || 'https://nkxszspdzeicappwvdvk.supabase.co',
	},
	target: 'static',
}

export default config
