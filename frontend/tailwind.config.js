import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, 
  ], 
  themes: [
    "dark",
    "light",
    "cupcake",
    "bumblebee",
    "emrald",
    "corporate",
    "halloween",
    "garden",
    "lofi",
    "fantasy",
    "black",
    "acid",
    "cmyk",
    "lemondade",
    "sunset",
    "dim",
    "winter",
    "night",
    "pastel", 
    "retro", 
    "coffee",
    "forest",
    "cyberpunk",
    "synthwave",
    "luxary",
    "autumn",
    "valentine",
    "aqua",
    "business",
    "night",
    "dracula",
  ], 
}