import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: [
			'https://www.ppfi.art/sitemap.xml',
			'https://www.ppfi.art/sitemap-0.xml'
		]
	}
}