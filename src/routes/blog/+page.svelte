<script>
	export let data;
</script>

<h1>Blog</h1>

<p>👋 Welcome! This is where you'll find things that I think are cool, or in general, just something that I want to share!</p>

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
						Estimated Reading Time: {post.meta.estimatedReadingTimeInMins} min
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
	ul {
		padding-left: 0;
	}
	ul li {
		list-style-type: none;

		div {
			border: 1px solid #F2F2F2;
			background-color: white;
			box-sizing: border-box;
			flex-direction: column;
			display: flex;
			border-radius: .3em;
			padding: 1.5em;
			margin-bottom: 2em;

			h2 {
				margin-top: 0;

				a {
					text-decoration: none;
					color: inherit;
				}
			}
		}
	}
</style>
