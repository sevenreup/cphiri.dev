<script lang="ts">
	import { onMount } from 'svelte';
	import { themes } from '$lib/themes';

	export let isMobile: boolean = false;

	let currentTheme = '';

	onMount(() => {
		if (typeof window !== 'undefined') {
			const theme = window.localStorage.getItem('theme');
			if (theme && themes.includes(theme)) {
				document.documentElement.setAttribute('data-theme', theme);
				currentTheme = theme;
			}
		}
	});

	function setTheme(theme: string) {
		if (themes.includes(theme)) {
			const one_year = 60 * 60 * 24 * 365;
			window.localStorage.setItem('theme', theme);
			document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Strict;`;
			document.documentElement.setAttribute('data-theme', theme);
			currentTheme = theme;
		}
	}

	function toggleTheme() {
		if (currentTheme == 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}
</script>

<button
	aria-label="switch theme"
	on:click={toggleTheme}
	class="switcher group text-base-content {isMobile
		? 'lg:hidden'
		: 'hidden'} relative h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-base-100 before:bg-base-300 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 lg:flex"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		class="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400"
		viewBox="0 0 256 256"
	>
		{#if currentTheme == 'light'}
			<path
				fill-rule="evenodd"
				d="M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z"
			/>
		{:else}
			<path
				d="M154.73,201.06a82,82,0,0,1,0-146.12,6,6,0,0,0,0-10.69A93,93,0,0,0,112,34a94,94,0,0,0,0,188,93,93,0,0,0,42.73-10.25,6,6,0,0,0,0-10.69ZM112,210A82,82,0,1,1,138.81,50.47a94,94,0,0,0,0,155.06A81.4,81.4,0,0,1,112,210Zm138.38-87.51-27.61-11.91-2.4-31a6,6,0,0,0-10.61-3.36L190.37,99.67l-28.93-7.16a6,6,0,0,0-6.61,8.87L170.5,128l-15.67,26.62a6,6,0,0,0,6.61,8.87l28.93-7.16,19.39,23.49a6,6,0,0,0,10.61-3.36l2.4-31,27.61-11.91a6,6,0,0,0,0-11Zm-35.69,13.35a6,6,0,0,0-3.61,5l-1.53,19.83-12.33-14.94a6,6,0,0,0-4.63-2.18,5.92,5.92,0,0,0-1.44.18l-18.74,4.63L182.64,131a6,6,0,0,0,0-6.08l-10.23-17.37,18.74,4.63a6,6,0,0,0,6.07-2l12.33-14.94,1.53,19.83a6,6,0,0,0,3.61,5L232.86,128Z"
			/>
		{/if}
	</svg>
</button>
