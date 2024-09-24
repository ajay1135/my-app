export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, createdDate, lastUpdatedDate, categories, author, estimatedReadingTimeInMins } = post.metadata;
	const content = post.default;
	
	return {
		content, 
		title, 
		createdDate, 
		lastUpdatedDate, 
		categories, 
		author, 
		estimatedReadingTimeInMins, 
	};
}
