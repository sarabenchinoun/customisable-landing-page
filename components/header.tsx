"use client";

import {
	Popover,
	PopoverButton,
	PopoverOverlay,
	PopoverPanel,
	Transition,
	TransitionChild,
} from "@headlessui/react";
import Link from "next/link";

import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { ctaAction, navigation } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { NavLink } from "./nav-link";

function MobileNavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<PopoverButton as={Link} href={href} className="block w-full p-2">
			{children}
		</PopoverButton>
	);
}

function MobileNavIcon({ open }: { open: boolean }) {
	return (
		<svg
			aria-hidden="true"
			className="h-3.5 w-3.5 overflow-visible stroke-gray-700"
			fill="none"
			strokeWidth={2}
			strokeLinecap="round"
		>
			<path
				d="M0 1H14M0 7H14M0 13H14"
				className={cn("origin-center transition", open && "scale-90 opacity-0")}
			/>
			<path
				d="M2 2L12 12M12 2L2 12"
				className={cn(
					"origin-center transition",
					!open && "scale-90 opacity-0",
				)}
			/>
		</svg>
	);
}

function MobileNavigation() {
	return (
		<Popover>
			<PopoverButton
				className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-hidden"
				aria-label="Toggle Navigation"
			>
				{({ open }) => <MobileNavIcon open={open} />}
			</PopoverButton>
			<Transition>
				<TransitionChild
					enter="duration-150 ease-out"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="duration-150 ease-in"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<PopoverOverlay className="fixed inset-0 bg-gray-300/50" />
				</TransitionChild>
				<TransitionChild
					enter="duration-150 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<PopoverPanel className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-card-lg bg-white p-4 text-gray-900 text-lg tracking-tight shadow-xl ring-1 ring-gray-900/5">
						{navigation.map((item) => (
							<MobileNavLink key={item.href} href={item.href}>
								{item.label}
							</MobileNavLink>
						))}
					</PopoverPanel>
				</TransitionChild>
			</Transition>
		</Popover>
	);
}

export function Header() {
	return (
		<header className="py-10">
			<Container>
				<nav className="relative z-50 flex justify-between">
					<div className="flex items-center md:gap-x-12">
						<Link href="/" aria-label="Home">
							<Logo className="h-10 w-auto" />
							{/* <Image
								src="/logo.png"
								alt="logo"
								width={120}
								height={40}
								className="h-10 w-auto"
							/> */}
						</Link>
						<div className="hidden md:flex md:gap-x-6">
							{navigation.map((item) => (
								<NavLink key={item.href} href={item.href}>
									{item.label}
								</NavLink>
							))}
						</div>
					</div>
					<div className="flex items-center gap-x-5 md:gap-x-8">
						<Button href={ctaAction.href} color="primary" target="_blank">
							{ctaAction.label}
						</Button>
						<div className="-mr-1 md:hidden">
							<MobileNavigation />
						</div>
					</div>
				</nav>
			</Container>
		</header>
	);
}
