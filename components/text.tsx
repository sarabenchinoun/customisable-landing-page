import { cva } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import type { VariantProps } from "cva";
import * as React from "react";

const textVariants = cva({
	base: "text-pretty font-body",
	variants: {
		theme: {
			primary: "text-primary-100",
			gray: "text-gray-700",
			white: "text-white",
		},
		weight: {
			light: "font-light",
			regular: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
		},
		size: {
			"1": "text-xs",
			"2": "text-sm",
			"3": "text-base",
			"4": "text-lg",
			"5": "text-xl",
			"6": "text-2xl",
			"7": "text-3xl",
			"8": "text-4xl",
			"9": "text-5xl",
			"10": "text-6xl",
			"11": "text-7xl",
			"12": "text-8xl",
			"13": "text-9xl",
		},
		align: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
		},
		lowContrast: {
			true: "",
		},
		highContrast: {
			true: "",
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
		size: "3",
		align: "left",
		highContrast: false,
		lineHeight: "normal",
		theme: "gray",
	},
	compoundVariants: [
		{ highContrast: true, theme: "gray", className: "text-gray-900" },
		{ lowContrast: true, theme: "gray", className: "text-gray-600" },
	],
});

type TextProps = {
	asChild?: boolean;
	children: React.ReactNode;
	as?: "p" | "span" | "div";
	className?: string;
} & VariantProps<typeof textVariants>;

const Text = React.forwardRef<React.ElementRef<"span">, TextProps>(
	(
		{
			children,
			align = "left",
			weight = "regular",
			lineHeight = "normal",
			lowContrast = false,
			highContrast = false,
			theme = "gray",
			size = "3",
			asChild = false,
			as: Tag = "p",
			className,
			...props
		},
		ref,
	) => {
		return (
			<Slot
				ref={ref}
				className={clsx(
					textVariants({
						theme,
						weight,
						size,
						align,
						lowContrast,
						highContrast,
						lineHeight,
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
Text.displayName = "Text";

export { Text, type TextProps };
