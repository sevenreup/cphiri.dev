<script>
	import HeroSvg from '$lib/components/work/hero-svg.svelte';
	import { projects } from '$lib/data/projects';
	import { cn } from '$lib/utils';
	import { ChevronRight, GithubIcon } from 'lucide-svelte';
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
			{#each projects as project}
				<div class="w-full md:w-1/3 lg:w-1/4">
					<div class="h-96 bg-card text-card-foreground rounded-lg m-1">
						<div class="p-2 h-1/2">
							<img src={project.image} alt={project.name} class="w-full rounded-lg h-full" />
						</div>
						<div class="bg-card rounded-b-lg">
							<div class="p-2">
								<h3 class="text-xl font-semibold">{project.name}</h3>
								<p class="text-sm">{project.description}</p>
							</div>
							<div class="w-full flex justify-end p-2">
								{#if project.github != null && project.url != null}
									<span
										class="flex flex-row p-1 gap-2 items-center bg-slate-700 text-slate-100 rounded-full"
									>
										<a
											class={cn(
												'bg-slate-100 h-full rounded-full p-2 text-slate-700 group',
												'flex flex-row items-center'
											)}
											href={project.github}
										>
											<GithubIcon />
											<span class="group-hover:block hidden transition ease-in-out delay-150">Github</span>
										</a>
										<a class="p-2" href={project.url}>Website</a>
									</span>
								{:else if project.url != null}
									<a href={project.url} target="_blank" rel="noopener noreferrer">
										<span class="p-2 mr-4 flex flex-row gap-2 items-center">
											Website <ChevronRight />
										</span>
									</a>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
<div class="h-24" />
