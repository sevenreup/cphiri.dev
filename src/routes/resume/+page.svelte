<script lang="ts">
	import SectionTitle from '$lib/components/cv/section-title.svelte';
	import WorkExperience from '$lib/components/cv/work-experience.svelte';
	import Ad from '$lib/components/logos/ad.svelte';
	import Dtree from '$lib/components/logos/dtree.svelte';

	type WorkExperience = {
		name: string;
		position: string;
		meta: string;
		body: string;
		logo: string;
	};

	let workExperience: WorkExperience[] = [
		{
			name: 'D-Tree',
			position: 'Software Engineer',
			meta: '2022 - Present',
			body: `Develop android app using Kotlin and Jetpack compose, UI/UX Design, System requirements gathering, Implement and work with FHIR standards in native android.`,
			logo: 'dtree'
		},
		{
			name: 'Angle Dimensions',
			position: 'Lead Mobile Developer',
			meta: '2021 - 2022',
			body: `Android developer in charge of design, development and maintenance of mobile applications written in Xamarin Forms and native android and IOS.`,
			logo: 'ad'
		},
		{
			name: 'Alcor Technologies',
			position: 'Software Engineer',
			meta: '2018',
			body: `Developed cross platform (Flutter) as well as native mobile applications and created web apps for clients`,
			logo: 'orderpro'
		},
		{
			name: 'Malawi University \nof Science and Technology',
			position: 'Software Engineer',
			meta: 'May 2020 - Nov 2020',
			body: `Developed Native android applications and a backends to support the apps funded by the United Nations Development Program`,
			logo: 'must'
		},
		{
			name: 'Airtel Malawi',
			position: 'Information Technology Intern',
			meta: '2018 - 2020',
			body: `Provision of system support, Provision of system support, Network and Database administration (IBM DB2).`,
			logo: 'airtel'
		}
	];
</script>

<div class="container">
	<div>
		<div class="h-16" />
		<div class="flex flex-col gap-6">
			<div class="p-8">
				<SectionTitle title="Work Experience" subTitle="Dev" />
				<div class="flex flex-col gap-6">
					{#each workExperience as { name, position, meta, body, logo }}
						<WorkExperience {name} {position} {meta} {body}>
							{#if logo == 'ad'}
								<Ad />
							{:else if logo == 'dtree'}
								<Dtree />
							{:else}
								<span>NA</span>
							{/if}
						</WorkExperience>
					{/each}
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-6">
			<div class="p-8">
				<SectionTitle title="Education" />
				<div class="content-trailing null flex-1">
					<div class="flex flex-col gap-6">
						<div class="experience-title-date">
							<div class="text-xl">Bachelor of Science in Business Information Technology</div>
							<div class="text-muted-foreground">Malawi University of Science and Technology</div>
						</div>
						<div class="text-projectpage-body info">
							Major academic highlights (Data structures and algorithms, Database Management
							Systems, Human-Computer Interaction)
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <ul class="list-none">
		<li class="pb-8">
			<div class="p-8">
				<h3 class="text-md font-medium">Products</h3>
				<h4 class="text-md opacity-60">Apps, Website</h4>
			</div>

			<div class="flex overflow-x-scroll no-scrollbar gap-6 px-8">
				<div class="flex flex-col gap-2 w-64 shrink-0">
					<div
						class="aspect-square bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-xl flex-1 h-64 flex justify-center items-center"
					>
						<span>NA</span>
					</div>
					<p class="text-sm opacity-40">
						<a href="https://figma.com">Mandede</a>
						<span class="opacity-60">(2022 - Present)</span>
					</p>
				</div>

				<div class="flex flex-col gap-2 w-64 shrink-0">
					<div
						class="aspect-square bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-xl flex-1 h-64 flex justify-center items-center"
					>
						<span>NA</span>
					</div>
					<p class="text-sm opacity-40">
						<a href="https://diagram.com">Tools</a>
						<span class="opacity-60">(2021 - 2023)</span>
					</p>
				</div>
			</div>
		</li>
	</ul> -->
		<div class="h-16" />
	</div>
</div>
