/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        magenta: {
          300: '#FF66FF',
          400: '#FF2BFF',
          500: '#F500F5',
          600: '#CC00CC',
          700: '#990099',
        },
        charcoal: {
          400: '#7A7A7A',
          500: '#595959',
          600: '#3D3D3D',
        },
        surface: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
