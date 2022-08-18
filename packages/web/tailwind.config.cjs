/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", "./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"space-grotesk": ["Space Grotesk", "sans-serif"],
			},
			colors: {
				"custom-dark": "rgb(24 24 24 / var(--tw-bg-opacity))",
				"solana-dark": "#10141f",
				"custom-white": "#e6eeff",
				"custom-blue": "#0052ff",
				"discord-dark": "#36393f",
				"discord-purple": "#5865f2",
				"discord-blue": "#00aff4",
				"discord-dark-2": "#202225",
				"custom-gray": "#b9bbbe",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
