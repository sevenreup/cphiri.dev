<script lang="ts">
	import { onMount } from 'svelte';
	import { reverseThemeMap, themeMap, themes } from '$lib/themes';

	let currentTheme = '';
	export let className = '';
	export let hasTitle = false;

	onMount(() => {
		if (typeof window !== 'undefined') {
			const theme = window.localStorage.getItem('theme');
			if (theme && themes.includes(theme)) {
				document.documentElement.setAttribute('data-theme', theme);
				currentTheme = reverseThemeMap[theme] ?? 'dark';
			}
		}
	});

	function setTheme(theme: string) {
		if (themes.includes(theme)) {
			const one_year = 60 * 60 * 24 * 365;
			window.localStorage.setItem('theme', theme);
			document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Strict;`;
			document.documentElement.setAttribute('data-theme', theme);
			currentTheme = reverseThemeMap[theme] ?? 'dark';
		}
	}

	function toggleTheme() {
		if (currentTheme == 'light') {
			setTheme(themeMap['dark']);
		} else {
			setTheme(themeMap['light']);
		}
	}
</script>

<button
	aria-label="switch theme"
	on:click={toggleTheme}
	class="switcher text-base-content {hasTitle
		? 'gap-4'
		: 'relative h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-base-100 before:bg-base-300/75 before:bg-gradient-to-b before:transition-transform before:duration-300'} hover:before:scale-105 active:duration-75 active:before:scale-95 lg:flex backdrop-blur {className}"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		class="transistion duration-300 group-hover:rotate-180 {hasTitle
			? 'h-6 w-6'
			: ' h-5 w-5 m-auto relative'}"
		viewBox="0 0 256 256"
	>
		{#if currentTheme == 'light'}
			<path
				d="M116,32V16a12,12,0,0,1,24,0V32a12,12,0,0,1-24,0Zm80,96a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM44,128a12,12,0,0,0-12-12H16a12,12,0,0,0,0,24H32A12,12,0,0,0,44,128Zm84,84a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V224A12,12,0,0,0,128,212Zm112-96H224a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"
			/>
		{:else}
			<path
				d="M244,96a12,12,0,0,1-12,12H220v12a12,12,0,0,1-24,0V108H184a12,12,0,0,1,0-24h12V72a12,12,0,0,1,24,0V84h12A12,12,0,0,1,244,96ZM144,60h4v4a12,12,0,0,0,24,0V60h4a12,12,0,0,0,0-24h-4V32a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24Zm75.81,90.38A12,12,0,0,1,222,162.3,100,100,0,1,1,93.7,34a12,12,0,0,1,15.89,13.6A85.12,85.12,0,0,0,108,64a84.09,84.09,0,0,0,84,84,85.22,85.22,0,0,0,16.37-1.59A12,12,0,0,1,219.81,150.38ZM190,172A108.13,108.13,0,0,1,84,66,76,76,0,1,0,190,172Z"
			/>
		{/if}
	</svg>
	{hasTitle ? 'Switch Theme' : ''}
</button>
