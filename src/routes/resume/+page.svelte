<script lang="ts">
	import SectionTitle from '$lib/components/cv/section-title.svelte';
	import WorkExperience from '$lib/components/cv/work-experience.svelte';
	import Ad from '$lib/components/logos/ad.svelte';
	import Alcor from '$lib/components/logos/alcor.svelte';
	import Dtree from '$lib/components/logos/dtree.svelte';
	import { workExperience, skillGroups } from '$lib/data/resume';
</script>

<div class="container">
	<div class="mx-auto max-w-5xl py-16 flex flex-col gap-16">
		<header class="flex flex-col gap-6">
			<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
				<div>
					<h1 class="text-4xl md:text-5xl font-medium">Resume</h1>
					<p class="mt-3 text-xl">Christopher Phiri</p>
					<p class="mt-1 opacity-70">Product Engineer · Mobile &amp; Full Stack Developer</p>
				</div>
				<a class="btn btn-outline self-start" href="/christopher-phiri-resume.pdf" download
					>Download resume (PDF)</a
				>
			</div>
			<p class="max-w-3xl leading-relaxed">
				Strong knowledge of object-oriented programming, developed through personal and team
				projects across a range of frameworks. Interested in creating thoughtful user interfaces and
				optimized systems that improve the overall user experience.
			</p>
			<div class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
				<span>Lilongwe, Malawi</span>
				<a class="link link-hover" href="mailto:chris7phiri@gmail.com">chris7phiri@gmail.com</a>
			</div>
		</header>
		<section aria-labelledby="experience-heading">
			<h2 id="experience-heading" class="text-2xl font-medium mb-8">Work Experience</h2>
			<div class="flex flex-col gap-12">
				{#each workExperience as { name, position, meta, body, highlights, responsibilities, logo }}
					<WorkExperience {name} {position} {meta} {body} {highlights} {responsibilities}>
						{#if logo === 'ad'}<Ad />
						{:else if logo === 'dtree'}<Dtree />
						{:else if logo === 'alcor'}<Alcor />
						{:else}<span class="text-2xl font-medium">{logo.toUpperCase()}</span>{/if}
					</WorkExperience>
				{/each}
			</div>
		</section>
		<section aria-label="Skills and technology">
			<SectionTitle title="Skills & Technology" />
			<dl class="grid grid-cols-1 sm:grid-cols-2 gap-6">
				{#each skillGroups as { name, skills }}
					<div>
						<dt class="font-medium mb-2">{name}</dt>
						<dd class="leading-relaxed opacity-80">{skills}</dd>
					</div>
				{/each}
			</dl>
		</section>
		<section aria-label="Education">
			<SectionTitle title="Education" />
			<div class="flex flex-col gap-3">
				<h3 class="text-xl">Bachelor of Science in Business Information Technology</h3>
				<p>Malawi University of Science and Technology</p>
				<p class="opacity-70">Sep 2016 - 2021</p>
				<p class="leading-relaxed">
					Academic highlights: Data Structures &amp; Algorithms, Database Management Systems,
					Human-Computer Interaction.
				</p>
			</div>
		</section>
	</div>
</div>
