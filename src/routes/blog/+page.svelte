<script lang="ts">
	import type { BlogData } from './+page';

	export let data: BlogData;

	const { posts } = data;
</script>

<div>
	{#each posts as post}
		<li>
			<h2>
				<a href={post.url}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</div>
