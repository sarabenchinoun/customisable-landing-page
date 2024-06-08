"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image, { type ImageProps } from "next/image";

import { Container } from "@/components/container";
import { detailedFeaturesSection, iconTheme } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import type { LucideIcon } from "./icons";
import { Text } from "./text";

export interface Feature {
	name: React.ReactNode;
	summary: string;
	description: string;
	image: ImageProps["src"];
	icon: LucideIcon;
}

function Feature({
	feature,
	isActive,
	className,
	...props
}: React.ComponentPropsWithoutRef<"div"> & {
	feature: Feature;
	isActive: boolean;
}) {
	return (
		<div
			className={cn(className, !isActive && "opacity-75 hover:opacity-100")}
			{...props}
		>
			<div
				className={cn(
					"flex h-9 w-9 items-center justify-center rounded-icon p-2",
					isActive ? "bg-primary-600" : "bg-gray-300",
				)}
			>
				<feature.icon
					aria-hidden="true"
					strokeWidth={iconTheme.strokeWidth}
					className={cn("h-8 w-8", isActive ? "text-white" : "text-gray-900")}
				/>
			</div>
			<Heading
				as="h3"
				weight="medium"
				size="3"
				align="left"
				className={cn("mt-6", isActive ? "text-primary-600" : "text-gray-600")}
			>
				{feature.name}
			</Heading>
			<Text size="5" highContrast className="mt-2 font-heading">
				{feature.summary}
			</Text>
			<Text lowContrast size="2" className="mt-4">
				{feature.description}
			</Text>
		</div>
	);
}

function FeaturesMobile() {
	return (
		<div className="-mx-4 sm:-mx-6 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 lg:hidden sm:px-6">
			{detailedFeaturesSection.features.map((feature) => (
				<div key={feature.summary}>
					<Feature feature={feature} className="mx-auto max-w-2xl" isActive />
					<div className="relative mt-10 pb-10">
						<div className="-inset-x-4 sm:-inset-x-6 absolute top-8 bottom-0 bg-gray-200" />
						<div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-card-md bg-white shadow-lg ring-1 ring-gray-200">
							<Image
								className="w-full"
								src={feature.image}
								alt={feature.name}
								placeholder="blur"
								sizes="52.75rem"
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

function FeaturesDesktop() {
	return (
		<TabGroup className="hidden lg:mt-20 lg:block">
			{({ selectedIndex }) => (
				<>
					<TabList className="grid grid-cols-3 gap-x-8">
						{detailedFeaturesSection.features.map((feature, featureIndex) => (
							<Feature
								key={feature.summary}
								feature={{
									...feature,
									name: (
										<Tab className="ui-not-focus-visible:outline-none">
											<span className="absolute inset-0" />
											{feature.name}
										</Tab>
									),
								}}
								isActive={featureIndex === selectedIndex}
								className="relative"
							/>
						))}
					</TabList>
					<TabPanels className="relative mt-20 overflow-hidden rounded-card-lg bg-gray-200 px-14 py-16 xl:px-16">
						<div className="-mx-5 flex">
							{detailedFeaturesSection.features.map((feature, featureIndex) => (
								<TabPanel
									static
									key={feature.summary}
									className={cn(
										"px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none",
										featureIndex !== selectedIndex && "opacity-60",
									)}
									style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
									aria-hidden={featureIndex !== selectedIndex}
								>
									<div className="w-[52.75rem] overflow-hidden rounded-card-md bg-white shadow-lg ring-1 ring-gray-200">
										<Image
											className="w-full"
											src={feature.image}
											alt={feature.name}
											placeholder="blur"
											sizes="52.75rem"
										/>
									</div>
								</TabPanel>
							))}
						</div>
						<div className="pointer-events-none absolute inset-0 rounded-card-lg ring-1 ring-gray-200 ring-inset" />
					</TabPanels>
				</>
			)}
		</TabGroup>
	);
}

export function SecondaryFeatures() {
	return (
		<section
			id="secondary-features"
			aria-label="Features for simplifying everyday business tasks"
			className="pt-20 pb-14 sm:pt-32 lg:pb-32 sm:pb-20"
		>
			<Container>
				<div className="mx-auto max-w-2xl">
					<Heading
						as="h2"
						align="left"
						size="8"
						theme="gray"
						letterSpacing="tight"
						className="md:text-center"
					>
						{detailedFeaturesSection.title}
					</Heading>
					<Text size="4" className="mt-4 md:text-center">
						{detailedFeaturesSection.description}
					</Text>
				</div>
				<FeaturesMobile />
				<FeaturesDesktop />
			</Container>
		</section>
	);
}
