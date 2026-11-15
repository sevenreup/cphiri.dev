<script lang="ts">
	import { serializeSchema, blogSchema } from '$lib/seo/ld';
	import type { BlogPostData } from './+page';

	interface Props {
		data: BlogPostData;
	}

	let { data }: Props = $props();
	const meta = $derived(data.meta);
</script>

<div class="relative p-4">
	<div class="max-w-3xl mx-auto">
		<div class="h-16"></div>
		<div class="flex flex-row flex-wrap items-center justify-between">
			<div class="flex flex-row flex-wrap gap-2 my-4">
				{#each meta.tags as tag}
					<a
						class="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
						data-sveltekit-reload
						href={`/blog?tag=${tag}`}>{tag}</a
					>
				{/each}
			</div>
			<span>Published - {meta.date}</span>
		</div>
		<div class="prose md:prose-lg lg:prose-xl break-words max-w-none">
			<data.content />
		</div>
	</div>
</div>

<svelte:head>
	{@html serializeSchema(blogSchema(data.meta, data.slug))}
</svelte:head>
