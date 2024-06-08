import { appConfig } from "@/lib/config";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/studio/",
		},
		sitemap: `${appConfig.url}sitemap.xml`,
	};
}
