import Image from "next/image";

import backgroundImage from "@/assets/background-auth.jpg";

export function SlimLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="relative flex min-h-full shrink-0 justify-center lg:px-0 md:px-12">
				<div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl md:flex-none sm:justify-center md:px-28">
					<main className="mx-auto w-full max-w-md md:w-96 md:max-w-sm md:px-0 sm:px-4">
						{children}
					</main>
				</div>
				<div className="hidden lg:relative lg:block sm:contents lg:flex-1">
					<Image
						className="absolute inset-0 h-full w-full object-cover"
						src={backgroundImage}
						alt=""
						unoptimized
					/>
				</div>
			</div>
		</>
	);
}
