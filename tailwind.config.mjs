// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      mono: ['"Courier New"', 'Courier', 'monospace'],
    },
    extend: {
      borderWidth: { '4': '4px', '8': '8px' },
      borderRadius: { none: '0' },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'marquee': 'marquee 15s linear infinite',
      }
    },
  },
  plugins: [],
}