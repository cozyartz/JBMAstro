/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./components/**/*.{astro,js,ts}",
    "./pages/**/*.{astro,js,ts}",
    "./public/**/*.html"
  ],
  safelist: [
    {
      pattern: /fa-(solid|regular|brands)/,
      variants: ['hover', 'group-hover']
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          teal: '#005B52',      // Primary teal
          charcoal: '#333333',  // Dark charcoal
          cream: '#F5F2E8',     // Warm cream
          gold: '#E69F00',      // Golden yellow
          blue: '#0072B2',      // Professional blue
          'teal-light': '#007A6B',
          'charcoal-light': '#4A4A4A',
          'gold-light': '#F2B233',
          'blue-light': '#1A8BC7'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'zoom-in': 'zoomIn 0.5s ease-out both',
        'slide-up': 'slideUp 0.6s ease-out both',
        'stagger-fade': 'fadeIn 0.6s ease-out both'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      boxShadow: {
        'card': '0 4px 10px rgba(0,0,0,0.06)',
        'hover': '0 8px 20px rgba(0,0,0,0.1)'
      },
      spacing: {
        'section': '6rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
};