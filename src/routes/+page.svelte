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
							{
								'text-primary-content border-primary-focus bg-primary':
									selectedFilter === filter.value
							}
						)}
						on:click={() => filterProjects(filter.value)}>{filter.name}</button
					>
				{/each}
			</div>
		</div>

		<div class="flex flex-row flex-wrap gap-y-4 w-full">
			{#each filteredProjects as project}
				<div
					class="w-full md:w-1/3 lg:w-1/4"
					transition:scale={{ duration: 500, opacity: 0.5, easing: quintOut }}
				>
					<div
						class="h-96 bg-card text-card-foreground rounded-lg m-1 flex flex-col justify-between"
					>
						<div class="h-full">
							<div
								class="p-2 h-1/2 bg-slate-700 rounded-xl flex items-center justify-center relative"
							>
								<img src={project.image} alt={project.name} class="w-2/5 rounded-lg h-2/5" />
								{#if project.isPersonal}
									<div
										class={cn(
											'absolute top-0 right-0 bg-primary w-9 h-9 m-1 flex justify-center items-center rounded-full group cursor-pointer',
											'transition-all ease-out hover:ease-in',
											'hover:w-auto hover:px-2'
										)}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 256 256"
											class="text-primary-content"
											><path
												d="M104,40a24,24,0,1,1,24,24A24,24,0,0,1,104,40Zm108.49,99.51L167.17,88.13a24,24,0,0,0-18-8.13H106.83a24,24,0,0,0-18,8.13L43.51,139.51a12,12,0,0,0,17,17L96,128,73.13,214.93a12,12,0,0,0,21.75,10.14L128,168l33.12,57.07a12,12,0,0,0,21.75-10.14L160,128l35.51,28.49a12,12,0,0,0,17-17Z"
												opacity="0.2"
											/><path
												d="M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56Zm90.34,78.05L173.17,82.83a32,32,0,0,0-24-10.83H106.83a32,32,0,0,0-24,10.83L37.66,134.05a20,20,0,0,0,28.13,28.43l16.3-13.08L65.55,212.28A20,20,0,0,0,102,228.8l26-44.87,26,44.87a20,20,0,0,0,36.41-16.52L173.91,149.4l16.3,13.08a20,20,0,0,0,28.13-28.43Zm-11.51,16.77a4,4,0,0,1-5.66,0c-.21-.2-.42-.4-.65-.58L165,121.76A8,8,0,0,0,152.26,130L175.14,217a7.72,7.72,0,0,0,.48,1.35,4,4,0,1,1-7.25,3.38,6.25,6.25,0,0,0-.33-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.05a6.25,6.25,0,0,0-.33.63,4,4,0,0,1-2.26,2.07,4,4,0,0,1-5-5.45,7.72,7.72,0,0,0,.48-1.35L103.74,130A8,8,0,0,0,91,121.76L55.48,150.24c-.23.18-.44.38-.65.58a4,4,0,1,1-5.66-5.65c.12-.12.23-.24.34-.37L94.83,93.41a16,16,0,0,1,12-5.41h42.34a16,16,0,0,1,12,5.41l45.32,51.39c.11.13.22.25.34.37A4,4,0,0,1,206.83,150.82Z"
											/></svg
										>
										<span class="hidden group-hover:block transition-all">Personal</span>
									</div>
								{/if}
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
