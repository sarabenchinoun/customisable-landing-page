"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Container } from "@/components/container";
import { featuresSection } from "@/lib/config";
import { cn } from "@/lib/utils";
import { BottomBackground } from "./background";
import { Heading } from "./heading";
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

	return (
		<section
			id="features"
			aria-label="Features for running your books"
			className="relative overflow-hidden bg-primary-700 pt-20 pb-28 sm:py-32"
		>
			<Container className="relative z-20">
				<div className="max-w-2xl md:mx-auto xl:max-w-none md:text-center">
					<Heading as="h2" theme="white">
						{featuresSection.title}
					</Heading>
					<Text size="4" theme="primary" className="mt-6" align="center">
						{featuresSection.description}
					</Text>
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
												className="!text-nowrap"
											>
												<Tab
													className={cn(
														"ui-not-focus-visible:outline-none",
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
										<div className="relative lg:hidden sm:px-6">
											<div className="-inset-x-4 absolute top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-card-lg" />
											<Text
												theme="white"
												className="relative mx-auto max-w-2xl sm:text-center"
											>
												{feature.description}
											</Text>
										</div>
										<div className="mt-10 w-[45rem] overflow-hidden rounded-card-md bg-gray-50 shadow-primary-800 shadow-xl lg:mt-0 lg:w-[67.8125rem] sm:w-auto">
											<Image
												className="w-full"
												src={feature.image}
												alt={feature.title}
												priority
												placeholder="blur"
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
