import Image from "next/image";

import logoLaravel from "@/assets/logos/laravel.svg";
import logoMirage from "@/assets/logos/mirage.svg";
import logoStatamic from "@/assets/logos/statamic.svg";
import logoStaticKit from "@/assets/logos/statickit.svg";
import logoTransistor from "@/assets/logos/transistor.svg";
import logoTuple from "@/assets/logos/tuple.svg";
import { Container } from "@/components/container";

export function LogoClouds() {
	return (
		<Container id="logo-clouds" className="pb-16 text-center">
			<div className="mt-36 lg:mt-44">
				<p className="font-display text-base text-gray-900">
					Trusted by these six companies so far
				</p>
				<ul className="mt-8 flex items-center justify-center gap-x-8 xl:flex-row sm:flex-col sm:gap-x-0 xl:gap-x-12 sm:gap-y-10 xl:gap-y-0">
					{[
						[
							{ name: "Transistor", logo: logoTransistor },
							{ name: "Tuple", logo: logoTuple },
							{ name: "StaticKit", logo: logoStaticKit },
						],
						[
							{ name: "Mirage", logo: logoMirage },
							{ name: "Laravel", logo: logoLaravel },
							{ name: "Statamic", logo: logoStatamic },
						],
					].map((group, groupIndex) => (
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
			</div>
		</Container>
	);
}
