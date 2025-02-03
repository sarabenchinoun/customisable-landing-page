import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/studio/",
		},
		// Replace this with your production URL
		sitemap: "https://sarabenchinoun.com/sitemap.xml",
	};
}
