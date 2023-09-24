<script>
	import HeroSvg from '$lib/components/work/hero-svg.svelte';

	let data = [...Array(10)];
</script>

<div class="h-16" />
<div class="container">
	<div class="h-96 flex justify-center my-28 w-full">
		<div class="md:container w-full flex flex-col gap-8">
			<div class="flex flex-col gap-6">
				<h1 class="text-5xl md:text-8xl">Christopher Phiri</h1>
				<p class="text-2xl md:text-6xl font-light">Just try, I think</p>
			</div>
			<div class="flex flex-row justify-between w-full">
				<div>
					<p>Software Engineer, UI/UX, Illustrator</p>
				</div>
				<div>
					<div class="w-52">
						<HeroSvg />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="border-t border-muted w-full pt-12 mt-12">
	<div class="container">
		<div class="flex flex-row flex-wrap gap-y-4 w-full">
			{#each data as item}
				<div class="w-full md:w-1/3 lg:w-1/4">
					<div class="h-96 bg-gray-200 rounded-lg m-1" />
				</div>
			{/each}
		</div>
	</div>
</div>
