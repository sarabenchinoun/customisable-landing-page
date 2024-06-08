import { Switch } from "@headlessui/react";

import { cn } from "@/lib/utils";

export default function Toggle({
	id,
	className,
	options,
	enabled,
	setEnabled,
}: {
	id?: string;
	className?: string;
	options?: boolean;
	enabled: boolean;
	setEnabled: (enabled: boolean) => void;
}) {
	return (
		<Switch
			id={id}
			checked={enabled}
			onChange={setEnabled}
			className={cn(
				"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition",
				options ? "" : "data-[checked]:bg-primary-600",
				className,
			)}
		>
			<span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6">
				{options ? (
					enabled ? (
						<span className="font-bold text-primary-600">2</span>
					) : (
						<span className="font-bold text-primary-600">1</span>
					)
				) : null}
			</span>
		</Switch>
	);
}
