import { cva } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import type { VariantProps } from "cva";
import * as React from "react";

const headingVariants = cva({
	base: "text-balance font-heading",
	variants: {
		theme: {
			primary: "text-primary-600",
			gray: "text-gray-900",
			white: "text-white",
		},
		weight: {
			light: "font-light",
			regular: "font-normal",
			medium: "font-medium",
			bold: "font-bold",
		},
		size: {
			"1": "text-xs",
			"2": "text-sm",
			"3": "text-base",
			"4": "text-lg",
			"5": "text-xl",
			"6": "text-xl sm:text-2xl",
			"7": "text-2xl sm:text-3xl",
			"8": "text-3xl sm:text-4xl",
			"9": "text-4xl sm:text-6xl",
			"10": "text-5xl sm:text-7xl",
			"11": "text-6xl",
			"12": "text-7xl",
			"13": "text-8xl",
		},
		align: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
		},
		letterSpacing: {
			tight: "tracking-tight",
			tighter: "tracking-tighter",
			normal: "tracking-normal",
			wide: "tracking-wide",
			wider: "tracking-wider",
		},
		lineHeight: {
			tight: "leading-tight",
			snug: "leading-snug",
			normal: "leading-normal",
			relaxed: "leading-relaxed",
			loose: "leading-loose",
		},
	},
	defaultVariants: {
		weight: "regular",
		size: "8",
		align: "center",
		// highContrast: false,
		lineHeight: "normal",
		letterSpacing: "tight",
		theme: "gray",
	},
});

type HeadingProps = {
	asChild?: boolean;
	children: React.ReactNode;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
	className?: string;
} & VariantProps<typeof headingVariants>;

const Heading = React.forwardRef<React.ElementRef<"h1">, HeadingProps>(
	(
		{
			children,
			className,
			align = "center",
			weight = "regular",
			theme = "gray",
			lineHeight = "normal",
			letterSpacing = "tight",
			size = "8",
			asChild = false,
			as: Tag = "h1",
			...props
		},
		ref,
	) => {
		return (
			<Slot
				ref={ref}
				className={clsx(
					headingVariants({
						letterSpacing,
						weight,
						size,
						align,
						lineHeight,
						theme,
					}),
					className,
				)}
				{...props}
			>
				{asChild ? children : <Tag>{children}</Tag>}
			</Slot>
		);
	},
);
Heading.displayName = "Heading";
1;

export { Heading, type HeadingProps };
