/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'spin-orbit': 'spin-orbit 12s linear infinite',
                'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
                'reveal': 'reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                'spin-orbit': {
                    'from': { transform: 'rotate(0deg)' },
                    'to': { transform: 'rotate(360deg)' },
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '1' },
                },
                reveal: {
                    'from': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
                    'to': { opacity: '1', transform: 'translateY(0) scale(1)' },
                }
            }
        },
    },
    plugins: [],
}
