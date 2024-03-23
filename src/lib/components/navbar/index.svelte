<script>
	import { page } from '$app/stores';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Twitter, Dribbble, Instagram, Link, Github, EllipsisVertical } from 'lucide-svelte';
	import ThemeSwitch from '../themeSwitch.svelte';
	import { cn } from '$lib/utils';

	let y = 0;
	$: isScrolling = y > 0;

	const links = {
		twitter: 'https://twitter.com/sevenreup4ill',
		github: 'https://github.com/sevenreup',
		instagram: 'https://twitter.com/sevenreup4ill',
		dribbble: 'https://dribbble.com/sevenreup4ill'
	};
</script>

<nav class="fixed w-full h-16 flex items-center z-50">
	<div class="flex flex-row justify-between w-full m-4 items-center">
		<a href="/"
			class={cn(
				'flex flex-row justify-center items-center p-2 rounded-full gap-2',
				isScrolling ? 'navbg-item' : ''
			)}
		>
			<img src="/logo.png" alt="logo" class="h-6 md:h-8" />
			<div class="hidden md:block font-bold">Seven</div>
			</a>
		<div class="navbg-item p-3 rounded-3xl">
			<a href="/" class="header-link" class:active={$page.url.pathname === '/'}>Work</a>
			<a href="/resume" class="header-link" class:active={$page.url.pathname.startsWith('/resume')}
				>Resume</a
			>
			<a href="/blog" class="header-link" class:active={$page.url.pathname.startsWith('/blog')}
				>Blog</a
			>
		</div>
		<div class="flex items-center gap-2 md:gap-4">
			<ThemeSwitch  className="hidden md:flex"/>
			<div class="hidden md:flex gap-2">
				<a
					href={links.github}
					class={cn('link-icon', isScrolling ? 'navbg-item' : '')}
					target="_blank"><Github /></a
				>
				<a
					href={links.twitter}
					class={cn('link-icon', isScrolling ? 'navbg-item' : '')}
					target="_blank"><Twitter /></a
				>
				<a
					href={links.dribbble}
					class={cn('link-icon', isScrolling ? 'navbg-item' : '')}
					target="_blank"><Dribbble /></a
				>
				<a
					href={links.instagram}
					class={cn('link-icon', isScrolling ? 'navbg-item' : '')}
					target="_blank"><Instagram /></a
				>
			</div>
			<div class="md:hidden">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger
						class="h-9 w-9 flex justify-center items-center bg-base-300/75 backdrop-blur p-2 rounded-full"
					>
						<EllipsisVertical />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="bg-base-300 border-0 mt-4">
						<DropdownMenu.Group>
							<DropdownMenu.Item>
								<ThemeSwitch className="flex gap-2" hasTitle/>
							</DropdownMenu.Item>
							<hr class="my-2"/>
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

<svelte:window bind:scrollY={y} />

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

	.navbg-item {
		@apply bg-base-300/75 backdrop-blur;
	}
</style>
