const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xs: "380px",

            sm: "640px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",
        },
        extend: {
            animation: {
                "loop-scroll": "loop-scroll 30s linear infinite",
            },
            keyframes: {
                "loop-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-90%)" },
                },
            },
        },
    },
    plugins: [
        function ({ addUtilities }: any) {
            const newUtitlities = {
                ".no-scrollbar::-webkit-scrollbar": {
                    display: "none",
                },
                ".no-scrollbar": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                },
            };
            addUtilities(newUtitlities);
        },
    ],
});
