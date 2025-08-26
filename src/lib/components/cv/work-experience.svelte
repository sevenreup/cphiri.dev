<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		name: string;
		position: string;
		meta: string;
		body: string;
		children?: import('svelte').Snippet;
	}

	let { name, position, meta, body, children }: Props = $props();
</script>

<div class="flex items-start flex-col">
	<div class="flex flex-col md:flex-row gap-4 w-full justify-between">
		<div class="flex flex-col gap-2 flex-1">
			<div
				class={cn(
					'flex-1 flex justify-center items-center gap-2',
					'w-full h-52 lg:w-64 lg:h-64',
					'aspect-square bg-base-300 text-base-content border border-base-100 rounded-xl'
				)}
			>
				{@render children?.()}
			</div>
			<div class="text-xl font-bold whitespace-pre-line">{name}</div>
		</div>
		<div class="content-trailing null flex-1">
			<div class="flex flex-col gap-6">
				<div class="experience-title-date">
					<div class="text-xl">{position}</div>
					<div class="text-muted-foreground">{meta}</div>
				</div>
				<div class="text-projectpage-body info">
					{body}
				</div>
			</div>
		</div>
	</div>
</div>
