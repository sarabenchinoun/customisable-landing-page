const primaryColor = {
	50: "#fffbeb",
	100: "#fef3c7",
	200: "#fde68a",
	300: "#fcd34d",
	400: "#fbbf24",
	500: "#f59e0b",
	600: "#d97706",
	700: "#b45309",
	800: "#92400e",
	900: "#78350f",
	950: "#451a03",
};

export const backgroundColors = {
	primary: {
		light: primaryColor[700],
		dark: primaryColor[300],
	},
	secondary: {
		light: primaryColor[400],
		dark: primaryColor[200],
	},
};

export const logoColors = {
	darkText: primaryColor[950],
	lightText: primaryColor[600],
};
