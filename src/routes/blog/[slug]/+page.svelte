<script lang="ts">
	import { Config } from '$lib/config';
	import type { BlogPostData } from './+page';

	export let data: BlogPostData;
	let { title, description } = data.meta;
</script>

<div class="container">
	<div class="h-16" />
	<div class="prose md:prose-lg lg:prose-xl">
		<svelte:component this={data.content} />
	</div>
</div>

<svelte:head>
	<title>{Config.title} | {title}</title>
	<meta name="description" content={description} />
</svelte:head>
