export const themes = [
	{
		name: "red",
		label: "Red",
	},
	{
		name: "orange",
		label: "Orange",
	},
	{
		name: "amber",
		label: "Amber",
	},
	{
		name: "yellow",
		label: "Yellow",
	},
	{
		name: "lime",
		label: "Lime",
	},
	{
		name: "green",
		label: "Green",
	},
	{
		name: "emerald",
		label: "Emerald",
	},
	{
		name: "teal",
		label: "Teal",
	},
	{
		name: "cyan",
		label: "Cyan",
	},
	{
		name: "sky",
		label: "Sky",
	},
	{
		name: "blue",
		label: "Blue",
	},
	{
		name: "indigo",
		label: "Indigo",
	},
	{
		name: "violet",
		label: "Violet",
	},
	{
		name: "purple",
		label: "Purple",
	},
	{
		name: "fuchsia",
		label: "Fuchsia",
	},
	{
		name: "pink",
		label: "Pink",
	},
	{
		name: "rose",
		label: "Rose",
	},
] as const;

export type Theme = (typeof themes)[number];
