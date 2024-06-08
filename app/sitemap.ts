import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const url = window.location.origin;
	return [{ url: url, lastModified: new Date() }];
}
