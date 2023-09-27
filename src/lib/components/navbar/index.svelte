<script>
	import { page } from '$app/stores';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Twitter, Dribbble, Instagram, Link, Github } from 'lucide-svelte';
	import ThemeSwitch from '../themeSwitch.svelte';

	const links = {
		twitter: 'https://twitter.com/sevenreup4ill',
		github: 'https://github.com/sevenreup',
		instagram: 'https://twitter.com/sevenreup4ill',
		dribbble: 'https://dribbble.com/sevenreup4ill'
	};
</script>

<nav class="fixed w-full h-16 flex items-center">
	<div class="flex flex-row justify-between w-full m-4 items-center">
		<div class="hidden md:block font-bold">Seven</div>
		<div class="md:hidden font-bold">7</div>
		<div class="bg-base-300 p-3 rounded-3xl">
			<a href="/" class="header-link" class:active={$page.url.pathname === '/'}>Work</a>
			<a href="/resume" class="header-link" class:active={$page.url.pathname === '/resume'}
				>Resume</a
			>
		</div>
		<div class="flex items-center gap-4">
			<ThemeSwitch isMobile={false} />
			<ThemeSwitch isMobile={true} />
			<div class="hidden md:flex gap-2">
				<a href={links.github} class="link-icon" target="_blank"><Github /></a>
				<a href={links.twitter} class="link-icon" target="_blank"><Twitter /></a>
				<a href={links.dribbble} class="link-icon" target="_blank"><Dribbble /></a>
				<a href={links.instagram} class="link-icon" target="_blank"><Instagram /></a>
			</div>
			<div class="md:hidden">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class="h-9 w-9 flex justify-center items-center">
						<Link />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="bg-base-300 border-0">
						<DropdownMenu.Group>
							<DropdownMenu.Item>
								<a href={links.github} class="drop-item" target="_blank"><Github /> Github</a>
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<a href={links.twitter} class="drop-item" target="_blank"><Twitter /> Twitter</a>
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<a href={links.dribbble} class="drop-item" target="_blank"><Dribbble /> Dribble</a>
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<a href={links.instagram} class="drop-item" target="_blank"
									><Instagram /> Instagram</a
								>
							</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
	</div>
</nav>

<style lang="postcss">
	.link-icon {
		@apply flex h-min p-2 rounded-3xl gap-2 hover:bg-base-200 hover:text-base-content transition-all;
	}
	.drop-item {
		@apply flex gap-4;
	}

	.header-link {
		@apply p-2 rounded-3xl;
	}

	.active {
		@apply bg-base-100 text-base-content;
	}
</style>
