<script lang="ts">
	import HeroSvg from '$lib/components/work/hero-svg.svelte';
	import { projects } from '$lib/data/projects';
	import { cn } from '$lib/utils';
	import { GithubIcon } from 'lucide-svelte';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const filters = [
		{
			name: 'All',
			value: 'all'
		},
		{
			name: 'Web',
			value: 'web'
		},
		{
			name: 'Mobile',
			value: 'mobile'
		}
	];

	let filteredProjects = projects;

	let selectedFilter = 'all';

	function filterProjects(filter: string) {
		selectedFilter = filter;
		if (filter === 'all') {
			filteredProjects = projects;
			return;
		}
		filteredProjects = projects.filter((project) => project.types.includes(filter));
	}
</script>

<div class="h-16" />
<div class="container">
	<div class="h-96 flex justify-center my-28 w-full">
		<div class="md:container w-full flex flex-col gap-8">
			<div class="flex flex-col gap-6">
				<h1 class="text-5xl md:text-8xl">Christopher Phiri</h1>
				<p class="text-xl md:text-2xl font-light">🔨 This site is still in progress...</p>
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
<div class="border-t border-base-300 w-full pt-12 mt-12">
	<div class="container">
		<div class="p-2 flex flex-col gap-2">
			<h4 class="text-2xl font-medium">Projects</h4>
			<p>Here are some of the projects I've worked on.</p>
			<div class="flex flex-row gap-2 flex-wrap">
				{#each filters as filter}
					<button
						class={cn(
							'inline-flex items-center justify-center font-medium transition-colors',
							'disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm  rounded-md px-3 text-xs h-8',
							'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ',
							'hover:bg-neutral hover:text-neutral-content',
							{ 'bg-neutral text-neutral-content border-primary': selectedFilter === filter.value }
						)}
						on:click={() => filterProjects(filter.value)}>{filter.name}</button
					>
				{/each}
			</div>
		</div>

		<div class="flex flex-row flex-wrap gap-y-4 w-full">
			{#each filteredProjects as project}
				<div class="w-full md:w-1/3 lg:w-1/4" transition:scale={{ duration: 500, opacity: 0.5, easing: quintOut }}>
					<div
						class="h-96 bg-card text-card-foreground rounded-lg m-1 flex flex-col justify-between"
					>
						<div class="h-full">
							<div class="p-2 h-1/2 bg-slate-700 rounded-xl flex items-center justify-center">
								<img src={project.image} alt={project.name} class="w-2/5 rounded-lg h-2/5" />
							</div>
							<div class="p-2">
								<h3 class="text-xl font-semibold">{project.name}</h3>
								<p class="text-sm">{project.description}</p>
							</div>
						</div>
						<div class="bg-card rounded-b-lg">
							<div class="w-full flex justify-end p-2">
								<span
									class="flex flex-row p-1 gap-2 items-center bg-base-300 text-base-content rounded-full"
								>
									{#if project.github}
										<a
											class={cn(
												'bg-neutral h-full rounded-full p-2 text-neutral-content group',
												'flex flex-row items-center gap-2'
											)}
											href={project.github}
											target="_blank"
										>
											<GithubIcon />
											<span class="">Github</span>
										</a>
									{/if}
									{#if project.url != null}
										<a class="p-2" href={project.url} target="_blank">Website</a>
									{/if}
								</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
<div class="h-24" />
