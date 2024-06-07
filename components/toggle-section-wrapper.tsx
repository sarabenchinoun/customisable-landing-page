"use client";

import clsx from "clsx";
import { useState } from "react";
import Toggle from "./toggle";

export default function ToggleSectionWrapper({
	sectionOne,
	sectionTwo,
	showSection = false,
	sectionName,
}: {
	sectionOne: React.ReactNode;
	sectionTwo: React.ReactNode;
	showSection?: boolean;
	sectionName?: string;
}) {
	const [enabled, setEnabled] = useState(showSection);

	return (
		<div className="relative w-full">
			<div
				id="toggleButton"
				className={clsx(
					"absolute inset-x-0 top-0 z-10 m-4 inline-flex w-fit items-center gap-x-1.5 rounded-full px-2 py-1 font-medium text-gray-900 text-xs ring-1 ring-gray-200 ring-inset",
					2,
				)}
			>
				<label className="font-medium">{sectionName}:</label>
				<Toggle enabled={enabled} setEnabled={setEnabled} options />
			</div>
			<div>{enabled ? sectionTwo : sectionOne}</div>
		</div>
	);
}

export function RemoveSectionWrapper({
	showSection = false,
	sectionName,
	children,
}: { children: React.ReactNode; showSection?: boolean; sectionName?: string }) {
	const [enabled, setEnabled] = useState(showSection);

	return (
		<div className="relative w-full">
			<div
				id="toggleButton"
				className={clsx(
					"m-4 inline-flex w-fit items-center gap-x-1.5 rounded-full px-2 py-1 font-medium text-gray-900 text-xs ring-1 ring-gray-200 ring-inset",
					enabled ? "absolute inset-x-0 top-0 z-10" : "",
				)}
			>
				<label className="font-medium">{sectionName}:</label>
				<Toggle enabled={enabled} setEnabled={setEnabled} />
			</div>
			<div>{enabled ? <>{children}</> : null}</div>
		</div>
	);
}
