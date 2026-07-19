import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router/index.js'
import App from './App.vue'
import './index.css'

function updateRuntimeMetadata() {
	const pageUrl = new URL(window.location.pathname, window.location.origin).href
	const imageUrl = new URL(`${import.meta.env.BASE_URL}SIS-Logo-solid.png`, window.location.origin).href

	document.querySelectorAll('[data-runtime-url]').forEach((element) => {
		const attribute = element.tagName === 'LINK' ? 'href' : 'content'
		element.setAttribute(attribute, pageUrl)
	})
	document.querySelectorAll('[data-runtime-image]').forEach((element) => {
		element.setAttribute('content', imageUrl)
	})
}

updateRuntimeMetadata()

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

// Smooth-scroll fallback for browsers without native `scroll-behavior: smooth` support
function smoothScrollToHash(hash) {
	try {
		const id = hash.startsWith('#') ? hash.slice(1) : hash
		const el = document.getElementById(id)
		if (!el) return
		const header = document.querySelector('header')
		const headerOffset = header ? header.getBoundingClientRect().height : 0
		const targetY = el.getBoundingClientRect().top + window.pageYOffset - headerOffset - 12

		// If browser supports native smooth scrolling via CSS, use it
		if (window.CSS && CSS.supports && CSS.supports('scroll-behavior', 'smooth')) {
			window.scrollTo({ top: targetY, behavior: 'smooth' })
			return
		}

		// otherwise animate with requestAnimationFrame
		const startY = window.pageYOffset
		const distance = targetY - startY
		const duration = 500
		let startTime = null

		function ease(t) {
			return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
		}

		function step(timestamp) {
			if (!startTime) startTime = timestamp
			const elapsed = timestamp - startTime
			const progress = Math.min(elapsed / duration, 1)
			const eased = ease(progress)
			window.scrollTo(0, startY + distance * eased)
			if (elapsed < duration) window.requestAnimationFrame(step)
		}

		window.requestAnimationFrame(step)
	} catch (e) {
		// silent
	}
}

router.afterEach((to) => {
	updateRuntimeMetadata()
	if (to.hash) {
		// small delay to ensure element is rendered
		setTimeout(() => smoothScrollToHash(to.hash), 30)
	}
})
