<header>
	<a href="/">Home</a>

	<nav>
		<ul>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		a {
			text-decoration: none;
			color: inherit;
		}

		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		a img {
			max-width: 5%;
			height: auto;
		}

		nav ul {
			margin: 0;
			list-style-type: none;
			display: flex;
			gap: 1rem;
		}
	}
</style>
