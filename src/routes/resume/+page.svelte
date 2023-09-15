<script>
	let data = [...Array(100)];
</script>

<div>
	<div class="h-16" />
	{#each data as item}
		<div>Fake Resume {item}</div>
	{/each}
</div>
