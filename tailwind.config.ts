import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': {
            backgroundPosition: '200% center',
          },
          '50%': {
            backgroundPosition: '0% center',
          },
        },
      },
      animation: {
        wave: 'wave 8s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-wave': 'linear-gradient(270deg, #0061ff 0%, #ff008a 100%)',
      },
    },
  },
  plugins: [],
}

export default config
