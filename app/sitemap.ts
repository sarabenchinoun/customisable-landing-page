import { projects } from "@/lib/config";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const url = "https://honeycuplabs.com";
	return [
		{ url: url, lastModified: new Date() },
		{ url: `${url}/about`, lastModified: new Date() },
		{ url: `${url}/process`, lastModified: new Date() },
		{ url: `${url}/contact`, lastModified: new Date() },
		{ url: `${url}/work`, lastModified: new Date() },
		...projects.map((project) => ({
			url: `${url}/work/${project}`,
			lastModified: new Date(),
		})),
	];
}
