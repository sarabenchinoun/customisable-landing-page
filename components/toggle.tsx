import { Switch } from "@headlessui/react";
import clsx from "clsx";

export default function Toggle({
	id,
	className,
	enabled,
	setEnabled,
}: {
	id?: string;
	className?: string;
	enabled: boolean;
	setEnabled: (enabled: boolean) => void;
}) {
	return (
		<Switch
			id={id}
			checked={enabled}
			onChange={setEnabled}
			className={clsx(
				"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-primary-600",
				className,
			)}
		>
			<span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
		</Switch>
	);
}
