import type { Theme } from "@/lib/themes";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type Config = {
	theme: Theme["name"];
	radius: number;
};

const configAtom = atomWithStorage<Config>("config", {
	theme: "blue",
	radius: 3,
});

export function useConfig() {
	return useAtom(configAtom);
}
