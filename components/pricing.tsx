import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { pricingSection } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import { Icons } from "./icons";
import { Text } from "./text";

function SwirlyDoodle(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 281 40"
			preserveAspectRatio="none"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
			/>
		</svg>
	);
}

function Plan({
	name,
	price,
	description,
	href,
	features,
	featured = false,
}: {
	name: string;
	price: string;
	description: string;
	href: string;
	features: Array<string>;
	featured?: boolean;
}) {
	return (
		<section
			className={cn(
				"flex flex-col rounded-card-md px-6 sm:px-8",
				featured ? "order-first bg-primary-600 py-8 lg:order-none" : "lg:py-8",
			)}
		>
			<Heading align="left" as="h3" size="4" theme="white" className="mt-5">
				{name}
			</Heading>
			<Text className={cn("mt-2", featured ? "text-white" : "!text-gray-400")}>
				{description}
			</Text>
			<Text
				size="9"
				theme="white"
				weight="light"
				className="order-first font-heading tracking-tight"
			>
				{price}
			</Text>
			<ul
				role="list"
				className={cn(
					"order-last mt-10 flex flex-col gap-y-3 text-sm",
					featured ? "text-white" : "text-gray-200",
				)}
			>
				{features.map((feature) => (
					<li key={feature} className="flex">
						<Icons.Check
							className={featured ? "text-white" : "text-gray-400"}
						/>
						<span className="ml-4">{feature}</span>
					</li>
				))}
			</ul>
			<Button
				href={href}
				variant={featured ? "solid" : "outline"}
				color="white"
				className="mt-8"
				aria-label={`Get started with the ${name} plan for ${price}`}
				target="_blank"
			>
				Get started
			</Button>
		</section>
	);
}

export function Pricing() {
	return (
		<section
			id="pricing"
			aria-label="Pricing"
			className="bg-gray-900 py-20 sm:py-32"
		>
			<Container>
				<div className="md:text-center">
					<Heading as="h2" theme="white">
						{pricingSection.title.preHighlighted}
						<span className="relative whitespace-nowrap">
							<SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-primary-400" />
							<span className="relative">
								{pricingSection.title.highlighted}
							</span>
						</span>
						{pricingSection.title.postHighlighted}
					</Heading>
					<Text align="center" size="4" className="!text-gray-400 mt-4">
						{pricingSection.description}
					</Text>
				</div>
				<div className="-mx-4 lg:-mx-8 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto xl:mx-0 lg:max-w-none lg:grid-cols-3 xl:gap-x-8">
					{pricingSection.plans.map((plan, index) => (
						<Plan key={`${plan.name}-${index}`} {...plan} />
					))}
				</div>
			</Container>
		</section>
	);
}

export function PricingTwo() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<Container>
				<div className="mx-auto max-w-2xl sm:text-center">
					<Heading as="h2">
						{pricingSection.title.preHighlighted}{" "}
						<span className="relative whitespace-nowrap">
							<SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-primary-400" />
							<span className="relative">
								{pricingSection.title.highlighted}
							</span>
						</span>
						{pricingSection.title.postHighlighted}
					</Heading>
					<Text align="center" size="4" lowContrast className="mt-6">
						{pricingSection.description}
					</Text>
				</div>
				<div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 sm:mt-20 lg:flex lg:max-w-none">
					<div className="p-8 lg:flex-auto sm:p-10">
						<Heading align="left" as="h3" size="6">
							{pricingSection.plan.name}
						</Heading>
						<Text lowContrast className="mt-6">
							{pricingSection.plan.description}
						</Text>
						<div className="mt-10 flex items-center gap-x-4">
							<Heading
								as="h4"
								size="5"
								theme="primary"
								weight="light"
								className="flex-none"
							>
								What’s included
							</Heading>
							<div className="h-px flex-auto bg-gray-100" />
						</div>
						<ul className="mt-8 grid grid-cols-1 gap-4 text-gray-600 text-sm leading-6 sm:grid-cols-2 sm:gap-6">
							{pricingSection.plan.includedFeatures.map((feature) => (
								<li key={feature} className="flex gap-x-3">
									<Icons.Check
										className="h-6 w-5 flex-none text-primary-600"
										aria-hidden="true"
									/>
									{feature}
								</li>
							))}
						</ul>
					</div>
					<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
						<div className="h-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-gray-200 ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16">
							<div className="mx-auto max-w-xs px-8">
								<Text lowContrast weight="medium">
									{pricingSection.plan.catchLine}
								</Text>
								<p className="mt-6 flex items-baseline justify-center gap-x-2">
									<Text as="span" highContrast weight="semibold" size="5">
										{pricingSection.plan.price}
									</Text>
									<Text as="span" weight="medium" size="2" lowContrast>
										GBP{" "}
									</Text>
								</p>
								<Button href={pricingSection.plan.href} className="mt-6">
									Get started
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
