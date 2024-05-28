import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ctaSection } from "@/lib/config";
import { TopBackground } from "./background";

export function CTA() {
	return (
		<section id="cta" className="relative overflow-hidden bg-primary-600 py-32">
			<TopBackground light center />
			<Container className="relative">
				<div className="mx-auto max-w-lg text-center">
					<h2 className="font-heading text-3xl text-white tracking-tight sm:text-4xl">
						{ctaSection.title}
					</h2>
					<p className="mt-4 text-lg text-white tracking-tight">
						{ctaSection.description}
					</p>
					<Button
						href={ctaSection.ctaAction.href}
						color="white"
						className="mt-10"
						target="_blank"
					>
						{ctaSection.ctaAction.label}
					</Button>
				</div>
			</Container>
		</section>
	);
}
