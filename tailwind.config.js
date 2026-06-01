import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sis: {
          primary: '#1B3A6B',
          accent: '#2F7EC7',
          light: '#4A9FD4',
          panel: '#F4F7FA',
          text: '#1A2332',
          muted: '#6B7C93',
          border: '#D1DCE8'
        }
      },
      boxShadow: {
        glow: '0 20px 60px rgba(27, 58, 107, 0.18)',
      }
    }
  },
  plugins: [forms],
}
