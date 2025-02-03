import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Replace this with your production URL
	const url = "https://sarabenchinoun.com";
	return [{ url: url, lastModified: new Date() }];
}
