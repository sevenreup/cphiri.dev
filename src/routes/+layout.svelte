<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar/index.svelte';
	import { Config } from '$lib/config';
	import { personalSchema, serializeSchema } from '$lib/seo/ld';
	import { page } from '$app/stores';
	import { getPageSeo } from '$lib/seo/meta';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	const seo = $derived(getPageSeo($page.url.pathname, $page.data.meta, $page.status));
</script>

<Navbar />

<div class="h-16"></div>
{@render children?.()}
<div class="h-20"></div>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	{#if seo.noindex}
		<meta name="robots" content="noindex, follow" />
	{:else}
		<link rel="canonical" href={seo.canonical} />
	{/if}
	<meta property="og:site_name" content={Config.title} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:type" content={seo.type} />
	<meta property="og:image" content={seo.image} />
	<meta
		property="og:image:alt"
		content="Christopher Phiri — software developer, designer, and illustrator"
	/>
	<meta property="og:url" content={seo.canonical} />
	<meta property="og:description" content={seo.description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />
	{@html serializeSchema(personalSchema)}
</svelte:head>
