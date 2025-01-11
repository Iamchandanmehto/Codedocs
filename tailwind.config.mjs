/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.01), 0 -4px 6px rgba(0, 0, 0, 0.01), 4px 0 6px rgba(0, 0, 0, 0.01), -4px 0 6px rgba(0, 0, 0, 0.01)',
      },
      
      
      
  	}
  },
  plugins: [require("tailwindcss-animate")],
  
};
