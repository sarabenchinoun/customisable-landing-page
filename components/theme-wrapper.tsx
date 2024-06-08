import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";

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
	return (
		<div
			id="theme-wrapper"
			data-theme={defaultTheme || config.theme}
			className={cn("w-full", className)}
			data-radius={defaultRadius || config.radius}
			data-font={defaultFont || config.font}
		>
			{children}
		</div>
	);
}
