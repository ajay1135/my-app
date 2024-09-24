<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.createdDate}</p>
	<p>Last Updated: {data.lastUpdatedDate}</p>
	<p>Author: {data.author}</p>
	<p>Estimated Reading Time: {data.estimatedReadingTimeInMins} min</p>
	<svelte:component this={data.content} />
</article>

{#if data.categories.length}
	<aside>
		<ul>
			{#each data.categories as category}
				<li>
					<div>
						<a href="/blog/category/{category}">
							{category}
						</a>
					</div>
				</li>
			{/each}
		</ul>
	</aside>
{/if}

<style lang="scss">
	article {
		p {
			margin: 0;
			color: #A6A6A6;
		}

	}

	aside ul {
		padding-left: 0;
		flex-direction: row;
		display: flex;
		
		li {
			list-style-type: none;
			
			div {
				border: 1px solid #F2F2F2;
				background-color: #E6E6E6;
				box-sizing: border-box;
				flex-direction: column;
				display: flex;
				border-radius: .5em;
				padding: .5em;
				margin-right: 1em;

				a {
					color: inherit;
					text-decoration: none;
				}
			}
		}
	}

</style>
