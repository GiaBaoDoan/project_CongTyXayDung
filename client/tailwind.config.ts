import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
          redTheme : '#dc3545'
      },
      // backgroundColor :  {
      //   redTheme : '#dc3545'
      // }
      
     
    },
  },
  plugins: [],
};
export default config;
