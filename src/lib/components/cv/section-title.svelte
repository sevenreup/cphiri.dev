<script lang="ts">
	interface Props {
		title: string;
		subTitle?: string | null;
	}

	let { title, subTitle = null }: Props = $props();
</script>

<div class="mb-8">
	<h3 class="text-2xl font-medium mb-2">{title}</h3>
	{#if subTitle}
		<div class="text-lg font-medium text-muted-foreground">{subTitle}</div>
	{/if}
</div>
