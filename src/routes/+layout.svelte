<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar/index.svelte';
	import { Config } from '$lib/config';
	import { personalSchema, serializeSchema } from '$lib/seo/ld';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Navbar />

<div class="h-16"></div>
{@render children?.()}
<div class="h-20"></div>

<svelte:head>
	<meta property="og:title" content={Config.title} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://www.cphiri.dev/og.png" />
	<meta property="og:url" content="https://www.cphiri.dev" />
	<meta property="og:description" content={Config.description} />
	<meta name="description" content={Config.description} />
	{@html serializeSchema(personalSchema)}
</svelte:head>
