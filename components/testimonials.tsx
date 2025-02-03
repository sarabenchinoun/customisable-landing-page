import { Container } from "@/components/container";
import { testimonialsSection } from "@/lib/config";
import { Heading } from "./heading";
import { Text } from "./text";

function QuoteIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg aria-hidden="true" width={105} height={78} {...props}>
			<path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
		</svg>
	);
}

export function Testimonials() {
	return (
		<section
			id="testimonials"
			aria-label="What our customers are saying"
			className="bg-gray-50 py-20 sm:py-32"
		>
			<Container>
				<div className="mx-auto max-w-2xl md:text-center">
					<Heading as="h2">{testimonialsSection.title}</Heading>
					<Text size="4" align="center" className="mt-4">
						{testimonialsSection.description}
					</Text>
				</div>
				<ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
					{testimonialsSection.testimonials.map((column, columnIndex) => (
						<li key={`${columnIndex * 1}`}>
							<ul className="flex flex-col gap-y-6 sm:gap-y-8">
								{column.map((testimonial, testimonialIndex) => (
									<li key={`${testimonialIndex * 1}`}>
										<figure className="relative rounded-card-md bg-white p-6 shadow-gray-900/10 shadow-xl">
											<QuoteIcon className="absolute top-6 left-6 fill-gray-100" />
											<blockquote className="relative">
												<Text size="4" highContrast>
													{testimonial.content}
												</Text>
											</blockquote>
											<figcaption className="relative mt-6 flex items-center justify-between border-gray-100 border-t pt-6">
												<div>
													<div className="font-heading text-base text-gray-900">
														{testimonial.author.name}
													</div>
													<div className="mt-1 text-gray-500 text-sm">
														{testimonial.author.role}
													</div>
												</div>
												<div className="overflow-hidden rounded-button bg-gray-50">
													<div className="flex h-14 w-14 items-center justify-center object-cover font-medium text-2xl text-gray-900">
														{testimonial.author.name
															.split(" ")
															.map((name) => name[0])
															.join("")}
													</div>
												</div>
											</figcaption>
										</figure>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}

export function TestimonialsTwo() {
	return (
		<Container
			id="testimonials"
			className="relative isolate overflow-hidden bg-white py-24 sm:py-32"
		>
			<div className="-z-10 absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,var(--color-primary-100),white)] opacity-20" />
			<div className="-z-10 absolute inset-y-0 right-1/2 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-primary-200 shadow-xl ring-1 ring-primary-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
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
