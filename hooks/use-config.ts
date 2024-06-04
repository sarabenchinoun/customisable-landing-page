import type { Theme } from "@/lib/themes";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type Config = {
	theme: Theme["name"];
	radius: number;
};

const configAtom = atomWithStorage<Config>("config", {
	theme: "amber",
	radius: 0.5,
});

export function useConfig() {
	return useAtom(configAtom);
}
