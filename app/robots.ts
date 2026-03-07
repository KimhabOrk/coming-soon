import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
			},
			{
				userAgent: '# Algolia-Crawler-Verif',
				allow: '05ACC8FD982A720C',
			},
		],
		sitemap: [
			'https://www.kimhabork.com/sitemap.xml'
		]
	}
}