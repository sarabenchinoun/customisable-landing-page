import Link from "next/link";

import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { SlimLayout } from "@/components/slim-layout";

export default function NotFound() {
	return (
		<SlimLayout>
			<div className="flex">
				<Link href="/" aria-label="Home">
					<Logo className="h-10 w-auto" />
				</Link>
			</div>
			<p className="mt-20 font-medium text-gray-700 text-sm">404</p>
			<h1 className="mt-3 font-semibold text-gray-900 text-lg">
				Page not found
			</h1>
			<p className="mt-3 text-gray-700 text-sm">
				Sorry, we couldn’t find the page you’re looking for.
			</p>
			<Button href="/" className="mt-10">
				Go back home
			</Button>
		</SlimLayout>
	);
}
