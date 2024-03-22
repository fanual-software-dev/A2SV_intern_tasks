import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      width: {
        
        '300' : '300px',
        '350' : '350px',
        '400' : '400px',
        '450' : '450px',
        '650' : '650px',
        '550' : '550px',
        '750' : '750px',
        '919' : '919px',
        '949' : '949px',
        '969' : '969px',
      },

      height: {

        '50' : '50px',
        '70' : '70px',
        '100' : '100px',
        '150' : '150px',
        '350' : '350px',
        '200' : '200px',
        '250' : '250px',
        '266' : '266px',
        '286' : '286px',
        '296' : '296px',
        '304' : '304px',
        '400' : '400px',
      },

      borderWidth: {

        '1' : '1px',
      },

      fontFamily: {
        'Epilogue': 'Epilogue',
        'Poppins' : 'Poppins',
      },

      textColor: {
        'fanual-400' : '#7C8493',
        'beauty-900' : '#25324B',
      },
    },
  },
  plugins: [],
};
export default config;
