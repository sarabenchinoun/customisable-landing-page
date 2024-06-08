import { type VariantProps, defineConfig } from "cva";
import { twMerge } from "tailwind-merge";

const {
	cva,
	cx: cn,
	compose,
} = defineConfig({
	hooks: {
		onComplete: twMerge,
	},
});

export { cva, cn, compose, type VariantProps };
