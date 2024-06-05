import Link from "next/link";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import { footer, iconTheme, navigation } from "@/lib/config";
import { Text } from "./text";

export function Footer() {
	return (
		<footer className="bg-gray-50">
			<Container>
				<div className="py-16">
					<Logo className="mx-auto h-10 w-auto" />
					<nav className="mt-10 text-sm" aria-label="quick links">
						<div className="-my-1 flex justify-center gap-x-6">
							{navigation.map((item) => (
								<NavLink key={item.href} href={item.href}>
									{item.label}
								</NavLink>
							))}
						</div>
					</nav>
				</div>
				<div className="flex flex-col items-center border-gray-400/10 border-t py-10 sm:flex-row-reverse sm:justify-between">
					<div className="flex gap-x-6">
						{footer.social.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="group"
								aria-label={item.label}
								target="_blank"
							>
								<item.icon
									strokeWidth={iconTheme.strokeWidth}
									className="h-6 w-6 text-gray-500 group-hover:text-gray-700"
								/>
							</Link>
						))}
					</div>
					<Text size="2" className="!text-gray-500 mt-6 sm:mt-0">
						Copyright &copy; {new Date().getFullYear()} {footer.companyName}.
						All rights reserved.
					</Text>
				</div>
			</Container>
		</footer>
	);
}
