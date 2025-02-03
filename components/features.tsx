"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

import { Container } from "@/components/container";
import {
	detailedFeaturesSection,
	featuresSection,
	iconTheme,
} from "@/lib/config";
import { cn } from "@/lib/utils";
import { BottomBackground } from "./background";
import { Heading } from "./heading";
import { Icons, type LucideIcon } from "./icons";
import { Text } from "./text";

export function FeaturesOne() {
	const [tabOrientation, setTabOrientation] = useState<
		"horizontal" | "vertical"
	>("horizontal");

	useEffect(() => {
		const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

		function onMediaQueryChange({ matches }: { matches: boolean }) {
			setTabOrientation(matches ? "vertical" : "horizontal");
		}

		onMediaQueryChange(lgMediaQuery);
		lgMediaQuery.addEventListener("change", onMediaQueryChange);

		return () => {
			lgMediaQuery.removeEventListener("change", onMediaQueryChange);
		};
	}, []);
	const blurDataURL =
		"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAMYAAAAAAIAAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwZIS0jJUBHSTA8RDVANj4mYmhwJjAnKVwtMzQ1NkFDRTlOT0xEUj9EUf/bAEMBFRcXHhoeNyEhNUxzZTdLd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d//AABEIAAEAAQMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlgAH/9k=";

	return (
		<section
			id="features"
			aria-label="Features for running your books"
			className="relative overflow-hidden bg-primary-700 pt-20 pb-28 sm:py-32"
		>
			<Container className="relative z-20">
				<div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
					<Heading as="h2" theme="white">
						{featuresSection.title}
					</Heading>
					<Text size="4" theme="primary" className="mt-6" align="center">
						{featuresSection.description}
					</Text>
				</div>
				<TabGroup
					className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
					vertical={tabOrientation === "vertical"}
				>
					{({ selectedIndex }) => (
						<>
							<div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
								<TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
									{featuresSection.features.map((feature, featureIndex) => (
										<div
											key={feature.title}
											className={cn(
												"group relative rounded-button px-4 py-1 lg:rounded-r-none lg:rounded-l-button lg:p-6",
												selectedIndex === featureIndex
													? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset"
													: "hover:bg-white/10 lg:hover:bg-white/5",
											)}
										>
											<Heading
												as="h3"
												size="4"
												align="left"
												className="text-nowrap!"
											>
												<Tab
													className={cn(
														"ui-not-focus-visible:outline-hidden",
														selectedIndex === featureIndex
															? "text-primary-600 lg:text-white"
															: "text-primary-100 hover:text-white lg:text-white",
													)}
												>
													<span className="absolute inset-0 rounded-button lg:rounded-r-none lg:rounded-l-button" />
													{feature.title}
												</Tab>
											</Heading>
											<Text
												className={cn(
													"mt-2 hidden lg:block",
													selectedIndex === featureIndex
														? "text-white"
														: "text-primary-100 group-hover:text-white",
												)}
											>
												{feature.description}
											</Text>
										</div>
									))}
								</TabList>
							</div>
							<TabPanels className="lg:col-span-7">
								{featuresSection.features.map((feature) => (
									<TabPanel key={feature.title} unmount={false}>
										<div className="relative sm:px-6 lg:hidden">
											<div className="-inset-x-4 absolute top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-card-lg" />
											<Text
												theme="white"
												className="relative mx-auto max-w-2xl sm:text-center"
											>
												{feature.description}
											</Text>
										</div>
										<div className="mt-10 w-[45rem] overflow-hidden rounded-card-md bg-gray-50 shadow-primary-800 shadow-xl sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
											<Image
												className="w-full"
												src={feature.image}
												alt={feature.title}
												priority={false}
												loading="lazy"
												placeholder="blur"
												blurDataURL={blurDataURL}
												sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
											/>
										</div>
									</TabPanel>
								))}
							</TabPanels>
						</>
					)}
				</TabGroup>
			</Container>{" "}
			<BottomBackground left light />
		</section>
	);
}

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
		<div className="-mx-4 sm:-mx-6 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:px-6 lg:hidden">
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
										<Tab className="ui-not-focus-visible:outline-hidden">
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
										"px-5 ui-not-focus-visible:outline-hidden transition duration-500 ease-in-out",
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
			className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
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

export function FeaturesTwo() {
	return (
		<div id="features" className="bg-primary-700 pt-20 pb-28 sm:py-32">
			<Container>
				<div className="mx-auto max-w-2xl lg:text-center">
					<Heading as="h2" theme="white" className="text-left lg:text-center">
						{featuresSection.title}
					</Heading>
					<Text size="4" theme="primary" className="mt-6 lg:text-center">
						{featuresSection.description}
					</Text>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{featuresSection.features.map((feature) => (
							<div key={feature.title} className="flex flex-col">
								<dt className="flex items-center gap-x-3">
									<Icons.Check
										className="h-5 w-5 flex-none text-white"
										aria-hidden="true"
									/>
									<Heading
										weight="medium"
										as="h3"
										size="4"
										align="left"
										theme="white"
									>
										{feature.title}
									</Heading>
								</dt>
								<dd className="mt-4 flex flex-auto flex-col">
									<Text theme="primary" className="flex-auto">
										{feature.description}
									</Text>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</Container>
		</div>
	);
}

export default function SecondaryFeaturesTwo() {
	return (
		<div
			id="secondary-features"
			className="overflow-hidden bg-white py-24 sm:py-32"
		>
			<Container className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
				<div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
						<Heading
							as="h2"
							align="left"
							size="8"
							theme="gray"
							letterSpacing="tight"
						>
							{detailedFeaturesSection.title}
						</Heading>
						<Text size="4" className="mt-6">
							{detailedFeaturesSection.description}
						</Text>
						<dl className="mt-10 max-w-xl space-y-8 lg:max-w-none">
							{detailedFeaturesSection.features.map((feature) => (
								<div key={feature.name} className="relative pl-9">
									<dt className="flex">
										<feature.icon
											className="absolute top-1 left-1 h-5 w-5 text-primary-600"
											aria-hidden="true"
										/>
										<Heading
											as="span"
											weight="medium"
											size="4"
											align="left"
											className="text-gray-900"
										>
											{feature.name}
										</Heading>
									</dt>{" "}
									<dd className="mt-2">
										<Text as="p" size="3">
											{feature.description}
										</Text>
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
				<div className="sm:px-6 lg:px-0">
					<div className="relative isolate overflow-hidden bg-primary-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
						<div
							className="-inset-y-px -left-3 -z-10 absolute w-full origin-bottom-left skew-x-[-30deg] bg-primary-100 opacity-20 ring-1 ring-white ring-inset"
							aria-hidden="true"
						/>
						<div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
							<Image
								src={detailedFeaturesSection.image}
								alt="Detailed Features Image"
								width={2432}
								height={1442}
								placeholder="blur"
								className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-gray-50"
							/>
						</div>
						<div
							className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl"
							aria-hidden="true"
						/>
					</div>
				</div>
			</Container>
		</div>
	);
}
