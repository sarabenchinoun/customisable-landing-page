"use client";

import { Container } from "@/components/container";
import {
	detailedFeaturesSection,
	featuresSection,
	iconTheme,
} from "@/lib/config";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";
import { BottomBackground } from "./background";
import type { LucideIcon } from "./icons";

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

	return (
		<section
			id="features-one"
			aria-label="Features for running your books"
			className="relative overflow-hidden bg-primary-700 pt-20 pb-28 sm:py-32"
		>
			<Container className="relative z-20">
				<div className="max-w-2xl md:mx-auto xl:max-w-none md:text-center">
					<h2 className="font-heading text-3xl text-white tracking-tight md:text-5xl sm:text-4xl">
						{featuresSection.title}
					</h2>
					<p className="mt-6 text-lg text-primary-100 tracking-tight">
						{featuresSection.description}
					</p>
				</div>
				<TabGroup
					className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 md:mt-20 lg:grid-cols-12 sm:gap-y-6 lg:pt-0"
					vertical={tabOrientation === "vertical"}
				>
					{({ selectedIndex }) => (
						<>
							<div className="-mx-4 flex overflow-x-auto pb-4 lg:col-span-5 sm:mx-0 sm:overflow-visible sm:pb-0">
								<TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 lg:mx-0 sm:mx-auto lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal sm:px-0">
									{featuresSection.features.map((feature, featureIndex) => (
										<div
											key={feature.title}
											className={clsx(
												"group relative rounded-full px-4 py-1 lg:rounded-r-none lg:rounded-l-xl lg:p-6",
												selectedIndex === featureIndex
													? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset"
													: "hover:bg-white/10 lg:hover:bg-white/5",
											)}
										>
											<h3>
												<Tab
													className={clsx(
														"font-heading text-lg ui-not-focus-visible:outline-none",
														selectedIndex === featureIndex
															? "text-primary-600 lg:text-white"
															: "text-primary-100 hover:text-white lg:text-white",
													)}
												>
													<span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
													{feature.title}
												</Tab>
											</h3>
											<p
												className={clsx(
													"mt-2 hidden text-sm lg:block",
													selectedIndex === featureIndex
														? "text-white"
														: "text-primary-100 group-hover:text-white",
												)}
											>
												{feature.description}
											</p>
										</div>
									))}
								</TabList>
							</div>
							<TabPanels className="lg:col-span-7">
								{featuresSection.features.map((feature) => (
									<TabPanel key={feature.title} unmount={false}>
										<div className="relative lg:hidden sm:px-6">
											<div className="-inset-x-4 absolute top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
											<p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
												{feature.description}
											</p>
										</div>
										<div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-gray-50 shadow-primary-900/20 shadow-xl lg:mt-0 lg:w-[67.8125rem] sm:w-auto">
											<Image
												className="w-full"
												src={feature.image}
												alt=""
												priority
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
			className={clsx(className, !isActive && "opacity-75 hover:opacity-100")}
			{...props}
		>
			<div
				className={clsx(
					"flex h-9 w-9 items-center justify-center rounded-lg p-2",
					isActive ? "bg-primary-600" : "bg-gray-300",
				)}
			>
				<feature.icon
					aria-hidden="true"
					strokeWidth={iconTheme.strokeWidth}
					className={clsx("h-8 w-8", isActive ? "text-white" : "text-gray-900")}
				/>
			</div>
			<h3
				className={clsx(
					"mt-6 font-medium text-sm",
					isActive ? "text-primary-600" : "text-gray-600",
				)}
			>
				{feature.name}
			</h3>
			<p className="mt-2 font-heading text-gray-900 text-xl">
				{feature.summary}
			</p>
			<p className="mt-4 text-gray-600 text-sm">{feature.description}</p>
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
						<div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-gray-900/5 shadow-lg ring-1 ring-gray-500/10">
							<Image
								className="w-full"
								src={feature.image}
								alt=""
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
					<TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-gray-200 px-14 py-16 xl:px-16">
						<div className="-mx-5 flex">
							{detailedFeaturesSection.features.map((feature, featureIndex) => (
								<TabPanel
									static
									key={feature.summary}
									className={clsx(
										"px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none",
										featureIndex !== selectedIndex && "opacity-60",
									)}
									style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
									aria-hidden={featureIndex !== selectedIndex}
								>
									<div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-gray-900/5 shadow-lg ring-1 ring-gray-500/10">
										<Image
											className="w-full"
											src={feature.image}
											alt=""
											sizes="52.75rem"
										/>
									</div>
								</TabPanel>
							))}
						</div>
						<div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-gray-900/10 ring-inset" />
					</TabPanels>
				</>
			)}
		</TabGroup>
	);
}

export function FeaturesTwo() {
	return (
		<section
			id="features-two"
			aria-label="Features for simplifying everyday business tasks"
			className="pt-20 pb-14 sm:pt-32 lg:pb-32 sm:pb-20"
		>
			<Container>
				<div className="mx-auto max-w-2xl md:text-center">
					<h2 className="font-heading text-3xl text-gray-900 tracking-tight sm:text-4xl">
						{detailedFeaturesSection.title}
					</h2>
					<p className="mt-4 text-gray-700 text-lg tracking-tight">
						{detailedFeaturesSection.description}
					</p>
				</div>
				<FeaturesMobile />
				<FeaturesDesktop />
			</Container>
		</section>
	);
}
