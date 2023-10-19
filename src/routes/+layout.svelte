<script>
	import '../app.postcss';
	import Navbar from '$lib/components/navbar/index.svelte';
	import { Config } from '$lib/config';
</script>

<Navbar />

<slot />

<svelte:head>
	<meta property="og:title" content={Config.title} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://www.cphiri.dev/og.png" />
	<meta property="og:url" content="https://www.cphiri.dev" />
	<meta
		property="og:description"
		content="Learn more about Christopher Phiri work experience, education, connections & more."
	/>
	<meta
		name="description"
		content="Learn more about Christopher Phiri work experience, education, connections & more."
	/>
</svelte:head>
