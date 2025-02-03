import Image from "next/image";

import { Container } from "@/components/container";
import { logoClouds } from "@/lib/config";
import { Text } from "./text";

export function LogoClouds() {
	return (
		<Container id="logo-clouds" className="py-16 text-center lg:pt-24">
			<Text highContrast align="center">
				{logoClouds.title}
			</Text>
			<ul className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
				{logoClouds.companies.map((group, groupIndex) => (
					<li key={`group ${groupIndex * 1}`}>
						<ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
							{group.map((company) => (
								<li key={company.name} className="flex">
									<Image src={company.logo} alt={company.name} unoptimized />
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</Container>
	);
}
