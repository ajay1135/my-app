<script>
	export let data;
</script>

<h1>Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<div>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				<ul>
					<li>
						Date: {post.meta.date}
					</li>
					<li>
						Estimated Reading Time: {post.meta.estimatedReadingTimeMins} min
					</li>
					<li>
						Author: {post.meta.author}
					</li>
				</ul>
			</div>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul li {
		list-style-type: none;

		div {
			background-color: white;
			box-sizing: border-box;
			display: block;
			border-radius: .3em;
			padding: .5em;

			h2 a {
				text-decoration: none;
				color: black;

				&:hover {
					color: #FFA800;
				}
			}

			/* For some reason, I don't think I see the effects of this style when I add it. But it's here anyways. */
			ul li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: 1em;
			}
		}
	}
</style>
