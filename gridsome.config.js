module.exports = {
	siteName: 'Parker Venture Partners LLC.',
	siteUrl: 'https://www.gridsome.org',
	siteDescription: 'The professional publishing platform',
	titleTemplate: `%s - Home`,

	plugins: [
		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: 'UA-XXXXXXXXX-X'
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/*.md',
				typeName: 'Post',
				route: '/:slug',
				refs: {
					author: 'Author',
					tags: {
						typeName: 'Tag',
						route: '/tag/:title',
						create: true
					}
				}
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				// TODO Use yaml file as data source
				path: 'data/author/*.md',
				typeName: 'Author',
				route: '/author/:id'
			}
		}
	]
}
