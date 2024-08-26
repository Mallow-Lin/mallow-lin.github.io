/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                oswald:
                    ["Oswald",
                        'sans-serif'],
                aleo: ["Aleo", "sans-serif"],
                merriweather: ["Merriweather", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
            boxShadow: {
                'card': '0 70px 63px -60px #000',
            }
        },
    },
    plugins: [],
    safelist: [
        'translate-y-0',
        'translate-x-0',
        'translate-x-full',
        'translate-y-full',
        '-translate-x-full',
        '-translate-y-full',
    ]
}