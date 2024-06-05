import { useConfig } from "@/hooks/use-config";
import clsx from "clsx";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
	defaultTheme?: string;
	defaultRadius?: number;
	defaultFont?: string;
}

export function ThemeWrapper({
	defaultTheme,
	defaultRadius,
	defaultFont,
	children,
	className,
}: ThemeWrapperProps) {
	const [config] = useConfig();
	console.log(config);
	return (
		<div
			id="theme-wrapper"
			data-theme={defaultTheme || config.theme}
			className={clsx("w-full", className)}
			data-radius={defaultRadius || config.radius}
			data-font={defaultFont || config.font}
		>
			{children}
		</div>
	);
}
