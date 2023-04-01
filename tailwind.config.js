/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greencheck: "#4bb71b",
      },
      boxShadow: {
        "3xl": "0 4px 12px 0 rgb(0 0 0 / 0.05)",
        check: "inset 0 0 0 #4bb71b",
      },
      width: {
        88: "88%",
      },
      lineHeight: {
        12: "80px",
      },
      minWidth: {
        xl: "980px",
      },
      animation: {
        slideinright: "slideinright 1s ease-in-out",
        slideintop: "slideintop 1s ease-in-out",
        slideinbottom: "slideinbottom 1s ease-in-out",
        checkmark:
          "fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both",
        checkcircle: "stroke .6s cubic-bezier(0.65, 0, 0.45, 1) forwards",
        check: "stroke .3s cubic-bezier(0.65, 0, 0.45, 1) forwards",
      },
      keyframes: {
        slideinright: {
          "0%": { transform: "translateX(50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideintop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideinbottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scale: {
          "0%, 100%": { transform: "none" },
          "50%": { transform: "scale3d(1.1,1.1,1)" },
        },
        fill: {
          "100%": { boxShadow: "inset 0px 0px 0px 30px #4bb71b" },
        },
        stroke: {
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
