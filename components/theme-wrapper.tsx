import { useConfig } from "@/hooks/use-config";
import clsx from "clsx";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
	defaultTheme?: string;
	defaultRadius?: number;
}

export function ThemeWrapper({
	defaultTheme,
	defaultRadius,
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
		>
			{children}
		</div>
	);
}
