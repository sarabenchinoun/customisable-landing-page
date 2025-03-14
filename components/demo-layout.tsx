"use client";

import {
	Popover,
	PopoverButton,
	PopoverPanel,
	Transition,
} from "@headlessui/react";
import template from "lodash.template";
import { useEffect, useState } from "react";
import { z } from "zod";

import { useConfig } from "@/hooks/use-config";
import { iconTheme } from "@/lib/config";
import {
	type RadiusSystem,
	type Theme,
	radiusSystem,
	themes,
} from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Heading } from "./heading";
import { Icons } from "./icons";
import { ThemeWrapper } from "./theme-wrapper";
import Toggle from "./toggle";

export function DemoLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col">
			<ThemeWrapper>
				<ThemeCustomiser />
				<main className="flex-1">{children}</main>
			</ThemeWrapper>
		</div>
	);
}

export function ThemeCustomiser() {
	return (
		<div className="fixed right-4 bottom-4 z-50">
			<Popover>
				<PopoverButton className="relative inline-flex items-center ui-not-focus-visible:outline-hidden">
					<div className="rounded-icon bg-primary-600 p-2">
						<Icons.Paintbrush
							strokeWidth={iconTheme.strokeWidth}
							className="h-6 w-6 text-white"
						/>
					</div>
				</PopoverButton>
				<Transition
					enter="transition ease-out duration-200"
					enterFrom="opacity-0 translate-y-1"
					enterTo="opacity-100 translate-y-0"
					leave="transition ease-in duration-150"
					leaveFrom="opacity-100 translate-y-0"
					leaveTo="opacity-0 translate-y-1"
				>
					<PopoverPanel className="absolute right-0 bottom-14 z-50 w-screen max-w-max">
						<div className="w-full max-w-md flex-auto overflow-hidden rounded-card-lg border border-gray-300 bg-white p-4 shadow-lg">
							<CustomizerConfig />
						</div>
					</PopoverPanel>
				</Transition>
			</Popover>
		</div>
	);
}

function CustomizerConfig() {
	const [enabled, setEnabled] = useState(true);

	const [config, setConfig] = useConfig();
	const toggleButton = document.querySelectorAll("#toggleButton");

	if (toggleButton) {
		if (!enabled) {
			for (const button of toggleButton) {
				button.classList.add("hidden");
			}
		} else {
			for (const button of toggleButton) {
				button.classList.remove("hidden");
			}
		}
	}

	return (
		<div className="flex flex-col space-y-4 md:space-y-6">
			<div className="flex items-start pt-4 md:pt-0">
				<div className="space-y-1 pr-2">
					<Heading align="left" size="4">
						Customize
					</Heading>
					<div className="text-muted-foreground text-xs">
						Pick a style and color for your components.
					</div>
				</div>
				<button
					type="button"
					className="ml-auto rounded-button"
					onClick={() => {
						setConfig({
							...config,
							theme: "red",
						});
					}}
				>
					<Icons.Undo2 strokeWidth={iconTheme.strokeWidth} />
					<span className="sr-only">Reset</span>
				</button>
			</div>
			<div className="flex flex-1 flex-col space-y-4 md:space-y-6">
				<div className="space-y-1.5">
					<p className="text-xs">Color</p>
					<div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
						{themes.map((theme) => {
							const isActive = config.theme === theme.name;

							return (
								<Button
									variant="outline"
									key={theme.name}
									onClick={() => {
										setConfig({
											...config,
											theme: theme.name,
										});
									}}
									className={cn(
										"justify-start!",
										isActive && "ring-gray-500 hover:ring-gray-500",
									)}
								>
									<span
										className={cn(
											"-translate-x-1 mr-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
											{
												"bg-red-600": theme.name === "red",
												"bg-orange-600": theme.name === "orange",
												"bg-amber-600": theme.name === "amber",
												"bg-yellow-600": theme.name === "yellow",
												"bg-lime-600": theme.name === "lime",
												"bg-green-600": theme.name === "green",
												"bg-emerald-600": theme.name === "emerald",
												"bg-teal-600": theme.name === "teal",
												"bg-cyan-600": theme.name === "cyan",
												"bg-sky-600": theme.name === "sky",
												"bg-blue-600": theme.name === "blue",
												"bg-indigo-600": theme.name === "indigo",
												"bg-violet-600": theme.name === "violet",
												"bg-purple-600": theme.name === "purple",
												"bg-fuchsia-600": theme.name === "fuchsia",
												"bg-pink-600": theme.name === "pink",
												"bg-rose-600": theme.name === "rose",
											},
										)}
									>
										{isActive && <Icons.Check className="h-4 w-4 text-white" />}
									</span>
									{theme.label}
								</Button>
							);
						})}
					</div>
				</div>
				<div className="space-y-1.5">
					<p className="text-xs">Radius</p>
					<div className="flex gap-2">
						{[
							{ value: 0, label: "None" },
							{ value: 0.75, label: "Medium" },
							{ value: 1.5, label: "Large" },
						].map((value) => {
							return (
								<Button
									key={value.value}
									variant="outline"
									onClick={() => {
										setConfig({
											...config,
											radius: value.value,
										});
									}}
									className={cn(
										config.radius === value.value &&
											"ring-gray-500 hover:ring-gray-500",
									)}
								>
									{value.label}
								</Button>
							);
						})}
					</div>
				</div>
				<div className="space-y-1.5">
					<p className="text-xs">Font</p>
					<div className="flex gap-2">
						{[
							{ value: "elegant", label: "Elegant" },
							{ value: "modern", label: "Modern" },
							{ value: "playfull", label: "Playfull" },
						].map((value) => {
							return (
								<Button
									key={value.value}
									variant="outline"
									onClick={() => {
										setConfig({
											...config,
											font: value.value,
										});
									}}
									className={cn(
										config.font === value.value &&
											"ring-gray-500 hover:ring-gray-500",
									)}
								>
									{value.label}
								</Button>
							);
						})}
					</div>
				</div>
				<div className="space-y-1.5">
					<p className="text-xs">Sections</p>
					<div className="flex gap-2">
						<Toggle enabled={enabled} setEnabled={setEnabled} />
					</div>
				</div>
				<div className="mt-2 flex items-center justify-between space-y-1.5">
					<p className="text-xs">Copy Your Chosen Theme</p>
					<div className="flex gap-2">
						<CopyCodeButton />
					</div>
				</div>
			</div>
		</div>
	);
}

function CopyCodeButton() {
	const [config] = useConfig();
	const activeTheme = themes.find((theme) => theme.name === config.theme);
	const [hasCopied, setHasCopied] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	}, [hasCopied]);

	return (
		<>
			{activeTheme && (
				<Button
					variant="outline"
					onClick={() => {
						copyToClipboardWithMeta(
							getThemeCode(
								activeTheme,
								config.radius,
								radiusSystem,
								config.font,
							),
							{
								name: "copy_theme_code",
								properties: {
									theme: activeTheme.name,
									radius: config.radius,
									font: config.font,
								},
							},
						);
						setHasCopied(true);
					}}
				>
					{hasCopied ? (
						<Icons.Check className="mr-2 h-4 w-4" />
					) : (
						<Icons.Copy className="mr-2 h-4 w-4" />
					)}
					Copy
				</Button>
			)}
		</>
	);
}

const eventSchema = z.object({
	name: z.enum(["copy_theme_code"]),
	properties: z
		.record(z.union([z.string(), z.number(), z.boolean(), z.null()]))
		.optional(),
});

type Event = z.infer<typeof eventSchema>;

function trackEvent(input: Event): void {
	const event = eventSchema.parse(input);
	if (event) {
		event.name;
		event.properties;
	}
}

async function copyToClipboardWithMeta(value: string, event?: Event) {
	navigator.clipboard.writeText(value);
	if (event) {
		trackEvent(event);
	}
}

function getThemeCode(
	theme: Theme,
	radius: number,
	radiusSystem: RadiusSystem,
	font: string,
) {
	if (!theme) {
		return "";
	}

	return template(BASE_STYLES_WITH_VARIABLES)({
		colors: theme.colorCodes,
		gray: theme.grayScale,
		radius,
		radiusSystem,
		font,
	});
}

const BASE_STYLES_WITH_VARIABLES = `
@layer base {
  :root {
		--color-primary-50:  <%- colors["50"] %>;
		--color-primary-100: <%- colors["100"] %>;
		--color-primary-200: <%- colors["200"] %>;
		--color-primary-300: <%- colors["300"] %>;
		--color-primary-400: <%- colors["400"] %>;
		--color-primary-500: <%- colors["500"] %>;
		--color-primary-600: <%- colors["600"] %>;
		--color-primary-700: <%- colors["700"] %>;
		--color-primary-800: <%- colors["800"] %>;
		--color-primary-900: <%- colors["900"] %>;
		--color-primary-950: <%- colors["950"] %>;

		--color-gray-50:  <%- gray["50"] %>;
		--color-gray-100: <%- gray["100"] %>;
		--color-gray-200: <%- gray["200"] %>;
		--color-gray-300: <%- gray["300"] %>;
		--color-gray-400: <%- gray["400"] %>;
		--color-gray-500: <%- gray["500"] %>;
		--color-gray-600: <%- gray["600"] %>;
		--color-gray-700: <%- gray["700"] %>;
		--color-gray-800: <%- gray["800"] %>;
		--color-gray-900: <%- gray["900"] %>;
		--color-gray-950: <%- gray["950"] %>;
		
		--button-radius: <%- radiusSystem["6"] * radius %>px;
		--icon-radius: <%- radiusSystem["3"] * radius %>px;
		--link-radius: <%- radiusSystem["1"] * radius %>px;
		--card-lg-radius: <%- radiusSystem["6"] * radius %>px;
		--card-md-radius: <%- radiusSystem["5"] * radius %>px;
		--card-sm-radius: <%- radiusSystem["4"] * radius %>px;

		--font-heading: var(--<%- font %>-heading);
		--font-body: var(--<%- font %>-body);

		.stop-primary-dark {
			stop-color: <%- colors["500"] %>;
		}
		.stop-primary-light {
			stop-color: <%- colors["100"] %>;
		}
		.stop-secondary-dark {
			stop-color: <%- colors["400"] %>;
		}
		.stop-secondary-light {
			stop-color: <%- colors["200"] %>;
		}

		
  }
}
`;
