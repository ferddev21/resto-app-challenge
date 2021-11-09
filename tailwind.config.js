module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                "Playfair-Display": ["Playfair Display", "sans-serif"],
                "Open-Sans": ["Open Sans", "sans-serif"],
                Roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};