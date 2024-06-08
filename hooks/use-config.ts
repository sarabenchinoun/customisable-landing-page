import type { Theme } from "@/lib/themes";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type Config = {
	theme: Theme["name"];
	radius: number;
	font: string;
};

const configAtom = atomWithStorage<Config>("config", {
	theme: "blue",
	radius: 1.5,
	font: "playful",
});

export function useConfig() {
	return useAtom(configAtom);
}
