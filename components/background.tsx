import { backgroundColors } from "@/lib/config";
import clsx from "clsx";

export function BottomBackground({
	light,
	left,
	className,
}: {
	light?: boolean;
	left?: boolean;
	className?: string;
}) {
	return (
		<div
			className={clsx(
				"absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]",
				className,
			)}
		>
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg
				className={clsx(
					"-translate-x-1/2 relative h-[21.1875rem] max-w-none sm:h-[42.375rem]",
					left
						? "left-0 sm:left-0"
						: "left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]",
				)}
				viewBox="0 0 1155 678"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
					fillOpacity=".3"
					d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
				/>
				<defs>
					<linearGradient
						id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
						x1="1155.49"
						x2="-78.208"
						y1=".177"
						y2="474.645"
						gradientUnits="userSpaceOnUse"
					>
						<stop
							stopColor={
								light
									? backgroundColors.primary.dark
									: backgroundColors.primary.light
							}
						/>
						<stop
							offset={1}
							stopColor={
								light
									? backgroundColors.secondary.dark
									: backgroundColors.secondary.light
							}
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
}

export function TopBackground({
	center,
	light,
	right,
	className,
}: {
	center?: boolean;
	light?: boolean;
	right?: boolean;
	className?: string;
}) {
	return (
		<div
			className={clsx(
				"absolute top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]",
				center ? "right-0" : "inset-x-0",
				className,
			)}
		>
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg
				className={clsx(
					"-z-10 -right-1/2 relative left-[calc(50%-11rem)] h-[21.1875rem] max-w-none rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]",
					right ? "-right-1/2" : "-translate-x-1/2",
				)}
				viewBox="0 0 1155 678"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
					fillOpacity=".3"
					d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
				/>
				<defs>
					<linearGradient
						id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
						x1="1155.49"
						x2="-78.208"
						y1=".177"
						y2="474.645"
						gradientUnits="userSpaceOnUse"
					>
						<stop
							stopColor={
								light
									? backgroundColors.primary.dark
									: backgroundColors.primary.light
							}
						/>
						<stop
							offset={1}
							stopColor={
								light
									? backgroundColors.secondary.dark
									: backgroundColors.secondary.light
							}
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
}
