"use client";

import { useConfig } from "@/hooks/use-config";
import { iconTheme } from "@/lib/config";
import { themes } from "@/lib/themes";
import {
	Popover,
	PopoverButton,
	PopoverPanel,
	Transition,
} from "@headlessui/react";
import clsx from "clsx";
import type React from "react";
import { Button } from "./button";
import { Icons } from "./icons";
import { ThemeWrapper } from "./theme-wrapper";

export function DemoLayout({ children }: { children: React.ReactNode }) {
	// const [mounted, setMounted] = React.useState(false);
	// // const [config] = useConfig();

	// React.useEffect(() => {
	// 	setMounted(true);
	// }, []);

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
				<PopoverButton className="relative inline-flex items-center ui-not-focus-visible:outline-none">
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
							<Customizer />
						</div>
					</PopoverPanel>
				</Transition>
			</Popover>
		</div>
	);
}

function Customizer() {
	const [config, setConfig] = useConfig();

	return (
		<div className="flex flex-col space-y-4 md:space-y-6">
			<div className="flex items-start pt-4 md:pt-0">
				<div className="space-y-1 pr-2">
					<div className="font-heading font-semibold leading-none tracking-tight">
						Customize
					</div>
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
							theme: "blue",
						});
					}}
				>
					<Icons.Undo2 strokeWidth={iconTheme.strokeWidth} />
					<span className="sr-only">Reset</span>
				</button>
			</div>
			<div className="flex flex-1 flex-col space-y-4 md:space-y-6">
				<div className="space-y-1.5">
					<label className="text-xs">Color</label>
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
									className={clsx(
										"!justify-start",
										isActive && "ring-gray-500 hover:ring-gray-500",
									)}
								>
									<span
										className={clsx(
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
					<label className="text-xs">Radius</label>
					<div className="flex gap-2">
						{[
							{ value: 1, label: "None" },
							{ value: 2, label: "Medium" },
							{ value: 3, label: "Large" },
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
									className={clsx(
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
			</div>
		</div>
	);
}
