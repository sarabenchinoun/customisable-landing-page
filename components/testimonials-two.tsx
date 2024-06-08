import { Container } from "@/components/container";
import { testimonialsSection } from "@/lib/config";
import { Text } from "./text";

export function TestimonialsTwo() {
	return (
		<Container
			id="testimonials"
			className="relative isolate overflow-hidden bg-white py-24 sm:py-32"
		>
			<div className="-z-10 absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),white)] opacity-20" />
			<div className="-z-10 absolute inset-y-0 right-1/2 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-primary-200 shadow-xl ring-1 ring-primary-50 lg:mr-0 sm:mr-28 xl:mr-16 xl:origin-center" />
			<div className="mx-auto max-w-2xl lg:max-w-4xl">
				<figure className="mt-10">
					<blockquote>
						<Text
							align="center"
							weight="medium"
							highContrast
							size="5"
							lineHeight="loose"
							className="sm:text-2xl"
						>
							“{testimonialsSection.testimonials[0][0].content}”
						</Text>
					</blockquote>
					<figcaption className="mt-10">
						<div className="mt-4 flex items-center justify-center space-x-3 text-base">
							<Text highContrast weight="medium">
								{testimonialsSection.testimonials[0][0].author.name}
							</Text>
							<svg
								viewBox="0 0 2 2"
								width={3}
								height={3}
								aria-hidden="true"
								className="fill-gray-900"
							>
								<circle cx={1} cy={1} r={1} />
							</svg>
							<Text lowContrast>
								{testimonialsSection.testimonials[0][0].author.role}
							</Text>
						</div>
					</figcaption>
				</figure>
			</div>
		</Container>
	);
}
