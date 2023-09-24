<script>
	import { page } from '$app/stores';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Twitter, Dribbble, Instagram, Link } from 'lucide-svelte';
	import ThemeSwitch from '../themeSwitch.svelte';

	const links = {
		twitter: '',
		instagram: '',
		dribbble: ''
	};
</script>

<nav class="fixed w-full h-16 flex items-center">
	<div class="flex flex-row justify-between w-full m-4 items-center">
		<div class="hidden md:block">Seven</div>
		<div class="md:hidden">7</div>
		<div class="bg-muted p-3 rounded-3xl">
			<a href="/" class="header-link" class:active={$page.url.pathname === '/'}>Work</a>
			<a href="/resume" class="header-link" class:active={$page.url.pathname === '/resume'}
				>Resume</a
			>
		</div>
		<div class="flex items-center gap-4">
			<ThemeSwitch isMobile={false} />
			<ThemeSwitch isMobile={true} />
			<div class="hidden md:flex gap-4">
				<a href={links.twitter} class="link-icon"><Twitter /> Twitter</a>
				<a href={links.dribbble} class="link-icon"><Dribbble /> Dribble</a>
				<a href={links.instagram} class="link-icon"><Instagram /> Instagram</a>
			</div>
			<div class="md:hidden">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class="h-9 w-9 flex justify-center items-center">
						<Link />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content>
						<DropdownMenu.Group>
							<DropdownMenu.Item>
								<a href={links.twitter} class="drop-item"><Twitter /> Twitter</a>
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<a href={links.dribbble} class="drop-item"><Dribbble /> Dribble</a>
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								<a href={links.instagram} class="drop-item"><Instagram /> Instagram</a>
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
		@apply flex h-min p-2 rounded-3xl gap-2 hover:bg-slate-600 transition-all;
	}
	.drop-item {
		@apply flex gap-4;
	}

	.header-link {
		@apply p-2 rounded-3xl;
	}

	.active {
		@apply bg-[#3E3E3E] text-white;
	}
</style>
