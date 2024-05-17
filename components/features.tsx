"use client";

import screenshotContacts from "@/assets/screenshots/contacts.png";
import screenshotExpenses from "@/assets/screenshots/expenses.png";
import screenshotInventory from "@/assets/screenshots/inventory.png";
import screenshotPayroll from "@/assets/screenshots/payroll.png";
import screenshotProfitLoss from "@/assets/screenshots/profit-loss.png";
import screenshotReporting from "@/assets/screenshots/reporting.png";
import screenshotVatReturns from "@/assets/screenshots/vat-returns.png";
import { Container } from "@/components/container";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import { useEffect, useId, useState } from "react";
import { BottomBackground } from "./background";

const features = [
	{
		title: "Payroll",
		description:
			"Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
		image: screenshotPayroll,
	},
	{
		title: "Claim expenses",
		description:
			"All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
		image: screenshotExpenses,
	},
	{
		title: "VAT handling",
		description:
			"We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
		image: screenshotVatReturns,
	},
	{
		title: "Reporting",
		description:
			"Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
		image: screenshotReporting,
	},
];

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
			<Container className="relative">
				<div className="max-w-2xl md:mx-auto xl:max-w-none md:text-center">
					<h2 className="font-display text-3xl text-white tracking-tight md:text-5xl sm:text-4xl">
						Everything you need to run your books.
					</h2>
					<p className="mt-6 text-lg text-primary-100 tracking-tight">
						Well everything you need if you aren’t that picky about minor
						details like tax compliance.
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
									{features.map((feature, featureIndex) => (
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
														"font-display text-lg ui-not-focus-visible:outline-none",
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
								{features.map((feature) => (
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

interface Feature {
	name: React.ReactNode;
	summary: string;
	description: string;
	image: ImageProps["src"];
	icon: React.ComponentType;
}

const detailedFeatures: Array<Feature> = [
	{
		name: "Reporting",
		summary: "Stay on top of things with always up-to-date reporting features.",
		description:
			"We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
		image: screenshotProfitLoss,
		icon: function ReportingIcon() {
			const id = useId();
			return (
				<>
					<defs>
						<linearGradient
							id={id}
							x1="11.5"
							y1={18}
							x2={36}
							y2="15.5"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset=".194" stopColor="#fff" />
							<stop offset={1} stopColor="#6692F1" />
						</linearGradient>
					</defs>
					<path
						d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
						stroke={`url(#${id})`}
						strokeWidth={2}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</>
			);
		},
	},
	{
		name: "Inventory",
		summary:
			"Never lose track of what’s in stock with accurate inventory tracking.",
		description:
			"We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
		image: screenshotInventory,
		icon: function InventoryIcon() {
			return (
				<>
					<path
						opacity=".5"
						d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
						fill="#fff"
					/>
					<path
						opacity=".3"
						d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
						fill="#fff"
					/>
					<path
						d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
						fill="#fff"
					/>
				</>
			);
		},
	},
	{
		name: "Contacts",
		summary:
			"Organize all of your contacts, service providers, and invoices in one place.",
		description:
			"This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
		image: screenshotContacts,
		icon: function ContactsIcon() {
			return (
				<>
					<path
						opacity=".5"
						d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
						fill="#fff"
					/>
					<path
						d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
						fill="#fff"
					/>
				</>
			);
		},
	},
];

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
					"w-9 rounded-lg",
					isActive ? "bg-primary-600" : "bg-gray-500",
				)}
			>
				<svg aria-hidden="true" className="h-9 w-9" fill="none">
					<feature.icon />
				</svg>
			</div>
			<h3
				className={clsx(
					"mt-6 font-medium text-sm",
					isActive ? "text-primary-600" : "text-gray-600",
				)}
			>
				{feature.name}
			</h3>
			<p className="mt-2 font-display text-gray-900 text-xl">
				{feature.summary}
			</p>
			<p className="mt-4 text-gray-600 text-sm">{feature.description}</p>
		</div>
	);
}

function FeaturesMobile() {
	return (
		<div className="-mx-4 sm:-mx-6 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 lg:hidden sm:px-6">
			{detailedFeatures.map((feature) => (
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
						{detailedFeatures.map((feature, featureIndex) => (
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
							{detailedFeatures.map((feature, featureIndex) => (
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
					<h2 className="font-display text-3xl text-gray-900 tracking-tight sm:text-4xl">
						Simplify everyday business tasks.
					</h2>
					<p className="mt-4 text-gray-700 text-lg tracking-tight">
						Because you’d probably be a little confused if we suggested you
						complicate your everyday business tasks instead.
					</p>
				</div>
				<FeaturesMobile />
				<FeaturesDesktop />
			</Container>
		</section>
	);
}
