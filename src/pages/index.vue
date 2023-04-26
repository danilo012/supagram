<template>

<iframe src="https://ec8d4834-f5dd-4503-aa87-8f145bf6bd17.id.repl.co/" width="100%" height="500px" frameBorder="0" style="border: 0;"></iframe>

	<div class="flex flex-col max-w-md mx-auto py-4 space-y-4">
		<form-create-post />
		<content-post v-for="post in posts" :post="post" :key="post.id" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import usePosts from '~/composables/posts'

export default defineComponent({
	middleware: 'authenticated',
	setup() {
		const { posts } = usePosts()

		return { posts }
	},
})
</script>
