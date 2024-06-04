import clsx from "clsx";
import Link from "next/link";

const baseStyles = {
	solid:
		"group inline-flex items-center justify-center rounded-button py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
	outline:
		"group inline-flex ring-1 items-center justify-center rounded-button py-2 px-4 text-sm focus:outline-none",
};

const variantStyles = {
	solid: {
		gray: "bg-gray-900 text-white hover:bg-gray-700 hover:text-gray-100 active:bg-gray-800 active:text-gray-300 focus-visible:outline-gray-900",
		primary:
			"bg-primary-600 text-white hover:text-gray-100 hover:bg-primary-500 active:bg-primary-800 active:text-primary-100 focus-visible:outline-primary-600",
		white:
			"bg-white text-gray-900 hover:bg-primary-50 active:bg-primary-200 active:text-gray-600 focus-visible:outline-white",
	},
	outline: {
		gray: "ring-gray-200 text-gray-700 hover:text-gray-900 hover:ring-gray-300 active:bg-gray-100 active:text-gray-600 focus-visible:outline-primary-600 focus-visible:ring-gray-300",
		white:
			"ring-gray-700 text-white hover:ring-gray-500 active:ring-gray-700 active:text-gray-400 focus-visible:outline-white",
	},
};

type ButtonProps = (
	| {
			variant?: "solid";
			color?: keyof typeof variantStyles.solid;
	  }
	| {
			variant: "outline";
			color?: keyof typeof variantStyles.outline;
	  }
) &
	(
		| Omit<React.ComponentPropsWithoutRef<typeof Link>, "color">
		| (Omit<React.ComponentPropsWithoutRef<"button">, "color"> & {
				href?: undefined;
		  })
	);

export function Button({ className, ...props }: ButtonProps) {
	props.variant ??= "solid";
	props.color ??= "gray";

	className = clsx(
		baseStyles[props.variant],
		props.variant === "outline"
			? variantStyles.outline[props.color]
			: props.variant === "solid"
				? variantStyles.solid[props.color]
				: undefined,
		className,
	);

	return typeof props.href === "undefined" ? (
		<button className={className} {...props} />
	) : (
		<Link className={className} {...props} />
	);
}
