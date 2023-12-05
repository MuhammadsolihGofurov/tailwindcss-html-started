/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./public/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: ["Montserrat", "sans-serif"],
      colors: {
        main: "#7852A9E5",
        main_bg: "#B284BE4D",
        bg: "#FFFBF8",
        dark: "#042F35",
        purple: "#B284BE4D",
        purple_service: "#B284BE4D",
        dark_purple: "#7852A9E5",
        gray: "#667085",
        input: "#B284BE4D",
        grey: {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#BDBDBD",
          5: "#E0E0E0",
          6: "#ECEDEE",
          7: "#F2F2F2",
        },
        text: {
          primary: "#242424",
          secondary: "#828282",
          placeholder: "#BDBDBD",
        },
        linear: {
          1: "linear-gradient(60deg, rgba(28, 28, 28, 0.30) 0%, rgba(28, 28, 28, 0.06) 100%, rgba(28, 28, 28, 0.03) 100%)",
        },
        footer: "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        box: "0px 4px 40px 0px rgba(38, 41, 43, 0.07)",
        input: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      fontSize: {
        xs: "0.75rem", // 12
        sm: "0.875rem", // 14
        base: "1rem", // 16
        lg: "1.125rem", // 18
        xl: "1.25rem", //20
        "2xl": "1.5rem", // 24
        "3xl": "2rem", // 32
        "4xl": "2.25rem", // 36
        "5xl": "2.5rem", // 40
        "6xl": "3rem", //48
        "7xl": "3.375rem", // 54
        "8xl": "3.75rem", // 60
        "9xl": "4rem", // 64px
      },
      lineHeight: {
        3: ".75rem",
        4: "1rem", // 16
        5: "1.25rem", // 20
        6: "1.5rem", // 24
        7: "1.75rem", // 28
        8: "2rem", // 32
        9: "2.25rem", // 36
        10: "2.5rem", // 40
      },
      spacing: {
        xs: "0.75rem", // 12
        sm: "0.875rem", // 14
        base: "1rem", // 16
        lg: "1.125rem", // 18
        xl: "1.25rem", //20
        "2xl": "1.5rem", // 24
        "3xl": "2rem", // 32
        "4xl": "2.25rem", // 36
        "5xl": "2.5rem", // 40
        "6xl": "3rem", //48
        "7xl": "3.375rem", // 54
        "8xl": "3.75rem", // 60
        "9xl": "4rem", // 64px
      },
      screens: {
        xs: "375px",
        // => @media (min-width: 475px) { ... }

        sm: "576px",
        // => @media (min-width: 576px) { ... }

        ms: "650px",
        // => @media (min-width: 650px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        "2xl": "1200px",
        // => @media (min-width: 1200px) { ... }

        "4xl": "1300px",
        // => @media (min-width: 1200px) { ... }

        "6xl": "1440px",
        // => @media (min-width: 1440px) { ... }

        "8xl": "1540px",
        // => @media (min-width: 1540px) { ... }
      },
    },
  },
  plugins: [],
};
