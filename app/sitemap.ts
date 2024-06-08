import { appConfig } from "@/lib/config";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [{ url: appConfig.url, lastModified: new Date() }];
}
