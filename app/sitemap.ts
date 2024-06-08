import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const url = "https://honeycuplabs.com";
	return [{ url: url, lastModified: new Date() }];
}
