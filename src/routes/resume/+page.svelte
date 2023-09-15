<script>
	import Ad from '$lib/components/logos/ad.svelte';
import Dtree from '$lib/components/logos/dtree.svelte';

	let data = [...Array(100)];
</script>

<div>
	<div class="h-16" />
	<li class="pb-8">
		<div class="p-8">
			<h3 class="text-md font-medium">Work</h3>
			<h4 class="text-md opacity-60">Dev, Design</h4>
		</div>

		<div class="flex overflow-x-scroll no-scrollbar gap-6 px-8">
			<div class="flex flex-col gap-2 w-64 shrink-0">
				<div
					class="aspect-square bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-xl flex-1 h-64 flex justify-center items-center"
				>
					<Dtree />
				</div>
				<p class="text-sm opacity-40">
					Dev <a href="https://figma.com">D-tree</a>
					<span class="opacity-60">(2022 - Present)</span>
				</p>
			</div>

			<div class="flex flex-col gap-2 w-64 shrink-0">
				<div
					class="aspect-square bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-xl flex-1 h-64 flex justify-center items-center"
				>
				<Ad />
				</div>
				<p class="text-sm opacity-40">
					Lead Mobile Dev, <a href="https://diagram.com">Angle Dimension</a>
					<span class="opacity-60">(2021 - 2023)</span>
				</p>
			</div>
		</div>
	</li>
	{#each data as item}
		<div>Fake Resume {item}</div>
	{/each}
</div>
