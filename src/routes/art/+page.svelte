<script lang="ts">
	import { artCollection } from '$lib/data/art';
	import { cn } from '$lib/utils';
</script>

<div class="h-16" />
<div
	class="grid grid-flow-dense grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(5,1fr)] lg:grid-cols-[repeat(6,1fr)] w-full h-full"
>
	{#each artCollection as art}
		<figure class={cn('item flex justify-center items-center', art.spanHorizontal && 'horizontal', art.spanVertical && 'vertical')}>
			<img class="w-full h-full" src={art.image} alt={art.title} />
		</figure>
	{/each}
</div>

<svelte:head>
	<title>Cphiri | Art</title>
</svelte:head>

<style>
	.item {
		@apply cursor-pointer overflow-hidden relative;
	}
	.vertical {
		grid-row: span 2;
	}

	.horizontal {
		grid-column: span 2;
	}
</style>
