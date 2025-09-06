<script lang="ts">
	import type { BlogData } from './+page';
	import { page } from '$app/stores';
	import { X as CloseIcon } from 'lucide-svelte';
	interface Props {
		data: BlogData;
	}

	let { data }: Props = $props();

	const { posts } = data;
</script>

<div class="container">
	<div class="h-16"></div>
	<div class="flex flex-col gap-4 my-6">
		<h1 class="text-6xl font-bold">Blog</h1>
		<p class="text-base-content/70 font-title py-4 font-light md:text-lg xl:text-2xl">
			A collection of thoughts and ideas
		</p>
		<div class="flex flex-row flex-wrap items-center gap-2">
			{#if $page.url.searchParams.has('tag')}
				<span class="text-base-content/70 font-title py-4 font-light md:text-lg xl:text-2xl"
					>Tag: {$page.url.searchParams.get('tag')?.toUpperCase()}</span
				>

				<a class="btn" data-sveltekit-reload href={$page.url.pathname}>Clear All <CloseIcon /> </a>
			{/if}
		</div>
	</div>
	<ul class="list-none w-full gap-2 flex flex-col">
		{#each posts as post}
			<li class="group w-full p-4 flex flex-col gap-1">
				<div class="flex flex-row flex-wrap gap-1 items-center">
					{#if post.type === 'presentation'}
						<span class="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
							Presentation
						</span>
					{/if}
					{#each post.meta.tags as tag}
						<a
							class="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full hover:bg-gray-300 transition-colors"
							data-sveltekit-reload
							href={`${$page.url.pathname}?tag=${tag}`}
							onclick={(e) => e.stopPropagation()}
						>{tag}</a>
					{/each}
				</div>
				<a href={post.url} class="block">
					<h2 class="text-3xl group-hover:underline">{post.meta.title}</h2>
					<p class="text-xl font-light">{post.meta.description}</p>
					<div class="">
						<span>{post.meta.date}</span>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
