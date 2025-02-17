/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			black: [
  				'#'
  			],
  			white: [
  				'#'
  			],
  			grey: [
  				'#'
  			],
  			'button-1': [
  				'#'
  			],
  			'button-2': [
  				'#'
  			],
  			'button-hover': [
  				'#'
  			],
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			'-light': [
  				'-Light',
  				'sans-serif'
  			],
  			'-light-italic': [
  				'-LightItalic',
  				'sans-serif'
  			],
  			'-regular': [
  				'-Regular',
  				'sans-serif'
  			],
  			'-italic': [
  				'-Italic',
  				'sans-serif'
  			],
  			'-medium': [
  				'-Medium',
  				'sans-serif'
  			],
  			'-medium-italic': [
  				'-MediumItalic',
  				'sans-serif'
  			],
  			'-semibold': [
  				'-Semibold',
  				'sans-serif'
  			],
  			'-semibold-italic': [
  				'-SemiboldItalic',
  				'sans-serif'
  			],
  			'-bold': [
  				'-Bold',
  				'sans-serif'
  			],
  			'-bold-italic': [
  				'-BoldItalic',
  				'sans-serif'
  			],
  			'-variable': [
  				'-Variable',
  				'sans-serif'
  			],
  			'-variable-italic': [
  				'-VariableItalic',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}