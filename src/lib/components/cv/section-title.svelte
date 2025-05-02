<script lang="ts">
	export let title: string;
	export let subTitle: string | null = null;
</script>

<div class="mb-8">
	<h3 class="text-2xl font-medium mb-2">{title}</h3>
	{#if subTitle}
		<div class="text-lg font-medium text-muted-foreground">{subTitle}</div>
	{/if}
</div>
