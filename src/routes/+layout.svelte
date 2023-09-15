<script>
	import '../app.postcss';
	import Navbar from '$lib/components/navbar/index.svelte';
</script>

<Navbar />

<main class="container">
	<slot />
</main>
