/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                mon: ["Montserrat", "Roboto"],
            },
            fontSize: {
                sm: "0.8rem",
                base: "1rem",
                xl: "1.25rem",
                "2xs": "0.6rem",
                "2xl": "1.563rem",
                "3xl": "1.953rem",
                "4xl": "2.441rem",
                "5xl": "3.052rem",
            },
        },
    },
    plugins: [

    ],
};
