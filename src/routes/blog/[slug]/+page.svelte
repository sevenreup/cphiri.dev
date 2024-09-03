<script lang="ts">
	import { Config } from '$lib/config';
	import { serializeSchema, blogSchema } from '$lib/seo/ld';
	import { createPostOgUrl } from '../../../utils/posts';
	import type { BlogPostData } from './+page';

	export let data: BlogPostData;
	let { title, description, date, tags } = data.meta;

	const ogUrl = createPostOgUrl(data.slug);
</script>

<div class="relative p-4">
	<div class="max-w-3xl mx-auto">
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
		<div class="prose md:prose-lg lg:prose-xl break-words max-w-none">
			<svelte:component this={data.content} />
		</div>
	</div>
</div>

<svelte:head>
	<title>{Config.title} | {title}</title>

	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={ogUrl} />

	<meta property="og:url" content={createPostOgUrl(data.slug)} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />

	{@html serializeSchema(blogSchema(data.meta, data.slug))}
</svelte:head>
