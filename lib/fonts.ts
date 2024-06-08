import {
	Cabin,
	Cormorant_Garamond,
	Nunito,
	Proza_Libre,
	Roboto,
	Sniglet,
} from "next/font/google";

const elegantHeading = Cormorant_Garamond({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--elegant-heading",
});
const elegantBody = Proza_Libre({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
	variable: "--elegant-body",
});

const modernHeading = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
	variable: "--modern-heading",
});

const modernBody = Nunito({
	weight: ["200", "300", "400", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--modern-body",
});

const playfullHeading = Sniglet({
	weight: ["400", "800"],
	subsets: ["latin"],
	variable: "--playfull-heading",
});

const playfullBody = Cabin({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--playfull-body",
});

export {
	elegantHeading,
	elegantBody,
	modernHeading,
	modernBody,
	playfullHeading,
	playfullBody,
};
