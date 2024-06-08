import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const url = window.location.origin;
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${url}/sitemap.xml`,
	};
}
