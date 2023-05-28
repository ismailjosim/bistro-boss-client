module.exports = {
  content: ["./src/**/*.{html,js,jsx, tsx}"],
  theme: {
    extend: {
      borderRadius: {
        'custom': '0 200px 200px 200px',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#D99904",

          "secondary": "#BB8506",

          "accent": "#EEFF25",

          "neutral": "#1F2937",

          "base-100": "#ffffff",

          "info": "#f2efee",

          "success": "#17968B",

          "warning": "#D1A054",

          "error": "#E8646D",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
  ],
}
