<script lang="ts">
	import { Config } from '$lib/config';
	import type { BlogPostData } from './+page';

	export let data: BlogPostData;
	let { title, description, date, tags } = data.meta;
</script>

<div class="container">
	<div class="h-16" />
	<div class="flex flex-row flex-wrap items-center justify-between">
		<div class="flex flex-row flex-wrap gap-2 my-4">
			{#each tags as tag}
				<a
					class="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
					data-sveltekit-reload
					href={`/blog?tag=${tag}`}>{tag}</a
				>
			{/each}
		</div>
		<span>Published - {date}</span>
	</div>
	<div class="prose md:prose-lg lg:prose-xl">
		<svelte:component this={data.content} />
	</div>
</div>

<svelte:head>
	<title>{Config.title} | {title}</title>
	<meta name="description" content={description} />
</svelte:head>
