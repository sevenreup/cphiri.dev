<script lang="ts">
	import { Config } from '$lib/config';
	import type { BlogPost } from './+page';

	export let data: BlogPost;
	let { title, description, content } = data;
</script>

<div class="container">
	<div class="h-16" />
	<div class="prose md:prose-lg lg:prose-xl">
		<svelte:component this={content} />
	</div>
</div>

<svelte:head>
	<title>{Config.title} | {title}</title>
	<meta name="description" content={description} />
</svelte:head>
