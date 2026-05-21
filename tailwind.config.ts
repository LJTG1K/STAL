import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brutalist monochromatic base
        'neutral': {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716B',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        // Stalhrim-inspired sub-zero cyan/frosted blue accents (10% of palette)
        'cyan': {
          50: '#F0F9FC',
          100: '#E1F3F8',
          200: '#B3E5F5',
          300: '#81D4F7',
          400: '#4FC3F7',
          500: '#29B6F6',
          600: '#039BE5',
          700: '#0288D1',
          800: '#0277BD',
          900: '#01579B',
        },
        'frost': {
          50: '#F8FAFB',
          100: '#F0F4F8',
          200: '#D9E2EC',
          300: '#BCCCDC',
          400: '#9FB3C8',
          500: '#829AB1',
          600: '#627D98',
          700: '#486581',
          800: '#2D3E50',
          900: '#1A202C',
        },
      },
      fontFamily: {
        // Sharp geometric sans-serif for headings (using system fallback for Monument Extended feel)
        'heading': [
          'UI Monospace',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
        // Clean monospaced body (SF Mono / PP Neue Montreal equivalent)
        'mono': [
          '"SF Mono"',
          '"Monaco"',
          '"Inconsolata"',
          '"Fira Mono"',
          '"PT Mono"',
          'monospace',
        ],
      },
      fontSize: {
        // Brutalist typography scale
        'xs': ['12px', { lineHeight: '16px', letterSpacing: '0.5px' }],
        'sm': ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        'base': ['16px', { lineHeight: '24px', letterSpacing: '0px' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
        'xl': ['20px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.02em' }],
        '4xl': ['36px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
        '5xl': ['48px', { lineHeight: '48px', letterSpacing: '-0.02em' }],
        '6xl': ['60px', { lineHeight: '60px', letterSpacing: '-0.03em' }],
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0em',
        wide: '0.02em',
        wider: '0.05em',
        widest: '0.1em',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'frosted-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      animation: {
        // Sharp, minimal animations (instant transitions preferred)
      },
      transitionTimingFunction: {
        sharp: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    function ({ addBase, addComponents, theme }) {
      // Global grain texture
      addBase({
        '@supports (backdrop-filter: blur(0px))': {
          '*': {
            '--tw-bg-opacity': '1',
          },
        },
        'html': {
          scrollBehavior: 'instant',
        },
      })

      // Frosted glass component
      addComponents({
        '.glass-frost': {
          '@apply bg-opacity-50 backdrop-blur-sm border border-neutral-200 border-opacity-20': {},
        },
        '.sharp-edge': {
          '@apply border-l border-t border-neutral-900 border-opacity-20': {},
        },
      })
    },
  ],
}

export default config
