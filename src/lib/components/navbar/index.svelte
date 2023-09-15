<script>
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Twitter, Dribbble, Instagram } from 'lucide-svelte';

	const links = {
		twitter: '',
		instagram: '',
		dribbble: ''
	};
</script>

<nav class="fixed w-full h-16 flex items-center">
	<div class="flex flex-row justify-between w-full m-4 items-center">
		<div>Chris</div>
		<div class="bg-muted p-3 rounded-3xl">
			<a href="/" class="bg-background p-2 rounded-3xl">Stuff</a>
			<a href="/resume">Resume</a>
		</div>
		<div class="hidden md:flex gap-4">
			<a href={links.twitter} class="link-icon"><Twitter /> Twitter</a>
			<a href={links.dribbble} class="link-icon"><Dribbble /> Dribble</a>
			<a href={links.instagram} class="link-icon"><Instagram /> Instagram</a>
		</div>
		<div class="md:hidden">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>Socials</DropdownMenu.Trigger>
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
</nav>

<style lang="postcss">
	.link-icon {
		@apply flex h-min p-2 rounded-3xl gap-2 hover:bg-slate-600 transition-all;
	}
	.drop-item {
		@apply flex gap-4;
	}
</style>
