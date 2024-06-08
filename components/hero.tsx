import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { hero, iconTheme } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "./heading";
import { Icons } from "./icons";
import { Text } from "./text";

export function HeroOne() {
	return (
		<Container id="hero" className="pt-20 pb-16 text-center lg:pt-32 lg:pb-24">
			<Heading as="h1" weight="medium" size="10" className="mx-auto max-w-4xl">
				{hero.title.preHighlighted}{" "}
				<span className="relative whitespace-nowrap text-primary-600">
					<svg
						aria-hidden="true"
						viewBox="0 0 418 42"
						className="absolute top-2/3 left-0 h-[0.58em] w-full fill-primary-300 opacity-70"
						preserveAspectRatio="none"
					>
						<path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
					</svg>
					<span className="relative">{hero.title.highlighted}</span>
				</span>{" "}
				{hero.title.postHighlighted}
			</Heading>
			<Text
				size="4"
				align="center"
				className="mx-auto mt-6 max-w-2xl tracking-tight"
			>
				{hero.description}
			</Text>
			<div className="mt-10 flex justify-center gap-x-6">
				<Button href={hero.primaryButton.href} target="_blank">
					{hero.primaryButton.label}
				</Button>
				{hero.secondaryButton.visible && (
					<Button
						href={hero.secondaryButton.href}
						target="_blank"
						variant="outline"
					>
						{hero.secondaryButton.icon && (
							<hero.secondaryButton.icon
								strokeWidth={iconTheme.strokeWidth}
								className="h-3 w-3 flex-none fill-primary-600 text-primary-600 group-active:fill-current"
							/>
						)}
						<span className="ml-3">{hero.secondaryButton.label}</span>
					</Button>
				)}
			</div>
		</Container>
	);
}

export function HeroTwo() {
	return (
		<div
			id="hero"
			className="relative isolate overflow-hidden bg-gradient-to-b from-transparent via-primary-50 to-transparent"
		>
			<div
				className="-z-10 -mr-96 sm:-mr-80 lg:-mr-96 absolute inset-y-0 right-1/2 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-primary-200 shadow-xl ring-1 ring-primary-50"
				aria-hidden="true"
			/>
			<Container className="py-24 lg:py-32 md:py-32">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 lg:gap-x-16 xl:gap-x-8 lg:gap-y-6">
					<Heading
						size="9"
						align="left"
						weight="medium"
						theme="gray"
						className="max-w-2xl lg:col-span-2 xl:col-auto"
					>
						{hero.title.preHighlighted}{" "}
						<span className="relative whitespace-nowrap text-primary-600">
							<svg
								aria-hidden="true"
								viewBox="0 0 418 42"
								className="absolute top-2/3 left-0 h-[0.58em] w-full fill-primary-300 opacity-70"
								preserveAspectRatio="none"
							>
								<path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
							</svg>
							<span className="relative">{hero.title.highlighted}</span>
						</span>{" "}
						{hero.title.postHighlighted}
					</Heading>
					<div className="mt-6 max-w-xl xl:col-end-1 xl:row-start-1 lg:mt-0">
						<Text size="4" lowContrast lineHeight="loose">
							{hero.description}
						</Text>
						<div className="mt-10 flex items-center gap-x-6">
							<Button
								color="primary"
								href={hero.primaryButton.href}
								target="_blank"
							>
								{hero.primaryButton.label}
							</Button>
							{hero.secondaryButton.visible && (
								<Link
									href={hero.secondaryButton.href}
									target="_blank"
									className="flex items-center gap-1 font-semibold text-gray-900 text-sm leading-6"
								>
									{hero.secondaryButton.label}
									<Icons.ArrowRight className="h-3 w-3" strokeWidth={3} />
								</Link>
							)}
						</div>
					</div>
					<Image
						width={1280}
						height={960}
						src={hero.image}
						alt="Hero Image"
						priority
						placeholder="blur"
						className="mt-10 aspect-[6/5] w-full max-w-lg rounded-card-md object-cover xl:row-span-2 xl:row-end-2 lg:mt-0 sm:mt-16 xl:mt-36 lg:max-w-none"
					/>
				</div>
			</Container>
			<div className="-z-10 absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white sm:h-32" />
		</div>
	);
}
